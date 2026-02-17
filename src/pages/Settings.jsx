import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {

  const navClass = ({ isActive }) =>
    `px-4 py-3 text-sm lg:text-lg font-medium transition-all
     ${
       isActive
         ? "text-[#30866D] underline"
         : "text-[#94a3b8] hover:bg-[#384152] hover:text-[#30866D] hover:underline"
     }`;

  return (
    <div className="bg-[#202938] rounded-xl p-10 mb-10 ">

      <div className="flex gap-6 mb-8">
        <NavLink to="personal-information" className={navClass} end={false}>
          Personal Information
        </NavLink>

        <NavLink to="job-seeker-status" className={navClass}>
          Job Seeker Status
        </NavLink>

        <NavLink to="linked-accounts" className={navClass}>
          Linked Accounts
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Settings;
