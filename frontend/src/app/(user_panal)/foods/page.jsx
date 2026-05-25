"use client";

import {
  useEffect,
  useState,
} from "react";

import API
from "@/services/api";

import FoodCard
from "../components/FoodCard";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";


export default function FoodsPage() {

  const [foods, setFoods] =
    useState([]);

  const [filteredFoods,
    setFilteredFoods] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search,
    setSearch] =
    useState("");

  const [category,
    setCategory] =
    useState("All");


  // FETCH FOODS
  useEffect(() => {

    fetchFoods();

  }, []);


  const fetchFoods =
    async () => {

      try {

        const res =
          await API.get(
            "/food"
          );

        setFoods(
          res.data
        );

        setFilteredFoods(
          res.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };


  // FILTER
  useEffect(() => {

    let updatedFoods =
      foods;


    // SEARCH
    if (search) {

      updatedFoods =
        updatedFoods.filter(
          (food) =>

            food.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );

    }


    // CATEGORY
    if (
      category !== "All"
    ) {

      updatedFoods =
        updatedFoods.filter(
          (food) =>

            food.category ===
            category
        );

    }


    setFilteredFoods(
      updatedFoods
    );

  }, [
    search,
    category,
    foods,
  ]);


  // UNIQUE CATEGORIES
  const categories = [

    "All",

    ...new Set(
      foods.map(
        (food) =>
          food.category
      )
    ),

  ];


  return (

    <section className="min-h-screen bg-orange-50 py-14 px-5">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="mb-12 text-center">

          <h1 className="text-5xl font-extrabold text-gray-800">

            Explore Foods

          </h1>

          <p className="text-gray-500 mt-4 text-lg">

            Discover delicious meals 🍔🍕🌮

          </p>

        </div>


        {/* FILTERS */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col lg:flex-row gap-5 items-center justify-between mb-12">

          {/* SEARCH */}
          <div className="relative w-full lg:w-96">

            <Search
              size={22}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search foods..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-red-500 text-gray-800"
            />

          </div>


          {/* CATEGORY */}
          <div className="flex items-center gap-3 flex-wrap">

            <SlidersHorizontal
              size={22}
              className="text-red-500"
            />

            {categories.map(
              (cat) => (

                <button
                  key={cat}
                  onClick={() =>
                    setCategory(
                      cat
                    )
                  }
                  className={`px-5 py-3 rounded-2xl font-semibold transition ${
                    category === cat
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "bg-orange-100 text-red-500"
                  }`}
                >

                  {cat}

                </button>

              )
            )}

          </div>

        </div>


        {/* LOADING */}
        {loading ? (

          <div className="text-center text-3xl font-bold text-red-500">

            Loading Foods...

          </div>

        ) : filteredFoods.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

            <h2 className="text-3xl font-bold text-gray-700">

              No Foods Found

            </h2>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredFoods.map(
              (food) => (

                <FoodCard
                  key={food._id}
                  food={food}
                />

              )
            )}

          </div>

        )}

      </div>

    </section>
  );
}