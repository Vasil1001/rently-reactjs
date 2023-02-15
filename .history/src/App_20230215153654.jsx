import "./index.css"
import Login from "./pages/auth/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ForgotPassword from "./pages/auth/ForgotPassword"
import Profile from "./pages/auth/Profile"
import Explore from "./pages/Explore"
import Offers from "./pages/Offers"
import Register from "./pages/auth/Register"
import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between items-center  min-h-screen min-w-screen text-white dark:bg-[#1a1b1e]">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* When user is not logged in, he will go to nester Login Page */}
              {/* Every page that requires authentication will be protected */}
              
              <Route path="/profile" element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route path="/offers" element={<Offers />} />
            </Routes>
          </main>
          <div>Bottom text</div>
        </div>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
