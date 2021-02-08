import React, { useState } from "react";
import lavika from "./../Assets/porfolio/lavija.jpg";
import bardot from "./../Assets/porfolio/bardot.jpg";
import c4a from "./../Assets/porfolio/c4a.jpg";
import clarisa from "./../Assets/porfolio/clarr.jpg";
import excerc from "./../Assets/porfolio/excerc.jpg";
import dicator from "./../Assets/porfolio/slide1.jpg";

const works = [
  {
    name: "Lavika",
    description: "Web",
    source: lavika,
    link: "https://lavika-app.herokuapp.com/",
  },
  {
    name: "C4A",
    description: "Web",
    source: c4a,
    link: "https://c4a-coding-for-artists.herokuapp.com/",
  },
  {
    name: "exersAIze",
    description: "Web",
    source: excerc,
    link: "https://exersaize.herokuapp.com/main",
  },
  {
    name: "Clarissa Watson",
    description: "Web",
    source: clarisa,
    link: "https://clarissawatson.com/",
  },
  {
    name: "Cardinale-Bardot",
    description: "Web",
    source: bardot,
    link: "https://50s-pop-cardinale-bardot.glitch.me/",
  },
  {
    name: "Dictator-Killer",
    description: "Web",
    source: dicator,
    link: "https://grountish.github.io/Dictator-Killer/",
  },
];
const Portfolio = () => {
  const displayWork = (index) => {
    setDisplayPic(works[index].source);
    setDisplayDescription(works[index].description);
  };
  const [displayPic, setDisplayPic] = useState(null);
  const [displayDescription, setDisplayDescription] = useState(null)
  return (
    <div className="portfolio-container">
    <h1 className="portfolio-header">PORTFOLIO</h1>
    <div className="portfolio">
           <div className="lista-portfolio">
        {works.map((work, index) => (
          <div className="work-name" onMouseOver={() => displayWork(index)}> <a href={work.link}> <h1>{work.name}</h1></a> </div>
        ))}
      </div>
      <div className="display-portfolio">
        <img src={displayPic} alt="" />
        <h1>{displayDescription}</h1>
      </div>
    </div>
    </div>
   
  );
};

export default Portfolio;
