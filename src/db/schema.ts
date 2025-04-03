import { relations } from "drizzle-orm";
import {
  pgTable,
  pgEnum,
  varchar,
  timestamp,
  boolean,
  uuid,
  text,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const deploymentStatusEnum = pgEnum("DeploymentStatus", [
  "NOT_STARTED",
  "QUEUED",
  "IN_PROGRESS",
  "FAILED",
  "DEPLOYED",
]);

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    clerkId: text("clerk_id").unique().notNull(),
    userName: text("user_name").unique(),
    fullName: text("full_name"),
    email: text("email").unique(),
    avatarUrl: text("avatar_url"),
    githubAccessToken: text("github_access_token"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)],
);

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  projectName: varchar("project_name").notNull(),
  gitUrl: varchar("git_url").notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
    }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  installCommand: varchar("install_command").default("npm install").notNull(),
  buildCommand: varchar("build_command").default("npm run build").notNull(),
  branch: varchar("branch"),
  env: text("env").default("").notNull(),
  lastModified: timestamp("last_modified").defaultNow().notNull(),
  lastDeployed: timestamp("last_deployed"),
  isLive: boolean("is_live").default(false).notNull(),
  srcDir: varchar("src_dir").default("/").notNull(),
});

export const projectRelations = relations(projects, ({ one }) => ({
  user: one(users, {
    fields: [projects.userId],
    references: [users.id],
  }),
}));

export const deployments = pgTable("deployments", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title").default(""),
  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id),
  status: deploymentStatusEnum("status").default("NOT_STARTED").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const requests = pgTable("requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  projectName: varchar("project_name"),
  ipAddress: varchar("ip_address"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  country: varchar("country"),
});
