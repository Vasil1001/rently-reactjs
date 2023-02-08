import './index.css'
import Login from './pages/auth/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForgotPassword from './pages/auth/ForgotPassword'
import Profile from './pages/auth/Profile'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Register from './pages/auth/Register'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen items-center text-white justify-between dark:bg-neutral">
        <Navbar />
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>

      <div>Bottom text</div>
      </div>
    </Router>
  )
}

export default App
