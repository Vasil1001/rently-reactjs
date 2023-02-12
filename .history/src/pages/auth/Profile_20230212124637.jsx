import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const navigate = useNavi
const onLogout = () => {{
  auth.signOut()
}
  return <div className="profile">
    <header>
      <p>My profile</p>
      <button type="button" onClick={onLogout}>Logout</button>
    </header>
  </div>
}
