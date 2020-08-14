import React, { useState } from "react";
import dataFromAPI from "../Data.json";

const Checkbox = () => {
  const [newLi, setnewLi] = useState([]);
  const setn = [...new Set(newLi.flat())];
 
 
  const listHandler = (e) => {
    const { checked, name } = e.target;
    const elements = dataFromAPI.filter((el) => el.alergenos.indexOf(+name) === -1);
    let newL = [...newLi];
    if(checked){
      if(newL.length <= 0){
        newL.push(elements)
      } else{
        newL = setn.filter(x=>x.alergenos.indexOf(+name) === -1)
      }
      setnewLi(newL);
    } else{
      const elemsToPush = dataFromAPI.filter((el) => el.alergenos.indexOf(+name) !== -1);
      newL.push(elemsToPush)
      setnewLi(newL);
    }   
  };

  return (
    <div className="table-container">
      <form>
        <div className="multiselect">
          <div id="checkboxes">
            <label htmlFor="one">
              <input
                type="checkbox"
                onChange={(e) => listHandler(e)}
                name="1"
              />
              alergeno 1
            </label>
            <label htmlFor="two">
              <input
                type="checkbox"
                onChange={(e) => listHandler(e)}
                name="2"
              />
              alergeno 2
            </label>
            <label htmlFor="three">
              <input
                type="checkbox"
                onChange={(e) => listHandler(e)}
                name="3"
              />
              alergeno 3
            </label>
            <label htmlFor="three">
              <input
                type="checkbox"
                onChange={(e) => listHandler(e)}
                name="4"
              />
              alergeno 4
            </label>
            <label htmlFor="three">
              <input
                type="checkbox"
                onChange={(e) => listHandler(e)}
                name="5"
              />
              alergeno 5
            </label>
            <label htmlFor="three">
              <input
                type="checkbox"
                onChange={(e) => listHandler(e)}
                name="3"
              />
              alergeno 6
            </label>
            <label htmlFor="three">
              <input
                type="checkbox"
                onChange={(e) => listHandler(e)}
                name="3"
              />
              alergeno 7
            </label>
          </div>
        </div>
      </form>
      {
        setn.map(x=> <h1 key={x.id}>{x.name}</h1>)
      }
    </div>
  );
};

export default Checkbox;
