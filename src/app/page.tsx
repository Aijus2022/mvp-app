export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Welcome to My App
        </h1>
        <p className="mt-6 text-lg text-center">
          Explore the features of our application: upload photos, stream videos,
          and share blogs with the world!
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="/upload"
            className="block p-6 bg-white shadow rounded-lg hover:bg-blue-50"
          >
            <h2 className="text-2xl font-semibold text-blue-600">Upload</h2>
            <p className="mt-2 text-gray-700">Upload your photos and videos.</p>
          </a>

          <a
            href="/photos"
            className="block p-6 bg-white shadow rounded-lg hover:bg-blue-50"
          >
            <h2 className="text-2xl font-semibold text-blue-600">Photos</h2>
            <p className="mt-2 text-gray-700">View your uploaded photos.</p>
          </a>

          <a
            href="/blogs"
            className="block p-6 bg-white shadow rounded-lg hover:bg-blue-50"
          >
            <h2 className="text-2xl font-semibold text-blue-600">Blogs</h2>
            <p className="mt-2 text-gray-700">Share your thoughts in blogs.</p>
          </a>
        </div>
      </div>
    </main>
  );
}

