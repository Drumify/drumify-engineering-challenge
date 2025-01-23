import { pgTable, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";

export const files = pgTable("files", {
  id: uuid("id").primaryKey().defaultRandom(), // unique identifier for the file
  name: text("name"), // e.g. "my-file" (without the extension)
  mimeType: text("mime_type"), // e.g. audio/wav
  size: integer("size"), // in bytes
  s3Key: text("s3_key"), // s3 key
  s3Bucket: text("s3_bucket"), // s3 bucket
  createdAt: timestamp("created_at").defaultNow(), // when the file was created
  updatedAt: timestamp("updated_at").defaultNow(), // when the file was last updated
});
