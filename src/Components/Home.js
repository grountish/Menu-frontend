import React,{ useState } from "react";
import Sketch from './Sketch.jsx'
import "./../../src/Home.css";
import mobileqr from './../Assets/mobil-qr.png';
const Home = () => {

  const [navClass, setNavClass] = useState (true)


  return (
    <div className="home">
    <nav className={navClass ? "nav" : "nav-active"}>     
        <div className= "nav-content">
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
        </div>
      </nav>
         <div className="toggle-btn" onClick={()=>setNavClass(!navClass)}>
        <span style={{fontFamily: 'OPTIImprovNewWideNine', fontSize:'0.7em'}}></span>
         </div>
      <main>
        <section className="Inicio" id="Inicio">
        {
          navClass
          ? <Sketch />
          : null

        }
        <img src="./../Assets/ruido.jpg" id="ruido" alt=""/>
        </section>
        <section id="Nosotros" className="Nosotros">
          <p class="nosotres-texto">
          Collabo studio surge como unión de un colectivo diverso dedicado al desarrollo creativo.
De las áreas de dirección de arte, estrategia, desarrollo web, creative coding, diseño gráfico, fotografía y community management, nos unimos para dar vida a proyectos dinámicos con alto impacto digital.
          </p>
        </section>

        <section id="MenuQR" className="MenuQR">
          <div className="img-qr-container"> <img className="img-qr" src={mobileqr} alt=""/> </div>
          <div className="buttons-caption-qr-container">
            <p className="texto-carta-qr">Las cartas QR llegaron para protegernos de la amenaza del COVID-19. Conoce màs sobre la nueva opciòn que además cuida el planeta.</p>
            <div className="buttons-container-qr">
              <div className="button-qr QR1">Ver Demo</div>
              <div className="button-qr QR2">Saber Màs</div>
            </div>
          </div>
        </section>

        <section id="Contacto" className="Contacto">
        <div>
          
        </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
