import React, { Component } from 'react';
import foods from '../foods.json';
import Foodbox from './Foodbox';
import Searchbar from './Searchbar';
import './../App.css';

const param = window.location.pathname.slice(1)
const foundPlace = foods.places.filter(x => x.place === param)
const arrayOfMenu = [];
foundPlace[0].categorias.map(x => arrayOfMenu.push(x.data))
const flattened = arrayOfMenu.flat()

console.log(flattened)

export default class SearchComponent extends Component {
  state = {
    foods: foods,
    showAdd: false,
    inputValue: '',
    listOfFoods: [],
    filterFoods: flattened
  };

  filterOnChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    let searchValue = e.target.value.toLowerCase();
    let filteredFoods = flattened.filter((food) =>
      food.nombre.toLowerCase().includes(searchValue) || 
      food.descripcion.toLowerCase().includes(searchValue) ||
      food.tags.toLowerCase().includes(searchValue)
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
        <div className="list-add">
          <ul className="list-food">
          {
            this.state.filterFoods.map((e, i)=> <Foodbox {...e} key={i} />)
          }
          </ul>
        </div>
      </div>
    );
  }
}
