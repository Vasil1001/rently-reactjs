import React from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if(user)
    })
  })

  return <div> </div>
}
