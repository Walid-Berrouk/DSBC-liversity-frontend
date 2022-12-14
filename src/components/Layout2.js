import { useState } from "react";
import Sidebar from "./HomePage/Sidebar";
import Top from "./HomePage/Top";
import Enjoy from "./HomePage/Enjoy";

export default function Layout2({ children }) {
  const [name, setName] = useState("Full name");
  const [picture, setPicture] = useState("https://placehold.co/64x64.png");
  const [type, setType] = useState("Student");
  const [connected, setConnected] = useState(0);
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-gray-200 w-full overflow-y-scroll">
        <Top name={name} picture={picture} type={type} />
        <div className="px-12">
          <Enjoy connected={connected} />
          {children}
        </div>
      </div>
    </div>
  );
}
