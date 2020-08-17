import React from 'react';

const FoodBox = ({lang, nombre_en, nombre_es, nombre, descripcion, descripcion_en, descripcion_es, precio}) => {

    const nameFood = () => {
      switch (lang) {
        case "ca":
          return nombre;
        case "en":
          return nombre_en;
        case "es":
          return nombre_es;
        default: return nombre;
       
      }
    };
    const descriptionFood = () => {
      switch (lang) {
        case "ca":
          return descripcion;
        case "en":
          return descripcion_en;
        case "es":
          return descripcion_es;
        default: return descripcion;
       
      }
    };
    return (
      <div className="food-box">
        <div className="left-box">
          <h4>{nameFood()}</h4>
          <p>{descriptionFood()}</p>
        </div>
      <h3 className="h4-precio">€{precio}</h3>
      </div>
    );
  }

export default FoodBox;
