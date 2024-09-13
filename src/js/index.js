//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondCounter from "./component/SecondCounter.jsx";

//tengo que meter todo el codigo dentro de una funcion para que cargue con window.onload//
function cargarConOnload() {

   let contador = 0;
   let otravariable = ReactDOM.createRoot(document.getElementById('app'))

   setInterval(() => {

      const uno = Math.floor(contador / 1)
      const dos = Math.floor(contador / 10)
      const tres = Math.floor(contador / 100)
      const cuatro = Math.floor(contador / 1000)
      const cinco = Math.floor(contador / 10000)
      const seis = Math.floor(contador / 100000)

      contador++

      otravariable.render(<SecondCounter uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} />);
   }, 1000
   )
}


window.onload = cargarConOnload;