import React from "react";

import { LuBraces } from "react-icons/lu";
import { AiOutlineHtml5, AiFillWindows,AiOutlineDownload } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {   BsWordpress, } from "react-icons/bs";
import {
  BiLogoPhp,
  BiLogoJava,
  BiLogoPython,

} from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiMicrosoftoffice,
} from "react-icons/si";
import Dowloandcv from "./Dowloandcv";

const Compétences = () => {
  return (
    <div id="competences ">
      <div className="flex gap-4 items-center  ">
      <hr
          className="w-full  "
          style={{
            background: "#fff",
            color: "lime",
            height: "2px",
          }}
        />
        <h1 className="titleh1  outline outline-offset-2 outline-2 w-max rounded-lg text-slate-100 text-4xl font-semibold text-center font-lora mt-2 ml-2 flex gap-2 items-center ">
          <LuBraces />
          Compétences
        </h1>
        <hr
          className="w-full  "
          style={{
            background: "#fff",
            color: "lime",
            height: "2px",
          }}
        />
      </div>
      
      <div className="flex-1 max-w-10xl mx-auto p-10">
      <Dowloandcv />
      <br />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8  md:grid-cols-3  ">
          <span className="flex items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <AiOutlineHtml5 className="w-60 h-60 fill-white hover:fill-orange-600 hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-lg font-lora font-semibold hover:text-white hover:scale-50 transition duration-500">
              HTML LVL : 98 %
            </h1>
          </span>
          <span className="flex items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <FaCss3 className="w-60 h-60 fill-orange-300 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation  md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-lg font-lora font-semibold hover:text-white hover:scale-50 transition duration-500">
              Css LVL : 97 %
            </h1>
          </span>
          <span className="flex items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <IoLogoJavascript className="w-60 h-60 fill-yellow-500 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md whitespace-nowrap font-lora font-semibold hover:text-white hover:scale-50 transition duration-500">
              Javascript LVL : 80 %
            </h1>
          </span>
          <span className="flex items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full gap-6 hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <BiLogoPhp className="w-60 h-60 fill-violet-800 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md font-lora font-semibold  hover:text-white hover:scale-50 transition duration-500">
              PHP LVL : 70 %
            </h1>
          </span>
          <span className="flex gap-2 items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <GrReactjs className="w-60 h-60 fill-sky-500 hover:fill-white hover:scale-75 hover:translate-x-4 hover:rotate-180 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md font-lora font-semibold  hover:text-white  hover:scale-50 transition duration-500">
              ReactJs LVL : 80 %
            </h1>
          </span>
          <span className="flex gap-2 items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <BiLogoJava className="w-60 h-60 fill-blue-600 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-lg font-lora font-semibold  hover:text-white hover:scale-50 transition duration-500">
              Java LVL : 50 %
            </h1>
          </span>
          <span className="flex gap-2 items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <BiLogoPython className="w-60 h-60 fill-blue-700 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md font-lora font-semibold  hover:text-white hover:scale-50 transition duration-500">
              Python LVL : 60 %
            </h1>
          </span>
          <span className="flex gap-2 items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <SiAdobephotoshop className="w-60 h-60 ml-2 fill-blue-800 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md whitespace-nowrap font-lora font-semibold  hover:text-white hover:scale-50 transition duration-500">
              Photoshop LVL : 80 %
            </h1>
          </span>
          <span className="flex gap-2 items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <SiAdobeillustrator className="w-60 h-60 ml-2 fill-yellow-800 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md font-lora whitespace-nowrap font-semibold  hover:text-white hover:scale-50 transition duration-500">
              Illustrator LVL : 70 %
            </h1>
          </span>
          <span className="flex gap-2 items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <SiMicrosoftoffice className="w-60 h-60 ml-2 fill-orange-600 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md whitespace-nowrap font-lora font-semibold  hover:text-white hover:scale-50 transition duration-500">
              MS Office LVL : 99 %
            </h1>
          </span>
          <span className="flex gap-2 items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <BsWordpress className="w-60 h-60 ml-2 fill-blue-500 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md whitespace-nowrap font-lora font-semibold  hover:text-white hover:scale-50 transition duration-500">
              Wordpress LVL : 70 %
            </h1>
          </span>
          <span className="flex gap-2 items-center outline outline-offset-2 outline-orange-300  rounded-lg w-full  hover:bg-yellow-500 hover:scale-95 transition duration-500">
            <AiFillWindows className="w-60 h-60 ml-2 fill-slate-100 hover:fill-white hover:scale-75 hover:translate-x-4 hover:skew-y-12 hover:animate-spin animation md:transform-none transition duration-500" />
            <h1 className="text-slate-200 text-md whitespace-nowrap font-lora font-semibold  hover:text-white hover:scale-50 transition duration-500">
              Windev LVL : 60 %
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Compétences;
