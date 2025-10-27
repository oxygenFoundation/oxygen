
"use client";

import React, { useState } from "react";
import Image from "next/image";
import AdminSideNav from "@/app/(admin)/admin/components/AdminSideNav";
import AdminTopNav from "@/app/(admin)/admin/components/AdminTopNav";
import defaultImg from "@/app/(admin)/admin/assets/logo.png";
import { FaPlus, FaArrowUpFromBracket } from "react-icons/fa6";
import { PiFunnelBold } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const BlogManagementPage = () => {
  const [blogs, setBlogs] = useState([
    {
      _id: "1",
      title: "Empowering Women Through Education",
      category: "Education",
      author: "Admin",
      date: "2024-09-18",
      content:
        "Our NGO continues to prioritize women's access to quality education. This month, we launched a new literacy initiative.",
      image: defaultImg,
    },
    {
      _id: "2",
      title: "Feeding Program for Children",
      category: "Community",
      author: "Admin",
      date: "2024-10-05",
      content:
        "We successfully conducted a feeding outreach program benefiting over 200 children in rural communities.",
      image: defaultImg,
    },
     {
      _id: "3",
      title: "Empowering Women Through Education",
      category: "Education",
      author: "Admin",
      date: "2024-09-18",
      content:
        "Our NGO continues to prioritize women's access to quality education. This month, we launched a new literacy initiative.",
      image: defaultImg,
    },
    {
      _id: "4",
      title: "Feeding Program for Children",
      category: "Community",
      author: "Admin",
      date: "2024-10-05",
      content:
        "We successfully conducted a feeding outreach program benefiting over 200 children in rural communities.",
      image: defaultImg,
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filterOption, setFilterOption] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const [uploadedImage, setUploadedImage] = useState(null);

  // Pagination logic
  const filteredBlogs =
    filterOption === "All"
      ? blogs
      : blogs.filter((b) => b.category === filterOption);

  const totalPages = Math.ceil(filteredBlogs.length / pageSize);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Add blog
  const handleAddBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBlog = {
      _id: Date.now().toString(),
      title: form.title.value,
      category: form.category.value,
      author: form.author.value,
      date: form.date.value,
      content: form.content.value,
      image: uploadedImage || defaultImg,
    };
    setBlogs((prev) => [...prev, newBlog]);
    setShowAddModal(false);
    setUploadedImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-x-hidden px-4 md:h-[100vh] h-auto py-2 flex items-start gap-4 bg-gradient-to-r from-[#F5F6EF] to-[#EEE6A7]">
      <AdminSideNav />

      <div className="flex-1 flex flex-col h-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-4 px-4">
          <h3 className="text-2xl font-bold">Blog Management</h3>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-[#1E293B] hover:bg-[#334155] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            <FaPlus /> Add Blog
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex gap-4 flex-wrap mb-4 px-4">
          <div className="flex items-center gap-2 bg-white rounded-md px-2 py-1 text-black font-semibold">
            <PiFunnelBold />
            <select
              className="outline-none bg-transparent"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Education">Education</option>
              <option value="Community">Community</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-white rounded-md text-black font-semibold px-2 py-1 cursor-pointer">
            <FaArrowUpFromBracket />
            <p>Export</p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {paginatedBlogs.map((post) => (
            <Card
              key={post._id}
              className="rounded-lg overflow-hidden relative shadow-md"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="object-cover w-full h-52"
              />
              <CardContent className="p-3">
                <h4 className="font-semibold text-lg">{post.title}</h4>
                <p className="text-sm text-gray-600">{post.category}</p>
                <p className="text-xs text-gray-500">
                  {post.date} • {post.author}
                </p>
              </CardContent>
              <div
                className="absolute top-3 right-3 bg-white p-1 rounded-full shadow cursor-pointer"
                onClick={() => {
                  setSelectedPost(post);
                  setShowViewModal(true);
                }}
              >
                <HiOutlineDotsHorizontal />
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="mt-auto">
          <AdminTopNav />
        </div>
      </div>

      {/* View Blog Modal */}
      {showViewModal && selectedPost && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[550px] rounded-lg p-6 shadow-lg overflow-y-auto max-h-[85vh]">
            <h2 className="text-xl font-bold mb-2">{selectedPost.title}</h2>
            <Image
              src={selectedPost.image}
              alt={selectedPost.title}
              width={500}
              height={180}
              className="rounded-md object-cover mx-auto"
            />
            <p className="text-sm text-gray-700">
              <strong>Category:</strong> {selectedPost.category}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Author:</strong> {selectedPost.author}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Date:</strong> {selectedPost.date}
            </p>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {selectedPost.content}
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setShowViewModal(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Blog Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Add New Blog Post</h2>
            <form onSubmit={handleAddBlog} className="flex flex-col gap-3">
              <input
                name="title"
                placeholder="Blog Title"
                required
                className="border rounded-md p-2"
              />
              <input
                name="category"
                placeholder="Category"
                required
                className="border rounded-md p-2"
              />
              <input
                name="author"
                placeholder="Author"
                required
                className="border rounded-md p-2"
              />
              <input
                name="date"
                type="date"
                required
                className="border rounded-md p-2"
              />
              <textarea
                name="content"
                placeholder="Write your blog content..."
                required
                className="border rounded-md p-2"
                rows={5}
              />

              {/* Shadcn Image Uploader */}
              <div className="border rounded-md p-4 flex flex-col items-center justify-center gap-2 text-center bg-gray-50">
                {uploadedImage ? (
                  <Image
                    src={uploadedImage}
                    alt="Preview"
                    width={150}
                    height={100}
                    className="rounded-md object-cover"
                  />
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-gray-500" />
                    <p className="text-gray-600 text-sm">Upload Cover Image</p>
                  </>
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-2 cursor-pointer"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1E293B] text-white rounded-md"
                >
                  Publish Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManagementPage;
