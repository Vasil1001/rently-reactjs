import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'

export default function Profile() {
  const auth = getAuth()
  useEffect(() => {
console.log(auth.curr)
  }, [])

  return (
    <div>Profile</div>
  )
}
