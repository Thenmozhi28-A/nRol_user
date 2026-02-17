import React from "react";
import Main from "../assets/Main.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { FiUser, FiCode, FiLogOut } from "react-icons/fi";
import { MdOutlineQuiz, MdOutlineChat } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { logout as logoutAction } from '../features/authSlice'
import { useDispatch } from 'react-redux'


const Sidebar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch() 

  const logout = () => {
    dispatch(logoutAction())
    navigate("/");
  };

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 text-xs lg:text-lg font-medium rounded-lg transition-all
     ${
       isActive
         ? "bg-[#1e2f39] text-[#2d876b]"
         : "text-white/80 hover:text-white"
     }`;


    const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`hidden md:flex flex-col justify-between h-full ${!collapsed? "md:w-50 lg:w-70": "w-22.5"} `}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(32,41,56,0.9) 20%, rgba(17,24,40,1) 100%)",
        
      }}>

      <div>
        <div
          className="flex items-center gap-0 lg:gap-2 p-5 justify-center"
          style={{ borderBottom: "1px solid rgba(153,153,163,0.3)" }}
        >
          <img src={Main} alt="Logo" className="w-10 lg:w-20" />

          {!collapsed && <span className="text-xl lg:text-3xl font-semibold text-white">nRol</span> }
          
        </div>

        <ul className={`flex flex-col p-4 mt-6 gap-2 lg:gap-6 ${collapsed ? "items-center gap-3" : ""}`}>
          <NavLink to="/dashboard" className={navClass}>
            <BiHome />{!collapsed && " Dashboard"}
          </NavLink>

          <NavLink to="/profile" className={navClass}>
            <FiUser /> {!collapsed &&"Profile"}
          </NavLink>

          <NavLink to="/code-practice" className={navClass}>
            <FiCode /> {!collapsed && "Code Practice"}
          </NavLink>

          <NavLink to="/skill-test" className={navClass}>
            <MdOutlineQuiz /> {!collapsed && "Skill Test"}
          </NavLink>

          <NavLink to="/communication" className={navClass}>
            <MdOutlineChat /> {!collapsed && "Communication"}
          </NavLink>

          {/* <NavLink to="/settings" className={navClass}>
            <IoSettingsOutline /> {!collapsed && "Settings"}
          </NavLink> */}

          <NavLink to="/" className={navClass} onClick={logout}>
            <FiLogOut /> {!collapsed && "Logout"}
          </NavLink>
        </ul>
      </div>

      <div
        className="p-6 flex justify-center"
        style={{ borderTop: "1px solid rgba(153,153,163,0.3)" }}
      >
        <div className="w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer border
         border-white/25 bg-white/10 hover:bg-white/20 transition" onClick={()=>setCollapsed(!collapsed)}>
          <ChevronLeft className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
