import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

// This file will handle the database connection.

config({ path: ".env" }); // or .env.local

// database connection
const sql = neon(process.env.DATABASE_URL!);

// drizzle ORM instance
export const db = drizzle({ client: sql });
