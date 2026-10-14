import { sqliteTable, text } from "drizzle-orm/sqlite-core";
export const content = sqliteTable("content", {id:text("id").primaryKey(),value:text("value").notNull()});
export const enquiries=sqliteTable("enquiries",{id:text("id").primaryKey(),created:text("created").notNull(),payload:text("payload").notNull()});
