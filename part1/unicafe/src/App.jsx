/* eslint-disable react/prop-types */
import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <Data good={props.good} neutral={props.neutral} bad={props.bad}></Data>
    </div>
  )
}


const Data = (props) => {
  function getTotal () {
    return props.good + props.neutral + props.bad;
  }

  function average () {
    const total = getTotal();

    let average;

    if (total != 0) average = ((props.good - props.bad) / (total))

    return (
      <p>average {average}</p>
    )
  }

  function positive () {
    const total = getTotal();

    let positive = 0

    if (total != 0) positive = (props.good / total) * 100;

    return <p>positive {positive} %</p>
  }

  if (getTotal() === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        {average()}
        {positive()}
      </div>
    )
  }
  
}


const Button = (props) => {
  const handleButton = () => {
    props.setState(prevState => {
      return prevState + 1
    })
    console.log('handle button')
  }

  return (
    <button onClick={handleButton}>{props.name}</button>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button setState={setGood} name='good'></Button>
      <Button setState={setNeutral} name='neutral'></Button>
      <Button setState={setBad} name='bad'></Button>
      <Statistics good={good} neutral={neutral} bad={bad} ></Statistics>
    </div>
  )
}

export default App