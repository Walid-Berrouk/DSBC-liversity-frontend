import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

export default function Rooms() {
  return (
    <div className="flex flex-col">
      <div className="flex font-semibold gap-x-12 my-4">
        <div className="flex gap-x-2 items-center">
          <div className="bg-green-500 h-4 w-4 rounded-full" />
          <div>All live rooms (0)</div>
        </div>
        <div className="flex gap-x-2 items-center">
          <AiFillHeart className="text-pink-500 text-xl" />
          <div>My favourite rooms</div>
        </div>
        <div className="flex gap-x-2 items-center">
          <FaUserCircle className="text-xl" />
          <div>Created by me</div>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-300"/>
    </div>
  );
}
