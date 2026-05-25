import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";


export default function Footer() {

  return (

    <footer className="bg-gray-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Foodie
          </h1>

          <p className="mt-5 text-gray-400 leading-7">
            Delicious food delivered fast at your doorstep with premium quality and amazing taste.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">

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

          </div>

        </div>


        {/* SUPPORT */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Support
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">

            <p>
              Help Center
            </p>

            <p>
              Terms & Conditions
            </p>

            <p>
              Privacy Policy
            </p>

            <p>
              Refund Policy
            </p>

          </div>

        </div>


        {/* CONTACT */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Contact Us
          </h2>

          <div className="flex flex-col gap-5 text-gray-400">

            <div className="flex items-center gap-3">

              <MapPin
                size={20}
                className="text-red-500"
              />

              <span>
                Rajasthan, India
              </span>

            </div>


            <div className="flex items-center gap-3">

              <Phone
                size={20}
                className="text-red-500"
              />

              <span>
                +91 9876543210
              </span>

            </div>


            <div className="flex items-center gap-3">

              <Mail
                size={20}
                className="text-red-500"
              />

              <span>
                support@foodie.com
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-sm">

        © 2026 Foodie. All Rights Reserved.

      </div>

    </footer>

  );
}