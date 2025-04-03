ALTER TABLE "users" DROP CONSTRAINT "users_github_id_unique";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "github_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "profile_url";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "location";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "github_created_at";