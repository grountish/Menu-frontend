import React, { Component } from "react";
import foods from "../foods.json";
import Foodbox from "./Foodbox";
import Searchbar from "./Searchbar";

import "./../App.css";

const arrayOfMenu = [];

const foodsCopy = foods;
foodsCopy.categorias.map((x) => arrayOfMenu.push(x.data));
const flattened = arrayOfMenu.flat();

export default class SearchComponent extends Component {
  state = {
    foods: foods,
    showAdd: false,
    inputValue: "",
    listOfFoods: [],
    filterFoods: flattened,
  };

  filterOnChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    let searchValue = e.target.value.toLowerCase();
    let filteredFoods = flattened.filter(
      (food) =>
        food.nombre.toLowerCase().includes(searchValue) ||
        food.descripcion.toLowerCase().includes(searchValue) ||
        food.tags.toLowerCase().includes(searchValue)
    );

    this.setState({
      filterFoods: filteredFoods,
    });
  };

  filterByTag = (tag) => {
    let filteredFoods = flattened.filter((food) =>
      food.tags.toLowerCase().includes(tag)
    );

    this.setState({
      filterFoods: filteredFoods,
    });
  };

  render() {
    return (
      <div className="centered">
        <Searchbar
          filterOnChange={this.filterOnChange}
          inputValue={this.state.inputValue}
        />
        <div className="iconos-filter">
          <div className="iconos-filter-text" onClick={() => this.filterByTag("vega")}>Vegà</div>
    <div className="iconos-filter-text" onClick={() => this.filterByTag("vegetaria")}>Vegetarià</div>
          <div className="iconos-filter-text" onClick={() => this.filterByTag("celiac")}>Celiac</div>
        </div>
        <div className="list-add">
          <ul className="list-food">
            {this.state.filterFoods.map((e, i) => (
              <Foodbox {...e} key={i} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
