import React, { Component } from 'react'

export default class FoodCategory extends Component {

 
  render() {
      
        return (
            <div className="box">
                    <h1>{this.props.lang === "en" ? this.props.nombre_en : this.props.nombre}</h1>
          </div>
        )
    }
}
