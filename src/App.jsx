import React from "react";
import Navbar from "./Navbar";
import Hero from "./Layout/Home/Hero";
import Services from "./Layout/Home/Services";
import { AboutH } from "./Layout/Home/AboutH";
import Packages from "./Layout/Home/Packages";
import { Contact } from "./Layout/Home/Contact";
import Footer from "./Layout/Home/Footer";
import Service from "./Layout/Services/Service";
import Home from "./Home";
import About from "./Layout/About";


import { Routes , Route } from "react-router-dom";

const App = () => {
  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />}/>
      <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
