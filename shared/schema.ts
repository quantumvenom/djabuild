import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  phone: text("phone"),
  isRead: boolean("is_read").default(false).notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
});

export const insertContactSchema = createInsertSchema(contactMessages).omit({ 
  id: true,
  isRead: true 
}).extend({
  email: z.string().email(),
  phone: z.string().min(10).optional(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ 
  id: true 
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Contact = typeof contactMessages.$inferSelect;
export type Project = typeof projects.$inferSelect;
