"use client"

import React from "react";
import { Bell, CircleUserRound, Search, SlidersHorizontal } from "lucide-react";

const AdminTopNav = () => {
  return (
    <div className="flex items-center px-4 w-full">
   
      <div className="flex items-start gap-2 my-6 cursor-pointer ml-auto">
        <CircleUserRound size={40} className="rounded-full" />
        <div>
          <p className="font-semibold">Jaden Scott</p>
          <p className="text-sm">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default AdminTopNav;
