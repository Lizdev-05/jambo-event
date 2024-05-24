"use client";

import BarChart from "./components/BarChart";
import Card from "./components/Card";
import LineChart from "./components/LineChart";
import Sidebar from "./components/SideBar";

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

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="flex bg-[#121417] ">
      <Sidebar />
      <div className="flex-1 p-6 bg-[#121417] text-white">
        <div className="mb-6">
          <h1 className="text-3xl font-bold ">Jambo Data</h1>
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
            <h3 className="text-lg font-medium mb-4">Registrants over time</h3>
            <h2 text-lg font-medium mb-4>
              30
            </h2>
            <span>24 hours</span>
            <LineChart data={lineData} options={options} />
          </div>
          <div className="bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Check-ins over time</h3>
            <h2 text-lg font-medium mb-4>
              20
            </h2>
            <span>24 hours</span>
            <LineChart data={lineData} options={options} />
          </div>
          <div className="bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Revenue over time</h3>
            <h2 text-lg font-medium mb-4>
              $12,500
            </h2>
            <span>24 hours</span>
            <LineChart data={lineData} options={options} />
          </div>
          <div className="bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Tickets sold</h3>
            <h2 text-lg font-medium mb-4>
              400k
            </h2>
            <span>24 hours</span>
            <BarChart data={barData} options={options} />
          </div>
        </div>
        <div className="mt-6 bg-[#121417] border border-[#3D4754] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Recent activity</h3>
          <ul>
            <li className="flex justify-between">
              <span>Jane Smith</span>
              <span>$500</span>
            </li>
            <li className="flex justify-between mt-2">
              <span>John Doe</span>
              <span>Free</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
