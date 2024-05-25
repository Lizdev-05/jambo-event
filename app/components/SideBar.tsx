"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 blur-sm md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`fixed inset-0 bg-[#121417] text-white p-4 flex flex-col transition-transform transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 md:w-64`}
      >
        <button
          className={`md:hidden absolute top-4 right-4 text-2xl ${
            isOpen ? "" : "hidden"
          }`}
          onClick={toggleSidebar}
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold mb-6 ">Jambo Events</h1>
        <nav className="flex flex-col flex-grow">
          <ul className="flex flex-col flex-grow">
            <li className="mb-4">
              <Link
                href="/"
                className="hover:text-yellow-500 flex gap-2 items-center"
                onClick={toggleSidebar}
              >
                <Image
                  src="/dash-icon.svg"
                  alt="Dashboard"
                  width={18}
                  height={18}
                />
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/events"
                className="hover:text-yellow-500 flex gap-2 items-center"
                onClick={toggleSidebar}
              >
                <Image
                  src="/event-icon.svg"
                  alt="Event"
                  width={18}
                  height={18}
                />
                Events
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/vendors"
                className="hover:text-yellow-500 flex gap-2 items-center"
                onClick={toggleSidebar}
              >
                <Image
                  src="/vendor-icon.svg"
                  alt="Vendor"
                  width={18}
                  height={18}
                />
                Vendors
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/export"
                className="hover:text-yellow-500 flex gap-2 items-center"
                onClick={toggleSidebar}
              >
                <Image
                  src="/export-icon.svg"
                  alt="Export"
                  width={18}
                  height={18}
                />
                Export
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/audiences"
                className="hover:text-yellow-500 flex gap-2 items-center"
                onClick={toggleSidebar}
              >
                <Image
                  src="/audience-icon.png"
                  alt="Audience"
                  width={18}
                  height={18}
                />
                Audiences
              </Link>
            </li>
          </ul>
          <ul className="mt-auto">
            <li className="mb-4">
              <Link
                href="/feedback"
                className="hover:text-yellow-500 flex gap-2 items-center"
                onClick={toggleSidebar}
              >
                <Image
                  src="/feed-icon.svg"
                  alt="Feedback"
                  width={18}
                  height={18}
                />
                Feedbacks
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/Help & Docs"
                className="hover:text-yellow-500 flex gap-2 items-center"
                onClick={toggleSidebar}
              >
                <Image src="/help-icon.svg" alt="Help" width={18} height={18} />
                Help & Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
