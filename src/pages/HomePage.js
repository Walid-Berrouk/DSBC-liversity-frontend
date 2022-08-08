import React, { useState } from "react";
import Enjoy from "../components/HomePage/Enjoy";
import Rooms from "../components/HomePage/Rooms";
import Sidebar from "../components/HomePage/Sidebar";
import SoloRoomCard from "../components/HomePage/SoloRoomCard";
import Top from "../components/HomePage/Top";

export default function Home() {
  const [name, setName] = useState("Full name");
  const [picture, setPicture] = useState("https://placehold.co/64x64.png");
  const [type, setType] = useState("Student");
  const [connected, setConnected] = useState(0);

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-gray-200 w-full overflow-y-scroll">
        <Top name={name} picture={picture} type={type} />
        <div className="px-24">
          <Enjoy connected={connected} />
          <Rooms/>
          <div className="flex flex-col items-start my-8">
            <h3 className="text-2xl font-semibold">Solo study rooms</h3>
            <SoloRoomCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
