"use client";

const FileForm = () => {
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const file = formData.get("file") as File;

    // TODO: upload the file to S3 (hint: use a Next.js "server action")

    console.log(file);
  };

  return (
    <div className="flex flex-col h-screen gap-4 items-center justify-center w-full">
      <form
        className="flex flex-col gap-4 max-w-md mx-auto"
        onSubmit={undefined}
      >
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileForm;
