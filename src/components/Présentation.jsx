import React from "react";
import { FaLinkedinIn, FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";

import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { GiGps } from "react-icons/gi";

const Présentation = () => {
  return (
    <div>
      <div id="presentation" className="max-w-screen-xl  container flex md:gap-8 md:justify-center  flex-col  md:m-auto  items-center bg-slate-700 rounded-md shadow-lg ">
        <img
          src="../images/blur1.png"
          className="max-w-xs w-60  hover:animate-spin animation hover:skew-y-12 hover:skew-x-12 transition duration-300 ease-in-out hover:scale-50 lg:rounded-lg ml-4 hover:opacity-50"
        />
        <div className=" items-center inline space-y-4  ">
          <div className="flex  gap-4 items-center ">
            <span className="bg-slate-600 w-14 h-14 flex items-center shadow-2xl rounded-lg hover:bg-orange-500 hover:scale-110">
              {" "}
              <FaUserAlt className="ml-2 w-10 h-10 fill-white" />
            </span>{" "}
            <h1 className=" text-lg font-lora text-white">Mame Alioune Diaw</h1>
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-slate-600 w-14 h-14 flex items-center shadow-2xl rounded-lg hover:bg-orange-500 hover:scale-110">
              {" "}
              <BsFillTelephoneFill className="ml-2 w-10 h-10 fill-white" />
            </span>{" "}
            <h1 className="text-lg font-lora text-white">+221 77 264 64 20</h1>
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-slate-600 w-14 h-14 flex items-center shadow-2xl rounded-lg hover:bg-orange-500 hover:scale-110">
              {" "}
              <AiFillMail className="ml-2 w-10 h-10 fill-white" />
            </span>{" "}
            <h1 className="md:text-lg  font-lora text-white ">
              mamealiounediaw99@gmail.com
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-slate-600 w-14 h-14 flex items-center shadow-2xl rounded-lg hover:bg-orange-500 hover:scale-110">
              {" "}
              <GiGps className="ml-2 w-10 h-10 fill-white" />
            </span>{" "}
            <h1 className="text-lg font-lora text-white">Tivaouane | Thiès </h1>
          </div>

          <div className="social flex gap-4">
            {" "}
            <a
              href="#"
              className="hover:scale-150 transition-all ease-out duration-150 "
            >
              <span className="flex items-center shadow-2xl rounded-lg bg-slate-800 w-14 h-14 hover:bg-slate-200">
                <FaLinkedinIn className="w-8 h-8 m-auto  fill-blue-600" />
              </span>
            </a>
            <a
              href="#"
              className="hover:scale-150 transition-all ease-out duration-150 "
            >
              <span className="flex items-center shadow-2xl rounded-lg bg-slate-800 w-14 h-14 hover:bg-orange-600">
                <AiFillGithub className="bg-slate-600 w-8 h-8 rounded-full m-auto fill-slate-50" />
              </span>
            </a>
            <a
              href="#"
              className="hover:scale-150 transition-all ease-out duration-150 "
            >
              <span className="flex items-center shadow-2xl rounded-lg bg-slate-800 w-14 h-14 hover:bg-blue-500">
                <TbBrandFiverr className="w-8 h-8 m-auto fill-green-500" />{" "}
              </span>
            </a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Présentation;
