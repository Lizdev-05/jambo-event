"use client";

import Image from "next/image";
import BarChart from "./components/BarChart";
import Card from "./components/Card";
import LineChart from "./components/LineChart";
import Sidebar from "./components/SideBar";
import { ChartOptions } from "chart.js";

const Home = () => {
  const lineData = {
    labels: ["3/1", "3/2", "3/3", "3/4", "3/5"],
    datasets: [
      {
        label: "Registrants over time",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "#FFCE31",
        borderColor: "#FFCE31",
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["3/1", "3/2", "3/3", "3/4", "3/5"],
    datasets: [
      {
        label: "Tickets sold",
        data: [50, 100, 75, 150, 200],
        backgroundColor: "#FFCE31",
        borderColor: "#FFCE31",
        borderWidth: 1,
      },
    ],
  };

  const lineOptions = {
    scales: {
      y: {
        display: false,
      },
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const barOptions: ChartOptions<"bar"> = {
    indexAxis: "y",
    scales: {
      y: {
        ticks: {
          display: true,
        },
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="flex bg-[#121417]">
      <Sidebar />
      <div className="flex-1 p-6 bg-[#121417] text-white ml-64">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Jambo Data</h1>
          <span className="text-[#9EABB8] py-4">Real-time</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card title="Total revenue" value="$1,000,000" />
          <Card title="Tickets sold" value="400k" />
          <Card title="Registrants" value="30" />
          <Card title="Attendees" value="300k" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
            <div className="mb-8 p-2">
              <h3 className="text-lg font-medium">Registrants over time</h3>
              <h2 className="text-lg font-medium">30</h2>
              <span>24 hours</span>
            </div>
            <LineChart data={lineData} options={lineOptions} />
          </div>
          <div className="bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
            <div className="mb-8 p-2">
              <h3 className="text-lg font-medium">Check-ins over time</h3>
              <h2 className="text-lg font-medium">20</h2>
              <span>24 hours</span>
            </div>
            <LineChart data={lineData} options={lineOptions} />
          </div>
          <div className="bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
            <div className="mb-8 p-2">
              <h3 className="text-lg font-medium">Revenue over time</h3>
              <h2 className="text-lg font-medium">$12,500</h2>
              <span>24 hours</span>
            </div>
            <LineChart data={lineData} options={lineOptions} />
          </div>
          <div className="bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
            <div className="mb-8 p-2">
              <h3 className="text-lg font-medium">Tickets sold</h3>
              <h2 className="text-lg font-medium">400k</h2>
              <span>24 hours</span>
            </div>
            <BarChart data={barData} options={barOptions} />
          </div>
        </div>
        <div className="mt-6 bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Recent activity</h3>
          <ul>
            <li className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image src="/jane.svg" alt="Jane" width={34} height={34} />
                <div>
                  <h2>Jane Smith</h2>
                  <span className="text-[#9EABB8] text-sm">
                    Purchased Tickets
                  </span>
                </div>
              </div>
              <span>$500</span>
            </li>
            <li className="flex justify-between mt-2">
              <div className="flex items-center gap-2">
                <Image src="/doe.svg" alt="Jane" width={34} height={34} />
                <div>
                  <div>
                    <h2 className="">John Doe</h2>
                    <span className="text-[#9EABB8] text-sm">Registered</span>
                  </div>
                </div>
              </div>
              <span>Free</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
