import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'
import { Route, Router, Routes } from 'react-router-dom'
import ForgotPassword from './components/auth/ForgotPassword'
import Profile from './components/auth/Profile'
import Explore from './components/pages/Explore'
import Offers from './components/pages/Offers'
import Register from './components/auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <div className="flex justify-center bg-slate-600">
          <Route path=''> <Login /> </Route>
          <Route path=''> <Register /> </Route>
          <Route path=''> <ForgotPassword /> </Route>
          <Route path=''> <Profile /> </Route>
          <Route path=''> <Explore /> </Route>
          <Route path=''> <Offers /> </Route>
        </div>
      </Routes>
    </Router>
  )
}

export default App