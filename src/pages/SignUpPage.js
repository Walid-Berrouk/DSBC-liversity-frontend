import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import liversityLogo from "../assets/liversityLogo.png";
import microsoftIcon from "../assets/microsoft-icon.png";
import googleIcon from "../assets/google-icon.png";
import yellow from "../assets/yellow.png";
import red from "../assets/red.png";
import purple from "../assets/purple.png";
import green from "../assets/green.png";
import gray from "../assets/gray.png";
import square from "../assets/square.png";
import { Link } from "react-router-dom";

function SignUpPage() {
const footerDiv="w-11/12 mx-auto my-5 flex items-center justify-between"
  const inputStyle =
    "outline-none rounded-xl py-2 px-5 border-2 border-[#a0969d] shadow-xl w-full";
  const nextBtnStyle =
    "rounded-xl py-2 px-5 w-fit  border-2 border-[#a0969d] bg-[#6e42d7] shadow-xl w-full text-white cursor-pointer hover:bg-[#7c5ac7]";
  const inputTitle = "font-bold self-left w-fit pl-3";
  const inputDiv = "md:w-1/2 w-5/6 m-auto mx-3 ";
  const btnStyle =
    "flex items-center justify-center rounded-xl p-2 border-2 border-[#a0969d] shadow-xl md:w-1/2 w-5/6 m-auto bg-white my-3";
  return (
    <div className="relative flex min-h-screen  text-lg ">
      <img
        src={square}
        alt=""
        className="hidden lg:block absolute right-[calc(50%-30px)]  bottom-0 t z-50"
      />
      <div className="relative  min-h-screen lg:w-1/2 w-full bg-gradient-to-r to-[#fdd7e0] from-[#e1d7f6] flex flex-col  justify-center ">
        {/* <img src={square} alt="" className="absolute bottom-0 -right-8"/> */}
        <div className="w-full flex items-center justify-center mb-3 mt-3">
          <img src={liversityLogo} alt="" className="h-[110px]" />
        </div>
        <div className="w-11/12 text-left m-auto">
            <h1 className="font-bold text-2xl mb-3">Create your profile</h1>
            <h3 className="text-xl mb-3">Personal informations</h3>
            <hr className="border-3 border-[#a0969d] w-full m-auto"/>
        </div>
        <form action="">
            <div className="flex w-11/12 m-auto justify-between flex-col lg:flex-row mt-5">
                <div className={`${inputDiv} mb-6`}>
                    <h2 className={inputTitle}>First Name</h2>
                    <input
                    type="text"
                    name=""
                    id=""
                    placeholder="first name"
                    className={inputStyle}
                    />
                </div>
                <div className={`${inputDiv} mb-6`}>
                    <h2 className={inputTitle}>Last Name</h2>
                    <input
                    type="text"
                    name=""
                    id=""
                    placeholder="last name"
                    className={inputStyle}
                    />
                </div>
            </div>
            
            <div className="flex w-11/12 m-auto justify-between flex-col lg:flex-row">
                <div className={`${inputDiv} mb-6`}>
                    <h2 className={inputTitle}>User Name</h2>
                    <input
                    type="text"
                    name=""
                    id=""
                    placeholder="username"
                    className={inputStyle}
                    />
                </div>
                <div className={`${inputDiv} mb-6`}>
                    <h2 className={inputTitle}>Email Address</h2>
                    <input
                    type="mail"
                    name=""
                    id=""
                    placeholder="name@email.com"
                    className={inputStyle}
                    />
                </div>
            </div>

            <div className="flex w-11/12 m-auto justify-between flex-col lg:flex-row">
                <div className={`${inputDiv} mb-6`}>
                    <h2 className={inputTitle}>Date of birth</h2>
                    <input
                    type="date"
                    name=""
                    id=""
                  
                    className={inputStyle}
                    />
                </div>
                <div className={`${inputDiv} mb-6`}>
                    <h2 className={inputTitle}>State</h2>
                        <select id="State" defaultValue="State"   className={inputStyle}>
                        <option value="Student">Student</option>
                        <option value="Indicvidual">Individual</option>
                        <option value="Teacher">Teacher</option>
                        </select>
                </div>
            </div>
          <div className="w-11/12 flex items-center justify-center m-auto mt-5">
              <span className="flex items-center justify-center  h-8 w-8 rounded-full font-bold bg-[#6e42d7] text-[#fff]">1</span>
              <hr className=" w-1/3 border-4 border-[#6e42d7]"/>
              <span className="flex items-center justify-center  h-8 w-8 rounded-full font-bold text-[#6e42d7] bg-[#fff]">2</span>
              <hr className=" w-1/3 border-4 border-[#a0969d]"/>
              <span className="flex items-center justify-center  h-8 w-8 rounded-full font-bold text-[#6e42d7] bg-[#fff]">3</span>
          </div>

          <div className={footerDiv}>
            {/* <Link to="/home">
              <input
                type="submit"
                name=""
                id=""
                value="Login"
                className={`${submitStyle} mt-7`}
              />
            </Link> */}
            <h3 className="w-fit self-start mt-3 ">
              Already a member?{" "}
              <Link to="/LogInPortal">
              <a href="#" className="text-[#6e42d7]">
                Log in
              </a>
              </Link>
            </h3>
            <Link to="/home" className={`${nextBtnStyle} `}>Next </Link>
            {/* <button  </button> */}

          </div>
        </form>
       
      </div>
      <div className="hidden lg:block relative overflow-x-hidden h-full w-1/2">
        <div className="relative flex items-center mt-5">
          <img src={yellow} alt="" className="w-1/2 ml-8 mt-4" />
          <img src={gray} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative flex items-center mx-8">
          <div className="w-1/2 ml-8 mt-5">
            <img src={green} alt="" className="w-11/12" />
            <img src={purple} alt="" className="w-11/12" />
          </div>
          <img src={red} alt="" className="absolute w-1/3 -top-12 right-5" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
