/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components

const Counter = ({number}) => {
  console.log("Counter render")
  return <h1>{number}</h1>;
};

const App = () => {
  const [contadorValue, updateContador] = useState(0);

  console.log("render")

  //helper function, cuando la llamo es sin parentisis porque le paso desde que comienza el parentesis, sino se hace loop infinito
  function handleClick(incrementar) {
    if (incrementar === true) {
      updateContador(prevContador => {
        return prevContador + 1
      })
    } else {
      updateContador(prevContador => {
        return prevContador - 1
      })
    } 
  }

  const handleClickReset = () => {
    updateContador(0)
  }

  const isEven = contadorValue % 2 === 0
  const mensajePar = isEven ? "Es par" : "Es impar" //ternaria

  return (
    <div>
      <h1>Valor del contador: </h1>
      <Counter number={contadorValue}/>
      <p>{mensajePar}</p>
      <button onClick={() => handleClick(true)}> 
        Incrementar
      </button>
      <button onClick={() => handleClick(false)}>
        Decrementar
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

