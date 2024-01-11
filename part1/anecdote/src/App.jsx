/* eslint-disable react/prop-types */
import { useState } from 'react'

const Title = (props) => {
  return (
    <h1>{props.content}</h1>
  )
}

const Description = (props) => {
  return (
    <p>{props.content}</p>
  )
}

const MostVoted = (props) => {
  const maxVotes = Math.max(...props.votes)

  const index = props.votes.indexOf(maxVotes)

  console.log('index most voted: ' + index)

  const anecdote = props.anecdotes[index]

  return (
    <div>
      <Description content={anecdote}/>
      <Description content={'has ' + maxVotes + ' votes'}/>
    </div>

  )
}

const ButtonNext = (props) => {
  const handleNext = () => {
    props.setSelected(prevSelected => {
      let randomId;

      do {
        randomId = getRandomIntInclusive(0,props.anecdotes.length - 1)
        console.log('randomId: ' + randomId)
      } while (props.anecdotes.indexOf(prevSelected) === randomId);

      return randomId
    })
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  return (
    <button onClick={handleNext}>next anecdote</button>
  )
}

const ButtonVote = (props) => {
  const handleVote = () => {
    const copy = [...(props.votes)]

    copy[props.selected] += 1

    props.setVotes(copy)

    console.log(props.votes[props.selected])
  }

  return (
    <button onClick={handleVote}>vote</button>
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

  return (
    <div>
      <Title content='Anecdote of the day'/>
      <Description content={anecdotes[selected]} />
      <Description content={'has ' + votes[selected] + ' votes'} />
      <ButtonVote votes={votes} setSelected={setSelected} setVotes={setVotes} selected={selected}/>
      <ButtonNext setSelected={setSelected} anecdotes={anecdotes} />
      <Title content='Anecdote with most votes'/>
      <MostVoted votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App