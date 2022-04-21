import React ,{ useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value = {city}
        onChange ={e => setCity(e.target.value)} // e.target.value es el valor que el usuario pone en el input
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
