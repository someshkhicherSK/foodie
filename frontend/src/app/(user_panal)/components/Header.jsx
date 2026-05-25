"use client";

import Link from "next/link";

import {
  Menu,
  ShoppingCart,
  LayoutDashboard,
  LogOut,
  X,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

import { useCart } from "@/context/CartContext";

import { useRouter } from "next/navigation";

import { useState } from "react";


export default function Header() {

  const router = useRouter();

  const [mobileMenu, setMobileMenu] =
    useState(false);


  const {
    user,
    logout,
  } = useAuth();

  const { cartItems } =
    useCart();


  // HANDLE LOGOUT
  const handleLogout = () => {

    logout();

    router.push("/login");

    setMobileMenu(false);

  };


  return (

    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">

            Foodie

          </h1>

        </Link>


        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link
            href="/"
            className="hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            href="/foods"
            className="hover:text-red-500 transition"
          >
            Foods
          </Link>

          <Link
            href="/about"
            className="hover:text-red-500 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-red-500 transition"
          >
            Contact
          </Link>

          {user && (

            <Link
              href="/my-orders"
              className="hover:text-red-500 transition"
            >
              My Orders
            </Link>

          )}

        </div>


        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-4">

          {user ? (

            <>

              {/* USER */}
              <div className="text-right">

                <p className="font-bold text-gray-800">

                  Hi,
                  <span className="text-red-500 ml-1">

                    {user.name}

                  </span>

                </p>

                <p className="text-sm text-gray-500">

                  {user.role}

                </p>

              </div>


              {/* ADMIN */}
              {user.role ===
                "admin" && (

                <Link
                  href="/admin/orders"
                >

                  <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition">

                    <LayoutDashboard
                      size={18}
                    />

                    Dashboard

                  </button>

                </Link>

              )}


              {/* CART */}
              <Link href="/cart">

                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition">

                  <ShoppingCart
                    size={18}
                  />

                  Cart
                  (
                  {cartItems.length}
                  )

                </button>

              </Link>


              {/* LOGOUT */}
              <button
                onClick={
                  handleLogout
                }
                className="border border-red-500 text-red-500 px-5 py-2 rounded-full flex items-center gap-2 hover:bg-red-500 hover:text-white transition"
              >

                <LogOut size={18} />

                Logout

              </button>

            </>

          ) : (

            <>
              {/* LOGIN */}
              <Link href="/login">

                <button className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition">

                  Login

                </button>

              </Link>


              {/* REGISTER */}
              <Link href="/register">

                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded-full hover:scale-105 transition">

                  Register

                </button>

              </Link>
            </>

          )}

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() =>
            setMobileMenu(
              !mobileMenu
            )
          }
          className="md:hidden"
        >

          {mobileMenu ? (

            <X size={32} />

          ) : (

            <Menu size={32} />

          )}

        </button>

      </div>


      {/* MOBILE SIDEBAR */}
      {mobileMenu && (

        <div className="md:hidden bg-white border-t shadow-lg px-5 py-6 space-y-5">

          {/* LINKS */}
          <Link
            href="/"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
            className="block text-lg font-medium text-gray-700 hover:text-red-500"
          >
            Home
          </Link>

          <Link
            href="/foods"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
            className="block text-lg font-medium text-gray-700 hover:text-red-500"
          >
            Foods
          </Link>

          <Link
            href="/about"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
            className="block text-lg font-medium text-gray-700 hover:text-red-500"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
            className="block text-lg font-medium text-gray-700 hover:text-red-500"
          >
            Contact
          </Link>


          {user && (

            <Link
              href="/my-orders"
              onClick={() =>
                setMobileMenu(
                  false
                )
              }
              className="block text-lg font-medium text-gray-700 hover:text-red-500"
            >
              My Orders
            </Link>

          )}


          {/* CART */}
          {user && (

            <Link
              href="/cart"
              onClick={() =>
                setMobileMenu(
                  false
                )
              }
              className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-red-500"
            >

              <ShoppingCart
                size={22}
              />

              Cart
              (
              {cartItems.length}
              )

            </Link>

          )}


          {/* ADMIN */}
          {user?.role ===
            "admin" && (

            <Link
              href="/admin/orders"
              onClick={() =>
                setMobileMenu(
                  false
                )
              }
              className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-red-500"
            >

              <LayoutDashboard
                size={22}
              />

              Dashboard

            </Link>

          )}


          {/* AUTH */}
          {user ? (

            <button
              onClick={
                handleLogout
              }
              className="w-full bg-red-500 text-white py-3 rounded-2xl flex items-center justify-center gap-3"
            >

              <LogOut size={20} />

              Logout

            </button>

          ) : (

            <div className="flex flex-col gap-4">

              <Link
                href="/login"
                onClick={() =>
                  setMobileMenu(
                    false
                  )
                }
              >

                <button className="w-full border border-red-500 text-red-500 py-3 rounded-2xl">

                  Login

                </button>

              </Link>


              <Link
                href="/register"
                onClick={() =>
                  setMobileMenu(
                    false
                  )
                }
              >

                <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-2xl">

                  Register

                </button>

              </Link>

            </div>

          )}

        </div>

      )}

    </nav>
  );
}