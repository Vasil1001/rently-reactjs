import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'
import { Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router/>
    <div className="flex justify-center bg-slate-600">
      <Login/>
    </div>
  )
}

export default App
