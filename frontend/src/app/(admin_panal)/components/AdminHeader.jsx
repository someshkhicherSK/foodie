"use client";

import { Bell } from "lucide-react";

import { useAuth } from "@/context/AuthContext";


export default function AdminHeader() {

  const { user } =
    useAuth();


  return (

    <header className="bg-white shadow-md rounded-3xl px-8 py-5 flex items-center justify-between">

      {/* LEFT */}
      <div>

        <h1 className="text-3xl font-extrabold text-gray-800">

          Welcome Back 👋

        </h1>

        <p className="text-gray-500 mt-2">

          Here's what's happening today

        </p>

      </div>


      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* BELL */}
        <button className="relative bg-orange-100 p-4 rounded-2xl">

          <Bell
            size={24}
            className="text-red-500"
          />

          <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"></span>

        </button>


        {/* USER */}
        <div className="text-right">

          <h3 className="font-bold text-gray-800">

            {user?.name}

          </h3>

          <p className="text-gray-500 text-sm">

            Admin

          </p>

        </div>


        {/* AVATAR */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">

          {user?.name?.charAt(
            0
          )}

        </div>

      </div>

    </header>
  );
}