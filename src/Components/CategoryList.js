import React, { useContext } from "react";
import foods from "../foods.json";
import FoodCategory from "./FoodCategory";
import { Link } from "react-router-dom";
import { DataContext } from './../Context/Context'

const FoodList = ({ lang }) => {
  const {foundPlace} = useContext(DataContext)

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
                <FoodCategory {...category} lang={lang} />
              </Link>
            );
          })}
        </ul>
      </div>
    );
}

export default FoodList;