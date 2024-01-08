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
      right: 0
    })

    const handleClickLeft = () => {
      const newCountersState = {
        left: counters.left + 1,
        right: counters.right
      }
      setCounters(newCountersState)
    }

    const handleClickRight = () => {
      const newCountersState = {
        left: counters.left,
        right: counters.right + 1
      }
      setCounters(newCountersState)
    }

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
      </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
  
  