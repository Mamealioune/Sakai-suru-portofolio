import React from 'react';

const Footer = () => {
    return (
        <div>
            
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Technik.dev™</a>. Tous les droits réservés.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
       
    
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Contacter nous pour vos services</a>
        </li>
       
    </ul>
    </div>
</footer>

        </div>
    );
};

export default Footer;