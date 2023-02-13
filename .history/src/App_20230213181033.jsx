import "./index.css";
import Login from "./pages/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Profile from "./pages/auth/Profile";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Register from "./pages/auth/Register";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between min-h-screen min-w-screen text-white dark:bg-[#1a1b1e]">
          <Navbar />
          <main className="container mx-auto px-2 pb-12">
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/offers" element={<Offers />} />
            </Routes>
          </main>
          <div>Bottom text</div>
        </div>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={4500}
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
  );
}

export default App;
