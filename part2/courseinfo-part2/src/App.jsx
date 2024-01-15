/* eslint-disable react/prop-types */
const Header = (props) => {
  //console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  //console.log('content: ', props)

  return (
    <div>
      {props.parts.map(elem => 
      <p key={elem.id}>{elem.name} {elem.exercises}</p>
      )}
    </div>
  )
}

const Total = (props) => {
  //console.log(props)

  /*
  let total = 0
  props.parts.forEach(part => {
    total += part.exercises
  })*/

  //total calculate with reduce
  let exercises = []
  props.parts.map(elem => exercises.push(elem.exercises))

  let total = exercises.reduce((prev,next) => {
    console.log('what is happening', prev, next)
    return prev + next
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