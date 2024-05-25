"use client";

import { useState } from "react";
import Sidebar from "../components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
    </main>
  );
}
