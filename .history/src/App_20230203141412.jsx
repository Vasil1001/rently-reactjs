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
          <Route path='/' element={Login /}/>> <Login /> </Route>
          <Route path='/' element={Registe}/>> <Register /> </Route>
          <Route path='/' element={ForgotP}/>> <ForgotPassword /> </Route>
          <Route path='/' element={Profile}/>> <Profile /> </Route>
          <Route path='/' element={Explore}/>> <Explore /> </Route>
          <Route path='/' element={Offers }/>> <Offers /> </Route>
        </div>
      </Routes>
    </Router>
  )
}

export default App
