/* eslint-disable react/prop-types */
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}></Part>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}></Part>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}></Part>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Total = (props) => {
  console.log(props)
  let total = 0
  props.parts.forEach(part => {
    total += part.exercises
  })
  return (
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App