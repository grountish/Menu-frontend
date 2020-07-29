import React, { useState } from "react";
import Plus from './../Assets/plus.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = (props) => {
  const [navClass, setNavClass] = useState(false);

  const settingNav =()=>{
    setNavClass(!navClass);
   props.setNavAct();
  }

  const hidenav = () => {
    setNavClass(false)
  }

  return (
    <div className="nav-content">
      <nav onClick={() => settingNav()} className={navClass ? "nav-active" : "nav"}>
        <div className="nav-links">
          <ul>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Inicio">Inicio</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Nosotros">Quiénes somos</AnchorLink>
            </li>
          
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Servicios">Servicios</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#MenuQR">Menu QR</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Contacto">Contacto</AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="toggle-btn" onClick={() => settingNav()}> 
       
       <span className={navClass ? "bottonPlus1-active" : "bottonPlus" } ></span> 
       <span className={navClass ? "bottonPlus2-active" : "bottonPlus2"}></span> 
      </div>
    </div>
  );
};
export default Navbar;
