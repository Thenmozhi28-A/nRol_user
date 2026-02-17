import React from "react";
import Sidebar from "../layout/Sidebar.jsx";
import Header from "../layout/Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#111828]">
      
      <div className="hidden md:flex shrink-0">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        
        <div className="p-5  lg:p-10">
          <Header />
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar px-5 lg:px-10 py-0">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Layout;
