/* eslint-disable react/prop-types */
import { useState } from 'react'

const MostVoted = (props) => {
  function indexMostVoted() {
    const maxVotes = Math.max(...props.votes)

    console.log('max votes: ' + maxVotes)

    return (
      props.votes.indexOf(maxVotes)
    )
  }

  const index = indexMostVoted()

  console.log('index most voted: ' + index)

  const anecdote = props.anecdotes[index]

  return (
    <p>{anecdote}</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNext = () => {
    setSelected(prevSelected => {
      let randomId;

      do {
        randomId = getRandomIntInclusive(0,anecdotes.length - 1)
        console.log('randomId: ' + randomId)
      } while (anecdotes.indexOf(prevSelected) === randomId);

      return randomId
    })
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const handleVote = () => {
    const copy = [...votes]

    copy[selected] += 1

    setVotes(copy)

    console.log(votes[selected])
  }
  /*
  const indexMostVoted = () => {
    const maxVotes = Math.max(...votes)

    console.log('max votes: ' + maxVotes)

    return (
      votes.indexOf(maxVotes)
    )
  }*/

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <MostVoted votes={votes} anecdotes={anecdotes}></MostVoted>
    </div>
  )
}

export default App