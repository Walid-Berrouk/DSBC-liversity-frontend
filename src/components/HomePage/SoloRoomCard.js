import React from 'react'
import {BsCameraVideoOff} from 'react-icons/bs'
import {BiMicrophoneOff} from 'react-icons/bi'
import {IoMdChatboxes} from 'react-icons/io'
import {AiOutlineRight} from 'react-icons/ai'

export default function SoloRoomCard(){
    return (
        <div className="flex flex-col justify-between items-start w-full p-4 h-72 bg-no-repeat bg-cover my-4 rounded-3xl bg-[url('https://cdn.editage.com/insights/editagecom/production/background_0.jpg')]">
            <div className="flex w-full justify-between items-center">
                <div className="flex gap-x-4 items-center">
                    <div className="bg-white px-4 py-1 rounded-full flex gap-x-4 items-center">
                        <div className="bg-green-500 h-4 w-4 rounded-full"/>
                        <div className="text-green-500 text-xl font-semibold">LIVE</div>
                    </div>
                    <div>
                        <h4 className="text-white text-3xl font-semibold">Solo Study Rooms</h4>
                    </div>
                </div>
                <div className="text-white text-4xl flex gap-x-4">
                    <button>
                        <BsCameraVideoOff/>
                    </button>
                    <button>
                        <BiMicrophoneOff />
                    </button>
                    <button>
                        <IoMdChatboxes/>
                    </button>
                </div>
            </div>
            <p className="text-white w-1/3 text-start text-xl">
                100% focus? Set the scene with atmospheric backgrounds, user and goal setting and study in your solo study room.
            </p>
            <div className="flex w-full justify-end">
                <button className="bg-pink-500 p-2 text-white font-semibold items-center flex rounded-lg gap-x-2">
                    <div className="text-lg">Lunch solo session</div>
                    <AiOutlineRight className="text-2xl"/>
                </button>
            </div>
        </div>
    )
}