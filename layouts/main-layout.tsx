import Header from "../components/header";
import MobileNav from "../components/mobile-drawer";
import Sidebar from "../components/sidebar";
import { useState } from "react";

export default function MainLayout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* sidebar */}
      <Sidebar />
      {/* Mobile Sidebar */}
      <MobileNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col md:pl-64">
        {/* header */}
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
