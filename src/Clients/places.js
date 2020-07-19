import React, { useState } from 'react';
import './../App.css';
import CategoryList from '../Components/CategoryList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Foodlist from '../Components/Foodlist';
import SearchComponent from '../Components/SearchComponent';
import foods from '../foods.json';
import Helmet from 'react-helmet';


const param = window.location.pathname.slice(1)
const foundPlace = foods.places.filter(x => x.place === param)
const option1 = foundPlace[0].place || '';
console.log(foundPlace);
function Places() {
  const [buscar, setBuscar] = useState(false);

  return (
    <div className="App">
       <Router>
        <Helmet>
          <style>{`body { background-color: ${foundPlace[0].backgroundColor}; min-height:100vh; font-family: ${foundPlace[0].font}; color: ${foundPlace[0].color}}`}</style>
        </Helmet>
        <Link to={`/${option1}`}>
          {' '}
          <img src={foundPlace[0].iso} alt="logo" className="isoTipo" />
        </Link>
        <input
          type="button"
          onClick={() => setBuscar(!buscar)}
          value={buscar ? 'volver' : 'buscar'}
        />
        {buscar ? (
          <SearchComponent />
        ) : (
          <div>
            <Route path="/:place" exact component={CategoryList} />
            <Route path="/:place/category/:categoryName" exact component={Foodlist} />
          </div>
        )}
      </Router>
    </div>
  );
}

export default Places;