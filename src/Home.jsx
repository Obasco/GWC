import React from "react";
import Navbar from "./Navbar";
import Hero from "./Layout/Home/Hero";
import Services from "./Layout/Home/Services";
import { AboutH } from "./Layout/Home/AboutH";
import Packages from "./Layout/Home/Packages";
import { Contact } from "./Layout/Home/Contact";
import Footer from "./Layout/Home/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutH />
      <Packages />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
