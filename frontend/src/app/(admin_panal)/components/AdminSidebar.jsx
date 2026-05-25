"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";


export default function AdminSidebar() {

  const pathname =
    usePathname();

  const { logout } =
    useAuth();


  const menuItems = [

    {
      name: "Dashboard",
      icon:
        LayoutDashboard,
      path: "/admin",
    },

    {
      name: "Orders",
      icon: ShoppingBag,
      path:
        "/admin/orders",
    },

    {
      name: "Foods",
      icon:
        UtensilsCrossed,
      path:
        "/admin/foods",
    },

    {
      name: "Users",
      icon: Users,
      path:
        "/admin/users",
    },

    {
      name: "Analytics",
      icon: BarChart3,
      path:
        "/admin/analytics",
    },

    {
      name: "Settings",
      icon: Settings,
      path:
        "/admin/settings",
    },
  ];


  return (

    <aside className="w-72 bg-white shadow-xl min-h-screen hidden lg:flex flex-col justify-between">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="p-8 border-b">

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">

            Foodie

          </h1>

        </div>


        {/* MENU */}
        <div className="p-5 space-y-3">

          {menuItems.map(
            (item) => {

              const Icon =
                item.icon;

              return (

                <Link
                  key={item.name}
                  href={item.path}
                >

                  <div
                    className={`
                      flex items-center gap-4 px-5 py-4 rounded-2xl transition font-semibold
                      ${
                        pathname ===
                        item.path
                          ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
                          : "text-gray-700 hover:bg-orange-100"
                      }
                    `}
                  >

                    <Icon
                      size={22}
                    />

                    {item.name}

                  </div>

                </Link>

              );
            }
          )}

        </div>

      </div>


      {/* LOGOUT */}
      <div className="p-5">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}