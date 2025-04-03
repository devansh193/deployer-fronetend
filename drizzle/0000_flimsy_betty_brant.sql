CREATE TYPE "public"."DeploymentStatus" AS ENUM('NOT_STARTED', 'QUEUED', 'IN_PROGRESS', 'FAILED', 'DEPLOYED');--> statement-breakpoint
CREATE TABLE "deployments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar DEFAULT '',
	"project_id" uuid NOT NULL,
	"status" "DeploymentStatus" DEFAULT 'NOT_STARTED' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_name" varchar NOT NULL,
	"git_url" varchar NOT NULL,
	"user_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"install_command" varchar DEFAULT 'npm install' NOT NULL,
	"build_command" varchar DEFAULT 'npm run build' NOT NULL,
	"branch" varchar,
	"env" text DEFAULT '' NOT NULL,
	"last_modified" timestamp DEFAULT now() NOT NULL,
	"last_deployed" timestamp,
	"is_live" boolean DEFAULT false NOT NULL,
	"src_dir" varchar DEFAULT '/' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_name" varchar,
	"ip_address" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"country" varchar
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_id" text NOT NULL,
	"github_id" varchar NOT NULL,
	"user_name" varchar NOT NULL,
	"full_name" varchar,
	"email" varchar,
	"avatar_url" varchar,
	"profile_url" varchar,
	"location" varchar,
	"github_access_token" text,
	"github_created_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "users_github_id_unique" UNIQUE("github_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "deployments" ADD CONSTRAINT "deployments_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "clerk_id_idx" ON "users" USING btree ("clerk_id");