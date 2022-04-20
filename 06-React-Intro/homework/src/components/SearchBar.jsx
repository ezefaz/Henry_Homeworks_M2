import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
  <div>
    <input type="text" />

   <botton onClick = {() => onSearch('Adding city...')}>Agregar</botton> 
  </div>
  )
};