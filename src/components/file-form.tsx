"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const FileForm = () => {
  const router = useRouter();
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const file = formData.get("file") as File;

    // TODO: upload the file to S3 (hint: use a Next.js "server action")

    console.log(file);
  };

  return (
    <div className="">
      <form
        className="flex flex-col gap-4 max-w-md mx-auto"
        onSubmit={undefined}
      >
        <input type="file" name="file" />
        <button type="submit">Upload</button>
        {feedback && (
          <div className={`p-3 rounded ${
            feedback.type === 'success' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {feedback.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default FileForm;
