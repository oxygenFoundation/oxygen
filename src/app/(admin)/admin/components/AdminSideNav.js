"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  Home,
  HandHelping,
  ImageUp,
  Newspaper,
  CalendarDays,
  BadgeDollarSign,
  Handshake,
  LogOut,
  GlobeLock,
} from "lucide-react";

import logoPng from "../assets/logo.png";

const AdminSideNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Dashboard", icon: <Home size={20} />, href: "/admin/dashboard" },
    { name: "Donors", icon: <HandHelping size={20} />, href: "/admin/donors" },
    {
      name: "Project / Program",
      icon: <GlobeLock size={20} />,
      href: "/admin/projects",
    },
    {
      name: "Financials",
      icon: <BadgeDollarSign size={20} />,
      href: "/admin/financials",
    },
    { name: "Gallery", icon: <ImageUp size={20} />, href: "/admin/gallery" },
    { name: "Blog", icon: <Newspaper size={20} />, href: "/admin/blog" },
    {
      name: "Events & Campaigns",
      icon: <CalendarDays size={20} />,
      href: "/admin/events",
    },
    {
      name: "Beneficiary",
      icon: <Handshake size={20} />,
      href: "/admin/beneficiary",
    },
  ];

  const otherItems = [
    {
      name: "Sign Out",
      icon: <LogOut size={20} />,
      action: () => {
        // Handle logout
        router.push("/login");
      },
    },
  ];

  return (
    <nav className="flex flex-col w-[20%] my-3 h-[95vh] bg-gradient-to-r from-[#EEE6A7] to-[#F5F6EF] p-3 rounded-xl">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image src={logoPng} alt="logo" width={80} height={80} />
        </Link>
      </div>

      {/* Nav Items */}
      <div className="mt-4 mb-12 pb-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.name}
              className={`flex items-center gap-2 p-2 mb-2 cursor-pointer transition-colors ${
                isActive
                  ? "bg-[#FFFFFF] rounded-xl shadow-sm"
                  : "hover:bg-white/70 rounded-xl"
              }`}
            >
              {item.icon}
              <p
                className={`font-semibold ${
                  isActive ? "text-[#1E293B]" : "text-gray-700"
                }`}
              >
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Other Items (e.g. Logout) */}
      <div className="mt-auto pb-2">
        {otherItems.map((item) => (
          <div
            key={item.name}
            onClick={item.action}
            className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#FFF5F5] rounded-xl transition"
          >
            {item.icon}
            <p className="font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default AdminSideNav;
