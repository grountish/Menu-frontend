import React,{ useState } from "react";

import "./../../src/Home.css";

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
        <span>{navClass ? "III" : "X"}</span>
         </div>
      <main>
        <section className="Inicio" id="Inicio">
            <div id="sketch"></div>
    <img src="./../Assets/ruido.jpg" id="ruido" alt=""/>
        </section>
        <section id="Nosotros" className="Nosotros">
          <p class="nosotres-texto">
          Collabo studio surge como unión de un colectivo diverso dedicado al desarrollo creativo.
De las áreas de dirección de arte, estrategia, desarrollo web, creative coding, diseño gráfico, fotografía y community management, nos unimos para dar vida a proyectos dinámicos con alto impacto digital.
          </p>
        </section>

        <section id="MenuQR" className="MenuQR">
          
        </section>

        <section id="Contacto" className="Contacto">

        </section>
      </main>
    </div>
  );
};

export default Home;
