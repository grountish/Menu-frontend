import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const quehacemos = () => {
  return <div></div>;
};

const Quehacemos = () => {
  let w = useRef(null);
  let sect1 = useRef(null);
  let sect2 = useRef(null);
  let sect3 = useRef(null);
  let sect4 = useRef(null);
  let sect5 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = [
      sect1.current,
      sect2.current,
      sect3.current,
      sect4.current,
      sect5.current,
    ];

    gsap.utils.toArray(sections).forEach((section, index) => {
      const w = sections[index];
      const [x, xEnd] =
        index % 2
          ? ["200%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: sect1.current,
            scrub: 0.1,
          },
        }
      );
    });
  }, []);
  return (
    <div>
      <section ref={sect1} className="section-nos">
        <div ref={w} >
        <h1 className="text-nos">BRANDING DISEÑO GRÁFICO NAMING</h1>
          
        </div>
      </section>

      <section ref={sect2} className="section-nos">
        <div ref={w} className="text-nos">
          COMMUNITY-MANAGEMENT-ESTRATEGIA-POSICIONAMIENTO-CREACIÓN DE CONTENIDO 
        </div>
      </section>
      <section ref={sect3} className="section-nos">
        <div ref={w} className="text-nos">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
      </section>
      <section ref={sect4} className="section-nos">
        <div ref={w} className="text-nos">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
      </section>
      <section ref={sect5} className="section-nos">
        <div ref={w} className="text-nos">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
      </section>
    </div>
  );
};

export default Quehacemos;
