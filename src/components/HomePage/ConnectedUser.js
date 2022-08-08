import React from "react";

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
        <img
          className="h-6 w-6 mt-2"
          src="https://placehold.co/12x12.png"
          alt=""
        />
      </button>
    </div>
  );
}
