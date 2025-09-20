// src/pages/Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaChartPie, FaUsers, FaCog } from "react-icons/fa";

function Dashboard() {
  const stats = [
    { title: "Users", value: "1,250", icon: <FaUsers /> },
    { title: "Sales", value: "$45K", icon: <FaChartPie /> },
    { title: "Projects", value: "28", icon: <FaHome /> },
    { title: "Settings", value: "Active", icon: <FaCog /> },
  ];

  return (
    <div id="dashboard" className="min-h-screen flex bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black/40 backdrop-blur-md p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <ul className="space-y-6 text-lg">
          <li className="hover:text-yellow-300 cursor-pointer flex items-center gap-2">
            <FaHome /> Home
          </li>
          <li className="hover:text-yellow-300 cursor-pointer flex items-center gap-2">
            <FaChartPie /> Analytics
          </li>
          <li className="hover:text-yellow-300 cursor-pointer flex items-center gap-2">
            <FaUsers /> Users
          </li>
          <li className="hover:text-yellow-300 cursor-pointer flex items-center gap-2">
            <FaCog /> Settings
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-extrabold mb-8">Welcome Back, Vishu 🚀</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center cursor-pointer"
              whileHover={{
                rotateY: 10,
                rotateX: 10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="text-4xl mb-4 text-indigo-600">{stat.icon}</div>
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 overflow-x-auto">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">Name</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-3">John Doe</td>
                <td className="p-3">Developer</td>
                <td className="p-3 text-green-600 font-semibold">Active</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3">Jane Smith</td>
                <td className="p-3">Designer</td>
                <td className="p-3 text-yellow-600 font-semibold">Pending</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3">Michael Lee</td>
                <td className="p-3">Manager</td>
                <td className="p-3 text-red-600 font-semibold">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
