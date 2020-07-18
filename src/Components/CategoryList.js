import React, { Component } from 'react';
import foods from '../foods.json';
import FoodCategory from './FoodCategory';
import { Link } from 'react-router-dom';

export default class Foodlist extends Component {
  state = {
    foods: foods,
  };

  render() {
    return (
      <div className="centered">
          <ul className="list-food">
            {this.state.foods.categorias.map((category, index) => {
              return (
                  <Link style={{color: foods.color}} key={index} to={`/category/${category.nombre}`}>
                    <FoodCategory {...category} />
                  </Link>
              );
            })}
          </ul>
        </div>
    );
  }
}
