import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'

export default function Profile() {
  const auth = getAuth()
  useEffect(() => {
console.log(first)
  }, [])

  return (
    <div>Profile</div>
  )
}
