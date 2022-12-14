import React from "react";
import { Link } from "react-router-dom";

import ChatIcon from '../../assets/icons/chat.png'
import DashboardIcon from '../../assets/icons/dashboard.png'
import Logo from '../../assets/icons/logo.png'
import LogoutIcon from '../../assets/icons/logout.png'
import ProfileIcon from '../../assets/icons/profile.png'
import ProjectsIcon from '../../assets/icons/project.png'
import RoomsIcon from '../../assets/icons/rooms.png'

export default function Sidebar() {
  return (
    <div className="w-36 h-screen flex flex-col items-center justify-between shadow-4xl">
      <div className="flex flex-col items-center w-full">
       <div className="py-8">
         <img className="mb-2" src={Logo} alt="" />
         <p className="text-[#F9406A]">Liversity</p>
       </div>
        <div className="w-full">
          <Link to="/home">
            <div className="w-full py-3 hover:bg-gray-200">
              <img
                className="mx-auto mb-2"
                src={RoomsIcon}
                alt=""
              />
              <p className="text-[#F9406A]">Study Rooms</p>
            </div>
          </Link>
          <Link to="/projects">
            <div className="w-full py-3 hover:bg-gray-200">
              <img
                className="mx-auto mb-2"
                src={ProjectsIcon}
                alt=""
              />
              <p className="text-[#F9406A]">Projects</p>
            </div>
          </Link>
          <Link to="/">
            <div className="w-full py-3 hover:bg-gray-200">
              <img
                className="mx-auto mb-2"
                src={DashboardIcon}
                alt=""
              />
              <p className="text-[#F9406A]">Dashboard</p>
            </div>
          </Link>
          <Link to="/">
            <div className="w-full py-3 hover:bg-gray-200">
              <img
                className="mx-auto mb-2"
                src={ProfileIcon}
                alt=""
              />
              <p className="text-[#F9406A]">Profile</p>
            </div>
          </Link>
          <Link to="/">
            <div className="w-full py-3 hover:bg-gray-200">
              <img
                className="mx-auto mb-2"
                src={ChatIcon}
                alt=""
              />
              <p className="text-[#F9406A]">Chat Rooms</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="py-4">
        <button>
          <img src={LogoutIcon} className="mb-2" alt="" />
          <p className="text-[#F9406A]">Logout</p>
        </button>
      </div>
    </div>
  );
}
