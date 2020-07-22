import React from "react";
import "./../../src/Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ServicioCards from "./ServicioCard";

const Home = () => {
  // --------------------- control carousel de peliculas ------------

  let serviceRow = document.getElementById("root");


  const rigthClick = () => {
    if (serviceRow) {
      serviceRow.scrollLeft += serviceRow.offsetWidth;
    }
  };

  const leftClick = () => {
    if (serviceRow) {
      serviceRow.scrollLeft -= serviceRow.offsetWidth;
    }
  };

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
      servicio: "Diseño Grafico",
      descripcion: "loremunmonnujkjf",
      img:
        "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];
  return (
    <div id="caca">
    
      <nav>
        <div className="logo">Collabo Studio</div>
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
              <a href="#Nosotors">Nosotros</a>
            </li>
            <li>
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className="Inicio" id="Inicio">
          <div className="frase">
          </div>
        </section>

        <section id="Servicios" className="Servicios">
          <div className="contenedor-principal">
            <button id="flecha-izq" className="flecha-izq" onClick={leftClick}>
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
            <button id="flecha-der" className="flecha-der" onClick={rigthClick}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </section>

        <section id="MenuQR" className="MenuQR"></section>

        <section id="Nosotros" className="Nosotros"></section>

        <section id="Contacto" className="Contacto"></section>
      </main>
    </div>
  );
};

export default Home;
