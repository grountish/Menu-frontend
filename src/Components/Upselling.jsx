import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import guineu from './../Assets/bertus-white-ipa.jpg'

const Upselling = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
    return (
      <>
      <div className="buttonDivUpselling"><button className="buttonUpselling" onClick={showModal}>Sugerencia del día</button></div>
        
        <Modal
          show={isOpen}
          onHide={hideModal}
        >
        <div className="mymodal">         
        <Modal.Header>
            <Modal.Title>Guineu Txiripa</Modal.Title>
          </Modal.Header>
          <Modal.Body> <img src={guineu} className="guineu" alt=""/></Modal.Body>
          <p style={{width: '50%', textAlign: 'center'}}>Cerveza de estilo IPA elaborada con trigo, junto a tres tipos de malta y varios lúpulos cítricos americanos. <br/> Ideal para acompañarla con unas bravas La Rovira o un bocadillo Martí!</p>
          <Modal.Footer>
           <div className="buttonDivUpselling"><button className="buttonUpselling" style={{color: 'black'}} onClick={hideModal}>cerrar</button></div> 
          </Modal.Footer></div>

        </Modal>
        </>
    );
  };

  export default Upselling;