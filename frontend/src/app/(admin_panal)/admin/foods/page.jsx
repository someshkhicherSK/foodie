"use client";

import { useEffect, useState } from "react";

import API from "@/services/api";

import toast from "react-hot-toast";

import AdminRoute from "@/components/AdminRoute";

import {
  Plus,
  Trash2,
  Pencil,
} from "lucide-react";


export default function AdminFoodsPage() {

  const [foods, setFoods] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showForm, setShowForm] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: "",
      category: "",
      price: "",
      description: "",
    });

  const [image, setImage] =
    useState(null);


  // FETCH FOODS
  useEffect(() => {

    fetchFoods();

  }, []);


  const fetchFoods = async () => {

    try {

      const res =
        await API.get(
          "/food"
        );

      setFoods(
        res.data
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };


  // ADD / UPDATE FOOD
  const handleAddFood = async (
    e
  ) => {

    e.preventDefault();

    try {

      const data =
        new FormData();

      data.append(
        "name",
        formData.name
      );

      data.append(
        "category",
        formData.category
      );

      data.append(
        "price",
        formData.price
      );

      data.append(
        "description",
        formData.description
      );

      if (image) {

        data.append(
          "image",
          image
        );

      }


      const token =
        localStorage.getItem(
          "token"
        );


      // UPDATE FOOD
      if (editId) {

        await API.put(
          `/food/${editId}`,
          data,
          {
            headers: {
              authorization:
                token,
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        toast.success(
          "Food Updated Successfully"
        );

      }

      // ADD FOOD
      else {

        await API.post(
          "/food",
          data,
          {
            headers: {
              authorization:
                token,
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        toast.success(
          "Food Added Successfully"
        );

      }


      // RESET
      setFormData({
        name: "",
        category: "",
        price: "",
        description: "",
      });

      setImage(null);

      setEditId(null);

      setShowForm(false);

      fetchFoods();

    } catch (error) {

      console.log(error);

      toast.error(
        "Something Went Wrong"
      );

    }
  };


  // DELETE FOOD
  const deleteFood = async (
    id
  ) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await API.delete(
        `/food/${id}`,
        {
          headers: {
            authorization:
              token,
          },
        }
      );

      toast.success(
        "Food Deleted"
      );

      fetchFoods();

    } catch (error) {

      console.log(error);

      toast.error(
        "Delete Failed"
      );

    }
  };


  return (

    <AdminRoute>

      <section>

        {/* TOP */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-4xl font-extrabold text-gray-800">

              Foods Management

            </h1>

            <p className="text-gray-500 mt-3">

              Manage all food items

            </p>

          </div>


          {/* ADD BUTTON */}
          <button
            onClick={() => {

              setShowForm(
                !showForm
              );

              if (!showForm) {

                setEditId(
                  null
                );

                setFormData({
                  name: "",
                  category: "",
                  price: "",
                  description:
                    "",
                });

              }

            }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-bold hover:scale-105 transition"
          >

            <Plus size={22} />

            {
              showForm
                ? "Close"
                : "Add Food"
            }

          </button>

        </div>


        {/* FORM */}
        {showForm && (

          <form
            onSubmit={
              handleAddFood
            }
            className="bg-white rounded-3xl shadow-lg p-8 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Food Name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              required
              className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400"
            />


            {/* CATEGORY */}
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
              required
              className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400"
            />


            {/* PRICE */}
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={
                formData.price
              }
              onChange={
                handleChange
              }
              required
              className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400"
            />


            {/* IMAGE */}
            <input
              type="file"
              onChange={(e) =>
                setImage(
                  e.target
                    .files[0]
                )
              }
              className="border border-gray-300 rounded-2xl px-5 py-4 outline-none text-gray-800"
            />


            {/* DESCRIPTION */}
            <textarea
              name="description"
              placeholder="Description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              required
              rows="5"
              className="md:col-span-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400"
            ></textarea>


            {/* BUTTON */}
            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
            >

              {editId
                ? "Update Food"
                : "Add Food"}

            </button>

          </form>

        )}


        {/* LOADING */}
        {loading ? (

          <div className="text-center text-3xl font-bold text-red-500">

            Loading...

          </div>

        ) : foods.length ===
          0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

            <h2 className="text-3xl font-bold text-gray-700">

              No Foods Found

            </h2>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {foods.map(
              (food) => (

                <div
                  key={food._id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >

                  {/* IMAGE */}
                  <img
                    src={`http://localhost:5000/uploads/${food.image}`}
                    alt={food.name}
                    className="h-60 w-full object-cover"
                  />


                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="flex items-center justify-between">

                      <h2 className="text-2xl font-bold text-gray-800">

                        {food.name}

                      </h2>

                      <span className="bg-orange-100 text-red-500 px-4 py-2 rounded-full text-sm font-semibold">

                        {food.category}

                      </span>

                    </div>


                    <p className="text-gray-500 mt-4 line-clamp-2">

                      {
                        food.description
                      }

                    </p>


                    <div className="flex items-center justify-between mt-6">

                      <span className="text-3xl font-extrabold text-red-500">

                        ₹
                        {
                          food.price
                        }

                      </span>


                      <div className="flex items-center gap-3">

                        {/* EDIT */}
                        <button
                          onClick={() => {

                            setShowForm(
                              true
                            );

                            setEditId(
                              food._id
                            );

                            setFormData({
                              name:
                                food.name,
                              category:
                                food.category,
                              price:
                                food.price,
                              description:
                                food.description,
                            });

                          }}
                          className="bg-orange-500 text-white p-4 rounded-2xl hover:bg-orange-600 transition"
                        >

                          <Pencil
                            size={22}
                          />

                        </button>


                        {/* DELETE */}
                        <button
                          onClick={() =>
                            deleteFood(
                              food._id
                            )
                          }
                          className="bg-red-500 text-white p-4 rounded-2xl hover:bg-red-600 transition"
                        >

                          <Trash2
                            size={22}
                          />

                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </section>

    </AdminRoute>
  );
}