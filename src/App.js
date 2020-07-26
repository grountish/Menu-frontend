import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Places from './Clients/places'


export default class App extends Component {
  render() {

      return (
        <Router>
         
            <Route path="/" exact component={Home} />
            <Route path="/:place" exact component={Places} />

        </Router>
      );
    }
  }


