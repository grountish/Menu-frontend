import React, { useState } from "react";



const arrayOfMenu = [];
foundPlace[0].categorias.map(x => arrayOfMenu.push(x.data))
const flattened = arrayOfMenu.flat()

const Alergenos = () => {
    const [List, useList] = useState([]);


  listHandler = (e) => {
    const { checked, name } = e.target;
    const iterablesAlerg = flattened.filter((x) => x.alergenos !== undefined);
    const elements = iterablesAlerg.filter(
      (el) => el.alergenos.indexOf(+name) === -1
    );
    let newL = [...this.state.alergList];
    if (checked) {
      if (newL.length <= 0) {
        newL.push(elements);
      } else {
        newL = [...this.state.alergList].filter(
          (x) => x.alergenos.indexOf(+name) === -1
        );
      }
      this.setState({
        alergList: [...new Set(newL.flat())],
      });
    } else {
      const elemsToPush = iterablesAlerg.filter(
        (el) => el.alergenos.indexOf(+name) !== -1
      );
      newL.push(elemsToPush);
      this.setState({
        alergList: [...new Set(newL.flat())],
      });
    }
  };


  return (
    <form>
      <div className="multiselect">
        <div id="checkboxes">
          <label htmlFor="1">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="1"
            />
            Contiene Gluten
          </label>
          <label htmlFor="2">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="2"
            />
            Crustáceos
          </label>
          <label htmlFor="3">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="3"
            />
            Huevos
          </label>
          <label htmlFor="4">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="4"
            />
            Pescado
          </label>
          <label htmlFor="5">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="5"
            />
            Cacahuete
          </label>
          <label htmlFor="6">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="6"
            />
            Soja
          </label>
          <label htmlFor="7">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="7"
            />
            Lacteos
          </label>
          <label htmlFor="8">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="8"
            />
            Frutos de Cáscara
          </label>
          <label htmlFor="9">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="9"
            />
            Apio
          </label>
          <label htmlFor="10">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="10"
            />
            Mostaza
          </label>
          <label htmlFor="11">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="11"
            />
            Granos de Sésamo
          </label>
          <label htmlFor="12">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="12"
            />
            Dióxido de azufre y sulfitos
          </label>
          <label htmlFor="13">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="13"
            />
            Moluscos
          </label>
          <label htmlFor="14">
            <input
              type="checkbox"
              onChange={(e) => this.listHandler(e)}
              name="14"
            />
            Altramuces
          </label>
        </div>
      </div>
      {
        this.state.alergList.length > 0
        ? this.state.alergList.map(x=><h1 key={x.nombre}>{x.nombre}</h1>)
        : null
      }
    </form>
  );
};

export default Alergenos;
