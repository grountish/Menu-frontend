import React from "react";
import foods from "../foods.json";

const param = window.location.pathname.slice(1)
let placeName = param.split("/")[0]
const foundPlace = foods.places.filter(x => x.place === param || x.place === placeName)


const SearchBar = ({inputValue, filterOnChange}) => {
    return (
      <div>
        <input
          className="input"
          autoFocus={true}
          type="text"
          value={inputValue}
          onChange={filterOnChange}
          placeholder="Buscar..."
          style={{
            background: foundPlace[0].backgroundColor,
            color: foundPlace[0].color,
            zIndex: '-1'
          }}
        />
      </div>
    );
  }
  
export default SearchBar;