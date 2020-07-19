import React, { useState } from 'react';
import './../App.css';
import CategoryList from '../Components/CategoryList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Foodlist from '../Components/Foodlist';
import SearchComponent from '../Components/SearchComponent';
import foods from '../foods.json';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const param = window.location.pathname.slice(1)
console.log(param);
const foundPlace = foods.places.filter(x => x.place === param);
const option1 = foundPlace[0].place || '';
console.log(foundPlace);


function Places() {
  const [buscar, setBuscar] = useState(false);
  const [lang, setLang]=useState("ca");

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
          <div
            type="button"
            className="search-bar"
            onClick={() => setBuscar(!buscar)}
          >
           {buscar ? <h1><FontAwesomeIcon icon={faAngleLeft} /> Volver</h1> : <h1><FontAwesomeIcon icon={faSearch} />  Buscar </h1>} </div>      
           {buscar ? (
          <SearchComponent />
          ) : (
            <div>
            <div>
              <button onClick={()=>setLang("ca")}>CA</button>
              <button onClick={()=>setLang("en")}>EN</button>
              <button onClick={()=>setLang("es")}>ES</button>
            </div>
              <Route exact path='/:place' render={()=><CategoryList lang={lang}/>} />
              <Route path="/:place/category/:categoryName" exact component={Foodlist} lang={lang} />
            </div>
          )}
        </Router>
      </div>
    );
  }

export default Places;