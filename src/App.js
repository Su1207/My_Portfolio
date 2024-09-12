import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
// import ScrollDown from "./components/home/ScrollDown";
import ScrollUp from "./components/scrollup/ScrollUp";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./components/portfolio/Portfolio";
import Pointer from "./components/Pointer";

const App = () => {
  AOS.init();

  const [magnetActive, setMagnetActive] = useState(false);

  return (
    <>
      <Pointer hideCursor={magnetActive} />

      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
