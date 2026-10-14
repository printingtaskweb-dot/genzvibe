CREATE TABLE `content` (
	`id` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`created` text NOT NULL,
	`payload` text NOT NULL
);
