import React from "react";

import { BiShow, BiSolidHide } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Buttonmod() {
  const [showModal, setShowModal] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleshow = () => {
    setShow(!show);
  };

  
  return (
    <>
      <button
        className="b text-white active:fill-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <motion.a
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:1.5, duration:1.5}}
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 transition-all duration-150 hover:scale-90 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Faites vos requêtes par ici
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </motion.a>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  bg-slate-700 rounded-t">
                  <h3 className="text-3xl font-semibold text-slate-100">
                    Demander un service
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="in space-y-2">
                    <input
                      id="email-address"
                      name="email"
                      variant="outlined"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Adresse Email"
                    />
                    <div className="shownhide flex items-center gap-2 relative ">
                      <input
                        id="pwrd"
                        name="password"
                        type={show ? "text" : "password"}
                        autoComplete="pwrd"
                        required
                        className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus: sm:text-sm"
                        placeholder="Mot de passe"
                      />
                      <div className="sh absolute  right-2">
                        {show === false ? (
                          <BiShow onClick={handleshow} />
                        ) : (
                          <BiSolidHide onClick={handleshow} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-100 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none hover:text-red-500 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="bg-slate-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg bg hover:bg-slate-700 hover:text-green-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Valider
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
