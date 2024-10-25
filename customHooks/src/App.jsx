import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';

function App() {
  const [currTodo, setCurrTodo] = useState(1);
  const { count, handleCount } = useCounter();
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/todos/" + currTodo, 10);

  return (
    <>
      <button onClick={handleCount}>Increase {count}</button> <br /> <br />
      <button onClick={() => setCurrTodo(1)}>1</button>
      <button onClick={() => setCurrTodo(2)}>2</button>
      <button onClick={() => setCurrTodo(3)}>3</button> <br />
      {isLoading ? "Loading......" : data.title} <br /><br />
      {state} <br />
      <button onClick={() => setState(c => c + 1)}>inc</button> <br />
      Privious Value was {prev}
    </>
  )
}

function useCounter() {
  const [count, setCount] = useState(0)

  function handleCount() {
    setCount(prevCount => prevCount + 1);
  }

  return ({ count, handleCount })
}
export default App
