import React from "react";
import mobileqr from "./../Assets/mobil-qr.png";
import { BrowserRouter as Router } from "react-router-dom";

export default function MenuQr() {
  
  const scrollToX =()=>{
    const carrouselContainer = document.getElementById('carrousel-container');
   if (carrouselContainer.scrollLeft < window.innerWidth * 3){    
     carrouselContainer.scrollBy(100, 0);   
    } else{
      carrouselContainer.scrollBy(-1 * window.innerWidth * 3, 0);
   }
  }

  return (
    <section id="MenuQR" className="MenuQR">
    <div onClick={()=>scrollToX()} id="arrow-right">&#65310;</div>
      <Router>
        <div id="carrousel-container" className="carrousel-container">
          <div className="carrousel-section">
            <div className="img-qr-container">
              {" "}
              <img className="img-qr" src={mobileqr} alt="" />{" "}
            </div>
            <div className="buttons-caption-qr-container">
              <h1 className="header-QR">Mi <br /> Qarta</h1>
              <p className="QR-text">
                {" "}
                Las cartas QR llegaron para protegernos de la amenaza del
                COVID-19. Conoce màs sobre la nueva opciòn que además cuida
                nuestro planeta.
              </p>
            </div>
          </div>
          <div className="carrousel-section">
           <div style={{marginTop:'auto'}}>
               <div className="button-qr QR2"> Ver Video</div>
           </div>
            
           
             
            <div className="buttons-caption-qr-container">
                <div className="header-QR">QUÉ ES <br /> MI QARTA</div>
             
            
            </div>
          </div>
          <div className="carrousel-section">
          <div className="benefits-container">
            <ul className="benefit-list" style={{margin:'auto'}}>
              <li>Plan de pago mensual</li>
              <li>Diseño de carta interactiva</li>
              <li>Filtros de preferencia</li>
              <li>Revision mensual</li>
            </ul>
            <ul className="benefit-list" style={{margin:'auto'}}>

              <li>Traducciòn a 3 idiomas</li>
              <li>Barra de Busqueda</li>
              <li>Servidor seguro todo el año</li>
              <li>Codigo QR y enlace propio</li>
              <li>20 Adhesivos para tus mesas</li>
            </ul></div>
            <div className="buttons-caption-qr-container">
              <h1 className="header-QR">BENEFICIOS<br /> MI QARTA</h1>
            </div>
          </div>
          <div className="carrousel-section">
            <div className="references-container">
              <h1>REFERENCIAS</h1>
              <p><i> "Desde que usamos la carta segura podemos cuidar de nuestros clientes para que disfruten con total seguridad. <br />Funciona super rápido y podemos mostrarles solo las opciones de comida que les gusten en su idioma.</i></p>
              <h6>Mauri, de Polito. </h6>
            </div>
            <div className="buttons-caption-qr-container">
              <h1 className="header-QR">QUIÉNES <br /> USAN MI QARTA</h1>
            </div>
          </div>
        </div>
      </Router>
    </section>
  );
}
