import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {

    function handleClick(){
      alert('button clicked')
    }
    function handleClick2(){
      alert('button clicked 2')
    }
    const addToFive = ( num ) =>{
      alert( num + 5 )
    }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Users></Users>
      <Team> </Team>
      <Counter></Counter>
      <button onClick={handleClick}> Click Me</button>
      <button onClick={handleClick2}> Click Me 2</button>
      <button onClick={ () =>{alert('third clicked')}}> Click Me 3</button>
      <button onClick={() => addToFive(3)} > Click Me 4</button>
    </>
  )
}

export default App
