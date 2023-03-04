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
import CreateListing from "./pages/CreateListing"
import Listing from "./pages/Listing"
import Contact from "./pages/Contact"
import EditListing from "./pages/EditListing"
function App() {
  return (
    <>
      <Router>
        <div className="min-w-screen min-h-screen h-screen-vh justify-between text-white dark:bg-[#1a1b1e]">
          <Navbar />
          <div className="m-auto px-5 pb-12 h-screen-vh min-h-screen justify-items-center place-self-center place-items-center place-content-center xl:container">
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
              <Route path="/create-listing" element={<CreateListing />} />
              <Route
                path="/edit-listing/:listingId"
                element={<EditListing />}
              />

              <Route path="/contact/:landlordId" element={<Contact />} />

              <Route
                path="/category/:categoryName/:listingId"
                element={<Listing />}
              />
            </Routes>
          </div>
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
