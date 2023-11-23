import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState('Posts')
  //? Everything inside the useEffect will be executed every time application re-renders
  useEffect(()=>{
    return ()=>{
      console.log("Renders");
    }
  },[resourceType]) //! Second argument helps us by calling useEffect only when second parameter changes otherwise not.

  return (
    <>
      <div>
        <button onClick={()=> setResourceType('Posts')}>Posts</button>
        <button onClick={()=> setResourceType('User')}>User</button>
        <button onClick={()=> setResourceType('Comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}

export default App
