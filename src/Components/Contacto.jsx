import React from "react";
import logo from './../Assets/logo-blanco.png'
import arrow from './../Assets/contact-arrow.png'


export default function MenuQr() {
  return (
    <section id="contacto" className="contacto">
      <div className="contact-column-1">
        <img className="contact-logo" src={logo} alt="" />
      </div>
      <div className="contact-info-container">
      <div className="contact-column-2">
        <div className="contact-general">
          <h3>General</h3>
          <a href="mailto:yolaresofia@gmail.com"><h3 className="mail">hello@collabo.studio</h3></a>
          <h3 className="grey">+34 665 895 314</h3>
        </div>
        <div className="contact-social">
          <h3>Social</h3>
          <a href="https://www.instagram.com/collabostudio/?hl=es"><h3 className="grey">Instagram</h3></a>
          <a href="https://www.facebook.com/Collabo-Studio-106002161205657"><h3 className="grey">Facebook</h3></a> 
        </div>
      </div>
      <div className="contact-column-3">
        <div className="contact-studio">
          <h3>Studio</h3>
          <h3 className="grey">Torrent de les flors 158</h3>
          <h3 className="grey">08024</h3>
          <h3 className="grey">Barcelona</h3>
        </div>
        
      </div>
      <div className="contact-column-4">
        <div className="contact-allrights">
          <h3 className="grey">All rights reserved.</h3>
        </div>
      </div>
      <a  href="#Inicio"><img className="contact-arrow logos" src={arrow} alt=""/></a>
      </div>
    </section>
  );
}
