import React, { useContext } from "react";
import { DataContext } from "./../Context/Context";


const SearchBar = ({inputValue, filterOnChange}) => {
  const { foundPlace } = useContext(DataContext);
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
            background: foundPlace.backgroundColor,
            color: foundPlace.color,
            zIndex: '-1'
          }}
        />
      </div>
    );
  }
  
export default SearchBar;