import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';


export default function App() {
  const [cities, setCities] = useState([]); // cities es el state, que en primer instancia tiene un valor vacio. Setcities es el State que me va a modificar el State.
 
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
 
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
