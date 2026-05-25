// "use client";

// import { useEffect, useState } from "react";

// import API from "@/services/api";


// export default function MyOrdersPage() {

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

//       const res = await API.get(
//         "/order"
//       );

//       setOrders(res.data);

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }
//   };


//   return (

//     <section className="min-h-screen py-16 bg-orange-50">

//       <div className="max-w-7xl mx-auto px-5">

//         {/* HEADING */}
//         <div className="mb-12">

//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">

//             My Orders

//           </h1>

//           <p className="text-gray-500 mt-3">

//             Track your recent food orders

//           </p>

//         </div>


//         {/* LOADING */}
//         {loading ? (

//           <div className="text-center text-2xl font-bold text-red-500">

//             Loading...

//           </div>

//         ) : orders.length === 0 ? (

//           <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

//             <h2 className="text-3xl font-bold text-gray-700">

//               No Orders Found

//             </h2>

//           </div>

//         ) : (

//           <div className="space-y-8">

//             {orders.map((order) => (

//               <div
//                 key={order._id}
//                 className="bg-white rounded-3xl shadow-lg p-8"
//               >

//                 {/* TOP */}
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b pb-6">

//                   <div>

//                     <h2 className="text-2xl font-bold text-gray-800">

//                       Order ID:
//                       <span className="text-red-500 ml-2">

//                         {order._id.slice(-6)}

//                       </span>

//                     </h2>

//                     <p className="text-gray-500 mt-2">

//                       Payment:
//                       <span className="font-semibold ml-2">

//                         {order.paymentMethod}

//                       </span>

//                     </p>

//                   </div>


//                   {/* STATUS */}
//                   <div>

//                     <span className="bg-orange-100 text-red-500 px-5 py-2 rounded-full font-bold">

//                       {order.status}

//                     </span>

//                   </div>

//                 </div>


//                 {/* ITEMS */}
//                 <div className="mt-8 space-y-5">

//                   {order.items.map(
//                     (item, index) => (

//                       <div
//                         key={index}
//                         className="flex flex-col md:flex-row md:items-center gap-5 border rounded-2xl p-5"
//                       >

//                         {/* IMAGE */}
//                         <img
//                           src={`http://localhost:5000/uploads/${item.foodId.image}`}
//                           alt={
//                             item.foodId.name
//                           }
//                           className="w-full md:w-32 h-32 object-cover rounded-2xl"
//                         />


//                         {/* CONTENT */}
//                         <div className="flex-1">

//                           <h3 className="text-2xl font-bold text-gray-800">

//                             {item.foodId.name}

//                           </h3>

//                           <p className="text-gray-500 mt-2">

//                             {item.foodId.category}

//                           </p>

//                           <p className="text-red-500 text-xl font-bold mt-3">

//                             ₹{item.foodId.price}

//                           </p>

//                         </div>


//                         {/* QTY */}
//                         <div>

//                           <span className="bg-orange-100 text-red-500 px-5 py-2 rounded-full font-bold">

//                             Qty:
//                             {item.quantity}

//                           </span>

//                         </div>

//                       </div>

//                     )
//                   )}

//                 </div>


//                 {/* BOTTOM */}
//                 <div className="mt-8 border-t pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//                   <div>

//                     <p className="text-gray-500">

//                       Delivery Address
//                     </p>

//                     <h3 className="text-lg font-semibold text-gray-800 mt-2">

//                       {order.address}

//                     </h3>

//                   </div>


//                   <div className="text-3xl font-extrabold text-red-500">

//                     ₹{order.totalPrice}

//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>

//         )}

//       </div>

//     </section>
//   );
// }










// "use client";

// import { useEffect, useState }
// from "react";

// import API
// from "@/services/api";

// import {
//   CheckCircle,
//   ChefHat,
//   Bike,
//   PackageCheck,
// } from "lucide-react";


// export default function MyOrdersPage() {

//   const [orders, setOrders] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);


//   // FETCH ORDERS
//   useEffect(() => {

//     fetchOrders();

//     const interval =
//       setInterval(
//         fetchOrders,
//         5000
//       );

//     return () =>
//       clearInterval(
//         interval
//       );

//   }, []);


//   const fetchOrders =
//     async () => {

//       try {

//         const res =
//           await API.get(
//             "/order"
//           );

//         setOrders(
//           res.data
//         );

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }
//     };


//   // TRACKING STEPS
//   const getStep =
//     (status) => {

//       switch (status) {

//         case "Pending":
//           return 1;

//         case "Preparing":
//           return 2;

//         case "Out For Delivery":
//           return 3;

//         case "Delivered":
//           return 4;

//         default:
//           return 1;

//       }
//     };


//   return (

//     <section className="min-h-screen py-16 bg-orange-50">

//       <div className="max-w-7xl mx-auto px-5">

//         {/* HEADING */}
//         <div className="mb-12">

//           <h1 className="text-5xl font-extrabold text-gray-800">

//             My Orders

//           </h1>

//           <p className="text-gray-500 mt-3 text-lg">

//             Track your live food orders 🚀

//           </p>

//         </div>


//         {/* LOADING */}
//         {loading ? (

//           <div className="text-center text-2xl font-bold text-red-500">

//             Loading...

//           </div>

//         ) : orders.length === 0 ? (

//           <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

//             <h2 className="text-3xl font-bold text-gray-700">

//               No Orders Found

//             </h2>

//           </div>

//         ) : (

//           <div className="space-y-10">

//             {orders.map(
//               (order) => {

//                 const currentStep =
//                   getStep(
//                     order.status
//                   );

//                 return (

//                   <div
//                     key={order._id}
//                     className="bg-white rounded-3xl shadow-lg p-8"
//                   >

//                     {/* TOP */}
//                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b pb-6">

//                       <div>

//                         <h2 className="text-2xl font-bold text-gray-800">

//                           Order ID:

//                           <span className="text-red-500 ml-2">

//                             {
//                               order._id.slice(
//                                 -6
//                               )
//                             }

//                           </span>

//                         </h2>

//                         <p className="text-gray-500 mt-2">

//                           Payment:

//                           <span className="font-semibold ml-2 text-gray-700">

//                             {
//                               order.paymentMethod
//                             }

//                           </span>

//                         </p>

//                       </div>


//                       {/* STATUS */}
//                       <span className="bg-orange-100 text-red-500 px-5 py-3 rounded-full font-bold text-lg w-fit">

//                         {
//                           order.status
//                         }

//                       </span>

//                     </div>


//                     {/* LIVE TRACKING */}
//                     <div className="mt-10">

//                       <h3 className="text-2xl font-bold text-gray-800 mb-8">

//                         Live Tracking

//                       </h3>


//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//                         {/* STEP 1 */}
//                         <div className="flex flex-col items-center text-center">

//                           <div
//                             className={`w-16 h-16 rounded-full flex items-center justify-center ${
//                               currentStep >= 1
//                                 ? "bg-red-500 text-white"
//                                 : "bg-gray-200 text-gray-500"
//                             }`}
//                           >

//                             <CheckCircle
//                               size={30}
//                             />

//                           </div>

//                           <h4 className="font-bold text-gray-800 mt-4">

//                             Pending

//                           </h4>

//                         </div>


//                         {/* STEP 2 */}
//                         <div className="flex flex-col items-center text-center">

//                           <div
//                             className={`w-16 h-16 rounded-full flex items-center justify-center ${
//                               currentStep >= 2
//                                 ? "bg-red-500 text-white"
//                                 : "bg-gray-200 text-gray-500"
//                             }`}
//                           >

//                             <ChefHat
//                               size={30}
//                             />

//                           </div>

//                           <h4 className="font-bold text-gray-800 mt-4">

//                             Preparing

//                           </h4>

//                         </div>


//                         {/* STEP 3 */}
//                         <div className="flex flex-col items-center text-center">

//                           <div
//                             className={`w-16 h-16 rounded-full flex items-center justify-center ${
//                               currentStep >= 3
//                                 ? "bg-red-500 text-white"
//                                 : "bg-gray-200 text-gray-500"
//                             }`}
//                           >

//                             <Bike
//                               size={30}
//                             />

//                           </div>

//                           <h4 className="font-bold text-gray-800 mt-4">

//                             Delivery

//                           </h4>

//                         </div>


//                         {/* STEP 4 */}
//                         <div className="flex flex-col items-center text-center">

//                           <div
//                             className={`w-16 h-16 rounded-full flex items-center justify-center ${
//                               currentStep >= 4
//                                 ? "bg-green-500 text-white"
//                                 : "bg-gray-200 text-gray-500"
//                             }`}
//                           >

//                             <PackageCheck
//                               size={30}
//                             />

//                           </div>

//                           <h4 className="font-bold text-gray-800 mt-4">

//                             Delivered

//                           </h4>

//                         </div>

//                       </div>

//                     </div>


//                     {/* ITEMS */}
//                     <div className="mt-10 space-y-5">

//                       {order.items.map(
//                         (item, index) => (

//                           <div
//                             key={index}
//                             className="flex flex-col md:flex-row md:items-center gap-5 border rounded-2xl p-5"
//                           >

//                             {/* IMAGE */}
//                             <img
//                               src={`http://localhost:5000/uploads/${item.foodId.image}`}
//                               alt={
//                                 item.foodId.name
//                               }
//                               className="w-full md:w-32 h-32 object-cover rounded-2xl"
//                             />


//                             {/* CONTENT */}
//                             <div className="flex-1">

//                               <h3 className="text-2xl font-bold text-gray-800">

//                                 {
//                                   item.foodId.name
//                                 }

//                               </h3>

//                               <p className="text-gray-500 mt-2">

//                                 {
//                                   item.foodId.category
//                                 }

//                               </p>

//                               <p className="text-red-500 text-xl font-bold mt-3">

//                                 ₹
//                                 {
//                                   item.foodId.price
//                                 }

//                               </p>

//                             </div>


//                             {/* QTY */}
//                             <div>

//                               <span className="bg-orange-100 text-red-500 px-5 py-2 rounded-full font-bold">

//                                 Qty:
//                                 {
//                                   item.quantity
//                                 }

//                               </span>

//                             </div>

//                           </div>

//                         )
//                       )}

//                     </div>


//                     {/* BOTTOM */}
//                     <div className="mt-8 border-t pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//                       <div>

//                         <p className="text-gray-500">

//                           Delivery Address

//                         </p>

//                         <h3 className="text-lg font-semibold text-gray-800 mt-2">

//                           {
//                             order.address
//                           }

//                         </h3>

//                       </div>


//                       <div className="text-3xl font-extrabold text-red-500">

//                         ₹
//                         {
//                           order.totalPrice
//                         }

//                       </div>

//                     </div>

//                   </div>

//                 );
//               }
//             )}

//           </div>

//         )}

//       </div>

//     </section>
//   );
// }


"use client";

import { useEffect, useState }
from "react";

import dynamic
from "next/dynamic";

import API
from "@/services/api";

import {
  CheckCircle,
  ChefHat,
  Bike,
  PackageCheck,
} from "lucide-react";


// LIVE MAP
const LiveTrackingMap =
  dynamic(

    () =>
      import(
        "@/components/LiveTrackingMap"
      ),

    {
      ssr: false,
    }

  );


export default function MyOrdersPage() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // FETCH ORDERS
  useEffect(() => {

    fetchOrders();

    const interval =
      setInterval(
        fetchOrders,
        5000
      );

    return () =>
      clearInterval(
        interval
      );

  }, []);


  const fetchOrders =
    async () => {

      try {

        const res =
          await API.get(
            "/order"
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


  // TRACKING STEPS
  const getStep =
    (status) => {

      switch (status) {

        case "Pending":
          return 1;

        case "Preparing":
          return 2;

        case "Out For Delivery":
          return 3;

        case "Delivered":
          return 4;

        default:
          return 1;

      }
    };


  return (

    <section className="min-h-screen py-16 bg-orange-50">

      <div className="max-w-7xl mx-auto px-5">

        {/* HEADING */}
        <div className="mb-12">

          <h1 className="text-5xl font-extrabold text-gray-800">

            My Orders

          </h1>

          <p className="text-gray-500 mt-3 text-lg">

            Track your live food orders 🚀

          </p>

        </div>


        {/* LOADING */}
        {loading ? (

          <div className="text-center text-2xl font-bold text-red-500">

            Loading...

          </div>

        ) : orders.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

            <h2 className="text-3xl font-bold text-gray-700">

              No Orders Found

            </h2>

          </div>

        ) : (

          <div className="space-y-10">

            {orders.map(
              (order) => {

                const currentStep =
                  getStep(
                    order.status
                  );

                return (

                  <div
                    key={order._id}
                    className="bg-white rounded-3xl shadow-lg p-8"
                  >

                    {/* TOP */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b pb-6">

                      <div>

                        <h2 className="text-2xl font-bold text-gray-800">

                          Order ID:

                          <span className="text-red-500 ml-2">

                            {
                              order._id.slice(
                                -6
                              )
                            }

                          </span>

                        </h2>

                        <p className="text-gray-500 mt-2">

                          Payment:

                          <span className="font-semibold ml-2 text-gray-700">

                            {
                              order.paymentMethod
                            }

                          </span>

                        </p>

                      </div>


                      {/* STATUS */}
                      <span className="bg-orange-100 text-red-500 px-5 py-3 rounded-full font-bold text-lg w-fit">

                        {
                          order.status
                        }

                      </span>

                    </div>


                    {/* LIVE TRACKING */}
                    <div className="mt-10">

                      <h3 className="text-2xl font-bold text-gray-800 mb-8">

                        Live Tracking

                      </h3>


                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        {/* STEP 1 */}
                        <div className="flex flex-col items-center text-center">

                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center ${
                              currentStep >= 1
                                ? "bg-red-500 text-white"
                                : "bg-gray-200 text-gray-500"
                            }`}
                          >

                            <CheckCircle
                              size={30}
                            />

                          </div>

                          <h4 className="font-bold text-gray-800 mt-4">

                            Pending

                          </h4>

                        </div>


                        {/* STEP 2 */}
                        <div className="flex flex-col items-center text-center">

                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center ${
                              currentStep >= 2
                                ? "bg-red-500 text-white"
                                : "bg-gray-200 text-gray-500"
                            }`}
                          >

                            <ChefHat
                              size={30}
                            />

                          </div>

                          <h4 className="font-bold text-gray-800 mt-4">

                            Preparing

                          </h4>

                        </div>


                        {/* STEP 3 */}
                        <div className="flex flex-col items-center text-center">

                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center ${
                              currentStep >= 3
                                ? "bg-red-500 text-white"
                                : "bg-gray-200 text-gray-500"
                            }`}
                          >

                            <Bike
                              size={30}
                            />

                          </div>

                          <h4 className="font-bold text-gray-800 mt-4">

                            Delivery

                          </h4>

                        </div>


                        {/* STEP 4 */}
                        <div className="flex flex-col items-center text-center">

                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center ${
                              currentStep >= 4
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 text-gray-500"
                            }`}
                          >

                            <PackageCheck
                              size={30}
                            />

                          </div>

                          <h4 className="font-bold text-gray-800 mt-4">

                            Delivered

                          </h4>

                        </div>

                      </div>

                    </div>


                    {/* LIVE MAP */}
                    {
                      order.status !==
                        "Delivered" && (

                        <LiveTrackingMap />

                      )
                    }


                    {/* ITEMS */}
                    <div className="mt-10 space-y-5">

                      {order.items.map(
                        (item, index) => (

                          <div
                            key={index}
                            className="flex flex-col md:flex-row md:items-center gap-5 border rounded-2xl p-5"
                          >

                            {/* IMAGE */}
                            <img
                              src={`http://localhost:5000/uploads/${item.foodId.image}`}
                              alt={
                                item.foodId.name
                              }
                              className="w-full md:w-32 h-32 object-cover rounded-2xl"
                            />


                            {/* CONTENT */}
                            <div className="flex-1">

                              <h3 className="text-2xl font-bold text-gray-800">

                                {
                                  item.foodId.name
                                }

                              </h3>

                              <p className="text-gray-500 mt-2">

                                {
                                  item.foodId.category
                                }

                              </p>

                              <p className="text-red-500 text-xl font-bold mt-3">

                                ₹
                                {
                                  item.foodId.price
                                }

                              </p>

                            </div>


                            {/* QTY */}
                            <div>

                              <span className="bg-orange-100 text-red-500 px-5 py-2 rounded-full font-bold">

                                Qty:
                                {
                                  item.quantity
                                }

                              </span>

                            </div>

                          </div>

                        )
                      )}

                    </div>


                    {/* BOTTOM */}
                    <div className="mt-8 border-t pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                      <div>

                        <p className="text-gray-500">

                          Delivery Address

                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mt-2">

                          {
                            order.address
                          }

                        </h3>

                      </div>


                      <div className="text-3xl font-extrabold text-red-500">

                        ₹
                        {
                          order.totalPrice
                        }

                      </div>

                    </div>

                  </div>

                );
              }
            )}

          </div>

        )}

      </div>

    </section>
  );
}