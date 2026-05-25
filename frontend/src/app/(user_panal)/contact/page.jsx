"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  useState,
} from "react";

import toast
from "react-hot-toast";


export default function ContactPage() {

  const [formData,
    setFormData] =
    useState({

      name: "",

      email: "",

      message: "",

    });


  // HANDLE CHANGE
  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,

      });
    };


  // HANDLE SUBMIT
  const handleSubmit =
    (e) => {

      e.preventDefault();

      toast.success(
        "Message Sent Successfully 🚀"
      );

      setFormData({

        name: "",

        email: "",

        message: "",

      });
    };


  return (

    <section className="min-h-screen bg-orange-50">

      {/* HERO */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-24 px-5">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-extrabold">

            Contact Us

          </h1>

          <p className="mt-6 text-xl text-orange-100 max-w-3xl mx-auto">

            We’d love to hear from you 💌

          </p>

        </div>

      </div>


      {/* CONTENT */}
      <div className="max-w-7xl mx-auto py-20 px-5">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT */}
          <div className="space-y-8">

            <h2 className="text-5xl font-extrabold text-gray-800">

              Get In Touch

            </h2>

            <p className="text-gray-600 text-lg leading-9">

              Have questions, feedback,
              or suggestions?
              Our team is always ready
              to help you 🚀

            </p>


            {/* INFO */}
            <div className="space-y-6 mt-10">

              {/* EMAIL */}
              <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-5">

                <div className="bg-orange-100 p-5 rounded-2xl">

                  <Mail
                    size={35}
                    className="text-red-500"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-800">

                    Email

                  </h3>

                  <p className="text-gray-500 mt-2">

                    support@foodapp.com

                  </p>

                </div>

              </div>


              {/* PHONE */}
              <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-5">

                <div className="bg-orange-100 p-5 rounded-2xl">

                  <Phone
                    size={35}
                    className="text-red-500"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-800">

                    Phone

                  </h3>

                  <p className="text-gray-500 mt-2">

                    +91 9876543210

                  </p>

                </div>

              </div>


              {/* ADDRESS */}
              <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-5">

                <div className="bg-orange-100 p-5 rounded-2xl">

                  <MapPin
                    size={35}
                    className="text-red-500"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-800">

                    Address

                  </h3>

                  <p className="text-gray-500 mt-2">

                    Jhunjhunu,
                    Rajasthan, India

                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <h2 className="text-4xl font-extrabold text-gray-800 mb-10">

              Send Message

            </h2>


            <form
              onSubmit={
                handleSubmit
              }
              className="space-y-7"
            >

              {/* NAME */}
              <div>

                <label className="block text-lg font-semibold text-gray-700 mb-3">

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
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800"
                />

              </div>


              {/* EMAIL */}
              <div>

                <label className="block text-lg font-semibold text-gray-700 mb-3">

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
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800"
                />

              </div>


              {/* MESSAGE */}
              <div>

                <label className="block text-lg font-semibold text-gray-700 mb-3">

                  Message

                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={
                    formData.message
                  }
                  onChange={
                    handleChange
                  }
                  required
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800"
                />

              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-5 rounded-2xl text-xl font-bold hover:scale-105 transition flex items-center justify-center gap-3"
              >

                <Send size={24} />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}