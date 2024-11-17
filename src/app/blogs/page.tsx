"use client";

import { useState } from "react";

interface Blog {
  title: string;
  content: string;
}

export default function BlogsPage(): JSX.Element {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const addBlog = (): void => {
    if (title.trim() && content.trim()) {
      setBlogs([...blogs, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Blogs Page</h1>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-4 block w-full"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 mb-4 block w-full"
        ></textarea>
        <button
          onClick={addBlog}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add Blog
        </button>
      </div>
      <div className="mt-6">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} className="border p-4 mb-4">
              <h2 className="font-bold text-xl">{blog.title}</h2>
              <p className="mt-2">{blog.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No blogs added yet.</p>
        )}
      </div>
    </div>
  );
}

