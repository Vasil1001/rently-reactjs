import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex bg-slate-600">

      <div className="stats shadow">

        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

      </div>
    </div>
  )
}

export default App
