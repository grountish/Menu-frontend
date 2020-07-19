import React, { Component } from "react";
import foods from "../foods.json";
import FoodCategory from "./FoodCategory";
import { Link } from "react-router-dom";

export default class Foodlist extends Component {
  state = {
    foods: foods.places,
    lang: "",
  };

  render() {
    const param = window.location.pathname.slice(1);
    // const foundPlace = foods.places.filter((x) => x.place === param);
    let placeName = param.split("/")[0]
const foundPlace = foods.places.filter(x => x.place === param || x.place === placeName)

    return (
      <div className="centered">
        <ul className="list-food">
          {foundPlace[0].categorias.map((category, index) => {
            return (
              <Link
                style={{ color: foods.color }}
                key={index}
                to={`${foundPlace[0].place}/category/${category.nombre}`}
              >
                <FoodCategory {...category} lang={this.props.lang} />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
