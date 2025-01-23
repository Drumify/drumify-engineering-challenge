"use server";

import { db } from "@/db/db";
import { files } from "@/db/schema";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const uploadFile = async (file: File) => {
  // If you found this file, good job! This logic will handle the file upload to S3.
  // You can use the `S3Client` to upload the file to S3.
  // You'll need to use the `PutObjectCommand` to upload the file to S3.
  // To get the file to upload, you'll need to piece together the logic below, and use it in the `FileForm` component.
  // Try adding some error handling and logging to see what's happening.

  const s3Client = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: file.name,
    Body: buffer,
  });

  const result = await db.insert(files).values({
    name: file.name,
    size: file.size,
  });
};
