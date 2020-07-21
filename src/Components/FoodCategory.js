import React, { Component } from "react";
import foods from "../foods.json";

const param = window.location.pathname.slice(1);
const foundPlace = foods.places.filter((x) => x.place === param);

export default class FoodCategory extends Component {
  render() {
    const nameFood = () => {
      switch (this.props.lang) {
        case "ca":
          return this.props.nombre;
        case "en":
          return this.props.nombre_en;
        case "es":
          return this.props.nombre_es;
        default: return this.props.nombre;
       
      }
    };
    return (
      <div
        className="box"
        style={{
          height: `calc(75vh/${foundPlace[0].categorias.length})`,
          alignItems: "center",
          display: "flex",
        }}
      >
        <h1
          className="headerCategory"
          style={{
            fontSize: `calc(65vh/${foundPlace[0].categorias.length}/2.5)`,
            margin: "auto",
            color: foundPlace[0].color,
          }}
        >
          {nameFood()}
        </h1>
      </div>
    );
  }
}
