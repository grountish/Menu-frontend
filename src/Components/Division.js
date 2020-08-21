import React, { useContext} from "react";
import { DataContext } from '../Context/Context'

const Division = (props) => {

  const {foundPlace, lang} = useContext(DataContext)
    const nameFood = () => {
      switch (lang) {
        case "ca":
          return props.nombre;
        case "en":
          return props.nombre_en;
        case "es":
          return props.nombre_es;
        default: return props.nombre;
    }
  }
    return (
      <div
        className="box"
        style={{
          height: `calc(70vh/${foundPlace.divisiones.length  + 1})`,
          alignItems: "center",
          display: "flex",
          borderBottom: foundPlace.borderButton,
          borderTop: foundPlace.borderButton
        }}
      >
        <h1
          className="headerCategory"
          style={{
            fontSize: `calc(62vh/${foundPlace.divisiones.length + 1}/2.5)`,
            margin: "auto",
            color: foundPlace.color,
            
          }}>
          {nameFood()}
        </h1>
      </div>
    );
  }


export default Division;