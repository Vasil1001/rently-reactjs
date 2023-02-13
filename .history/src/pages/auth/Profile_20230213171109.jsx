import React, { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const {name, email} = formData
  
  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }
  
  return (
  <div className="profile">
      <p>My profile</p>
      <button type="button" onClick={onLogout}>Logout</button>
  </div>
  )
}
