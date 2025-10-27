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

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filterOption, setFilterOption] = useState("All");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [beneficiaries, setBeneficiaries] = useState([
    {
      _id: "1",
      name: "Amina Yusuf",
      age: 13,
      gender: "Female",
      location: "Kano, Nigeria",
      program: "Education Support",
      status: "Active",
      description:
        "Amina is a bright student receiving scholarship aid to complete her education.",
      image: defaultImg,
    },
    {
      _id: "2",
      name: "Chinedu Okafor",
      age: 17,
      gender: "Male",
      location: "Enugu, Nigeria",
      program: "Vocational Training",
      status: "Pending",
      description:
        "Chinedu is learning mechanical engineering to start his own workshop.",
      image: defaultImg,
    },
    {
      _id: "3",
      name: "Grace Johnson",
      age: 21,
      gender: "Female",
      location: "Lagos, Nigeria",
      program: "Health & Nutrition",
      status: "Inactive",
      description:
        "Grace is receiving nutrition and wellness support through our outreach program.",
      image: defaultImg,
    },
  ]);

  const filteredBeneficiaries = beneficiaries.filter((b) => {
    if (filterOption === "All" || filterOption === "Filter") return true;
    return b.status === filterOption;
  });

  const totalPages = Math.ceil(filteredBeneficiaries.length / pageSize);
  const paginatedBeneficiaries = filteredBeneficiaries.slice(
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

  const handleAction = (action, beneficiary) => {
    if (action === "View") {
      setSelectedBeneficiary(beneficiary);
      setShowViewModal(true);
    }
    if (action === "Delete") {
      setBeneficiaries((prev) =>
        prev.filter((b) => b._id !== beneficiary._id)
      );
    }
    setOpenDropdownIndex(null);
  };

  const handleAddBeneficiary = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBeneficiary = {
      _id: Date.now().toString(),
      name: form.name.value,
      age: Number(form.age.value),
      gender: form.gender.value,
      location: form.location.value,
      program: form.program.value,
      status: "Pending",
      description: form.description.value,
      image: imagePreview || defaultImg,
    };
    setBeneficiaries((prev) => [...prev, newBeneficiary]);
    setShowAddModal(false);
    setImagePreview(null);
  };

  return (
    <div className="relative w-full max-w-full overflow-x-hidden px-4 md:h-[100vh] h-auto py-2 flex items-start gap-4 bg-gradient-to-r from-[#F5F6EF] to-[#EEE6A7]">
      <AdminSideNav />

      <div className="flex-1 flex flex-col h-auto">
        <div className="my-4">
          {/* Header */}
          <div className="flex items-center justify-between py-4">
            <h3 className="text-2xl font-bold">Beneficiary Management</h3>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-[#1E293B] hover:bg-[#334155] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              <FaPlus /> Add Beneficiary
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
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
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
                  <TableHead className="font-bold">Beneficiary</TableHead>
                  <TableHead className="font-bold">Gender</TableHead>
                  <TableHead className="font-bold">Age</TableHead>
                  <TableHead className="font-bold">Program</TableHead>
                  <TableHead className="font-bold">Location</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {paginatedBeneficiaries.map((b, index) => (
                  <TableRow key={b._id}>
                    <TableCell className="flex items-center gap-3">
                      <div className="w-[50px] h-[50px]">
                        <Image
                          src={b.image}
                          alt={b.name}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <p>{b.name}</p>
                    </TableCell>
                    <TableCell>{b.gender}</TableCell>
                    <TableCell>{b.age}</TableCell>
                    <TableCell>{b.program}</TableCell>
                    <TableCell>{b.location}</TableCell>
                    <TableCell
                      className={
                        b.status === "Active"
                          ? "text-green-700 font-medium"
                          : b.status === "Pending"
                          ? "text-blue-700 font-medium"
                          : "text-gray-500 font-medium"
                      }
                    >
                      {b.status}
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
                          {["View", "Edit", "Delete", "Cancel"].map(
                            (action, idx) => (
                              <div
                                key={idx}
                                className="px-4 py-2 hover:bg-slate-200 text-sm text-center cursor-pointer border-b last:border-b-0"
                                onClick={() => {
                                  if (action === "Cancel")
                                    setOpenDropdownIndex(null);
                                  else handleAction(action, b);
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
      {showViewModal && selectedBeneficiary && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[700px] rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">
                  {selectedBeneficiary.name}
                </h2>
                <div className="flex flex-col gap-2 text-sm">
                  <p><strong>Gender:</strong> {selectedBeneficiary.gender}</p>
                  <p><strong>Age:</strong> {selectedBeneficiary.age}</p>
                  <p><strong>Location:</strong> {selectedBeneficiary.location}</p>
                  <p><strong>Program:</strong> {selectedBeneficiary.program}</p>
                  <p><strong>Status:</strong> {selectedBeneficiary.status}</p>
                  <p><strong>Description:</strong> {selectedBeneficiary.description}</p>
                </div>
              </div>

              <div className="md:w-[220px] w-full flex justify-center">
                <Image
                  src={selectedBeneficiary.image || defaultImg}
                  alt={selectedBeneficiary.name}
                  width={220}
                  height={160}
                  className="rounded-lg object-cover shadow-sm"
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

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Add Beneficiary</h2>

            <form onSubmit={handleAddBeneficiary} className="flex flex-col gap-3">
              <Input name="name" placeholder="Full Name" required />
              <div className="flex gap-2">
                <Input name="age" type="number" placeholder="Age" required />
                <select
                  name="gender"
                  required
                  className="border rounded-md p-2 w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <Input name="location" placeholder="Location" required />
              <Input name="program" placeholder="Program / Need Type" required />
              <textarea
                name="description"
                placeholder="Description"
                required
                className="border rounded-md p-2"
                rows={3}
              ></textarea>

              {/* Image Upload */}
              <div className="flex flex-col gap-2 mt-3">
                <Label htmlFor="image">Upload Image</Label>
                {imagePreview && (
                  <div className="w-full h-40 border rounded-md flex items-center justify-center overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
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
                  Save Beneficiary
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
