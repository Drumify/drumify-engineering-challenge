import { db } from "@/db/db";
import { files } from "@/db/schema";

export default async function ServerComponent() {
  // This component will be rendered on the server.
  // It will fetch the files from the database and return them as a JSON string.
  // You can use the `db` object to fetch the files from the database.
  // You can use the `files` schema to define the columns in the database.
  // You can use the `limit` method to limit the number of files returned.

  // Try adding this above the FileForm component in the upload page.

  const result = await db.select().from(files).limit(10);

  return <div>{JSON.stringify(result)}</div>;
}
