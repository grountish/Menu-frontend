import React from "react";
import { useScroll } from "./../hooks/useScroll";

const Quehacemos = () => {
  const scroll = useScroll(null);

  return (
    <div id="quehacemos">
      <section className="section-nos">
        <div className="text-nos">
          <h1 style={{ transform: `translate(${-20 + (scroll.y / 100)}%,0)` }}> BRANDING DISEÑO GRÁFICO NAMING DIRECCIÓN DE ARTE BRANDING DESARROLLO WEB</h1>
        </div>
      </section>

      <section className="section-nos">
        <div className="text-nos">
          <h1 style={{ transform: `translate(-${scroll.y / 100}%,0)` }}>COMMUNITY MANAGEMENT ESTRATEGIA POSICIONAMIENTO CREACIÓN DE CONTENIDO</h1>
        </div>
      </section>
      <section className="section-nos">
        <div className="text-nos">
         <h1 style={{ transform: `translate(${-65 + (scroll.y / 30)}%,0)` }}>POSICIONAMIENTO DESARROLLO WEB RESPONSIVE WEB DESIGN CREATIVE CODING</h1></div>
      </section>
      <section className="section-nos">
        <div className="text-nos"> <h1 style={{ transform: `translate(-${ scroll.y / 100}%,0)` }}> FOTOGRAFÍA EDICIÓN FOTO PRODUCTO VIDEO</h1></div>
      </section>
      <section className="section-nos">
        <div className="text-nos"> <h1 style={{ transform: `translate(${-35 +(scroll.y / 100)}%,0)` }}>PRODUCCION AUDIOVISUAL CURADURIA DISEÑO 3D VVVV </h1></div>
      </section>
      {
          window.outerWidth < 600
          ? <div>
          <section className="section-nos">
        <div className="text-nos">
          <h1 style={{ transform: `translate(${-10 + (scroll.y / 100)}%,0)` }}> BRANDING DISEÑO GRÁFICO NAMING DIRECCIÓN DE ARTE BRANDING DESARROLLO WEB</h1>
        </div>
      </section>

      <section className="section-nos">
        <div className="text-nos">
          <h1 style={{ transform: `translate(-${scroll.y / 100}%,0)` }}>COMMUNITY MANAGEMENT ESTRATEGIA POSICIONAMIENTO CREACIÓN DE CONTENIDO</h1>
        </div>
      </section>
      <section className="section-nos">
        <div className="text-nos">
         <h1 style={{ transform: `translate(${-45 + (scroll.y / 30)}%,0)` }}>POSICIONAMIENTO DESARROLLO WEB RESPONSIVE WEB DESIGN CREATIVE CODING</h1></div>
      </section>
      <section className="section-nos">
        <div className="text-nos"> <h1 style={{ transform: `translate(-${scroll.y / 100}%,0)` }}> FOTOGRAFÍA EDICIÓN FOTO PRODUCTO VIDEO</h1></div>
      </section>
      <section className="section-nos">
        <div className="text-nos"> <h1 style={{ transform: `translate(${-35 +(scroll.y / 100)}%,0)` }}>PRODUCCION AUDIOVISUAL CURADURIA DISEÑO 3D VVVV </h1></div>
      </section>
          </div>
          : null
      }
    </div>
  );
};

export default Quehacemos;
