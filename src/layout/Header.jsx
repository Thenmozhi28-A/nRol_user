import React from "react";
import { Bell } from "lucide-react";
import Main from "../assets/Main.png";
import { useSelector } from "react-redux";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const user = useSelector((state) => state.auth.user);
  const email = user?.email || "";

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row items-center justify-between min-w-0"
      style={{
        height: "64px",
        background: "linear-gradient(to right, #0f172a, #111827, #0f172a)",
      }}
    >

      <div className="flex visible md:hidden " > 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="lucide lucide-text-align-justify-icon lucide-text-align-justify text-white cursor-pointer"><path d="M3 5h18"/><path d="M3 12h18"/><path d="M3 19h18"/></svg>
      </div>
     
      <div className="hidden md:flex items-center gap-2 lg:gap-3 px-2 lg:px-4 py-2 rounded-lg bg-[#424252] border border-[#9999A5] w-40 lg:w-70">
        <div className="bg-[#30866D] rounded-full p-1">
          <img src={Main} alt="Logo" className="w-8 h-8" />
        </div>

        <div className="flex gap-1 flex-col">
          <p className="text-white font-medium text-[10px] lg:text-sm ">FYNDUS ACADEMY</p>
          <p className="text-[8px] lg:text-sm text-gray-300">
            PREMIUM_PLAN | <span className="text-[#30866D]">ACTIVE</span>
          </p>
        </div>
      </div>

    
      <div className="flex items-center gap-3 lg:gap-4">
           <div className=" p-3 rounded-lg bg-[#424252] border border-[#9999A5] cursor-pointer hidden md:flex">
          <IoSettingsOutline className="text-white w-5 h-5" onClick={()=>navigate("/settings")}/>
        </div>

        <div className="relative p-3 rounded-lg bg-[#424252] border border-[#9999A5] cursor-pointer hidden md:flex">
          <Bell className="text-white w-5 h-5" />
          <span className="absolute top-2 right-3 w-3 h-3 bg-[#30866D] rounded-full" />
        </div>

        <div className="flex items-center gap-2 lg:gap-4 px-2 lg:px-3 py-2 rounded-lg bg-[#424252] border border-[#9999A5] w-50 lg:w-70">
          <img
            src="https://newprofilepic.photo-cdn.net/assets/images/article/profile.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="truncate">
            <p className="text-white text-xs lg:text-sm font-medium">THENMOZHI</p>
            <p className="text-[10px] lg:text-sm text-[#B3B3B3] truncate">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
