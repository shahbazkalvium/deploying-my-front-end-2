import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>
      My name is <span>Shahbaz</span>
     </h1>
     <h2>
      My Age is <span>18</span>
     </h2>
     <h3>
      Im a <span>Web Developer</span>
     </h3>
    </>
  )
}

export default App
