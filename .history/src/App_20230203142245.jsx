import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForgotPassword from './components/auth/ForgotPassword'
import Profile from './components/auth/Profile'
import Explore from './components/pages/Explore'
import Offers from './components/pages/Offers'
import Register from './components/auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex justify-center bg-slate-600">
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
