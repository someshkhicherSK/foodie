// "use client";

// import { useEffect, useState } from "react";

// import {
//   ShoppingBag,
//   UtensilsCrossed,
//   Users,
//   IndianRupee,
// } from "lucide-react";

// import API from "@/services/api";

// import AdminRoute from "@/components/AdminRoute";


// export default function AdminDashboard() {

//   const [foods, setFoods] =
//     useState([]);

//   const [orders, setOrders] =
//     useState([]);

//   const [users, setUsers] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);


//   // FETCH DATA
//   useEffect(() => {

//     fetchDashboardData();

//   }, []);


//   const fetchDashboardData = async () => {

//     try {

//       // FOODS
//       const foodsRes =
//         await API.get("/food");

//       setFoods(
//         foodsRes.data
//       );


//       // ORDERS
//       const ordersRes =
//         await API.get(
//           "/order/all"
//         );

//       setOrders(
//         ordersRes.data
//       );


//       // USERS
//       const usersRes =
//         await API.get(
//           "/auth/users"
//         );

//       setUsers(
//         usersRes.data
//       );

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }
//   };


//   // TOTAL REVENUE
//   const totalRevenue =
//     orders.reduce(
//       (total, order) =>
//         total +
//         order.totalPrice,
//       0
//     );


//   return (

//     <AdminRoute>

//       <section className="min-h-screen bg-orange-50 p-6">

//         {/* TOP */}
//         <div className="mb-10">

//           <h1 className="text-4xl font-extrabold text-gray-800">

//             Admin Dashboard

//           </h1>

//           <p className="text-gray-500 mt-3">

//             Manage your food delivery platform

//           </p>

//         </div>


//         {/* LOADING */}
//         {loading ? (

//           <div className="text-center text-3xl font-bold text-red-500">

//             Loading...

//           </div>

//         ) : (

//           <>
//             {/* STATS */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

//               {/* ORDERS */}
//               <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-between">

//                 <div>

//                   <p className="text-gray-500 text-lg">

//                     Total Orders

//                   </p>

//                   <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

//                     {orders.length}

//                   </h2>

//                 </div>

//                 <div className="bg-orange-100 p-5 rounded-2xl">

//                   <ShoppingBag
//                     size={40}
//                     className="text-red-500"
//                   />

//                 </div>

//               </div>


//               {/* FOODS */}
//               <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-between">

//                 <div>

//                   <p className="text-gray-500 text-lg">

//                     Total Foods

//                   </p>

//                   <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

//                     {foods.length}

//                   </h2>

//                 </div>

//                 <div className="bg-orange-100 p-5 rounded-2xl">

//                   <UtensilsCrossed
//                     size={40}
//                     className="text-red-500"
//                   />

//                 </div>

//               </div>


//               {/* USERS */}
//               <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-between">

//                 <div>

//                   <p className="text-gray-500 text-lg">

//                     Total Users

//                   </p>

//                   <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

//                     {users.length}

//                   </h2>

//                 </div>

//                 <div className="bg-orange-100 p-5 rounded-2xl">

//                   <Users
//                     size={40}
//                     className="text-red-500"
//                   />

//                 </div>

//               </div>


//               {/* REVENUE */}
//               <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-between">

//                 <div>

//                   <p className="text-gray-500 text-lg">

//                     Revenue

//                   </p>

//                   <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

//                     ₹{totalRevenue}

//                   </h2>

//                 </div>

//                 <div className="bg-orange-100 p-5 rounded-2xl">

//                   <IndianRupee
//                     size={40}
//                     className="text-red-500"
//                   />

//                 </div>

//               </div>

//             </div>


//             {/* RECENT ORDERS */}
//             <div className="mt-14 bg-white rounded-3xl shadow-lg p-8">

//               <div className="flex items-center justify-between mb-8">

//                 <h2 className="text-3xl font-bold text-gray-800">

//                   Recent Orders

//                 </h2>

//               </div>


//               <div className="overflow-x-auto">

//                 <table className="w-full">

//                   <thead>

//                     <tr className="border-b text-left">

//                       <th className="pb-4">

//                         Order ID

//                       </th>

//                       <th className="pb-4">

//                         Amount

//                       </th>

//                       <th className="pb-4">

//                         Payment

//                       </th>

//                       <th className="pb-4">

//                         Status

//                       </th>

//                     </tr>

//                   </thead>


//                   <tbody>

//                     {orders
//                       .slice(0, 5)
//                       .map(
//                         (order) => (

//                           <tr
//                             key={order._id}
//                             className="border-b"
//                           >

//                             <td className="py-5 font-semibold">

//                               #
//                               {order._id.slice(
//                                 -6
//                               )}

//                             </td>

//                             <td className="py-5 text-red-500 font-bold">

//                               ₹
//                               {
//                                 order.totalPrice
//                               }

//                             </td>

//                             <td className="py-5">

//                               {
//                                 order.paymentMethod
//                               }

//                             </td>

//                             <td className="py-5">

//                               <span className="bg-orange-100 text-red-500 px-4 py-2 rounded-full font-semibold">

//                                 {
//                                   order.status
//                                 }

//                               </span>

//                             </td>

//                           </tr>

//                         )
//                       )}

//                   </tbody>

//                 </table>

//               </div>

//             </div>

//           </>

//         )}

//       </section>

//     </AdminRoute>

//   );
// }















"use client";

import { useEffect, useState }
from "react";

import {
  ShoppingBag,
  UtensilsCrossed,
  Users,
  IndianRupee,
} from "lucide-react";

import API
from "@/services/api";

import AdminRoute
from "@/components/AdminRoute";


export default function AdminDashboard() {

  const [foods, setFoods] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // FETCH DATA
  useEffect(() => {

    fetchDashboardData();

  }, []);


  const fetchDashboardData =
    async () => {

      try {

        // FOODS
        const foodsRes =
          await API.get(
            "/food"
          );

        setFoods(
          foodsRes.data
        );


        // ORDERS
        const ordersRes =
          await API.get(
            "/order/all"
          );

        setOrders(
          ordersRes.data
        );


        // USERS
        const usersRes =
          await API.get(
            "/auth/users"
          );

        setUsers(
          usersRes.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };


  // TOTAL REVENUE
  const totalRevenue =
    orders.reduce(
      (total, order) =>
        total +
        order.totalPrice,
      0
    );


  return (

    <AdminRoute>

      <section className="min-h-screen bg-orange-50 p-6">

        {/* TOP */}
        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-gray-800">

            Admin Dashboard

          </h1>

          <p className="text-gray-600 mt-3">

            Manage your food delivery platform

          </p>

        </div>


        {/* LOADING */}
        {loading ? (

          <div className="text-center text-3xl font-bold text-red-500">

            Loading...

          </div>

        ) : (

          <>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

              {/* ORDERS */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-between">

                <div>

                  <p className="text-gray-500 text-lg">

                    Total Orders

                  </p>

                  <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

                    {
                      orders.length
                    }

                  </h2>

                </div>

                <div className="bg-orange-100 p-5 rounded-2xl">

                  <ShoppingBag
                    size={40}
                    className="text-red-500"
                  />

                </div>

              </div>


              {/* FOODS */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-between">

                <div>

                  <p className="text-gray-500 text-lg">

                    Total Foods

                  </p>

                  <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

                    {
                      foods.length
                    }

                  </h2>

                </div>

                <div className="bg-orange-100 p-5 rounded-2xl">

                  <UtensilsCrossed
                    size={40}
                    className="text-red-500"
                  />

                </div>

              </div>


              {/* USERS */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-between">

                <div>

                  <p className="text-gray-500 text-lg">

                    Total Users

                  </p>

                  <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

                    {
                      users.length
                    }

                  </h2>

                </div>

                <div className="bg-orange-100 p-5 rounded-2xl">

                  <Users
                    size={40}
                    className="text-red-500"
                  />

                </div>

              </div>


              {/* REVENUE */}
              <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center justify-between">

                <div>

                  <p className="text-gray-500 text-lg">

                    Revenue

                  </p>

                  <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

                    ₹
                    {
                      totalRevenue
                    }

                  </h2>

                </div>

                <div className="bg-orange-100 p-5 rounded-2xl">

                  <IndianRupee
                    size={40}
                    className="text-red-500"
                  />

                </div>

              </div>

            </div>


            {/* RECENT ORDERS */}
            <div className="mt-14 bg-white rounded-3xl shadow-lg p-8 text-gray-800">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold text-gray-800">

                  Recent Orders

                </h2>

              </div>


              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead className="text-gray-800">

                    <tr className="border-b text-left">

                      <th className="pb-4">

                        Order ID

                      </th>

                      <th className="pb-4">

                        Amount

                      </th>

                      <th className="pb-4">

                        Payment

                      </th>

                      <th className="pb-4">

                        Status

                      </th>

                    </tr>

                  </thead>


                  <tbody className="text-gray-700">

                    {orders
                      .slice(0, 5)
                      .map(
                        (order) => (

                          <tr
                            key={order._id}
                            className="border-b"
                          >

                            <td className="py-5 font-semibold text-gray-800">

                              #
                              {
                                order._id.slice(
                                  -6
                                )
                              }

                            </td>

                            <td className="py-5 text-red-500 font-bold">

                              ₹
                              {
                                order.totalPrice
                              }

                            </td>

                            <td className="py-5 text-gray-700">

                              {
                                order.paymentMethod
                              }

                            </td>

                            <td className="py-5">

                              <span className="bg-orange-100 text-red-500 px-4 py-2 rounded-full font-semibold">

                                {
                                  order.status
                                }

                              </span>

                            </td>

                          </tr>

                        )
                      )}

                  </tbody>

                </table>

              </div>

            </div>

          </>

        )}

      </section>

    </AdminRoute>

  );
}