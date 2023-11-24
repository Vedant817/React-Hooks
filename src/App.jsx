import { useState, useEffect, useMemo, useRef } from 'react'
import './App.css'

function App() {
  //* Ref does not the component to re update when it gets changed.
  const [name, setName] = useState('')
  const renderCount= useRef(0)
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <div>I rendered {renderCount} times.</div>
    </>
  )
}
export default App
