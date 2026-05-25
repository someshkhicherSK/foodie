"use client";

import { useEffect, useState } from "react";

import API from "@/services/api";

import toast from "react-hot-toast";

import AdminRoute from "@/components/AdminRoute";

import {
  Trash2,
  Search,
  ShieldCheck,
  User,
} from "lucide-react";


export default function AdminUsersPage() {

  const [users, setUsers] =
    useState([]);

  const [filteredUsers, setFilteredUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");


  // FETCH USERS
  useEffect(() => {

    fetchUsers();

  }, []);


  const fetchUsers = async () => {

    try {

      const res =
        await API.get(
          "/auth/users"
        );

      setUsers(
        res.data
      );

      setFilteredUsers(
        res.data
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  // SEARCH USERS
  useEffect(() => {

    const filtered =
      users.filter(
        (user) =>
          user.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          user.email
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    setFilteredUsers(
      filtered
    );

  }, [search, users]);


  // DELETE USER
  const deleteUser = async (
    id
  ) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await API.delete(
        `/auth/users/${id}`,
        {
          headers: {
            authorization:
              token,
          },
        }
      );

      toast.success(
        "User Deleted"
      );

      fetchUsers();

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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-4xl font-extrabold text-gray-800">

              Users Management

            </h1>

            <p className="text-gray-500 mt-3">

              Manage all registered users

            </p>

          </div>


          {/* SEARCH */}
          <div className="relative w-full lg:w-[350px]">

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 pl-14 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
            />

            <Search
              className="absolute left-5 top-4 text-gray-400"
              size={22}
            />

          </div>

        </div>


        {/* LOADING */}
        {loading ? (

          <div className="text-center text-3xl font-bold text-red-500">

            Loading...

          </div>

        ) : filteredUsers.length ===
          0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

            <h2 className="text-3xl font-bold text-gray-700">

              No Users Found

            </h2>

          </div>

        ) : (

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full">

                {/* TABLE HEAD */}
                <thead className="bg-gradient-to-r from-red-500 to-orange-500 text-white">

                  <tr>

                    <th className="p-5 text-left">

                      User

                    </th>

                    <th className="p-5 text-left">

                      Email

                    </th>

                    <th className="p-5 text-left">

                      Contact

                    </th>

                    <th className="p-5 text-left">

                      Role

                    </th>

                    <th className="p-5 text-left">

                      Action

                    </th>

                  </tr>

                </thead>


                {/* TABLE BODY */}
                <tbody>

                  {filteredUsers.map(
                    (user) => (

                      <tr
                        key={user._id}
                        className="border-b hover:bg-orange-50 transition"
                      >

                        {/* USER */}
                        <td className="p-5">

                          <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-xl font-bold">

                              {user.name?.charAt(
                                0
                              )}

                            </div>

                            <div>

                              <h3 className="font-bold text-gray-800 text-lg">

                                {user.name}

                              </h3>

                            </div>

                          </div>

                        </td>


                        {/* EMAIL */}
                        <td className="p-5 text-gray-700">

                          {user.email}

                        </td>


                        {/* CONTACT */}
                        <td className="p-5 text-gray-700">

                          {
                            user.contactNumber
                          }

                        </td>


                        {/* ROLE */}
                        <td className="p-5">

                          <span
                            className={`
                              px-4 py-2 rounded-full font-semibold flex items-center gap-2 w-fit
                              ${
                                user.role ===
                                "admin"
                                  ? "bg-purple-100 text-purple-600"
                                  : "bg-orange-100 text-red-500"
                              }
                            `}
                          >

                            {user.role ===
                            "admin" ? (

                              <ShieldCheck
                                size={18}
                              />

                            ) : (

                              <User
                                size={18}
                              />

                            )}

                            {user.role}

                          </span>

                        </td>


                        {/* ACTION */}
                        <td className="p-5">

                          <button
                            onClick={() =>
                              deleteUser(
                                user._id
                              )
                            }
                            className="bg-red-500 text-white p-4 rounded-2xl hover:bg-red-600 transition"
                          >

                            <Trash2
                              size={22}
                            />

                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </div>

        )}

      </section>

    </AdminRoute>
  );
}