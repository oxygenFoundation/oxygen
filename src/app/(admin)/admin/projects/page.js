
"use client";

import React, { useState } from "react";
import Image from "next/image";

import AdminSideNav from "@/app/(admin)/admin/components/AdminSideNav";
import AdminTopNav from "@/app/(admin)/admin/components/AdminTopNav";
import defaultImg from "@/app/(admin)/admin/assets/logo.png";

import { PiFunnelBold } from "react-icons/pi";
import { FaArrowUpFromBracket, FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import {
    Label
} from "@/components/ui/label";

import {
    Input
} from "@/components/ui/input"

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [filterOption, setFilterOption] = useState("All");
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
const [imagePreview, setImagePreview] = useState(null);

    const [projects, setProjects] = useState([
        {
            _id: "1",
            name: "Clean Water Initiative",
            category: "Health & Sanitation",
            location: "Kano, Nigeria",
            startDate: "2024-01-10",
            endDate: "2025-01-10",
            budget: 3500000,
            status: "Active",
            description:
                "Providing access to clean water for rural communities in Northern Nigeria.",
            image: defaultImg,
        },
        {
            _id: "2",
            name: "Education for All",
            category: "Education",
            location: "Ibadan, Nigeria",
            startDate: "2023-05-01",
            endDate: "2024-09-30",
            budget: 5000000,
            status: "Completed",
            description:
                "Scholarship and learning support program for underprivileged students.",
            image: defaultImg,
        },

        {
            _id: "3",
            name: "Youth Empowerment Scheme",
            category: "Community Development",
            location: "Lagos, Nigeria",
            startDate: "2025-03-01",
            endDate: "2026-02-28",
            budget: 4200000,
            status: "Upcoming",
            description:
                "Youth empowermengt program every week for young students, fresh graduates and unemployed youths across all LGA.",
            image: defaultImg,
        },


        {
            _id: "4",
            name: "Education for All",
            category: "Education",
            location: "Ibadan, Nigeria",
            startDate: "2023-05-01",
            endDate: "2024-09-30",
            budget: 5000000,
            status: "Completed",
            description:
                "Scholarship and learning support program for underprivileged students.",
            image: defaultImg,
        },

        {
            _id: "5",
            name: "Clean Water Initiative",
            category: "Health & Sanitation",
            location: "Kano, Nigeria",
            startDate: "2024-01-10",
            endDate: "2025-01-10",
            budget: 3500000,
            status: "Active",
            description:
                "Providing access to clean water for rural communities in Northern Nigeria.",
            image: defaultImg,
        },

    ]);

    // Filtering
    const filteredProjects = projects.filter((p) => {
        if (filterOption === "All" || filterOption === "Filter") return true;
        return p.status === filterOption;
    });

    const totalPages = Math.ceil(filteredProjects.length / pageSize);
    const paginatedProjects = filteredProjects.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const toggleDropdown = (index) => {
        setOpenDropdownIndex((prev) => (prev === index ? null : index));
    };

    const handleAction = (action, project) => {
        console.log(`${action} clicked for project:`, project.name);

        if (action === "View") {
            setSelectedProject(project);
            setShowViewModal(true);
        }
        if (action === "Delete") {
            setProjects((prev) => prev.filter((p) => p._id !== project._id));
        }
        if (action === "Mark Completed") {
            setProjects((prev) =>
                prev.map((p) =>
                    p._id === project._id ? { ...p, status: "Completed" } : p
                )
            );
        }
        setOpenDropdownIndex(null);
    };

    const handleAddProject = (e) => {
        e.preventDefault();
        const form = e.target;
        const newProject = {
            _id: Date.now().toString(),
            name: form.name.value,
            category: form.category.value,
            location: form.location.value,
            startDate: form.startDate.value,
            endDate: form.endDate.value,
            budget: Number(form.budget.value),
            status: "Upcoming",
            description: form.description.value,
            image: defaultImg,
        };
        setProjects((prev) => [...prev, newProject]);
        setShowAddModal(false);
    };

    return (
        <div className="relative w-full max-w-full overflow-x-hidden px-4 md:h-[100vh] h-auto py-2 flex items-start gap-4 bg-gradient-to-r from-[#F5F6EF] to-[#EEE6A7]">

            <AdminSideNav />

            <div className="flex-1 flex flex-col h-auto">
                <div className="my-4">
                    {/* Header */}
                    <div className="flex items-center justify-between py-4">
                        <h3 className="text-2xl font-bold">Project / Program Management</h3>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="flex items-center gap-2 bg-[#1E293B] hover:bg-[#334155] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                        >
                            <FaPlus /> Add New Project
                        </button>
                    </div>

                    {/* Filter & Export */}
                    <div className="flex gap-4 flex-wrap mb-4">
                        <div className="flex items-center gap-2">
                            <p className="font-semibold">Show</p>
                            <select
                                className="rounded-lg p-1 outline-none"
                                value={pageSize}
                                onChange={(e) => {
                                    setPageSize(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 bg-white rounded-md text-black font-semibold px-2 py-1">
                            <PiFunnelBold />
                            <select
                                className="outline-none bg-transparent"
                                value={filterOption}
                                onChange={(e) => setFilterOption(e.target.value)}
                            >
                                <option value="All">Filter</option>
                                <option value="Active">Active</option>
                                <option value="Completed">Completed</option>
                                <option value="Upcoming">Upcoming</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 bg-white rounded-md text-black font-semibold px-2 py-1 cursor-pointer">
                            <FaArrowUpFromBracket />
                            <p>Export</p>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg overflow-x-auto px-3">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-bold">Project</TableHead>
                                    <TableHead className="font-bold">Category</TableHead>
                                    <TableHead className="font-bold">Location</TableHead>
                                    <TableHead className="font-bold">Start</TableHead>
                                    <TableHead className="font-bold">End</TableHead>
                                    <TableHead className="font-bold">Budget (₦)</TableHead>
                                    <TableHead className="font-bold">Status</TableHead>
                                    <TableHead className="font-bold">Action</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {paginatedProjects.map((project, index) => (
                                    <TableRow key={project._id}>
                                        <TableCell className="flex items-center gap-3">
                                            <div className="w-[50px] h-[50px]">
                                                <Image
                                                    src={project.image}
                                                    alt={project.name}
                                                    width={150}
                                                    height={150}
                                                    className="object-cover w-full h-full rounded-full"
                                                />
                                            </div>
                                            <p>{project.name}</p>
                                        </TableCell>
                                        <TableCell>{project.category}</TableCell>
                                        <TableCell>{project.location}</TableCell>
                                        <TableCell>{project.startDate}</TableCell>
                                        <TableCell>{project.endDate}</TableCell>
                                        <TableCell>
                                            {project.budget.toLocaleString("en-NG")}
                                        </TableCell>
                                        <TableCell
                                            className={
                                                project.status === "Active"
                                                    ? "text-green-700 font-medium"
                                                    : project.status === "Upcoming"
                                                        ? "text-blue-700 font-medium"
                                                        : "text-gray-500 font-medium"
                                            }
                                        >
                                            {project.status}
                                        </TableCell>
                                        <TableCell className="relative">
                                            <div
                                                className="cursor-pointer"
                                                onClick={() => toggleDropdown(index)}
                                            >
                                                <HiOutlineDotsHorizontal size={24} />
                                            </div>

                                            {openDropdownIndex === index && (
                                                <div className="absolute right-2 top-8 bg-white shadow-md rounded-md flex flex-col w-44 border z-10">
                                                    {["View", "Edit", "Mark Completed", "Delete", "Cancel"].map(
                                                        (action, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="px-4 py-2 hover:bg-slate-200 text-sm text-center cursor-pointer border-b last:border-b-0"
                                                                onClick={() => {
                                                                    if (action === "Cancel")
                                                                        setOpenDropdownIndex(null);
                                                                    else handleAction(action, project);
                                                                }}
                                                            >
                                                                {action}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-6">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    />
                                </PaginationItem>

                                {Array.from({ length: totalPages }, (_, i) => (
                                    <PaginationItem key={i}>
                                        <PaginationLink
                                            href="#"
                                            isActive={currentPage === i + 1}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>

                <div className="mt-auto">
                    <AdminTopNav />
                </div>
            </div>


            {/* View Modal */}
{showViewModal && selectedProject && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white w-[90%] md:w-[700px] rounded-lg p-6 shadow-lg">
      {/* Flex layout for image and details */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Left: Project Details */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">
            {selectedProject.name}
          </h2>
          <div className="flex flex-col gap-2 text-sm">
            <p>
              <strong>Category:</strong> {selectedProject.category}
            </p>
            <p>
              <strong>Location:</strong> {selectedProject.location}
            </p>
            <p>
              <strong>Duration:</strong>{" "}
              {selectedProject.startDate} - {selectedProject.endDate}
            </p>
            <p>
              <strong>Budget:</strong> ₦
              {selectedProject.budget.toLocaleString("en-NG")}
            </p>
            <p>
              <strong>Status:</strong> {selectedProject.status}
            </p>
            <p>
              <strong>Description:</strong> {selectedProject.description}
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-[220px] w-full flex justify-center">
          <Image
            src={selectedProject.image || defaultDonorImg}
            alt={selectedProject.name}
            width={220}
            height={160}
            className="rounded-lg object-cover shadow-sm"
            onError={(e) => (e.currentTarget.src = defaultDonorImg)}
          />
        </div>
      </div>

      {/* Footer / Close Button */}
      <div className="mt-6 flex justify-end">
        <button
          className="bg-[#1E293B] text-white px-4 py-2 rounded-md hover:bg-[#334155] transition"
          onClick={() => setShowViewModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


            {/* Add Modal */}
{showAddModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white w-[90%] md:w-[600px] rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh]">
      <h2 className="text-xl font-bold mb-4">Add New Project</h2>

      <form onSubmit={handleAddProject} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Project Name"
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
          name="location"
          placeholder="Location"
          required
          className="border rounded-md p-2"
        />
        <div className="flex gap-2">
          <input
            name="startDate"
            type="date"
            required
            className="border rounded-md p-2 w-full"
          />
          <input
            name="endDate"
            type="date"
            required
            className="border rounded-md p-2 w-full"
          />
        </div>
        <input
          name="budget"
          type="number"
          placeholder="Budget (₦)"
          required
          className="border rounded-md p-2"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          required
          className="border rounded-md p-2"
          rows={3}
        ></textarea>

        {/* 🖼️ Image Uploader Section */}
        <div className="flex flex-col gap-2 mt-3">
          <Label htmlFor="image">Project Image</Label>

          {/* Image Preview */}
          {imagePreview && (
            <div className="w-full h-40 border rounded-md flex items-center justify-center overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* File Input */}
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setSelectedImage(file);
                setImagePreview(URL.createObjectURL(file));
              }
            }}
          />
        </div>

        {/* Buttons */}
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
            Save Project
          </button>
        </div>
      </form>
    </div>
  </div>
)}

        </div>
    );
};

export default Page;

