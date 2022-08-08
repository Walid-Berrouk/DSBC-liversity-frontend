import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-36 h-screen flex flex-col items-center justify-between shadow-4xl">
      <div className="flex flex-col items-center w-full">
        <img className="py-8" src="https://placehold.co/72x72.png" alt="" />
        <div className="w-full">
          <Link to="/">
            <div className="w-full py-2 hover:bg-gray-200">
              <img
                className="mx-auto"
                src="https://placehold.co/64x42.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="/">
            <div className="w-full py-2 hover:bg-gray-200">
              <img
                className="mx-auto"
                src="https://placehold.co/64x42.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="/">
            <div className="w-full py-2 hover:bg-gray-200">
              <img
                className="mx-auto"
                src="https://placehold.co/64x42.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="/">
            <div className="w-full py-2 hover:bg-gray-200">
              <img
                className="mx-auto"
                src="https://placehold.co/64x42.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="/">
            <div className="w-full py-2 hover:bg-gray-200">
              <img
                className="mx-auto"
                src="https://placehold.co/64x42.png"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="py-4">
        <button>
          <img src="https://placehold.co/64x64.png" alt="" />
        </button>
      </div>
    </div>
  );
}
