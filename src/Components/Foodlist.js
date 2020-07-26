import React, { Component } from "react";
import foods from "../foods.json";
import Foodbox from "./Foodbox";
import "./../App.css";


export default class Foodlist extends Component {
  state = {
    foods: foods.places,
    inputValue: "",
    filterFoods: foods.places,
    listOfFoods: [],
  };
  
    filterOnChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    let searchValue = e.target.value.toLowerCase();
    let filterFoods = [...this.state.foods];

    let filteredFoods = filterFoods.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );

    this.setState({
      filterFoods: filteredFoods,
    });
  };

  render() {

   
    let placeName = this.props.match.params.place;

    const foundPlace = foods.places.filter(
      (x) =>  x.place === placeName
    );

    const categoryFoods = this.props.match.params.categoryName ;
    const foundCategory = foundPlace[0].categorias.find(
      (category) => categoryFoods === category.nombre
    );

  
      const nameFood = () => {
        switch (this.props.lang) {
          case "ca":
            return foundCategory.nombre.toUpperCase();
          case "en":
            return foundCategory.nombre_en.toUpperCase();
          case "es":
            return foundCategory.nombre_es.toUpperCase();
          default: return foundCategory.nombre.toUpperCase();
         
        }
      }
    return (
      <div className="centered">
        <div className="list-add">
          <ul className="list-food">
            <h4 className="title-category">{nameFood()}</h4>
            {foundCategory.data.map((oneFood, index) => {
              return <Foodbox {...oneFood} key={index} lang={this.props.lang} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
