"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import AdminSideNav from "@/app/(admin)/admin/components/AdminSideNav";
import AdminTopNav from "@/app/(admin)/admin/components/AdminTopNav";
import defaultImg from "@/app/(admin)/admin/assets/logo.png";

import { PiFunnelBold } from "react-icons/pi";
import { FaArrowUpFromBracket } from "react-icons/fa6";
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

const defaultDonorImg = defaultImg; // placeholder image

const Page = () => {
  // State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [filterOption, setFilterOption] = useState("All");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedDonor, setSelectedDonor] = useState(null);

  // Placeholder donor list (mock data)
  const [donorList, setDonorList] = useState([
    {
      _id: "1",
      fullName: "John Doe",
      email: "john@example.com",
      phone: "+2348000000001",
      location: "Lagos, Nigeria",
      totalDonations: 45000,
      isActive: true,
      image: defaultDonorImg,
    },
    {
      _id: "2",
      fullName: "Mary Johnson",
      email: "mary@example.com",
      phone: "+2348000000002",
      location: "Abuja, Nigeria",
      totalDonations: 120000,
      isActive: false,
      image: defaultDonorImg,
    },
  ]);

  // Filtering and sorting
  const filteredDonors = [...donorList].filter((donor) => {
    if (filterOption === "All" || filterOption === "Filter") return true;
    if (filterOption === "Active") return donor.isActive;
    if (filterOption === "Inactive") return !donor.isActive;
    return true;
  });

  const totalPages = Math.ceil(filteredDonors.length / pageSize);
  const paginatedDonors = filteredDonors.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAction = (action, donor) => {
    console.log(`${action} clicked for donor:`, donor.fullName);

    if (action === "View") {
      setSelectedDonor(donor);
      setShowModal(true);
    }

    if (action === "Deactivate" || action === "Activate") {
      // Placeholder logic for activation toggle
      setDonorList((prev) =>
        prev.map((d) =>
          d._id === donor._id ? { ...d, isActive: !d.isActive } : d
        )
      );
    }

    if (action === "Delete") {
      // Placeholder logic for delete
      setDonorList((prev) => prev.filter((d) => d._id !== donor._id));
    }

    setOpenDropdownIndex(null);
  };

  return (
    <div className="relative w-screen px-4 md:h-[100vh] h-auto py-2 flex items-center gap-4 bg-gradient-to-r from-[#F5F6EF] to-[#EEE6A7]">
      <AdminSideNav />

      <div className="flex-1 flex flex-col h-full">
        {/* Top Bar */}
        <div className="my-4">
          <div className="flex items-center justify-between py-4">
            <h3 className="text-2xl font-bold">Donor Management</h3>
          </div>

          {/* Filter & Export Controls */}
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
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-white rounded-md text-black font-semibold px-2 py-1 cursor-pointer">
              <FaArrowUpFromBracket />
              <p>Export</p>
            </div>
          </div>

          {/* Donor Table */}
          <div className="bg-white rounded-lg overflow-x-auto px-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Name</TableHead>
                  <TableHead className="font-bold">Email</TableHead>
                  <TableHead className="font-bold">Phone</TableHead>
                  <TableHead className="font-bold">Location</TableHead>
                  <TableHead className="font-bold">Total Donations (₦)</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {paginatedDonors.map((donor, index) => (
                  <TableRow key={donor._id}>
                    <TableCell className="flex items-center gap-3">
                      <div className="w-[50px] h-[50px]">
                        <Image
                          src={donor.image || defaultDonorImg}
                          alt={donor.fullName}
                          width={150}
                          height={150}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <p>{donor.fullName}</p>
                    </TableCell>
                    <TableCell>{donor.email}</TableCell>
                    <TableCell>{donor.phone}</TableCell>
                    <TableCell>{donor.location}</TableCell>
                    <TableCell>{donor.totalDonations.toLocaleString()}</TableCell>
                    <TableCell
                      className={
                        donor.isActive
                          ? "text-green-700 font-medium"
                          : "text-red-700 font-medium"
                      }
                    >
                      {donor.isActive ? "Active" : "Inactive"}
                    </TableCell>

                    <TableCell className="relative">
                      <div
                        className="cursor-pointer"
                        onClick={() => toggleDropdown(index)}
                      >
                        <HiOutlineDotsHorizontal size={24} />
                      </div>

                      {openDropdownIndex === index && (
                        <div className="absolute right-2 top-8 bg-white shadow-md rounded-md flex flex-col w-40 border z-10">
                          {[
                            "View",
                            donor.isActive ? "Deactivate" : "Activate",
                            "Delete",
                            "Cancel",
                          ].map((action, idx) => (
                            <div
                              key={idx}
                              className="px-4 py-2 hover:bg-slate-200 text-sm text-center cursor-pointer border-b last:border-b-0"
                              onClick={() => {
                                if (action === "Cancel") {
                                  setOpenDropdownIndex(null);
                                } else {
                                  handleAction(action, donor);
                                }
                              }}
                            >
                              {action}
                            </div>
                          ))}
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
    </div>
  );
};

export default Page;
