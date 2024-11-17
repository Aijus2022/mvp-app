export default function UploadPage(): JSX.Element {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Upload Page</h1>
        <p className="mt-4">Upload photos or videos here.</p>
        <label htmlFor="file-upload" className="block mt-4">
          Select a file to upload:
        </label>
        <input
          id="file-upload"
          type="file"
          className="mt-2 p-2 border rounded"
          accept="image/*,video/*"
        />
      </div>
    );
  }
  
  
