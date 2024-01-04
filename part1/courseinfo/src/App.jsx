/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
/*
const Content = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}
*/

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} exercise={props.exercise[0]}></Part>
      <Part part={props.part[1]} exercise={props.exercise[1]}></Part>
      <Part part={props.part[2]} exercise={props.exercise[2]}></Part>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Total = (props) => {
  let total = 0
  props.exercises.forEach(exercise => {
    total += exercise
  })
  return (
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      <Content part={[part1,part2,part3]} exercise={[exercises1,exercises2,exercises3]}></Content>
      <Total exercises={[exercises1,exercises2,exercises3]}></Total>
    </div>
  )
}

export default App