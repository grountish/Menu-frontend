import React from "react";

const ServicioCards = (props) => {
    
    let packService = props.data;
  
    return (
      <div>
        <div className="servicio-card-container">
          <div className="servicio-card" >
              <img className="object-fit"
                src={packService.img}
                alt={packService.servicio}
              ></img>
              <ul>
                <li>
                  <h4>{packService.servicio}</h4>
                </li>
                <li> <p>{packService.descripcion} </p></li>
                       </ul>
            </div>
          
        </div>
      </div>
    );
  };
  
  export default ServicioCards;