import "../../globals.css";

import AdminSidebar from "../components/AdminSidebar";

import AdminHeader from "../components/AdminHeader";


export default function AdminLayout({
  children,
}) {

  return (

    <div className="flex min-h-screen bg-orange-50">

      {/* SIDEBAR */}
      <AdminSidebar />


      {/* MAIN */}
      <main className="flex-1 p-6">

        {/* HEADER */}
        <AdminHeader />


        {/* PAGE */}
        <div className="mt-8">

          {children}

        </div>

      </main>

    </div>
  );
}