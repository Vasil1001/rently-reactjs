import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center bg-slate-600">
      <Login/>
    </div>
  )
}

export default App
