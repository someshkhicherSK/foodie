"use client";

import {
  useState,
} from "react";

import toast
from "react-hot-toast";

import {
  Mail,
} from "lucide-react";


export default function ForgotPasswordPage() {

  const [email,
    setEmail] =
    useState("");


  // HANDLE SUBMIT
  const handleSubmit =
    (e) => {

      e.preventDefault();

      toast.success(
        "Password reset link sent to your email 🚀"
      );

      setEmail("");
    };


  return (

    <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        {/* TOP */}
        <div className="text-center mb-10">

          <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

            <Mail
              size={45}
              className="text-red-500"
            />

          </div>

          <h1 className="text-4xl font-extrabold text-gray-800 mt-6">

            Forgot Password

          </h1>

          <p className="text-gray-500 mt-4">

            Enter your email to receive
            a password reset link

          </p>

        </div>


        {/* FORM */}
        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-7"
        >

          {/* EMAIL */}
          <div>

            <label className="block text-lg font-semibold text-gray-700 mb-3">

              Email Address

            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800"
            />

          </div>


          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
          >

            Send Reset Link

          </button>

        </form>

      </div>

    </section>
  );
}