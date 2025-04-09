import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from "../src/component/login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      hello this is our minor porject
      <Hello/>
     
      <LoginPage/>
    </>
  )
}

function Hello() {
  return (
    <>
    <br/>
    
    </>
  )
}

export default App
