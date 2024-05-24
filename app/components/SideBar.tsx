"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen overflow-y-auto bg-[#121417] text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Jambo Events</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/" className="hover:text-yellow-500">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/events" className="hover:text-yellow-500">
              Events
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/vendors" className="hover:text-yellow-500">
              Vendors
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/export" className="hover:text-yellow-500">
              Export
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/audiences" className="hover:text-yellow-500">
              Audiences
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
