import React from "react";
import foods from "../foods.json";

const param = window.location.pathname.slice(1);
const foundPlace = foods.places.find((x) => x.place === param);


const FoodCategory = ({lang, nombre, nombre_en, nombre_es}) => {

    const nameFood = () => {
      switch (lang) {
        case "ca":
          return nombre;
        case "en":
          return nombre_en;
        case "es":
          return nombre_es;
        default: return nombre;
    }
  }
    return (
      <div
        className="box"
        style={{
          height: `calc(70vh/${foundPlace.categorias.length})`,
          alignItems: "center",
          display: "flex",
        }}
      >
        <h1
          className="headerCategory"
          style={{
            fontSize: `calc(62vh/${foundPlace.categorias.length}/2.5)`,
            margin: "auto",
            color: foundPlace.color,
          }}>
          {nameFood()}
        </h1>
      </div>
    );
  }


export default FoodCategory;