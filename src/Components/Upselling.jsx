import React, { useState, useContext } from "react";
import guineu from "./../Assets/bertus-white-ipa.jpg";
import { DataContext } from './../Context/Context'


const Upselling = ({ isOpen, showModal }) => {
  const { foundPlace } = useContext(DataContext)
  const [modalClass, setmodalClass] = useState("parentModal")
  
  const toggleAnimation = () => {
    setTimeout(() => {
      showModal()
      setmodalClass("parentModal fadeIn")
    }, 300);
    setmodalClass("parentModal fadeOut")
  }

  return (
    <>
      {isOpen ? (
        <div className="overlayModal"  style={{backgroundColor: foundPlace.overlayColor}}>
          <div className={modalClass} style={{backgroundColor: foundPlace.modalBackgroundColor}}>
            <div className="mymodal" style={{color: foundPlace.backgroundColor}}>
              <h1>Guineu Txiripa</h1>
              <hr className="modalDivider" />
              <div>
                <img src={guineu} className="guineu" alt="" />
              </div>
              <p style={{ width: "50%", textAlign: "center" }}>
                Cerveza de estilo IPA elaborada con trigo, junto a tres tipos de
                malta y varios lúpulos cítricos americanos. <br /> Ideal para
                acompañarla con unas bravas La Rovira o un bocadillo Martí!
              </p>
              <hr className="modalDivider" />
              <div>
                <div className="buttonDivUpselling" style={{ border: foundPlace.borderButton, color: foundPlace.color}}>
                  <button
                    className="buttonUpselling buttonClose"
                    style={{ color: foundPlace.backgroundColor}}
                    onClick={toggleAnimation}
                  >
                    cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Upselling;
