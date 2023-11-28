import './App.css';
import Kep from "./kopmonens/Kep";
import { adatLista } from './adatok.js';
import React, { useState } from "react";

function App() {


  const [kepIndex, setNagyKep] = useState(0);
  function nagyKepCsere(id){
    console.log("Nagykep csere", id);
    setNagyKep(id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>

      <article>
        <div className="fokep">
          <h3>Kép Címe</h3>

          <Kep adat={adatLista[kepIndex]}/>

          <p>lerias</p>
        </div>

        <div className="galeria">
          {
            adatLista.map( (elem,index)=>{
              return (
                <Kep adat={elem} key={index} nagyKepCsere={nagyKepCsere}/>
              )})
          }
        </div>
      </article>
      <footer><p>Szlanka Péter</p></footer>
    </div>
  );
}

export default App;
