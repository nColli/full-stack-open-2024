/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
  
    return (
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
  
  