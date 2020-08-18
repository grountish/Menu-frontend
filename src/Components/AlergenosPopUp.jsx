import React, { useState, useContext  } from "react";
import Alergenos from "./../Components/alergenos";
import { DataContext } from './../Context/Context'


const AlergenosPopUp = (props) => {
  const [modalPopUpClass, setmodalPopUpClass] = useState("parentPopUp")
  const { foundPlace } = useContext(DataContext)
 
  const togglePopUp = () => {
    setTimeout(() => {
      props.showAllergenPopUp();
      setmodalPopUpClass("parentPopUp fadeIn")
    }, 300);
    setmodalPopUpClass("parentPopUp fadeOutPopUp")
  }

  return (
    <>
    {props.isOpenPopUp ? (
        <div className="overlayModal" style={{backgroundColor: foundPlace.overlayColor}}>
          <div className={modalPopUpClass} style={{backgroundColor: foundPlace.modalBackgroundColor}} >
            <div className="myPopUp" style={{color: foundPlace.backgroundColor}}>
            <div className="titleContainerPopUp">
                <h3>¿Tienes alguna alergia?</h3>
                <p>Indícanos asi solo te mostramos <br/> platos aptos para ti</p>            
            </div>

                <Alergenos />
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
        ) : null}
    </>
  );
};

export default AlergenosPopUp;
