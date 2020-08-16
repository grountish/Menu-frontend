import React, { useState } from "react";
import foods from "../foods.json";
import Foodbox from "./Foodbox";
import "./../App.css";


const FoodList = ({lang, match}) => {

    let placeName = match.params.place;

    const foundPlace = foods.places.filter(
      (x) =>  x.place === placeName
    );

    const categoryFoods = match.params.categoryName ;
    const foundCategory = foundPlace[0].categorias.find(
      (category) => categoryFoods === category.nombre
    );

  
      const nameFood = () => {
        switch (lang) {
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
              return <Foodbox {...oneFood} key={index} lang={lang} />;
            })}
          </ul>
        </div>
      </div>
    );
  }

export default FoodList;