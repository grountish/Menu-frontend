import React,{useState} from "react";
import Sketch from "./Sketch.jsx";
import Navbar from "./Navbar.js";
import Nosotres from "./Nosotres.jsx"
import MenuQr from "./MenuQr.jsx"
import Contacto from "./Contacto.jsx"
import "./../../src/Home.css";


const param = window.location.pathname.length > 2;

const Home = () => {

  const [navAct,setNavAct]=useState(true);

  const setNavActFunction =(navAct)=>{
    setNavAct(!navAct);
  }
  return (
    <div className="home">
      <Navbar setNavAct={()=>setNavActFunction(navAct)} />
      <div style={{minHeight:'100vh'}}>
      {
       !param && navAct
        ? <Sketch />
        : null
      }
      </div>
      <Nosotres />
      <MenuQr />
      <Contacto />
      
    </div>
  );
};

export default Home;
