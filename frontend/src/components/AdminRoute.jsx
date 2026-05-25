"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";


export default function AdminRoute({
  children,
}) {

  const router = useRouter();

  const { user } =
    useAuth();


  useEffect(() => {

    if (
      !user ||
      user.role !== "admin"
    ) {

      router.push("/");

    }

  }, [user]);


  // LOADING
  if (
    !user ||
    user.role !== "admin"
  ) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-red-500">

        Checking Access...

      </div>

    );
  }


  return children;
}