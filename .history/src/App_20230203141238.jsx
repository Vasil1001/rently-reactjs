import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'
import { Route, Router, Routes } from 'react-router-dom'
import ForgotPassword from './components/auth/ForgotPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <div className="flex justify-center bg-slate-600">
          <Route> <Login /> </Route>
          <Route> <Register /> </Route>
          <Route> <ForgotPassword /> </Route>
          <Route> <Profile /> </Route>
          <Route> <Explore /> </Route>
          <Route> <Offers /> </Route>
        </div>
      </Routes>
    </Router>
  )
}

export default App
