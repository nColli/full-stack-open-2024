import './App.css';
import Msj from './Msj'

const Hello = (props) => {
  return (
    <h1 style={{color: props.color}}>Hello {props.name} !!!</h1>
  )
}

const SumRandoms = () => {
  const a = Math.random()
  const b = Math.random()
  return (
    <div>
      <h2>Sum of random number: </h2>
      <h3>{a} + {b} = {a+b}</h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Hello color="red" name="Maria"/>
      <Hello color="green" name="John"/>
      <Hello color="blue" name="Mark"/>
      <h1>Today is {new Date().toDateString()}</h1>
      <Msj color="red"></Msj>
      <SumRandoms></SumRandoms>
    </div>
  );
}

export default App;
