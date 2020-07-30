import React, { useState } from 'react';
import CategoryList from '../Components/CategoryList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Foodlist from '../Components/Foodlist';
import SearchComponent from '../Components/SearchComponent';
import foods from '../foods.json';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import './../App.css';

const param = window.location.pathname.slice(1)
const foundPlace = foods.places.filter(x => x.place === param) || foods.places[0];
const option1 = foundPlace[0].place || '';

function Places() {
  const [buscar, setBuscar] = useState(false);
  const [lang, setLang]=useState("ca");

  return (
    <div className="App version-movil">
      <div className="contenedor-movil">
      <div className="App-desktop-container">
         <Router>
          <Helmet>
            <style>{`body { background-color: ${foundPlace[0].backgroundColor}; min-height:100vh; font-family: ${foundPlace[0].font}; color: ${foundPlace[0].color}}`}</style>
          </Helmet>
            <div className="languages">
              <div className={lang === "ca"? "perLanguage-act":"perLanguage"} onClick={()=>setLang("ca")}>CA</div>
              <div className={lang === "en"? "perLanguage-act":"perLanguage"} onClick={()=>setLang("en")}>EN</div>
              <div className={lang === "es"? "perLanguage-act":"perLanguage"} onClick={()=>setLang("es")}>ES</div>
            </div>
          <Link to={`/${option1}`}>
            {' '}
            <img src={foundPlace[0].iso} alt="logo" className="isoTipo" />
          </Link>
          <div
            type="button"
            className="search-bar"
            onClick={() => setBuscar(!buscar)}
          >
           {buscar ? <div className="buscador"><FontAwesomeIcon icon={faAngleLeft} /><p>Volver</p></div> : <div className="buscador"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-11 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg><p>Buscar</p></div>} </div>      
           {buscar ? (
          <SearchComponent lang={lang}/>
          ) : (
            <div>
              <Route exact path='/:place' render={(props)=><CategoryList {...props} lang={lang}/>} />
              <Route exact path="/:place/category/:categoryName" render={(props)=><Foodlist {...props} lang={lang}/>} />
            </div>
          )}
        </Router>
      </div></div></div>
    );
  }

export default Places;