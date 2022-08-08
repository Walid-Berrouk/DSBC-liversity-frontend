import React, { useState } from "react";
import Enjoy from "../components/HomePage/Enjoy";
import Sidebar from "../components/HomePage/Sidebar";
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
        </div>
      </div>
    </div>
  );
}
