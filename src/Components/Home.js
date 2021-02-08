import React, { useState } from "react";
import Sketch from "./Sketch.jsx";
import Navbar from "./Navbar.js";
import Nosotres from "./Nosotres.jsx";
import Quehacemos from "./Quehacemos.jsx";
import Contact from "./Contact.jsx";
import Portfolio from "./Portfolio.jsx";
// import Services from "./Services.jsx";
import "./../../src/Home.css";
// import Logo from './logo';

const param = window.location.pathname.length > 2;


const Home = () => {
  const [navAct, setNavAct] = useState(true);

  const setNavActFunction = (navAct) => {
    setNavAct(!navAct);
  };

  return (
    <div className="home">

      <Navbar setNavAct={() => setNavActFunction(navAct)} />
    
      <div style={{ minHeight: "100vh" }}>
        {!param && navAct ? <Sketch /> : null}
      </div>

      {/* <Logo /> */}
      <Nosotres />

      <Quehacemos />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  );
};

export default Home;
