import React from 'react'
import {FcGoogle} from "react-icons/fc"
import {FaMicrosoft} from "react-icons/fa"
import liversityLogo from "../assets/liversityLogo.png"
import microsoftIcon from "../assets/microsoft-icon.png"
import googleIcon from "../assets/google-icon.png"
import yellow from "../assets/yellow.png"
import red from "../assets/red.png"
import purple from "../assets/purple.png"
import green from "../assets/green.png"
import gray from "../assets/gray.png"
import square from "../assets/square.png"
function LogInPage() {
  const inputStyle="outline-none rounded-xl py-2 px-5 border-2 border-[#a0969d] shadow-xl w-full"
  const submitStyle="rounded-xl p-2 border-2 border-[#a0969d] bg-[#6e42d7] shadow-xl w-full text-white cursor-pointer hover:bg-[#7c5ac7]"
  const inputTitle="font-bold self-left w-fit pl-3"
  const inputDiv="md:w-1/2 w-5/6 m-auto "
  const btnStyle="flex items-center justify-center rounded-xl p-2 border-2 border-[#a0969d] shadow-xl md:w-1/2 w-5/6 m-auto bg-white my-3"
  return (
    <div  className="login relative flex min-h-screen  text-lg ">
      <img src={square} alt="" className="hidden lg:block absolute right-[calc(50%-30px)]  bottom-0 t z-50"/>
      <div className="relative  min-h-screen lg:w-1/2 w-full bg-gradient-to-r to-[#fdd7e0] from-[#e1d7f6] flex flex-col  justify-center ">
               {/* <img src={square} alt="" className="absolute bottom-0 -right-8"/> */}
              <div className="w-full flex items-center justify-center mb-5 mt-3">
                <img src={liversityLogo} alt="" className="h-[110px]"/>
              </div>
              <form action="">
                <div className={`${inputDiv} mb-6`}>
                  <h2 className={inputTitle}>Email Address</h2>
                  <input type="text" name="" id="" placeholder="name@email.com" className={inputStyle}/>
                </div>
                <div className={inputDiv}>
                  <h2 className={inputTitle}>Password</h2>
                  <input type="password" name="" id="" placeholder="••••••••" className={inputStyle}/>
                </div>
                <h3 className="w-1/2 text-start m-auto mt-3">
                  <input type="checkbox" id="rememberme" className="mr-2 h-4 w-4"/>
                  <label htmlFor="rememberme">Remember Password</label>
                </h3>
                <div className={inputDiv}>
                  <input type="submit" name="" id="" value="Login" className={`${submitStyle} mt-7`}/>
                  <h3 className="w-fit self-start mt-3 ">Don't have an account? <a href="#" className="text-[#6e42d7]">sign up</a></h3>
                </div>
              </form>
              <div>
                <div className="flex items-center justify-center md:w-1/2 w-5/6 m-auto mt-10">
                  <hr className="w-1/2 border-[#433] border-1"/>
                  <h2 className="mx-2">OR</h2>
                  <hr className="w-1/2 border-[#433] border-1"/>
                </div>
                <div>
                  <button className={btnStyle}><img src={googleIcon} className="mr-3"/>Authorize with Google  </button>
                  <button className={btnStyle}><img src={microsoftIcon} className="mr-3"/>Authorize with Microsoft</button>
                </div>
              </div>
      </div>
      <div className="hidden lg:block relative overflow-x-hidden h-full w-1/2">
              <div className="relative flex items-center mt-5">
                <img src={yellow} alt="" className="w-1/2 ml-8 mt-4"/>
                <img src={gray} alt="" className="absolute top-0 right-8"/>
              </div>
              <div className="relative flex items-center mx-8">
                <div className="w-1/2 ml-8 mt-5">
                  <img src={green} alt="" className="w-11/12" />
                  <img src={purple} alt="" className="w-11/12"/>
                </div>
                  <img src={red} alt="" className="absolute w-1/3 -top-12 right-5"/>
                </div>
      </div>
    </div>
  )
}

export default LogInPage
