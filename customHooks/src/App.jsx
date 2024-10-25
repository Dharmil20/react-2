import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {
  const [currTodo, setCurrTodo] = useState(1);
  const { count, handleCount } = useCounter();
  const {data, isLoading} = useFetch("https://jsonplaceholder.typicode.com/todos/" + currTodo);

  return (
    <>
      <button onClick={handleCount}>Increase {count}</button> <br /> <br />
      <button onClick={() => setCurrTodo(1)}>1</button>
      <button onClick={() => setCurrTodo(2)}>2</button>
      <button onClick={() => setCurrTodo(3)}>3</button> <br />
      {isLoading ? "Loading......" : data.title}
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
