import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const ProjetsTravaullés = () => {
  return (
    <div id="projets">
      <div className="flex h-96">
        {" "}
        <h1 className="text-white text-2xl font-lora m-auto flex items-center">
          {" "}
          <AiOutlineSetting className="w-24 h-24 hover:rotate-180  hover:animate-spin animation duration-500 hover:fill-orange-500" />
          EN COURS DE TRAITEMENT...
        </h1>
      </div>
    </div>
  );
};

export default ProjetsTravaullés;
