import React, { Component } from 'react';

export default class Foodbox extends Component {

  render() {
    const nameFood = () => {
      switch (this.props.lang) {
        case "ca":
          return this.props.nombre;
        case "en":
          return this.props.nombre_en;
        case "es":
          return this.props.nombre_es;
        default: return this.props.nombre;
       
      }
    };
    const descriptionFood = () => {
      switch (this.props.lang) {
        case "ca":
          return this.props.descripcion;
        case "en":
          return this.props.descripcion_en;
        case "es":
          return this.props.descripcion_es;
        default: return this.props.descripcion;
       
      }
    };
    return (
      <div className="food-box">
        <div className="left-box">
          <h4>{nameFood()}</h4>
          <p>{descriptionFood()}</p>
        </div>
      <h4 className="h4-precio">€{this.props.precio}</h4>
      </div>
    );
  }
}
