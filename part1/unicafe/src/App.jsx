/* eslint-disable react/prop-types */
import { useState } from 'react'

const Statistics = (props) => {
  const handleGood = () => {
    props.setGood(prevGood => {
      return prevGood + 1
    })
    console.log('handle good')
  }

  const handleNeutral = () => {
    props.setNeutral(prevNeutral => {
      return prevNeutral + 1
    })
    console.log('handle neutral')
  }
  
  const handleBad = () => {
    props.setBad(prevBad => {
      return prevBad + 1
    })
    console.log('handle bad')
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
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


  return (
    <div>
      {average()}
      {positive()}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  /*
  const handleGood = () => {
    setGood(prevGood => {
      return prevGood + 1
    })
    console.log('handle good')
  }

  const handleNeutral = () => {
    setNeutral(prevNeutral => {
      return prevNeutral + 1
    })
    console.log('handle neutral')
  }
  
  const handleBad = () => {
    setBad(prevBad => {
      return prevBad + 1
    })
    console.log('handle bad')
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Data good={good} neutral={neutral} bad={bad}></Data>
    </div>
  )*/

  return (
    <Statistics good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}></Statistics>
  )
}

export default App