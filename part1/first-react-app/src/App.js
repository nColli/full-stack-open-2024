import './App.css';
import Msj from './Msj'

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
      <h1>Today is {new Date().toDateString()}</h1>
      <Msj color="red"></Msj>
      <SumRandoms></SumRandoms>
    </div>
  );
}

export default App;
