import React, { useState } from "react";
import Sidebar from "../components/HomePage/Sidebar";
import Top from "../components/HomePage/Top";

export default function Home() {
    const [name, setName] = useState('Full name')
    const [picture, setPicture] = useState('https://placehold.co/64x64.png')
    const [type, setType] = useState('Student')

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-gray-200 w-full">
        <Top name={name} picture={picture} type={type}/>
      </div>
    </div>
  );
}
