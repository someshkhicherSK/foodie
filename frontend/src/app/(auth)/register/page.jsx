"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import API from "@/services/api";


export default function RegisterPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
    });


  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };


  // HANDLE REGISTER
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      await API.post(
        "/auth/register",
        formData
      );

      toast.success(
        "Registration Successful"
      );

      router.push(
        "/login"
      );

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data
          ?.message ||
          "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">

        {/* TOP */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">

            Create Account

          </h1>

          <p className="text-gray-500 mt-3">

            Register to continue

          </p>

        </div>


        {/* FORM */}
        <form
          onSubmit={
            handleSubmit
          }
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* NAME */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">

              Full Name

            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
            />

          </div>


          {/* EMAIL */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">

              Email

            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
            />

          </div>


          {/* PASSWORD */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">

              Password

            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
            />

          </div>


          {/* CONTACT */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">

              Contact Number

            </label>

            <input
              type="text"
              name="contact"
              placeholder="Enter phone number"
              value={
                formData.contact
              }
              onChange={
                handleChange
              }
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
            />

          </div>


          {/* ADDRESS */}
          <div className="md:col-span-2">

            <label className="block mb-2 font-semibold text-gray-700">

              Address

            </label>

            <textarea
              name="address"
              placeholder="Enter your address"
              value={
                formData.address
              }
              onChange={
                handleChange
              }
              required
              rows="5"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
            ></textarea>

          </div>


          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
          >

            {loading
              ? "Please Wait..."
              : "Register"}

          </button>

        </form>


        {/* LOGIN */}
        <div className="text-center mt-8">

          <p className="text-gray-600">

            Already have an
            account?

            <Link
              href="/login"
              className="text-red-500 font-bold ml-2 hover:underline"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}