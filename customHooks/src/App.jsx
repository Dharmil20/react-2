import { useState } from 'react'
import './App.css'

function App() {
  const {count, handleCount} = useCounter();

  return (
    <>
      Hello There <br />
      <button onClick={handleCount}>Increse {count}</button>
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
