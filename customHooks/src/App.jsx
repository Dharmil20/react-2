import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {
  const {count, handleCount} = useCounter();
  const finalData = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <>
      Hello There <br />
      <button onClick={handleCount}>Increase {count}</button> <br />
      {finalData.data.title}
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
