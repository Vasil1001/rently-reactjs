import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto items-center bg-slate-600">

      <Login/>
    </div>
  )
}

export default App
