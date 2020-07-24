import React from "react";
import mobileqr from "./../Assets/mobil-qr.png";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function MenuQr() {
  return (
    <section id="MenuQR" className="MenuQR">
      <Router>
        <div className="img-qr-container">
          {" "}
          <img className="img-qr" src={mobileqr} alt="" />{" "}
        </div>
        <div className="buttons-caption-qr-container">
          <p className="texto-carta-qr">
            Las cartas QR llegaron para protegernos de la amenaza del COVID-19.
            Conoce màs sobre la nueva opciòn que además cuida el planeta.
          </p>
          <div className="buttons-container-qr">
             <Link to=""><div className="button-qr QR1">Ver Demo</div></Link>
              <a href="#Contacto"><div className="button-qr QR2">Saber Màs</div></a> 
          </div>
        </div>
      </Router>
    </section>
  );
}
