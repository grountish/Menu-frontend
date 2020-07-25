import React, { useState } from "react";
import Plus from './../Assets/plus.png'


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
      <div className="toggle-btn" onClick={() => settingNav()}> {navClass ? <span style={{ fontFamily: "OPTIImprovNewWideNine", fontSize: "0.7em" }}></span> : <img style={{width:'30px'}} src={Plus} alt="a"/>}
        
      </div>
    </div>
  );
};
export default Navbar;
