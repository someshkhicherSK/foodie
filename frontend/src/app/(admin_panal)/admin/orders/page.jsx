// "use client";

// import { useEffect, useState } from "react";

// import API from "@/services/api";

// import toast from "react-hot-toast";

// import AdminRoute from "@/components/AdminRoute";


// export default function AdminOrdersPage() {

//   const [orders, setOrders] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);


//   // FETCH ORDERS
//   useEffect(() => {

//     fetchOrders();

//   }, []);


//   const fetchOrders = async () => {

//     try {

//       const res =
//         await API.get(
//           "/order/all"
//         );

//       setOrders(
//         res.data
//       );

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }
//   };


//   // UPDATE STATUS
//   const updateStatus = async (
//     id,
//     status
//   ) => {

//     try {

//       await API.put(
//         `/order/status/${id}`,
//         { status }
//       );

//       toast.success(
//         "Order Status Updated"
//       );

//       fetchOrders();

//     } catch (error) {

//       console.log(error);

//       toast.error(
//         "Failed To Update"
//       );

//     }
//   };


//   return (

//     <AdminRoute>

//       <section>

//         {/* TOP */}
//         <div className="mb-10">

//           <h1 className="text-4xl font-extrabold text-gray-800">

//             Orders Management

//           </h1>

//           <p className="text-gray-500 mt-3">

//             Manage all customer orders

//           </p>

//         </div>


//         {/* LOADING */}
//         {loading ? (

//           <div className="text-center text-3xl font-bold text-red-500">

//             Loading...

//           </div>

//         ) : orders.length ===
//           0 ? (

//           <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

//             <h2 className="text-3xl font-bold text-gray-700">

//               No Orders Found

//             </h2>

//           </div>

//         ) : (

//           <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

//             <div className="overflow-x-auto">

//               <table className="w-full">

//                 {/* TABLE HEAD */}
//                 <thead className="bg-gradient-to-r from-red-500 to-orange-500 text-white">

//                   <tr>

//                     <th className="p-5 text-left">

//                       Order ID

//                     </th>

//                     <th className="p-5 text-left">

//                       Customer

//                     </th>

//                     <th className="p-5 text-left">

//                       Address

//                     </th>

//                     <th className="p-5 text-left">

//                       Payment

//                     </th>

//                     <th className="p-5 text-left">

//                       Amount

//                     </th>

//                     <th className="p-5 text-left">

//                       Status

//                     </th>

//                   </tr>

//                 </thead>


//                 {/* TABLE BODY */}
//                 <tbody>

//                   {orders.map(
//                     (order) => (

//                       <tr
//                         key={order._id}
//                         className="border-b hover:bg-orange-50 transition"
//                       >

//                         {/* ORDER ID */}
//                         <td className="p-5 font-bold text-gray-700">

//                           #
//                           {order._id.slice(
//                             -6
//                           )}

//                         </td>


//                         {/* CUSTOMER */}
//                         <td className="p-5">

//                           <div>

//                             <h3 className="font-bold text-gray-800">

//                               {
//                                 order.userId
//                                   ?.name
//                               }

//                             </h3>

//                             <p className="text-gray-500 text-sm">

//                               {
//                                 order.userId
//                                   ?.email
//                               }

//                             </p>

//                           </div>

//                         </td>


//                         {/* ADDRESS */}
//                         <td className="p-5 text-gray-600">

//                           {
//                             order.address
//                           }

//                         </td>


//                         {/* PAYMENT */}
//                         <td className="p-5">

//                           <span className="bg-orange-100 text-red-500 px-4 py-2 rounded-full font-semibold">

//                             {
//                               order.paymentMethod
//                             }

//                           </span>

//                         </td>


//                         {/* AMOUNT */}
//                         <td className="p-5 font-bold text-red-500 text-lg">

//                           ₹
//                           {
//                             order.totalPrice
//                           }

//                         </td>


//                         {/* STATUS */}
//                         <td className="p-5">

//                           <select
//                             value={
//                               order.status
//                             }
//                             onChange={(
//                               e
//                             ) =>
//                               updateStatus(
//                                 order._id,
//                                 e.target
//                                   .value
//                               )
//                             }
//                             className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-red-500"
//                           >

//                             <option value="Pending">

//                               Pending

//                             </option>

//                             <option value="Preparing">

//                               Preparing

//                             </option>

//                             <option value="Out For Delivery">

//                               Out For Delivery

//                             </option>

//                             <option value="Delivered">

//                               Delivered

//                             </option>

//                           </select>

//                         </td>

//                       </tr>

//                     )
//                   )}

//                 </tbody>

//               </table>

//             </div>

//           </div>

//         )}

//       </section>


//     </AdminRoute>
//   );
// }







"use client";

import { useEffect, useState }
from "react";

import API
from "@/services/api";

import toast
from "react-hot-toast";

import AdminRoute
from "@/components/AdminRoute";


export default function AdminOrdersPage() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // FETCH ORDERS
  useEffect(() => {

    fetchOrders();

  }, []);


  const fetchOrders =
    async () => {

      try {

        const res =
          await API.get(
            "/order/all"
          );

        setOrders(
          res.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };


  // UPDATE STATUS
  const updateStatus =
    async (
      id,
      status
    ) => {

      try {

        await API.put(
          `/order/status/${id}`,
          { status }
        );

        toast.success(
          "Order Status Updated"
        );

        fetchOrders();

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed To Update"
        );

      }
    };


  return (

    <AdminRoute>

      <section className="text-gray-800">

        {/* TOP */}
        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-gray-800">

            Orders Management

          </h1>

          <p className="text-gray-600 mt-3">

            Manage all customer orders

          </p>

        </div>


        {/* LOADING */}
        {loading ? (

          <div className="text-center text-3xl font-bold text-red-500">

            Loading...

          </div>

        ) : orders.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

            <h2 className="text-3xl font-bold text-gray-700">

              No Orders Found

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

                      Order ID

                    </th>

                    <th className="p-5 text-left">

                      Customer

                    </th>

                    <th className="p-5 text-left">

                      Address

                    </th>

                    <th className="p-5 text-left">

                      Payment

                    </th>

                    <th className="p-5 text-left">

                      Amount

                    </th>

                    <th className="p-5 text-left">

                      Status

                    </th>

                  </tr>

                </thead>


                {/* TABLE BODY */}
                <tbody className="text-gray-800">

                  {orders.map(
                    (order) => (

                      <tr
                        key={order._id}
                        className="border-b hover:bg-orange-50 transition"
                      >

                        {/* ORDER ID */}
                        <td className="p-5 font-bold text-gray-800">

                          #
                          {
                            order._id.slice(
                              -6
                            )
                          }

                        </td>


                        {/* CUSTOMER */}
                        <td className="p-5">

                          <div>

                            <h3 className="font-bold text-gray-800">

                              {
                                order.userId
                                  ?.name ||
                                "Customer"
                              }

                            </h3>

                            <p className="text-gray-600 text-sm">

                              {
                                order.userId
                                  ?.email ||
                                "No Email"
                              }

                            </p>

                          </div>

                        </td>


                        {/* ADDRESS */}
                        <td className="p-5 text-gray-700">

                          {
                            order.address
                          }

                        </td>


                        {/* PAYMENT */}
                        <td className="p-5">

                          <span className="bg-orange-100 text-red-500 px-4 py-2 rounded-full font-semibold">

                            {
                              order.paymentMethod
                            }

                          </span>

                        </td>


                        {/* AMOUNT */}
                        <td className="p-5 font-bold text-red-500 text-lg">

                          ₹
                          {
                            order.totalPrice
                          }

                        </td>


                        {/* STATUS */}
                        <td className="p-5">

                          <select
                            value={
                              order.status
                            }
                            onChange={(
                              e
                            ) =>
                              updateStatus(
                                order._id,
                                e.target
                                  .value
                              )
                            }
                            className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-red-500 text-gray-800 bg-white"
                          >

                            <option value="Pending">

                              Pending

                            </option>

                            <option value="Preparing">

                              Preparing

                            </option>

                            <option value="Out For Delivery">

                              Out For Delivery

                            </option>

                            <option value="Delivered">

                              Delivered

                            </option>

                          </select>

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