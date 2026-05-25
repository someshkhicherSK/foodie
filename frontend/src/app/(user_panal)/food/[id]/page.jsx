"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import API from "@/services/api";

import { useCart } from "@/context/CartContext";

import FoodCard from "../../components/FoodCard";


export default function FoodDetailsPage() {

  const params = useParams();

  const { addToCart } =
    useCart();


  const [food, setFood] =
    useState(null);

  const [relatedFoods, setRelatedFoods] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // FETCH FOOD
  useEffect(() => {

    fetchFood();

  }, []);


  const fetchFood = async () => {

    try {

      // GET ALL FOODS
      const res = await API.get(
        "/food"
      );

      // FIND CURRENT FOOD
      const currentFood =
        res.data.find(
          (item) =>
            item._id ===
            params.id
        );

      setFood(currentFood);


      // RELATED FOODS
      const related =
        res.data.filter(
          (item) =>
            item.category ===
              currentFood.category &&
            item._id !==
              currentFood._id
        );

      setRelatedFoods(
        related
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-red-500">

        Loading...

      </div>

    );
  }


  // NO FOOD
  if (!food) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-700">

        Food Not Found

      </div>

    );
  }


  return (

    <section className="min-h-screen py-16 bg-orange-50">

      <div className="max-w-7xl mx-auto px-5">

        {/* FOOD DETAILS */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div>

            <img
              src={`http://localhost:5000/uploads/${food.image}`}
              alt={food.name}
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />

          </div>


          {/* CONTENT */}
          <div>

            <span className="bg-orange-100 text-red-500 px-5 py-2 rounded-full font-bold">

              {food.category}

            </span>


            <h1 className="text-5xl font-extrabold text-gray-800 mt-6">

              {food.name}

            </h1>


            <p className="text-gray-600 text-lg leading-8 mt-6">

              {food.description}

            </p>


            <div className="mt-8">

              <span className="text-5xl font-extrabold text-red-500">

                ₹{food.price}

              </span>

            </div>


            <button
              onClick={() =>
                addToCart(food._id)
              }
              className="mt-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
            >

              Add To Cart

            </button>

          </div>

        </div>


        {/* RELATED FOODS */}
        {relatedFoods.length > 0 && (

          <div className="mt-24">

            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">

              Related Foods

            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {relatedFoods.map(
                (item) => (

                  <FoodCard
                    key={item._id}
                    food={item}
                  />

                )
              )}

            </div>

          </div>

        )}

      </div>

    </section>
  );
}