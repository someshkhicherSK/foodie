"use client";

import {
  UtensilsCrossed,
  Truck,
  Clock3,
  Star,
} from "lucide-react";


export default function AboutPage() {

  return (

    <section className="min-h-screen bg-orange-50">

      {/* HERO */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-24 px-5">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-extrabold">

            About Us

          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto text-orange-100">

            We deliver delicious food
            with lightning fast service 🚀

          </p>

        </div>

      </div>


      {/* CONTENT */}
      <div className="max-w-7xl mx-auto py-20 px-5">

        {/* STORY */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

          
            <img
               src="/about.png"
               alt="Food"
                 className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
/>

          </div>


          {/* TEXT */}
          <div>

            <h2 className="text-5xl font-extrabold text-gray-800">

              Delicious Food,
              Delivered Fast

            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-9">

              Our platform connects food lovers
              with the best restaurants in town.
              We focus on quality, speed, and
              customer satisfaction to make every
              meal unforgettable.

            </p>

            <p className="text-gray-600 mt-6 text-lg leading-9">

              From burgers 🍔 to pizza 🍕,
              from healthy salads 🥗 to desserts 🍰,
              we bring every flavor directly
              to your doorstep.

            </p>

          </div>

        </div>


        {/* FEATURES */}
        <div className="mt-24">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-extrabold text-gray-800">

              Why Choose Us

            </h2>

            <p className="text-gray-500 mt-5 text-lg">

              Experience the best food delivery service

            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition">

              <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

                <UtensilsCrossed
                  size={45}
                  className="text-red-500"
                />

              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">

                Quality Food

              </h3>

              <p className="text-gray-500 mt-4">

                Fresh and hygienic meals
                prepared with love.

              </p>

            </div>


            {/* CARD 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition">

              <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

                <Truck
                  size={45}
                  className="text-red-500"
                />

              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">

                Fast Delivery

              </h3>

              <p className="text-gray-500 mt-4">

                Lightning-fast delivery
                to your doorstep.

              </p>

            </div>


            {/* CARD 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition">

              <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

                <Clock3
                  size={45}
                  className="text-red-500"
                />

              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">

                24/7 Service

              </h3>

              <p className="text-gray-500 mt-4">

                Order anytime, anywhere
                without any hassle.

              </p>

            </div>


            {/* CARD 4 */}
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition">

              <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

                <Star
                  size={45}
                  className="text-red-500"
                />

              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">

                Best Experience

              </h3>

              <p className="text-gray-500 mt-4">

                Trusted by thousands
                of happy customers.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}