import React, { Component } from 'react';
import foods from '../foods.json';
import Foodbox from './Foodbox';
import './../App.css';

const param = window.location.pathname.slice(1)
const foundPlace = foods.places.filter(x => x.place === param)

export default class Foodlist extends Component {
  state = {
    foods: foods.places,
    inputValue: '',
    filterFoods: foods.places,
    listOfFoods: []
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
    const categoryFoods = this.props.match.params.categoryName;
    console.log(foundPlace[0])
    const foundCategory = foundPlace[0].categorias.find((category) => categoryFoods === category.nombre);
    return (
      <div className="centered">
        <div className="list-add">
          <ul className="list-food">
            {
                        foundCategory.data.map((oneFood, index) => {
                            return (
                                <Foodbox {...oneFood} key={index}/>
                            );
                        })
                    }
          </ul>
        </div>
      </div>
    );
  }
}
