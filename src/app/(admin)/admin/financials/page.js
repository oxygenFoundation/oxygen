"use client";

import React, { useState } from "react";
import Image from "next/image";
import AdminSideNav from "@/app/(admin)/admin/components/AdminSideNav";
import AdminTopNav from "@/app/(admin)/admin/components/AdminTopNav";
import defaultImg from "@/app/(admin)/admin/assets/logo.png";
import { FaPlus, FaArrowUpFromBracket } from "react-icons/fa6";
import { PiFunnelBold } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const FinancialsPage = () => {
  const [records, setRecords] = useState([
    {
      _id: "1",
      type: "Income",
      source: "Grant from UNICEF",
      category: "Grant",
      project: "Clean Water Initiative",
      amount: 2500000,
      date: "2024-08-14",
      description: "Quarterly funding for clean water project",
    },
    {
      _id: "2",
      type: "Expense",
      source: "Material Purchase",
      category: "Operations",
      project: "Clean Water Initiative",
      amount: 450000,
      date: "2024-09-03",
      description: "Purchase of PVC pipes and pumps",
    },
    {
      _id: "3",
      type: "Income",
      source: "Donation from Chevron",
      category: "Corporate Donation",
      project: "Youth Empowerment Scheme",
      amount: 1500000,
      date: "2024-10-20",
      description: "CSR fund for youth training materials",
    },

     {
      _id: "4",
      type: "Income",
      source: "Grant from UNICEF",
      category: "Grant",
      project: "Clean Water Initiative",
      amount: 2500000,
      date: "2024-08-14",
      description: "Quarterly funding for clean water project",
    },
    {
      _id: "5",
      type: "Expense",
      source: "Material Purchase",
      category: "Operations",
      project: "Clean Water Initiative",
      amount: 450000,
      date: "2024-09-03",
      description: "Purchase of PVC pipes and pumps",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [filterOption, setFilterOption] = useState("All");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Calculations
  const totalIncome = records
    .filter((r) => r.type === "Income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = records
    .filter((r) => r.type === "Expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpense;

  const filteredRecords =
    filterOption === "All" ? records : records.filter((r) => r.type === filterOption);
  const totalPages = Math.ceil(filteredRecords.length / pageSize);
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleAddRecord = (e) => {
    e.preventDefault();
    const form = e.target;
    const newRecord = {
      _id: Date.now().toString(),
      type: form.type.value,
      source: form.source.value,
      category: form.category.value,
      project: form.project.value,
      amount: Number(form.amount.value),
      date: form.date.value,
      description: form.description.value,
    };
    setRecords((prev) => [...prev, newRecord]);
    setShowAddModal(false);
  };

  return (
    <div className="relative w-full max-w-full overflow-x-hidden px-4 md:h-[100vh] h-auto py-2 flex items-start gap-4 bg-gradient-to-r from-[#F5F6EF] to-[#EEE6A7]">
      <AdminSideNav />

      <div className="flex-1 flex flex-col h-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <h3 className="text-2xl font-bold">Financial Management</h3>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-[#1E293B] hover:bg-[#334155] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            <FaPlus /> Add Record
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 px-4">
          <Card className="shadow-sm border-l-4 border-green-500">
            <CardContent className="py-4">
              <h4 className="text-gray-600 text-sm">Total Income</h4>
              <p className="text-xl font-bold text-green-700">
                ₦{totalIncome.toLocaleString("en-NG")}
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-l-4 border-red-500">
            <CardContent className="py-4">
              <h4 className="text-gray-600 text-sm">Total Expenses</h4>
              <p className="text-xl font-bold text-red-700">
                ₦{totalExpense.toLocaleString("en-NG")}
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-l-4 border-blue-500">
            <CardContent className="py-4">
              <h4 className="text-gray-600 text-sm">Current Balance</h4>
              <p className="text-xl font-bold text-blue-700">
                ₦{balance.toLocaleString("en-NG")}
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-l-4 border-yellow-500">
            <CardContent className="py-4">
              <h4 className="text-gray-600 text-sm">Pending Grants</h4>
              <p className="text-xl font-bold text-yellow-700">₦500,000</p>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <div className="flex gap-4 flex-wrap mb-4 px-4">
          <div className="flex items-center gap-2 bg-white rounded-md px-2 py-1 text-black font-semibold">
            <PiFunnelBold />
            <select
              className="outline-none bg-transparent"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
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
                <TableHead>Type</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Amount (₦)</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedRecords.map((record, index) => (
                <TableRow key={record._id}>
                  <TableCell
                    className={
                      record.type === "Income"
                        ? "text-green-600 font-medium"
                        : "text-red-600 font-medium"
                    }
                  >
                    {record.type}
                  </TableCell>
                  <TableCell>{record.source}</TableCell>
                  <TableCell>{record.category}</TableCell>
                  <TableCell>{record.project}</TableCell>
                  <TableCell>{record.amount.toLocaleString("en-NG")}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell className="relative">
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <HiOutlineDotsHorizontal size={22} />
                    </div>

                    {openDropdownIndex === index && (
                      <div className="absolute right-2 top-8 bg-white shadow-md rounded-md flex flex-col w-44 border z-10">
                        {["View", "Delete", "Cancel"].map((action) => (
                          <div
                            key={action}
                            className="px-4 py-2 hover:bg-slate-200 text-sm text-center cursor-pointer border-b last:border-b-0"
                            onClick={() => {
                              if (action === "Cancel") setOpenDropdownIndex(null);
                              if (action === "View") {
                                setSelectedRecord(record);
                                setShowViewModal(true);
                              }
                              if (action === "Delete") {
                                setRecords((prev) =>
                                  prev.filter((r) => r._id !== record._id)
                                );
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

      {/* View Modal */}
      {showViewModal && selectedRecord && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[500px] rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedRecord.source}</h2>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Type:</strong> {selectedRecord.type}
              </p>
              <p>
                <strong>Category:</strong> {selectedRecord.category}
              </p>
              <p>
                <strong>Project:</strong> {selectedRecord.project}
              </p>
              <p>
                <strong>Amount:</strong> ₦
                {selectedRecord.amount.toLocaleString("en-NG")}
              </p>
              <p>
                <strong>Date:</strong> {selectedRecord.date}
              </p>
              <p>
                <strong>Description:</strong> {selectedRecord.description}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="bg-[#1E293B] text-white px-4 py-2 rounded-md"
                onClick={() => setShowViewModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Record Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Add Financial Record</h2>

            <form onSubmit={handleAddRecord} className="flex flex-col gap-3">
              <div className="flex gap-3">
                <select
                  name="type"
                  className="border rounded-md p-2 w-full"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
                <input
                  name="category"
                  placeholder="Category"
                  className="border rounded-md p-2 w-full"
                  required
                />
              </div>
              <input
                name="source"
                placeholder="Source / Description"
                required
                className="border rounded-md p-2"
              />
              <input
                name="project"
                placeholder="Linked Project"
                required
                className="border rounded-md p-2"
              />
              <input
                name="amount"
                type="number"
                placeholder="Amount (₦)"
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
                name="description"
                placeholder="Detailed Notes"
                className="border rounded-md p-2"
                rows={3}
              />

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
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialsPage;
