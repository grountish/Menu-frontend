import React from "react";
import logo from './../Assets/logo-blanco.png'
import arrow from './../Assets/contact-arrow.png'


export default function MenuQr() {
  return (
    <section id="contacto" className="contacto">
      <div className="contact-column-1">
        <img className="contact-logo" src={logo} alt="" />
      </div>
      <div className="contact-column-2">
        <div className="contact-general">
          <h3>General</h3>
          <a href="mailto:yolaresofia@gmail.com"><h3>hello@collabo.studio</h3></a>
          <h3>+34 665 895 314</h3>
        </div>
        <div className="contact-social">
          <h3>Social</h3>
          <h3>Instagram</h3>
          <h3>Facebook</h3>
        </div>
        <div className="contact-2020">
          <h3>2020</h3>
        </div>
      </div>
      <div className="contact-column-3">
        <div className="contact-studio">
          <h3>Studio</h3>
          <h3>Torrent de le flors 158</h3>
          <h3>08024</h3>
          <h3>Barcelona</h3>
        </div>
        <div className="contact-created-by">
          <h3>Created by Collabo Studio</h3>
        </div>
      </div>
      <div class="contact-column-4">
        <div className="contact-arrow-div">
          <img className="contact-arrow" src={arrow} alt="" />
        </div>
        <div className="contact-allrights">
          <h3>All rights reserved</h3>
        </div>
      </div>
    </section>
  );
}
