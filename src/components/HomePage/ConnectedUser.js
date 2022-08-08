import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function ConnectedUser({ name, picture, type }) {
  return (
    <div className="flex h-16 items-center gap-x-2">
      <div className="rounded-xl overflow-hidden">
        <img className="h-full w-auto" src={picture} alt="" />
      </div>
      <div>
        <div>{name}</div>
        <div className="text-gray-500">{type}</div>
      </div>
      <button className="flex h-full">
        <AiFillCaretDown className="mt-3.5"/>
      </button>
    </div>
  );
}
