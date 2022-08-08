import React from "react"
import ConnectedUser from "./ConnectedUser"
import Searchbar from "./Searchbar"

export default function Top({name, picture, type}){
    return (
        <div className="flex relative justify-center py-6">
            <Searchbar/>
            <div className="absolute top-4 right-6">
                <ConnectedUser name={name} picture={picture} type={type}/>
            </div>
        </div>
    )
}