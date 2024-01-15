/* eslint-disable react/prop-types */

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
      </div>
    )
}

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

export default Course