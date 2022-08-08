import React from "react";
import {IoAdd} from 'react-icons/io5'

export default function Enjoy({connected}){
    return (
        <div className="flex py-4 justify-between">
            <h2 className="text-3xl font-semibold">
                Enjoy your study session
            </h2>
            <div className="flex gap-x-4">
                <div className="bg-white rounded-full flex gap-x-2 px-2 items-center">
                    <div className="bg-green-500 rounded-full h-4 w-4"/>
                    <div className="text-lg">{connected} online</div>
                </div>
                <button className="bg-pink-500 flex text-semibold items-center gap-x-2 px-4 rounded-lg text-white">
                    <IoAdd className="text-4xl"/>
                    <div className="text-lg">Create a new room</div>
                </button>
            </div>
        </div>
    )
}