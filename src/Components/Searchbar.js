import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <div>
                <input className="input" type="text" value={this.props.inputValue} onChange={this.props.filterOnChange} placeholder="buscar..."/>
            </div>
        )
    }
}
