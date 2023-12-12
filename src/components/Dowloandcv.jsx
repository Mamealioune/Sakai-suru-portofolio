import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";
const Dowloandcv = () => {
    return (
        <div className='flex  justify-center '>
                    <a
         
          href="../assets/CV COMPLET REMASTERISE.pdf" download="CV COMPLET REMASTERISE.pdf"
          class="inline-flex gap-2 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 transition-all duration-150 hover:scale-90 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Télécharger mon CV ici
         <AiOutlineDownload className='fill-white' />
        </a>
        </div>
    );
};

export default Dowloandcv;