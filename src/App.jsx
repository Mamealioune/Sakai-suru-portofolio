import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import Formations from "./components/Formations";
import Carousel from "./components/Carousel";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="/" element={<Acceuil />} />
          <Route path="/formations" element={<Formations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
