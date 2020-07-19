import React, { Component } from 'react'
import foods from '../foods.json';

export default class FoodCategory extends Component {

 
  render() {
      
        return (
            <div className="box" style={{height:`calc(75vh/${foods.categorias.length})`, alignItems:"center", display:"flex"}}>
                    <h1 style={{fontSize:`calc(65vh/${foods.categorias.length}/2.5)`, margin:"auto", textTransform:"uppercase" }}>{this.props.lang === "en" ? this.props.nombre_en : this.props.nombre}</h1>
          </div>
        )
    }
}
