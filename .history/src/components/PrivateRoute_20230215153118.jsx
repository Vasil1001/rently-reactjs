import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
  return loggedIn ? <Outlet/> : <Navigate to="/login"/>
  
}

export default PrivateRoute