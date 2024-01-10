/* eslint-disable react/prop-types */
import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <table>
      <StatisticLine text='good' value={props.good}></StatisticLine>
      <StatisticLine text='neutral' value={props.neutral}></StatisticLine>
      <StatisticLine text='bad' value={props.bad}></StatisticLine>
      </table>
      <Data good={props.good} neutral={props.neutral} bad={props.bad}></Data>
      
    </div>
  )
}


const StatisticLine = (props) => {
  /*
  return (
    <p>{props.text} {props.value}</p>
  )*/
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
      average
    )
  }

  function positive () {
    const total = getTotal();

    let positive = 0

    if (total != 0) positive = (props.good / total) * 100;

    return positive
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
        <StatisticLine text='average' value={average()}></StatisticLine>
        <StatisticLine text='positive' value={positive() + ' %'}></StatisticLine>
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