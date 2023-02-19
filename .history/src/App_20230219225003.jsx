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
import Category from "./pages/Category"

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen justify-between text-white dark:bg-[#1a1b1e]">
          <Navbar />
          <div className="justify-between  xl:container mx-auto px-5 pb-12">
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="category/:categoryName" element={<Category />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* When user is not logged in, he will go to nester Login Page */}
              {/* Every page that requires authentication needs to be put here */}
              
              <Route path="/profile" element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route path="/offers" element={<Offers />} />
            </Routes>
          </div>
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
