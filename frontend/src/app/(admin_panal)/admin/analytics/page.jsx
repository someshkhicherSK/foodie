"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

import {
  TrendingUp,
  ShoppingBag,
  IndianRupee,
  Users,
} from "lucide-react";


const revenueData = [

  {
    month: "Jan",
    revenue: 12000,
  },

  {
    month: "Feb",
    revenue: 18000,
  },

  {
    month: "Mar",
    revenue: 25000,
  },

  {
    month: "Apr",
    revenue: 22000,
  },

  {
    month: "May",
    revenue: 31000,
  },

  {
    month: "Jun",
    revenue: 42000,
  },

];


const ordersData = [

  {
    name: "Delivered",
    value: 65,
  },

  {
    name: "Pending",
    value: 20,
  },

  {
    name: "Cancelled",
    value: 15,
  },

];


const growthData = [

  {
    month: "Jan",
    users: 120,
  },

  {
    month: "Feb",
    users: 200,
  },

  {
    month: "Mar",
    users: 280,
  },

  {
    month: "Apr",
    users: 390,
  },

  {
    month: "May",
    users: 480,
  },

  {
    month: "Jun",
    users: 650,
  },

];


const COLORS = [
  "#ef4444",
  "#f97316",
  "#facc15",
];


export default function AnalyticsPage() {

  return (

    <section>

      {/* TOP */}
      <div className="mb-10">

        <h1 className="text-4xl font-extrabold text-gray-800">

          Analytics Dashboard

        </h1>

        <p className="text-gray-500 mt-3">

          Track your business performance

        </p>

      </div>


      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

        {/* REVENUE */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">

                Total Revenue

              </p>

              <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

                ₹1.2L

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


        {/* ORDERS */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">

                Total Orders

              </p>

              <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

                1,245

              </h2>

            </div>

            <div className="bg-orange-100 p-5 rounded-2xl">

              <ShoppingBag
                size={40}
                className="text-red-500"
              />

            </div>

          </div>

        </div>


        {/* USERS */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">

                Active Users

              </p>

              <h2 className="text-4xl font-extrabold text-gray-800 mt-3">

                850

              </h2>

            </div>

            <div className="bg-orange-100 p-5 rounded-2xl">

              <Users
                size={40}
                className="text-red-500"
              />

            </div>

          </div>

        </div>


        {/* GROWTH */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">

                Growth Rate

              </p>

              <h2 className="text-4xl font-extrabold text-green-500 mt-3">

                +24%

              </h2>

            </div>

            <div className="bg-green-100 p-5 rounded-2xl">

              <TrendingUp
                size={40}
                className="text-green-500"
              />

            </div>

          </div>

        </div>

      </div>


      {/* CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* REVENUE CHART */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-8">

            Revenue Analytics

          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={revenueData}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="month"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="revenue"
                  fill="#ef4444"
                  radius={[
                    10,
                    10,
                    0,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* ORDER STATUS */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-8">

            Orders Overview

          </h2>

          <div className="h-[350px] flex items-center justify-center">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={ordersData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label
                >

                  {ordersData.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell
                        key={`cell-${index}`}
                        fill={
                          COLORS[
                            index
                          ]
                        }
                      />

                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* GROWTH CHART */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

        <h2 className="text-2xl font-bold text-gray-800 mb-8">

          User Growth

        </h2>

        <div className="h-[350px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={growthData}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="month"
              />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="users"
                stroke="#f97316"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>
  );
}