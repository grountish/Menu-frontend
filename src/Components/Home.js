import React,{useState} from "react";

import Carousel from "nuka-carousel";
import "./../../src/Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import ServicioCards from "./ServicioCard";

import movil from "./../Assets/movil.png";

const Home = () => {
  // --------------------- control carousel de peliculas ------------

  const [navClass, setNavClass] = useState (true)


  let packService = [
    {
      servicio: "Fotografia",
      descripcion: "loremunmonnujkjf",
      img:
        "https://images.pexels.com/photos/233314/pexels-photo-233314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      servicio: "Desarrollo Web",
      descripcion: "loremunmonnujkjf",
      img:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      servicio: "Community Management",
      descripcion: "loremunmonnujkjf",
      img:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      servicio: "Community Management",
      descripcion: "loremunmonnujkjf",
      img:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      servicio: "Diseño Grafico",
      descripcion: "loremunmonnujkjf",
      img:
        "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  return (
    <div className="home">
         <div className="toggle-btn" onClick={()=>setNavClass(!navClass)}>
  <span>{navClass ? "III" : "X"}</span>
         </div>
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
      <main>
        <section className="Inicio" id="Inicio">
      
          
        </section>

        <section id="Servicios" className="Servicios">
          <div className="contenedor-principal">
            <button id="flecha-izq" className="flecha-izq" >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div className="contenedor-carousel" id="serviceRow">
              <div className="carousel">
                <div className="serv">
                  {packService.map((item, index) => (
                    <ServicioCards data={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
            <button id="flecha-der" className="flecha-der" >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </section>

        <section id="MenuQR" className="MenuQR">
          <Carousel>
            <div className="menuQR-1">
              <div className="texto">
                <h2>
                  Las cartas seguras llegaron para darle batalla al covid-19
                </h2>
                <p>
                  Conoce todas las ventajas sobre esta nueva opción que cuida a
                  las personas y el planeta ahre
                </p>
                <div>
                  <h3>Desliza para saber mas!</h3>
                  <h3><FontAwesomeIcon icon={faAngleDoubleRight} /></h3>
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

        <section id="Nosotros" className="Nosotros">
        <div className="frase">
            <h5>
            Collabo studio surge como unión de un colectivo diverso dedicado al sector digital. 
De las áreas de dirección de arte, estrategia, desarrollo web, creative coding, diseño gráfico, fotografía y community management, nos unimos para dar vida a marcas dinámicas con alto impacto digital.
            </h5>
          </div>
        </section>

        <section id="Contacto" className="Contacto">
          <img
            alt="img-contact"
            src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          ></img>

          <div className="footer-right">
            <h2>Contactanos</h2>
                

            <form action="https://formspree.io/mknqjepv" method="POST">
            <input type="text" id="name" name="name" placeholder="Nombre..."></input>
              <input type="text" id="email" name="email" placeholder="Email..."></input>
              <textarea id="message" name="message" placeholder="Mensaje..."></textarea>
              <button>Enviar</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
