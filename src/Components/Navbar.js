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
      <nav className={navClass ? "nav-active" : "nav"}>
        <div className="nav-links">
          <ul>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Inicio">Inicio</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Servicios">Servicios</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#MenuQR">Menu QR</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Nosotros">Nosotros</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Contacto">Contacto</AnchorLink>
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
