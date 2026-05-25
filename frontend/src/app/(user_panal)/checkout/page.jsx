"use client";

import { useState }
from "react";

import { useRouter }
from "next/navigation";

import {
  MapPin,
  CreditCard,
  Truck,
} from "lucide-react";

import { useCart }
from "@/context/CartContext";

import API
from "@/services/api";

import toast
from "react-hot-toast";


export default function CheckoutPage() {

  const router =
    useRouter();

  const {
    cartItems,
  } = useCart();


  // STATES
  const [address, setAddress] =
    useState("");

  const [
    paymentMethod,
    setPaymentMethod,
  ] = useState("COD");

  const [loading, setLoading] =
    useState(false);


  // TOTAL PRICE
  const totalPrice =

    cartItems.reduce(

      (total, item) =>

        total +
        Number(item.price),

      0

    ) + 50;


  // PLACE ORDER
  const placeOrder =
    async () => {

      if (!address) {

        return toast.error(
          "Please enter delivery address"
        );

      }

      try {

        setLoading(true);

        // API CALL
        await API.post(

          "/order/place",

          {

            items:
              cartItems.map(
                (item) => ({

                  foodId:
                    item._id,

                  quantity: 1,

                })
              ),

            totalPrice,

            address,

            paymentMethod,

          }

        );


        toast.success(
          "Order Placed Successfully"
        );


        // CLEAR CART
        localStorage.removeItem(
          "cart"
        );


        // REDIRECT
        router.push(
          "/my-orders"
        );

      } catch (error) {

        console.log(error);

        toast.error(
          error.response?.data
            ?.message ||
            "Something went wrong"
        );

      } finally {

        setLoading(false);

      }
    };


  return (

    <section className="min-h-screen bg-orange-50 py-14 px-5">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="mb-12">

          <h1 className="text-5xl font-extrabold text-gray-800">

            Checkout

          </h1>

          <p className="text-gray-500 mt-3 text-lg">

            Complete your order and enjoy delicious food 🚀

          </p>

        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            {/* ADDRESS */}
            <div>

              <div className="flex items-center gap-3 mb-5">

                <MapPin
                  size={28}
                  className="text-red-500"
                />

                <h2 className="text-3xl font-bold text-gray-800">

                  Delivery Address

                </h2>

              </div>


              <textarea
                rows="6"
                placeholder="Enter your full delivery address..."
                value={address}
                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-3xl p-5 text-lg outline-none focus:border-red-500"
              />

            </div>


            {/* PAYMENT */}
            <div className="mt-14">

              <div className="flex items-center gap-3 mb-6">

                <CreditCard
                  size={28}
                  className="text-red-500"
                />

                <h2 className="text-3xl font-bold text-gray-800">

                  Payment Method

                </h2>

              </div>


              <div className="grid md:grid-cols-2 gap-6">

                {/* COD */}
                <div
                  onClick={() =>
                    setPaymentMethod(
                      "COD"
                    )
                  }
                  className={`
                    border-2 rounded-3xl p-6 cursor-pointer transition duration-300
                    ${
                      paymentMethod ===
                      "COD"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    }
                  `}
                >

                  <Truck
                    size={40}
                    className="text-red-500"
                  />

                  <h3 className="text-2xl font-bold text-gray-800 mt-5">

                    Cash On Delivery

                  </h3>

                  <p className="text-gray-500 mt-3">

                    Pay after receiving your order at your doorstep.

                  </p>

                </div>


                {/* ONLINE */}
                <div
                  onClick={() =>
                    setPaymentMethod(
                      "ONLINE"
                    )
                  }
                  className={`
                    border-2 rounded-3xl p-6 cursor-pointer transition duration-300
                    ${
                      paymentMethod ===
                      "ONLINE"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    }
                  `}
                >

                  <CreditCard
                    size={40}
                    className="text-red-500"
                  />

                  <h3 className="text-2xl font-bold text-gray-800 mt-5">

                    Online Payment

                  </h3>

                  <p className="text-gray-500 mt-3">

                    Pay securely using UPI, cards, or net banking.

                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-24">

              <h2 className="text-4xl font-extrabold text-gray-800 mb-10">

                Order Summary

              </h2>


              {/* ITEMS */}
              <div className="space-y-6">

                <div className="flex items-center justify-between text-lg">

                  <span className="text-gray-600">

                    Total Items

                  </span>

                  <span className="font-bold text-gray-800">

                    {
                      cartItems.length
                    }

                  </span>

                </div>


                <div className="flex items-center justify-between text-lg">

                  <span className="text-gray-600">

                    Delivery Fee

                  </span>

                  <span className="font-bold text-gray-800">

                    ₹50

                  </span>

                </div>


                <div className="border-t pt-6 flex items-center justify-between">

                  <span className="text-3xl font-bold text-gray-800">

                    Total

                  </span>

                  <span className="text-4xl font-extrabold text-red-500">

                    ₹{totalPrice}

                  </span>

                </div>

              </div>


              {/* BUTTON */}
              <button
                onClick={
                  placeOrder
                }
                disabled={loading}
                className="w-full mt-10 bg-gradient-to-r from-red-500 to-orange-500 text-white py-5 rounded-3xl text-xl font-bold hover:scale-105 transition duration-300"
              >

                {loading
                  ? "Placing Order..."
                  : "Place Order"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}