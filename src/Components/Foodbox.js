import React, { Component } from 'react';

export default class Foodbox extends Component {
  state = {
    quantity: '',
    totalCalories: '',
  };

  render() {
    return (
      <div className="food-box">
        <div className="left-box">
          <h4>{this.props.nombre}</h4>
          <p>{this.props.descripcion}</p>
        </div>
      <h4 className="h4-precio">€{this.props.precio}</h4>
      </div>
    );
  }
}
