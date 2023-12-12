import React from "react";
import Compétences from "../components/Compétences";
import Formations from "../components/Formations";
import Jumptron from "../components/Jumptron";
import Navbar from "../components/Navbar";
import Présentation from "../components/Présentation";
import Socialmediafix from "../components/Socialmediafix";
import { CiUser } from "react-icons/ci";
import { GiDiploma } from "react-icons/gi";
import Carousel from "../components/Carousel";
import ProjetsTravaullés from "../components/ProjetsTravaullés";
import Footer from "../components/Footer";


const Acceuil = () => {
  return (
    <div className="">
      <Navbar />
      <Jumptron />
      {/*   
      <hr
        className="w-24 mt-3 m-auto "
        style={{
          background: "#38bdf8",
          color: "lime",
          height: "6px",
        }}
      />*/}{" "}
      <br />
      <div className="flex gap-4 items-center ">
        <hr
          className="w-full  "
          style={{
            background: "#fff",
            color: "lime",
            height: "2px",
          }}
        />
        <h1  className="titleh1 outline outline-offset-2 outline-2 w-max  rounded-lg text-slate-100 text-4xl font-semibold text-center  font-lora mt-2 ml-2 flex gap-2 items-center ">
          <GiDiploma />
          Formation
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
      <br />
      <Formations />
      {/*   <hr
        className="w-24 mt-3 m-auto "
        style={{
          background: "#38bdf8",
          color: "lime",
          height: "6px",
        }}
      />*/}{" "}
      <br />
      <div className="flex gap-4 items-center ">
        <hr
          className="w-full  "
          style={{
            background: "#fff",
            color: "lime",
            height: "2px",
          }}
        />
        <h1 className="titleh1 outline outline-offset-2 outline-2 w-max  rounded-lg text-slate-100 text-4xl font-semibold text-center font-lora mt-2 ml-2 flex gap-2 items-center">
          <CiUser />
          Présentation
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
      <br />
      <Présentation />
      {/*<hr
        className="w-24 mt-3 m-auto "
        style={{
          background: "#38bdf8",
          color: "lime",
          height: "6px",
        }}
      />*/}
      <br />
      <Compétences />
      <div className="flex gap-4 items-center">
        <hr
          className="w-full  "
          style={{
            background: "#fff",
            color: "lime",
            height: "2px",
          }}
        />
        <h1 className="titleh1 outline outline-offset-2 outline-2 w-auto whitespace-nowrap  rounded-lg text-slate-100 text-4xl font-semibold text-center font-lora mt-2 ml-2 flex gap-2 items-center">
          <CiUser />
          Suivons nos rêves
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
      <Carousel />
      <div className="flex gap-4 items-center">
        <hr
          className="w-full  "
          style={{
            background: "#fff",
            color: "lime",
            height: "2px",
          }}
        />
        <h1 className="titleh1 outline outline-offset-2 outline-2 w-auto whitespace-nowrap  rounded-lg text-slate-100 text-4xl font-semibold text-center font-lora mt-2 ml-2 flex gap-2 items-center">
          <CiUser />
          Projets travaillés
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
      <ProjetsTravaullés />
      <Footer />
    </div>
  );
};

export default Acceuil;
