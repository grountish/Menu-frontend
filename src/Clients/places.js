import React, { useState } from 'react';
import CategoryList from '../Components/CategoryList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Foodlist from '../Components/Foodlist';
import SearchComponent from '../Components/SearchComponent';
import foods from '../foods.json';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { AiOutlineSearch } from 'react-icons/ai'
import './../App.css';
import Upselling from '../Components/Upselling'

const param = window.location.pathname.slice(1)
const foundPlace = foods.places.filter(x => x.place === param) || foods.places[0];
const option1 = foundPlace[0].place || '';



function Places() {
  const [buscar, setBuscar] = useState(false);
  const [lang, setLang]=useState("ca");

  const search = () => {
    switch (lang) {
      case "ca":
        return "Buscar";
      case "en":
        return "Search";
      case "es":
        return "Buscar";
      default: return this.props.nombre;
    }
  };
 

  return (
      <div className="places">
         <Router>
         <Upselling />
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
           {buscar ? <div className="buscador"><FontAwesomeIcon icon={faAngleLeft} /><p>{lang === 'en' ? "Back" : "Volver"}</p></div> : <div className="buscador"><AiOutlineSearch /><p>{search()}</p></div>}</div>      
           {buscar ? (
          <SearchComponent lang={lang}/>
          ) : (
            <div>
              <Route exact path='/:place' render={(props)=><CategoryList {...props} lang={lang}/>} />
              <Route exact path="/:place/category/:categoryName" render={(props)=><Foodlist {...props} lang={lang}/>} />
            </div>
          )}
        </Router>
      </div>
    );
  }

export default Places;