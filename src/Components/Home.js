import React, { useState, useRef, useEffect } from "react";
import { useIntersection } from "react-use"


import Carousel from "nuka-carousel";
import "./../../src/Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";


import movil from "./../Assets/movil.png";
import gsap from "gsap";
import { Power1 } from "gsap/gsap-core";


const Home = () => {
 
const [navClass, setNavClass] = useState(true);
const [colorClass, setColorClass] = useState(false);

const sectionRef = useRef (null)
const intersection = useIntersection(sectionRef, {
  root:null,
  rootMargin: "0px",
  threshold: 0.2
})

const fadeIn = element => {
  gsap.to(element,1, {
    opacity: 1,
    marker: true,
    x: 0,
    ease: "power4.out",
    stagger: {
      amount: 2
    }
  })
}

const fadeOut = element => {
  gsap.to(element,1, {
    opacity: 0,
    x: "-100vw",
    ease: "power4.out",
    stagger: {
      amount: 1.8
    }
  })
}

intersection && intersection.intersectionRatio < 0.2 ? fadeOut(".fadeIn") : fadeIn(".fadeIn")


  return (
    <div className="home">
      <div
        className={navClass ? "toggle-btn" : "toggle-btn-active"}
        onClick={() => setNavClass(!navClass)}
      >
        <span>{navClass ? "" : <FontAwesomeIcon icon={faAngleLeft} />}</span>
        <span></span>
        <span></span>
      </div>
      <nav className={navClass ? "nav" : "nav-active"}>
        <div className="nav-content">
          <div className="nav-links">
            <ul>
              <li>
                <a href="#Inicio">Inicio</a>
              </li>
              <li>
                <a href="#Nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#Servicios">Servicios</a>
              </li>
              <li>
                <a href="#MenuQR">Menu QR</a>
              </li>

              <li>
                <a href="#Contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main
        onClick={() => {
          if (navClass === false) setNavClass(!navClass);
        }}
      >
        <section className="Inicio" id="Inicio"></section>

        <section ref={sectionRef} id="Nosotros" className="Nosotros">
          <div className="frase">
            <h5>
            <span onMouseOver={() => setColorClass(!colorClass)}  onMouseOut={() => setColorClass(!colorClass)} className={ colorClass ? "palabra-clave-verde" : null}>Collabo studio</span> surge como unión de un colectivo diverso dedicado
              al sector digital. De las áreas de <span onMouseOver={() => setColorClass(!colorClass)}  onMouseOut={() => setColorClass(!colorClass)} className={ colorClass ? "palabra-clave-verde" : null}>dirección de arte</span>, estrategia,
              desarrollo web, creative coding, <span onMouseOver={() => setColorClass(!colorClass)}  onMouseOut={() => setColorClass(!colorClass)} className={ colorClass ? "palabra-clave-verde" : null}>diseño gráfico</span>, fotografía y
              community management, nos unimos para dar vida a marcas dinámicas
              con alto <span onMouseOver={() => setColorClass(!colorClass)}  onMouseOut={() => setColorClass(!colorClass)} className={ colorClass ? "palabra-clave-verde" : null}>impacto digital</span>.
            </h5>
          </div>
        </section>

        <section id="Servicios" className="Servicios">
          <ul  className="servicios-list fadeIn">
            <li className="fadeIn">Diseño Grafico</li>
            <li  className="fadeIn">Fotografía</li>
            <li  className="fadeIn">Desarrollo Web</li>
            <li className="fadeIn">Branding</li>
            <li className="fadeIn">Creative Coding</li>
          </ul>
        </section>

        <section id="MenuQR" className="MenuQR">
          <Carousel>
            <div className="menuQR-1">
              <div className="texto">
                <h2>
                  Las cartas QR llegaron para protegernos de la amenaza Covid-19. Conoce mas sobre la nueva opción que ademas cuida el planeta.
                </h2>
                <div>
                  <h3>Desliza para saber mas!</h3>
                  <h3>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                  </h3>
                </div>
              </div>
              <div className="img-container">
                <img alt="movil" src={movil}></img>
              </div>
            </div>
            <div className="menuQR-2">
              <div className="texto">
                <h2>
                  Las cartas seguras llegaron para darle batalla al covid-19
                </h2>
                <p>
                  Conoce todas las ventajas sobre esta nueva opción que cuida a
                  las personas y el planeta ahre
                </p>
                <div>
                  <h2>Desliza para saber mas!</h2>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
              <div className="img-container">
                <img alt="movil" src={movil}></img>
              </div>
            </div>
            <div className="menuQR-3">
              <div className="texto">
                <h2>
                  Las cartas seguras llegaron para darle batalla al covid-19
                </h2>
                <p>
                  Conoce todas las ventajas sobre esta nueva opción que cuida a
                  las personas y el planeta ahre
                </p>
                <div>
                  <h2>Desliza para saber mas!</h2>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
              <div className="img-container">
                <img alt="movil" src={movil}></img>
              </div>
            </div>
          </Carousel>
        </section>

       

        <section id="Contacto" className="Contacto">
          <img
            alt="img-contact"
            src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          ></img>

          <div className="footer-right">
            <h2>Contactanos</h2>

            <form action="https://formspree.io/mknqjepv" method="POST">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre..."
              ></input>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email..."
              ></input>
              <textarea
                id="message"
                name="message"
                placeholder="Mensaje..."
              ></textarea>
              <button>Enviar</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
