import { useState } from 'react'
import './App.css'
import Login from './components/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>my app</h1>

      <Login/>
    </div>
  )
}

export default App
