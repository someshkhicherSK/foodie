"use client";

import Link from "next/link";

import toast from "react-hot-toast";

import { ShoppingCart }
from "lucide-react";

import { useCart }
from "@/context/CartContext";


export default function FoodCard({
  food,
}) {

  const { addToCart } =
    useCart();


  // SAFETY CHECK
  if (!food) return null;


  // HANDLE ADD TO CART
  const handleAddToCart =
    (e) => {

      e.preventDefault();

      addToCart({

        _id: food._id,

        name: food.name,

        image: food.image,

        price: food.price,

        description:
          food.description,

        category:
          food.category,

      });

      toast.success(
        "Added To Cart"
      );

    };


  return (

    <Link
      href={`/food/${food._id}`}
    >

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

        {/* IMAGE */}
        <div className="h-60 overflow-hidden">

          <img
            src={`http://localhost:5000/uploads/${food.image}`}
            alt={food.name}
            className="h-full w-full object-cover hover:scale-110 transition duration-500"
          />

        </div>


        {/* CONTENT */}
        <div className="p-5">

          {/* TOP */}
          <div className="flex items-center justify-between gap-3">

            <h2 className="text-2xl font-bold text-gray-800">

              {food.name}

            </h2>

            <span className="bg-orange-100 text-red-500 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">

              {food.category}

            </span>

          </div>


          {/* DESCRIPTION */}
          <p className="text-gray-500 mt-3 line-clamp-2">

            {food.description}

          </p>


          {/* BOTTOM */}
          <div className="flex items-center justify-between mt-6">

            <span className="text-3xl font-extrabold text-red-500">

              ₹{food.price}

            </span>


            <button
              onClick={
                handleAddToCart
              }
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-3 rounded-2xl flex items-center gap-2 hover:scale-105 transition"
            >

              <ShoppingCart
                size={18}
              />

              Add To Cart

            </button>

          </div>

        </div>

      </div>

    </Link>

  );
}