import React from "react";
import Navbar from "./Navbar";
import Hero from "./Layout/Home/Hero";
import Services from "./Layout/Home/Services";
import { AboutH } from "./Layout/Home/AboutH";
import Packages from "./Layout/Home/Packages";
// import { Contact } from "./Layout/Home/Contact";
import Footer from "./Layout/Home/Footer";
import Service from "./Layout/Services/Service";
import Home from "./Home";
import About from "./Layout/About";
import Gallery from "./Layout/Gallery";
import Contact from "./Layout/Contact";
import { useEffect, useState } from "react";
import Loader from "./Layout/Loader"
import Verified from "./Layout/Verified";

import { Routes , Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

AOS.init();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate page load / data fetch
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // adjust time or remove if using real data

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  } 


  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />}/>
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/verify" element={<Verified />} />
      </Routes>
    </>
  );
};

export default App;
