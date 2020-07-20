import React, { useState } from 'react';
import CategoryList from '../Components/CategoryList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Foodlist from '../Components/Foodlist';
import SearchComponent from '../Components/SearchComponent';
import foods from '../foods.json';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft,faSearch} from "@fortawesome/free-solid-svg-icons";
// import './../App.css';

const param = window.location.pathname.slice(1)
const foundPlace = foods.places.filter(x => x.place === param) || foods.places[0];
const option1 = foundPlace[0].place || '';

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
          <SearchComponent lang={lang}/>
          ) : (
            <div>
            <div>
              <button onClick={()=>setLang("ca")}>CA</button>
              <button onClick={()=>setLang("en")}>EN</button>
              <button onClick={()=>setLang("es")}>ES</button>
            </div>
              <Route exact path='/:place' render={(props)=><CategoryList {...props} lang={lang}/>} />
              <Route exact path="/:place/category/:categoryName" render={(props)=><Foodlist {...props} lang={lang}/>} />

            </div>
          )}
        </Router>
      </div>
    );
  }

export default Places;