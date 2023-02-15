import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
const PrivateRoute = () => {
  const { } = useAuthStatus()
  

  return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
