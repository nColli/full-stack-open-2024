/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components

/*version 1: auto counter
const App = (props) => {
  return (
    <h1>{props.contadorInicial}</h1>
  )
}

let contador = 0

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App contadorInicial={contador}/>
    </React.StrictMode>,
  )
}

let time = 1000

setInterval(() => {
  contador++
  refresh()
  if (contador === 10) {
    contador = 0
  }
},time)*/

/* version 2: clock
const App = (props) => {
  return (
    <h1>{props.hora} : {props.min} : {props.seg}</h1>
  )
}

const refresh = (min,seg,hora) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App min={min} seg={seg} hora={hora}/>
    </React.StrictMode>,
  )
}

let min = 0, seg = 0, hora = 0

setInterval(() => {
  seg++
  if (seg == 60) {
    seg = 0
    min++
  }

  if (min == 60) {
    min = 0
    hora++
  }

  if (hora == 25) {
    hora = 0
  }

  refresh(min,seg,hora)
},1000)*/

//version 3: setInterval inside App component
const App = () => {
  const contador = useState(0);

  const contadorValue = contador[0];
  const updateContador = contador[1];

  setInterval(() => {
    updateContador(contadorValue + 1)
  }, 1000);

  return (
    <div>
      <h1>Valor del contador: </h1>
      <h1>{contadorValue}</h1>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)