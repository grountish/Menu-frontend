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
    let placeName = this.props.match.params.place;
    const foundPlace = foods.places.find((x) => x.place === placeName);

    return (
      <div className="centered">
        <ul className="list-food">
          {foundPlace.categorias.map((category, index) => {
            return (
              <Link
                style={{ color: foods.color }}
                key={index}
                to={`${foundPlace.place}/category/${category.nombre}`}
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
