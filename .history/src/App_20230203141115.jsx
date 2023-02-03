import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'
import { Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <div className="flex justify-center bg-slate-600">
        <Login />
      </div>
    </Router>
  )
}

export default App
