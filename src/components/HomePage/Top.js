import React from "react"
import ConnectedUser from "./ConnectedUser"
import Searchbar from "./Searchbar"

export default function Top({name, picture, type}){
    return (
        <div className="flex justify-between px-12 py-6">
            <Searchbar/>
            <ConnectedUser name={name} picture={picture} type={type}/>
        </div>
    )
}