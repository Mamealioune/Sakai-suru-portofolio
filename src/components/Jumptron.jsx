import React, { useEffect } from "react";
import Buttonmod from "../Pages/Buttonmod";
import Typewriter from "typewriter-effect";

const Jumptron = () => {
  return (
    <div id="jump">
      <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold font-lora tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ["Bienvenue sur mon espace Saikai Suru MAD"],
                pauseFor: 10000,
              }}
            />
          </h1>
          <p className="mb-8 text-lg font-lora text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  "Je m'appel Mame Alioune Diaw, je suis développeur Front-End, entrepreuneur CEO de Technik.dev, très ambitieux er visionnaire,prêt à transformer vos requêtes en solutions fiable, vous voulez des sites ergonomiques et agrèable au yeux vous êtes au bon endroit",
                ],
                pauseFor: 9000,
                deleteSpeed: 10,
              }}
            />
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Buttonmod />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jumptron;
