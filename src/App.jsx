import { useState, useEffect, useMemo } from 'react'
import './App.css'

function App() {
  //* When the given operations are performed then the process will be very slow. To avoid this we use useMemo hooks to make the operations fast.
  //! The useMemo hook is a React Hook that lets you memoize the result of a function between re-renders. Memoization is a technique for caching the return value of a function so that it doesn't need to be recomputed on every render. This can be useful for optimizing performance by avoiding unnecessary calculations.
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(()=>{return slowFunction(number)},[number])
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
  return (
    <>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={()=> setDark(prevDark => ! prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('Calling Slow Function');
  for(let i=0;i<100000000;i++){}
  return num*2
}

export default App
