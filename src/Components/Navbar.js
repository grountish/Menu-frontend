import React, { useState } from "react";
import Plus from './../Assets/plus.png'

// const plus =()=>{
//   return(
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.56 14.76">
//      <g fill="#61DAFB">
//    <line x1="7.3" y1="0.06" x2="7.3" y2="14.71" />
//     <line x1="14.62" y1="7.39" x2="-0.03" y2="7.39" /></g></svg>
//   )
// }

const Navbar = (props) => {
  const [navClass, setNavClass] = useState(false);

  const settingNav =()=>{
    setNavClass(!navClass);
   props.setNavAct();
  }

  return (
    <div className="nav-content">
      <nav className={navClass ? "nav-active" : "nav"}>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#Inicio">Inicio</a>
            </li>
            <li>
              <a href="#Servicios">Servicios</a>
            </li>
            <li>
              <a href="#MenuQR">Menu QR</a>
            </li>
            <li>
              <a href="#Nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="toggle-btn" onClick={() => settingNav()}> {navClass ? <span style={{ fontFamily: "OPTIImprovNewWideNine", fontSize: "0.7em" }}></span> :<img style={{width:'30px'}} src={Plus} alt="a"/>}
        
      </div>
    </div>
  );
};
export default Navbar;
