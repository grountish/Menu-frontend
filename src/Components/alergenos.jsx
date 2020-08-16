import React, { useState, useContext } from "react";
import foods from './../foods.json'
import { DataContext } from './../Context/Context'
const param = window.location.pathname.slice(1);
const foundPlace = foods.places.find((x) => x.place === param);
const arrayOfMenu = [];
foundPlace.categorias.map((x) => arrayOfMenu.push(x.data));
const flattened = arrayOfMenu.flat();

const Alergenos = () => {

  const { allergyList, setAllergyList } = useContext(DataContext)


  const listHandler = (e) => {
    
    const { checked, name } = e.target;
    console.log(checked, name);
    const iterablesAlerg = flattened.filter((x) => x.alergenos !== undefined);
    const elements = iterablesAlerg.filter(
      (el) => el.alergenos.indexOf(+name) === -1
    );
    let newL = [...allergyList];
    if (checked) {
      if (newL.length <= 0) {
        newL.push(elements);
      } else {
        // returning a list of all the elements in the menu that do not contain that particular allergen
        newL = [...allergyList].filter((x) => x.alergenos.indexOf(+name) === -1);
      }
      setAllergyList([...new Set(newL.flat())]);
    } else {
      const elemsToPush = iterablesAlerg.filter(
        (el) => el.alergenos.indexOf(+name) !== -1
      );
      newL.push(elemsToPush);
      setAllergyList([...new Set(newL.flat())]);
    }
  };

  return (
    <form>
      <div className="multiselect">
        <div id="checkboxes">
          <label htmlFor="1">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="1"
            />
            Contiene Gluten
          </label>
          <label htmlFor="2">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="2"
            />
            Crustáceos
          </label>
          <label htmlFor="3">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="3"
            />
            Huevos
          </label>
          <label htmlFor="4">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="4"
            />
            Pescado
          </label>
          <label htmlFor="5">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="5"
            />
            Cacahuete
          </label>
          <label htmlFor="6">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="6"
            />
            Soja
          </label>
          <label htmlFor="7">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="7"
            />
            Lacteos
          </label>
          <label htmlFor="8">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="8"
            />
            Frutos de Cáscara
          </label>
          <label htmlFor="9">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="9"
            />
            Apio
          </label>
          <label htmlFor="10">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="10"
            />
            Mostaza
          </label>
          <label htmlFor="11">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="11"
            />
            Granos de Sésamo
          </label>
          <label htmlFor="12">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="12"
            />
            Dióxido de azufre y sulfitos
          </label>
          <label htmlFor="13">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="13"
            />
            Moluscos
          </label>
          <label htmlFor="14">
            <input
              type="checkbox"
              onChange={(e) => listHandler(e)}
              name="14"
            />
            Altramuces
          </label>
        </div>
      </div>
    </form>
  );
};

export default Alergenos;
