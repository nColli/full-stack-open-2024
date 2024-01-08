/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)
  
    const [counters, setCounters] = useState({
      left: 0,
      right: 0,
      mensaje: 'Mensaje desde el estado'
    });
    const [clicks, setClicks] = useState([])

    const handleClickLeft = () => {
      const newCountersState = {
        ...counters, //spread operator: trae todo del obj y mod lo que quiero
        left: counters.left + 1,
      };
      //NUNCA: counters.left++ xq es inmutable
      setCounters(newCountersState)

      setClicks(prevClicks => {
        return prevClicks.concat('L')
      })
    };

    const handleClickRight = () => {
      const newCountersState = {
        ...counters,
        right: counters.right + 1,
      }
      setCounters(newCountersState)

      setClicks(prevClicks => {
        return [...prevClicks, 'R']
      })
    };

    return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>
          left
        </button>
        <button onClick={handleClickRight}>
          right
        </button>
        {counters.right}
        <p>Total clicks {clicks.length}</p>
        <p>{counters.mensaje}</p>
        <p>{clicks.join(", ")}</p>
      </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
  
  