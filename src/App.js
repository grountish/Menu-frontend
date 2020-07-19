import React, { Component, Suspense, lazy }  from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Places from './Clients/places'
import Home from './Components/Home'

const param = window.location.pathname.slice(1)

export default class App extends Component {
  render() {
    if(param === ''){
     return <Home />
    } else{
       const Places = lazy(() => import('./Clients/places'))
   
  return (
   
      <Router>
      <Suspense fallback={<Home />}>
          <Places />
        </Suspense>
          
      </Router>
   
  );
}

}
}
