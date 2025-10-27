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

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EventCampaignPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filterOption, setFilterOption] = useState("All");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Mock event / campaign data
  const [items, setItems] = useState([
    {
      _id: "1",
      title: "Clean Water Rally",
      type: "Event",
      category: "Health & Sanitation",
      location: "Kano, Nigeria",
      date: "2024-11-15",
      attendees: 250,
      budget: 1200000,
      status: "Upcoming",
      description: "Community rally to launch water wells and awareness.",
      image: defaultImg,
    },
    {
      _id: "2",
      title: "Back-to-School Campaign",
      type: "Campaign",
      category: "Education",
      location: "Ibadan, Nigeria",
      date: "2024-07-01",
      attendees: 0,
      budget: 800000,
      status: "Completed",
      description: "Book donations and learning kits distribution.",
      image: defaultImg,
    },
    {
      _id: "3",
      title: "Youth Skills Fair",
      type: "Event",
      category: "Community Development",
      location: "Lagos, Nigeria",
      date: "2025-03-20",
      attendees: 120,
      budget: 650000,
      status: "Active",
      description: "Training stalls, CV clinics and micro-grants for startups.",
      image: defaultImg,
    },
  ]);

  // Filtering by type/status
  const filteredItems = items.filter((it) => {
    if (filterOption === "All" || filterOption === "Filter") return true;
    // allow filtering by type (Event / Campaign) or status (Upcoming / Completed / Active)
    return it.type === filterOption || it.status === filterOption;
  });

  const totalPages = Math.ceil(filteredItems.length / pageSize) || 1;
  const paginatedItems = filteredItems.slice(
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

  const handleAction = (action, item) => {
    if (action === "View") {
      setSelectedItem(item);
      setShowViewModal(true);
    } else if (action === "Delete") {
      setItems((prev) => prev.filter((p) => p._id !== item._id));
    } else if (action === "Mark Completed") {
      setItems((prev) =>
        prev.map((p) => (p._id === item._id ? { ...p, status: "Completed" } : p))
      );
    } else if (action === "Edit") {
      // Placeholder: open add modal with prefilled values (left as a TODO)
      // Could set form defaults using state if needed
      setSelectedItem(item);
      setShowAddModal(true);
    }
    setOpenDropdownIndex(null);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const newItem = {
      _id: Date.now().toString(),
      title: form.title.value,
      type: form.type.value,
      category: form.category.value,
      location: form.location.value,
      date: form.date.value,
      attendees: Number(form.attendees.value || 0),
      budget: Number(form.budget.value || 0),
      status: form.status.value || "Upcoming",
      description: form.description.value,
      image: imagePreview || defaultImg,
    };
    setItems((prev) => [newItem, ...prev]);
    // reset modal state
    setShowAddModal(false);
    setSelectedImage(null);
    setImagePreview(null);
    setSelectedItem(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-x-hidden px-4 md:h-[100vh] h-auto py-2 flex items-start gap-4 bg-gradient-to-r from-[#F5F6EF] to-[#EEE6A7]">
      <AdminSideNav />

      <div className="flex-1 flex flex-col h-auto">
        {/* Header */}
        <div className="my-4">
          <div className="flex items-center justify-between py-4">
            <h3 className="text-2xl font-bold">Events & Campaigns</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-[#1E293B] hover:bg-[#334155] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
              >
                <FaPlus /> Add Event/Campaign
              </button>
            </div>
          </div>

          {/* Controls */}
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
                onChange={(e) => {
                  setFilterOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="All">Filter</option>
                <option value="Event">Event</option>
                <option value="Campaign">Campaign</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
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
                  <TableHead className="font-bold">Title</TableHead>
                  <TableHead className="font-bold">Type</TableHead>
                  <TableHead className="font-bold">Category</TableHead>
                  <TableHead className="font-bold">Location</TableHead>
                  <TableHead className="font-bold">Date</TableHead>
                  <TableHead className="font-bold">Attendees</TableHead>
                  <TableHead className="font-bold">Budget (₦)</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {paginatedItems.map((it, index) => (
                  <TableRow key={it._id}>
                    <TableCell className="flex items-center gap-3">
                      <div className="w-[50px] h-[50px]">
                        <Image
                          src={it.image || defaultImg}
                          alt={it.title}
                          width={150}
                          height={150}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <p>{it.title}</p>
                    </TableCell>

                    <TableCell>{it.type}</TableCell>
                    <TableCell>{it.category}</TableCell>
                    <TableCell>{it.location}</TableCell>
                    <TableCell>{it.date}</TableCell>
                    <TableCell>{it.attendees}</TableCell>
                    <TableCell>{it.budget.toLocaleString("en-NG")}</TableCell>
                    <TableCell
                      className={
                        it.status === "Active"
                          ? "text-green-700 font-medium"
                          : it.status === "Upcoming"
                          ? "text-blue-700 font-medium"
                          : "text-gray-500 font-medium"
                      }
                    >
                      {it.status}
                    </TableCell>

                    <TableCell className="relative">
                      <div className="cursor-pointer" onClick={() => toggleDropdown(index)}>
                        <HiOutlineDotsHorizontal size={20} />
                      </div>

                      {openDropdownIndex === index && (
                        <div className="absolute right-2 top-8 bg-white shadow-md rounded-md flex flex-col w-48 border z-10">
                          {["View", "Edit", "Mark Completed", "Delete", "Cancel"].map(
                            (action, idx) => (
                              <div
                                key={idx}
                                className="px-4 py-2 hover:bg-slate-200 text-sm text-center cursor-pointer border-b last:border-b-0"
                                onClick={() => {
                                  if (action === "Cancel") setOpenDropdownIndex(null);
                                  else handleAction(action, it);
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

      {/* View Modal (image on right, scroll-safe) */}
      {showViewModal && selectedItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[700px] rounded-lg p-6 shadow-lg overflow-y-auto max-h-[85vh]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{selectedItem.title}</h2>
                <div className="text-sm flex flex-col gap-2">
                  <p>
                    <strong>Type:</strong> {selectedItem.type}
                  </p>
                  <p>
                    <strong>Category:</strong> {selectedItem.category}
                  </p>
                  <p>
                    <strong>Location:</strong> {selectedItem.location}
                  </p>
                  <p>
                    <strong>Date:</strong> {selectedItem.date}
                  </p>
                  <p>
                    <strong>Attendees:</strong> {selectedItem.attendees}
                  </p>
                  <p>
                    <strong>Budget:</strong> ₦{selectedItem.budget.toLocaleString("en-NG")}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedItem.status}
                  </p>
                </div>

                <p className="text-gray-700 mt-3">{selectedItem.description}</p>
              </div>

              <div className="md:w-[260px] w-full flex justify-center">
                <Image
                  src={selectedItem.image || defaultImg}
                  alt={selectedItem.title}
                  width={260}
                  height={160}
                  className="rounded-lg object-cover shadow-sm w-full h-40"
                />
              </div>
            </div>

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

      {/* Add Event/Campaign Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">{selectedItem ? "Edit Event/Campaign" : "Add New Event/Campaign"}</h2>

            <form onSubmit={handleAddItem} className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  name="title"
                  placeholder="Title"
                  required
                  defaultValue={selectedItem?.title || ""}
                  className="border rounded-md p-2 w-full"
                />
              </div>

              <div className="flex gap-2">
                <select name="type" defaultValue={selectedItem?.type || "Event"} className="border rounded-md p-2 w-full">
                  <option value="Event">Event</option>
                  <option value="Campaign">Campaign</option>
                </select>

                <input
                  name="category"
                  placeholder="Category"
                  defaultValue={selectedItem?.category || ""}
                  className="border rounded-md p-2 w-full"
                />
              </div>

              <input
                name="location"
                placeholder="Location"
                defaultValue={selectedItem?.location || ""}
                className="border rounded-md p-2"
              />

              <div className="flex gap-2">
                <input
                  name="date"
                  type="date"
                  required
                  defaultValue={selectedItem?.date || ""}
                  className="border rounded-md p-2 w-full"
                />
                <input
                  name="attendees"
                  type="number"
                  placeholder="Attendees"
                  defaultValue={selectedItem?.attendees || 0}
                  className="border rounded-md p-2 w-full"
                />
              </div>

              <input
                name="budget"
                type="number"
                placeholder="Budget (₦)"
                defaultValue={selectedItem?.budget || 0}
                className="border rounded-md p-2"
              />

              <select name="status" defaultValue={selectedItem?.status || "Upcoming"} className="border rounded-md p-2">
                <option value="Upcoming">Upcoming</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>

              <textarea
                name="description"
                placeholder="Short description"
                defaultValue={selectedItem?.description || ""}
                className="border rounded-md p-2"
                rows={3}
              />

              {/* Image upload */}
              <div className="flex flex-col gap-2 mt-3">
                <Label htmlFor="image">Cover Image</Label>

                {imagePreview ? (
                  <div className="w-full h-40 border rounded-md flex items-center justify-center overflow-hidden">
                    <img src={imagePreview} alt="Preview" className="object-cover w-full h-full" />
                  </div>
                ) : (
                  selectedItem?.image && (
                    <div className="w-full h-40 border rounded-md flex items-center justify-center overflow-hidden">
                      <Image src={selectedItem.image} alt={selectedItem.title} width={600} height={300} className="object-cover w-full h-full" />
                    </div>
                  )
                )}

                <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button type="button" className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => { setShowAddModal(false); setSelectedItem(null); setImagePreview(null); }}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-[#1E293B] text-white rounded-md">
                  {selectedItem ? "Save Changes" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCampaignPage;
