import React, { useRef } from "react";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";
import "../index.css";

const Formations = () => {
  return (
    <div id="formation">
      <div className="grid md:grid-cols-2 gap-4 ">
        <div className="bg-slate-700  w-auto h-auto rounded-md shadow-lg flex gap-2 items-center hover:rotate-on-hover ">
          <img src="../images/pngegg.png" className="w-40 h-40 rounded-full" />
          <div className="al flex flex-col">
            <span className="text-2xl font-lora text-red-400  ">
              Lycée Ababacar Sy de Tivaouane
            </span>
            <h1 className=" font-lora text-slate-100">2018 | Baccalauréat </h1>
          </div>
        </div>
        <div className="bg-slate-700 w-auto h-auto rounded-md shadow-lg flex gap-2 items-center">
          <img
            src="https://edukiya.com/wp-content/uploads/2020/11/Universite-Assane-SECK-de-Ziguinchor-UDZ-Senegal.jpg"
            className="w-40 h-40 rounded-full"
          />
          <div className="al flex flex-col md:flex-col">
            <span className="text-2xl font-lora text-green-400 ">
              Université Assane Seck de Ziguinchor
            </span>
            <h1 className=" font-lora text-slate-100">
              2018 - 2019 | Licence 1 Management Informatisé des Organisation{" "}
            </h1>
          </div>
        </div>
        <div className="bg-slate-700 w-auto h-auto rounded-md shadow-lg flex gap-2 items-center">
          <img
            src="https://edukiya.com/wp-content/uploads/2020/11/Universite-Assane-SECK-de-Ziguinchor-UDZ-Senegal.jpg"
            className="w-40 h-40 rounded-full"
          />
          <div className="al flex flex-col">
            <span className="text-2xl font-lora text-green-400 ">
              Université Assane Seck de Ziguinchor
            </span>
            <h1 className=" font-lora text-slate-100">
              2020 - 2021 | Licence 3 Management Informatisé des Organisation{" "}
            </h1>
          </div>
        </div>
        <div className="bg-slate-700 w-auto h-auto rounded-md shadow-lg flex gap-2 items-center">
          <img
            src="https://edukiya.com/wp-content/uploads/2020/11/Universite-Assane-SECK-de-Ziguinchor-UDZ-Senegal.jpg"
            className="w-40 h-40 rounded-full"
          />
          <div className="al flex flex-col">
            <span className="text-2xl font-lora text-green-400 ">
              Université Assane Seck de Ziguinchor
            </span>
            <h1 className=" font-lora text-slate-100">
              2019 - 2020 | Licence 2 Management Informatisé des Organisation{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formations;
