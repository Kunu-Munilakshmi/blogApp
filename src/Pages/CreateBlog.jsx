import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router-dom";
export default function CreateBlog() {
  const { authData } = useContext(AuthContext);
  const [form, setForm] = useState({
    title: "",
    topic: "",
    content: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const [isEditMode, setIsEditMode] = useState(false);
  const [blogId, setBlogId] = useState(null);
  // collecting blog data to be update and assigning isEditMode & blogId with proper value to fetch api conditionally whether post/put
  useEffect(() => {
    if (location.state && location.state.blog) {
      const { title, topic, content, _id } = location.state.blog;
      setForm({ title, topic, content });
      setIsEditMode(true);
      setBlogId(_id);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit =async (e) => {
  //   e.preventDefault();
  //   // Submit logic here
  //   console.log("Submitted Blog:", form);
  //   try {
  //     const response = await fetch("/api/v1/blog/createNewBlog", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${authData.token}`,
  //       },
  //       body: JSON.stringify(form),
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       toast.success("Blog created successfully!");
  //       setForm({ title: "", topic: "", content: "" });
  //       navigate("/"); // ✅ Redirect to base URL

  //     } else {
  //       toast.error(result.message || "Failed to create blog");
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred while creating the blog");
  //     console.error("Error:", error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        isEditMode
          ? `/api/v1/blog/editblog/${blogId}`
          : `/api/v1/blog/createNewBlog`,
        {
          method: isEditMode ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authData.token}`,
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(isEditMode ? "Blog updated successfully!" : "Blog created successfully!");
        setForm({ title: "", topic: "", content: "" });
        navigate("/myblog");
      } else {
        toast.error(result.message || "Failed to submit blog");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error:", error);
    }
  };


  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create / Update a Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-semibold text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="topic" className="block font-semibold text-gray-700 mb-1">Topic</label>
          <input
            type="text"
            name="topic"
            id="topic"
            value={form.topic}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block font-semibold text-gray-700 mb-1">Content</label>
          <textarea
            name="content"
            id="content"
            rows="6"
            value={form.content}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
        >
          {isEditMode ? "Update Blog" : "Create Blog"}
        </button>

      </form>
    </div>
  );
}
