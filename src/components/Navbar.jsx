import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  let Links = [
    { name: "Acceuil", link: "#" },
    { name: "Formations", link: "#" },
    { name: "Compétences", link: "#" },
    { name: "A propos", link: "#" },
    { name: "Projets", link: "#" },
  ];
  let [open, setOpen] = useState(false);
 
  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0 z-20">
        <div className="md:flex items-center justify-between bg-gray-800 py-4 md:px-10">
          <div className="md:flex flex  items-center font-medium text-sky-700">
            <span
              title="Technik.dev"
              className="text-3xl mr-2 pt-1 cursor-pointer "
            >
              <img className="w-20 " src="../images/Logo.png" />
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
          >
            {open ? (
              <AiOutlineClose className="fill-slate-100" />
            ) : (
              <AiOutlineMenu className="fill-slate-100" />
            )}
          </div>
          <ul
            className={`md:flex items-center md:pb-0 pb-12 absolute md:static bg-gray-800  
          md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                <a
                  href={link.link}
                  className="text-slate-200 font-lora hover:text-slate-500 duration-500 "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
