import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import guineu from './../Assets/guineu.png'

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
          <p style={{width: '50%', textAlign: 'center'}}>La IPA más introductiva de Guineu, que busca un buen equilibrio y bebibilidad. Se trata de una IPA, ligera, dotada de sutil amargura. Con final seco acompañado de un retrogusto cítrico. Notaremos un ligero punto a toques afrutados provenientes del Simcoe.</p>
          <Modal.Footer>
           <div className="buttonDivUpselling"><button className="buttonUpselling" style={{color: 'black'}} onClick={hideModal}>cerrar</button></div> 
          </Modal.Footer></div>

        </Modal>
        </>
    );
  };

  export default Upselling;