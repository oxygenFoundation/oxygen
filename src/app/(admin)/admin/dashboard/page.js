"use client";

import AdminSideNav from "@/app/(admin)/admin/components/AdminSideNav";
import AdminTopNav from "@/app/(admin)/admin/components/AdminTopNav";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
    Landmark,
    HandHeart,
    FolderOpenDot,
    NotebookPen,
    HeartHandshake,
    CalendarClock,
    ChevronRight,
} from "lucide-react";
import { TbCurrencyNaira } from "react-icons/tb";




const Page = () => {


    return (
        <>
            <div className="relative w-screen px-4 md:h-[100vh] h-auto py-2 flex items-center gap-4 bg-gradient-to-r from-[#F5F6EF] to-[#EEE6A7]">
                <AdminSideNav />

                <div className="flex-1 flex flex-col h-full">

                    <div className="my-4">
                        <div className="flex items-center justify-between py-4 px-4">
                            <h3 className="text-2xl font-bold">Overview</h3>
                            {/* <DateRangePicker />  */}
                        </div>

                        <div className="px-4 grid grid-cols-3 grid-rows-2 gap-4">
                            <div className="max-h-[110px] bg-white rounded-lg p-4">
                                <div className="flex items-center gap-2 pb-6">
                                    <div className="bg-blue-200 p-1 rounded-full">
                                        <Landmark size={17} className="text-blue-700" />
                                    </div>

                                    <p className="font-semibold">Revenue</p>
                                </div>
                                <div className="w-[245px] flex items-center justify-between">
                                    <div className="flex items-center">
                                        <TbCurrencyNaira size={30} className="text-[#000000]" />
                                        <p className="font-bold text-2xl">50000</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1 cursor-pointer">
                                        <p className="text-[12px] font-bold">See All</p>
                                        <ChevronRight size={12} />
                                    </div>
                                </div>
                            </div>

                            <div className="h-[110px] bg-white rounded-lg p-4">
                                <div className="flex items-center gap-2 pb-6">
                                    <div className="bg-orange-200 p-1 rounded-full">
                                        <HandHeart size={17} className="text-orange-700" />
                                    </div>

                                    <p className="font-semibold">Donors</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-2xl">15</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1 cursor-pointer">
                                        <p className="text-[12px] font-bold">See All</p>
                                        <ChevronRight size={12} />
                                    </div>
                                </div>
                            </div>

                            <div className="h-[110px] bg-white rounded-lg p-4">
                                <div className="flex items-center gap-2 pb-6">
                                    <div className="bg-green-200 p-1 rounded-full">
                                        <FolderOpenDot size={17} className="text-green-700" />
                                    </div>

                                    <p className="font-semibold">Ongoing projects</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-2xl">5</p>
                                        <p className="text-gray-500 font-semibold">Ongoing</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1 cursor-pointer">
                                        <p className="text-[12px] font-bold">See All</p>
                                        <ChevronRight size={12} />
                                    </div>
                                </div>
                            </div>


                            <div className="h-[110px] bg-white rounded-lg p-4">
                                <div className="flex items-center gap-2 pb-6">
                                    <div className="bg-pink-200 p-1 rounded-full">
                                        <NotebookPen size={17} className="text-pink-700" />
                                    </div>

                                    <p className="font-semibold">Balance</p>
                                </div>
                                <div className="w-[245px] flex items-center justify-between">
                                    <div className="flex items-center">
                                        <TbCurrencyNaira size={30} className="text-[#000000]" />
                                        <p className="font-bold text-2xl">25000</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1 cursor-pointer">
                                        <p className="text-[12px] font-bold">See All</p>
                                        <ChevronRight size={12} />
                                    </div>
                                </div>
                            </div>



                            <div className="h-[110px] bg-white rounded-lg p-4">
                                <div className="flex items-center gap-2 pb-6">
                                    <div className="bg-yellow-200 p-1 rounded-full">
                                        <HeartHandshake size={17} className="text-orange-700" />
                                    </div>

                                    <p className="font-semibold">Beneficiary</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-2xl">100</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1 cursor-pointer">
                                        <p className="text-[12px] font-bold">See All</p>
                                        <ChevronRight size={12} />
                                    </div>
                                </div>
                            </div>

                            <div className="h-[110px] bg-white rounded-lg p-4">
                                <div className="flex items-center gap-2 pb-6">
                                    <div className="bg-red-200 p-1 rounded-full">
                                        <CalendarClock size={17} className="text-red-700" />
                                    </div>

                                    <p className="font-semibold">Upcoming Events</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-2xl">3</p>
                                        <p className="text-gray-500 font-semibold">Pending</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1 cursor-pointer">
                                        <p className="text-[12px] font-bold">See All</p>
                                        <ChevronRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <AdminTopNav />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
