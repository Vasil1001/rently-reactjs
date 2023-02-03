import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex bg-slate-600">
      <h1 className='flex mx-auto text-red justify-center items-center'>my app</h1>
      <p className='bg-red'>a</p>

    </div>
  )
}

export default App
