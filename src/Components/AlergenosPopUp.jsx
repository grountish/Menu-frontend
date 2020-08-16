import React, { useState, useContext  } from "react";
import Alergenos from "./Alergenos";
import foods from './../foods.json'
import { DataContext } from './../Context/Context'

const param = window.location.pathname.slice(1);
const foundPlace = foods.places.find((x) => x.place === param);

const AlergenosPopUp = () => {
  const [modalPopUpClass, setmodalPopUpClass] = useState("parentPopUp")
  const {showAllergenPopUp, isOpenPopUp} = useContext(DataContext)
  const [displayPop, setdisplayPop] = useState(true)
  const togglePopUp = () => {
    setTimeout(() => {
      setdisplayPop(false)
      setmodalPopUpClass("parentPopUp fadeIn")
    }, 300);
    setmodalPopUpClass("parentPopUp fadeOutPopUp")
  }

  return (
    <>
      {
          displayPop
          ? <div className="overlayModal" style={{backgroundColor: foundPlace.overlayColor}}>
          <div className={modalPopUpClass} style={{backgroundColor: foundPlace.modalBackgroundColor}} >
            <div className="mymodal" style={{color: foundPlace.backgroundColor}}>
                <Alergenos />
              <div>
                <div className="buttonDivUpselling" style={{ border: foundPlace.borderButton, color: foundPlace.color}}>
                  <button
                    className="buttonUpselling buttonClose"
                    style={{ color: foundPlace.backgroundColor}}
                    onClick={togglePopUp}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null
      }
       
     
    </>
  );
};

export default AlergenosPopUp;
