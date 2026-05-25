import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/AuthContext";

import { CartProvider } from "@/context/CartContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Foodie",
  description: "Food Delivery App",
};


export default function RootLayout({
  children,
}) {

  return (

    <html lang="en">

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-orange-50
          text-gray-800
          antialiased
        `}
      >

        {/* AUTH PROVIDER */}
        <AuthProvider>

          {/* CART PROVIDER */}
          <CartProvider>

            {/* APP */}
            {children}

            {/* TOAST */}
            <Toaster
              position="top-right"
            />

          </CartProvider>

        </AuthProvider>

      </body>

    </html>

  );
}