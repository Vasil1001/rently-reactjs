import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import 
const PrivateRoute = () => {
  const loggedIn = false

  return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
