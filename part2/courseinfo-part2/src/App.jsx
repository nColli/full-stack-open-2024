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
      {props.parts.map(elem => 
      <p key={elem.id}>{elem.part} {elem.exercise}</p>)}
    </div>
  )

  //let cont = []
  /*
  props.parts.forEach(part => {
    cont.push(<Part part={part.name} exercise={part.exercises}></Part>)
  });

  return (
    <div>
      {cont}
    </div>
  )
*/
/*
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}></Part>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}></Part>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}></Part>
    </div>
  )*/
}
/*
const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part} {props.exercise}</p>
  )
}*/

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

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course={course} />
}

export default App