"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useCart }
from "@/context/CartContext";


export default function CartPage() {

  const router =
    useRouter();

  const {

    cartItems,

    removeFromCart,

    totalPrice,

  } = useCart();


  return (

    <section className="min-h-screen bg-orange-50 px-5 py-10">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-gray-800">

            Shopping Cart

          </h1>

          <p className="text-gray-500 mt-3">

            Review your selected foods

          </p>

        </div>


        {/* EMPTY */}
        {cartItems.length ===
        0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

            <div className="flex justify-center mb-6">

              <div className="bg-orange-100 p-6 rounded-full">

                <ShoppingBag
                  size={60}
                  className="text-red-500"
                />

              </div>

            </div>

            <h2 className="text-3xl font-bold text-gray-800">

              Your Cart is Empty

            </h2>

            <p className="text-gray-500 mt-4">

              Add delicious food
              items to continue

            </p>

            <Link
              href="/"
              className="inline-block mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >

              Explore Foods

            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map(
                (item) => (

                  <div
                    key={item._id}
                    className="bg-white rounded-3xl shadow-lg p-5 flex flex-col sm:flex-row gap-5"
                  >

                    {/* IMAGE */}
                    <div className="w-full sm:w-40 h-40 overflow-hidden rounded-2xl">

                      <img
                        src={
                          item.image
                            ? `http://localhost:5000/uploads/${item.image}`
                            : "/food-placeholder.jpg"
                        }
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                    </div>


                    {/* CONTENT */}
                    <div className="flex-1 flex flex-col justify-between">

                      <div>

                        <div className="flex items-center justify-between">

                          <h2 className="text-2xl font-bold text-gray-800">

                            {item.name}

                          </h2>

                          <button
                            onClick={() =>
                              removeFromCart(
                                item._id
                              )
                            }
                            className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition"
                          >

                            <Trash2
                              size={20}
                            />

                          </button>

                        </div>


                        <p className="text-gray-500 mt-3">

                          {
                            item.description
                          }

                        </p>

                      </div>


                      {/* PRICE */}
                      <div className="flex items-center justify-between mt-5">

                        <span className="text-3xl font-extrabold text-red-500">

                          ₹
                          {
                            item.price
                          }

                        </span>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>


            {/* RIGHT */}
            <div>

              <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-24">

                <h2 className="text-3xl font-bold text-gray-800 mb-8">

                  Order Summary

                </h2>


                {/* ITEMS */}
                <div className="space-y-5">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-600">

                      Total Items

                    </span>

                    <span className="font-bold text-gray-800">

                      {
                        cartItems.length
                      }

                    </span>

                  </div>


                  <div className="flex items-center justify-between">

                    <span className="text-gray-600">

                      Delivery Fee

                    </span>

                    <span className="font-bold text-gray-800">

                      ₹49

                    </span>

                  </div>


                  <div className="border-t pt-5 flex items-center justify-between">

                    <span className="text-2xl font-bold text-gray-800">

                      Total

                    </span>

                    <span className="text-3xl font-extrabold text-red-500">

                      ₹
                      {
                        totalPrice +
                        49
                      }

                    </span>

                  </div>

                </div>


                {/* CHECKOUT */}
                <button
                  onClick={() =>
                    router.push(
                      "/checkout"
                    )
                  }
                  className="w-full mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
                >

                  Process To Checkout

                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}