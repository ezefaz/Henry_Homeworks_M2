import React from 'react';

export default function Card({max, min, name, img, onClose}) {

  // props {max, min, name, img, onClose}
  // acá va tu código

      return ( 
      <div>
        <button onClick = {onClose}>X</button>
        <h4>{name}</h4>
        <div>
          <p>MIN</p>
          <p>{min}</p>
          <p>MAX</p>
          <p>{max}</p>
          <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found"/>
        </div>
      </div>    
   
      )
 
};