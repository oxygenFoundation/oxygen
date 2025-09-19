"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Home,
  HandHelping,
  ImageUp,
  Newspaper,
  CalendarDays,
  BadgeDollarSign,
  Handshake,
  LogOut,
  CircleHelp,
  GlobeLock,
} from "lucide-react";

import logoPng from "../assets/logo.png";




const AdminSideNav = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = () => {
    setActiveItem(item);
  };

  const navItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Donors", icon: <HandHelping size={20} /> },
    { name: "Project / Program", icon: <GlobeLock size={20} /> },
    { name: "Financials", icon: <BadgeDollarSign size={20} /> },
    { name: "Gallery", icon: <ImageUp size={20} /> },
    { name: "Blog", icon: <Newspaper size={20} /> },
    { name: "Events & Campaigns", icon: <CalendarDays size={20} /> },
    { name: "Beneficiary", icon: <Handshake size={20} /> },
    
  ];

  const otherItems = [
    // { name: "Help Center", icon: <CircleHelp size={20} /> },
    { name: "Sign Out", icon: <LogOut size={20} /> },
  ];

  return (
    <>
      
        <nav className="flex flex-col w-[20%] my-3 h-[95vh] bg-gradient-to-r from-[#EEE6A7] to-[#F5F6EF] p-3 rounded-xl">
        
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image src={logoPng} alt="logo" width={80} height={80} />
            </Link>
          </div>
          <div className="mt-4 mb-12 pb-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                className={`flex items-center gap-2 p-2 mb-2 cursor-pointer ${
                  activeItem === item.name
                    ? "bg-[#FFFFFF] rounded-xl"
                    : ""
                }`}
              >
                {item.icon}
                <p className="font-semibold">{item.name}</p>
                {item.name === "Analytics" && (
                  <span className="ml-10 text-sm bg-[#ffbb00] text-white font-semibold px-2 rounded-xl">Pro</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pb-2">
            {otherItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                className={`flex items-center gap-2 p-2 cursor-pointer ${
                  activeItem === item.name
                    ? "bg-[#FFF5F5] rounded-xl"
                    : ""
                }`}
              >
                {item.icon}
                <p className="font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </nav>
    </>
  );
};

export default AdminSideNav;
