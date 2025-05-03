import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

export default function BlogTable() {
    const {allBlogs}=useContext(AuthContext);
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">All Blogs</h2>
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-2 px-4 border">Username</th>
            <th className="py-2 px-4 border">Topic</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Content</th>
          </tr>
        </thead>
        <tbody>
          {allBlogs.map((blog, index) => (
            <tr key={blog._id || index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{blog.user?.name || 'N/A'}</td>
              <td className="py-2 px-4 border">{blog.topic}</td>
              <td className="py-2 px-4 border">{blog.title}</td>
              <td className="py-2 px-4 border">{blog.content.slice(0, 100)}...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
