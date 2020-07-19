import React, { Component } from 'react';

export default class Foodbox extends Component {

  render() {
    return (
      <div className="food-box">
        <div className="left-box">
          <h4>{this.props.nombre}</h4>
          <small>{this.props.descripcion}</small>
        </div>
        <h5>{this.props.precio}</h5>
      </div>
    );
  }
}
