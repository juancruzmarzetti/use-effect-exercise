import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Order from './components/Order'
import PizzaOrder from './components/Order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tu pedido:</h1>
      <PizzaOrder/>
    </>
  )
}

export default App
