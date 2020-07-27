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
      <nav onClick={() => settingNav()} className={navClass ? "nav-active" : "nav"}>
        <div className="nav-links">
          <ul>
            <li>
              <a onClick={() => settingNav()}  href="#Inicio">Inicio</a>
            </li>
            <li>
              <a onClick={() => settingNav()} href="#Nosotros">Nosotros</a>
            </li>
          
            <li>
              <a onClick={() => settingNav()} href="#MenuQR">Menu QR</a>
            </li>
            <li>
              <a onClick={() => settingNav()} href="#Servicios">Servicios</a>
            </li>
            <li>
              <a onClick={() => settingNav()} href="#contacto">Contacto</a>
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
