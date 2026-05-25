"use client";

import { useEffect, useState } from "react";

import API from "@/services/api";

import FoodCard from "./FoodCard";

import { Search } from "lucide-react";


export default function PopularFoods() {

  const [foods, setFoods] =
    useState([]);

  const [filteredFoods, setFilteredFoods] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");


  // FETCH FOODS
  useEffect(() => {

    fetchFoods();

  }, []);


  const fetchFoods = async () => {

    try {

      const res = await API.get(
        "/food"
      );

      setFoods(res.data);

      setFilteredFoods(
        res.data
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  // FILTER FOODS
  useEffect(() => {

    let updatedFoods =
      [...foods];


    // SEARCH FILTER
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


    // CATEGORY FILTER
    if (
      selectedCategory !==
      "All"
    ) {

      updatedFoods =
        updatedFoods.filter(
          (food) =>
            food.category ===
            selectedCategory
        );

    }


    setFilteredFoods(
      updatedFoods
    );

  }, [
    search,
    selectedCategory,
    foods,
  ]);


  // CATEGORIES
  const categories = [
    "All",
    "Pizza",
    "Burger",
    "Pasta",
    "Dessert",
    "Drinks",
    "Biryani",
  ];


  return (

    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

          {/* HEADING */}
          <div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">

              Popular Foods

            </h2>

            <p className="text-gray-500 mt-3">

              Explore delicious meals

            </p>

          </div>


          {/* SEARCH */}
          <div className="relative w-full lg:w-[350px]">

            <input
              type="text"
              placeholder="Search foods..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 rounded-full px-5 py-4 pl-14 outline-none focus:border-red-500"
            />

            <Search
              className="absolute left-5 top-4 text-gray-400"
              size={22}
            />

          </div>

        </div>


        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-4 mb-12">

          {categories.map(
            (category) => (

              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
                className={`
                  px-6 py-3 rounded-full font-semibold transition
                  ${
                    selectedCategory ===
                    category
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "bg-orange-100 text-gray-700"
                  }
                `}
              >

                {category}

              </button>

            )
          )}

        </div>


        {/* LOADING */}
        {loading ? (

          <div className="text-center text-2xl font-bold text-red-500">

            Loading...

          </div>

        ) : filteredFoods.length ===
          0 ? (

          <div className="bg-orange-50 rounded-3xl p-16 text-center">

            <h2 className="text-3xl font-bold text-gray-700">

              No Foods Found

            </h2>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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