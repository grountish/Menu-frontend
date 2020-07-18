import React, { Component } from 'react'

export default class FoodCategory extends Component {
    render() {
        return (
            <div className="box">
                    <h1>{this.props.nombre}</h1>
          </div>
        )
    }
}
