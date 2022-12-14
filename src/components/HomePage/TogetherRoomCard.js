import React from "react";
import { BsCameraVideoOff } from "react-icons/bs";
import { BiMicrophoneOff } from "react-icons/bi";
import { IoMdChatboxes } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";

export default function TogetherRoomCard({ room }) {
  return (
    <div className="h-72 w-72 bg-white my-8 mx-auto rounded-3xl overflow-hidden relative">
      <div className="absolute top-1/3 -translate-y-1/2 left-6">
        <img className="rounded-full" src={room.picture} alt="" />
      </div>
      <div className="absolute top-1/3 -translate-y-1/2 right-6 bg-white flex items-center gap-x-2 px-2 rounded-full shadow-md">
        <div>
          <MdGroups className="text-pink-500 text-xl" />
        </div>
        <div>
          <span className="font-semibold">{room.actualNumber}</span>/
          {room.maxNumber}
        </div>
      </div>
      <div className="h-1/3 w-full bg-pink-500 px-4 py-2">
        <div className="flex justify-between">
          <div className="bg-white flex gap-x-1 items-center px-2 rounded-full">
            <div className="bg-green-500 w-3 h-3 rounded-full" />
            <div className="text-green-500">LIVE</div>
          </div>
          <div className="text-white text-xl flex gap-x-4">
            <button>
              <BsCameraVideoOff />
            </button>
            <button>
              <BiMicrophoneOff />
            </button>
            <button>
              <IoMdChatboxes />
            </button>
          </div>
        </div>
        <div className="flex justify-start my-2">
          <h4 className="text-white text-lg">{room.name}</h4>
        </div>
      </div>
      <div className="flex flex-wrap mt-8 px-2">
        {room.categories.map((category, index) => (
          <div key={index} className="bg-gray-200 rounded-3xl font-semibold mx-2 my-1 px-2">
            {category}
          </div>
        ))}
      </div>
      <p className="px-4 my-1 text-start text-sm">{room.description}</p>
      <div className="flex justify-end">
        <button className="bg-pink-500 py-1 px-4 mx-4 my-2 text-white font-semibold items-center flex rounded-lg gap-x-2">
          <div className="">Lunch solo session</div>
          <AiOutlineRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}
