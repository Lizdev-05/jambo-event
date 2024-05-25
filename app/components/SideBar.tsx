"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-[#121417] text-white p-4 flex flex-col fixed h-screen w-64">
      <h1 className="text-2xl font-bold mb-6">Jambo Events</h1>
      <nav className="flex flex-col flex-grow">
        <ul className="flex flex-col flex-grow">
          <li className="mb-4">
            <Link
              href="/"
              className="hover:text-yellow-500 flex gap-2 items-center"
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
            >
              <Image src="/event-icon.svg" alt="Event" width={18} height={18} />
              Events
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/vendors"
              className="hover:text-yellow-500 flex gap-2 items-center"
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
            >
              <Image src="/help-icon.svg" alt="Help" width={18} height={18} />
              Help & Docs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
