// "use client";

// import { useState } from "react";

// import Link from "next/link";

// import { useRouter } from "next/navigation";

// import toast from "react-hot-toast";

// import API from "@/services/api";

// import { useAuth } from "@/context/AuthContext";


// export default function LoginPage() {

//   const router = useRouter();

//   const { login } =
//     useAuth();


//   const [formData, setFormData] =
//     useState({
//       email: "",
//       password: "",
//     });

//   const [loading, setLoading] =
//     useState(false);


//   // HANDLE CHANGE
//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value,
//     });

//   };


//   // HANDLE LOGIN
//   const handleSubmit = async (
//     e
//   ) => {

//     e.preventDefault();

//     setLoading(true);

//     try {

//       const res =
//         await API.post(
//           "/auth/login",
//           formData
//         );


//       // SAVE USER
//       login(
//         res.data.user,
//         res.data.token
//       );


//       toast.success(
//         "Login Successful"
//       );


//       // ADMIN
//       if (
//         res.data.user.role ===
//         "admin"
//       ) {

//         router.push(
//           "/admin"
//         );

//       }

//       // USER
//       else {

//         router.push("/");

//       }

//     } catch (error) {

//       console.log(error);

//       toast.error(
//         error.response?.data
//           ?.message ||
//           "Login Failed"
//       );

//     } finally {

//       setLoading(false);

//     }
//   };


//   return (

//     <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5">

//       <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

//         {/* TOP */}
//         <div className="text-center mb-8">

//           <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">

//             Welcome Back

//           </h1>

//           <p className="text-gray-500 mt-3">

//             Login to continue

//           </p>

//         </div>


//         {/* FORM */}
//         <form
//           onSubmit={
//             handleSubmit
//           }
//           className="space-y-6"
//         >

//           {/* EMAIL */}
//           <div>

//             <label className="block mb-2 font-semibold text-gray-700">

//               Email

//             </label>

//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={
//                 formData.email
//               }
//               onChange={
//                 handleChange
//               }
//               required
//               className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
//             />

//           </div>


//           {/* PASSWORD */}
//           <div>

//             <label className="block mb-2 font-semibold text-gray-700">

//               Password

//             </label>

//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={
//                 formData.password
//               }
//               onChange={
//                 handleChange
//               }
//               required
//               className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
//             />

//           </div>


//           {/* BUTTON */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
//           >

//             {loading
//               ? "Please Wait..."
//               : "Login"}

//           </button>

//         </form>


//         {/* REGISTER */}
//         <div className="text-center mt-8">

//           <p className="text-gray-600">

//             Don&apos;t have an
//             account?

//             <Link
//               href="/register"
//               className="text-red-500 font-bold ml-2 hover:underline"
//             >

//               Register

//             </Link>

//           </p>

//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import { useState }
from "react";

import Link
from "next/link";

import { useRouter }
from "next/navigation";

import toast
from "react-hot-toast";

import API
from "@/services/api";

import { useAuth }
from "@/context/AuthContext";


export default function LoginPage() {

  const router =
    useRouter();

  const { login } =
    useAuth();


  const [
    formData,
    setFormData,
  ] = useState({

    email: "",

    password: "",

  });

  const [
    loading,
    setLoading,
  ] = useState(false);


  // HANDLE CHANGE
  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,

      });

    };


  // HANDLE LOGIN
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      try {

        const res =
          await API.post(

            "/auth/login",

            formData

          );


        // SAVE USER
        login(

          res.data.user,

          res.data.token

        );


        toast.success(
          "Login Successful 🚀"
        );


        // ADMIN
        if (
          res.data.user.role ===
          "admin"
        ) {

          router.push(
            "/admin"
          );

        }

        // USER
        else {

          router.push("/");

        }

      } catch (error) {

        console.log(error);

        toast.error(

          error.response?.data
            ?.message ||

          "Login Failed"

        );

      } finally {

        setLoading(false);

      }
    };


  return (

    <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* TOP */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">

            Welcome Back

          </h1>

          <p className="text-gray-500 mt-3">

            Login to continue

          </p>

        </div>


        {/* FORM */}
        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >

          {/* EMAIL */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">

              Email

            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
            />

          </div>


          {/* PASSWORD */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">

              Password

            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              required
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-gray-800 placeholder:text-gray-400 bg-white"
            />

          </div>


          {/* FORGOT PASSWORD */}
          <div className="text-right">

            <Link
              href="/forgot-password"
              className="text-red-500 font-semibold hover:underline"
            >

              Forgot Password?

            </Link>

          </div>


          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
          >

            {
              loading

                ? "Please Wait..."

                : "Login"
            }

          </button>

        </form>


        {/* REGISTER */}
        <div className="text-center mt-8">

          <p className="text-gray-600">

            Don&apos;t have an
            account?

            <Link
              href="/register"
              className="text-red-500 font-bold ml-2 hover:underline"
            >

              Register

            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}