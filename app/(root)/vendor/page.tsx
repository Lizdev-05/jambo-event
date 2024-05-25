"use client";
import { useState } from "react";

import PerformanceBar from "@/app/components/PerformanceBar";
import Sidebar from "@/app/components/SideBar";

type Vendor = {
  name: string;
  email: string;
  phone: string;
  lastEvent: string;
  performance: number;
  status: "approved" | "pending";
};

const vendorsData: Vendor[] = [
  {
    name: "Foodie",
    email: "foodie@food.com",
    phone: "415-123-4567",
    lastEvent: "May 15, 2023",
    performance: 90,
    status: "approved",
  },
  {
    name: "Floral Co.",
    email: "floral@floral.com",
    phone: "415-987-6543",
    lastEvent: "May 15, 2023",
    performance: 85,
    status: "approved",
  },
  {
    name: "AV Experts",
    email: "av@av.com",
    phone: "415-246-1357",
    lastEvent: "May 15, 2023",
    performance: 92,
    status: "approved",
  },
  {
    name: "Photography Pros",
    email: "photo@photo.com",
    phone: "415-369-2581",
    lastEvent: "May 15, 2023",
    performance: 88,
    status: "pending",
  },
  {
    name: "Entertainment Co.",
    email: "entertainment@entertainment.com",
    phone: "415-582-7936",
    lastEvent: "May 15, 2023",
    performance: 86,
    status: "pending",
  },
];

const VendorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const filteredVendors = vendorsData.filter((vendor) => {
    if (selectedTab === "approved") return vendor.status === "approved";
    if (selectedTab === "pending") return vendor.status === "pending";
    return vendor.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="relative flex min-h-screen bg-[#121417] text-white">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 p-6 bg-[#121417] text-white transition-all ${
          sidebarOpen ? "md:blur-none blur-md" : "blur-none"
        } md:ml-64`}
      >
        <button
          className="md:hidden fixed top-4 left-4 z-50 text-2xl"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Vendors</h1>
          <p className="mb-4">
            Manage all your vendors and keep track of their performance.
          </p>
          <input
            type="text"
            placeholder="Search vendors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mb-6 bg-gray-800 rounded"
          />
          <div className="mb-6 border-b border-gray-700">
            <div className="flex space-x-4">
              <p
                className={`py-2 cursor-pointer ${
                  selectedTab === "all"
                    ? "border-b-2 border-[#FFCE31]"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("all")}
              >
                All Vendors
              </p>
              <p
                className={`py-2 cursor-pointer ${
                  selectedTab === "approved"
                    ? "border-b-2 border-[#FFCE31]"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("approved")}
              >
                Approved
              </p>
              <p
                className={`py-2 cursor-pointer ${
                  selectedTab === "pending"
                    ? "border-b-2 border-[#FFCE31]"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("pending")}
              >
                Pending
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg">
              <thead>
                <tr className="w-full bg-gray-700 text-left">
                  <th className="py-3 px-4">Vendor</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Phone</th>
                  <th className="py-3 px-4">Last Event</th>
                  <th className="py-3 px-4">Performance</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredVendors.map((vendor, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3 px-4">{vendor.name}</td>
                    <td className="py-3 px-4">{vendor.email}</td>
                    <td className="py-3 px-4">{vendor.phone}</td>
                    <td className="py-3 px-4">{vendor.lastEvent}</td>
                    <td className="py-3 px-4 flex items-center space-x-2">
                      <PerformanceBar performance={vendor.performance} />
                      <span>{vendor.performance}</span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredVendors.length === 0 && (
              <p className="mt-4 text-gray-400">No vendors found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;
