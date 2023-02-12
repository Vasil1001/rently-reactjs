import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  return <div className="profile">
    <header>
      <p>My profile</p>
      <button>Log Out</button>
    </header>
  </div>
}
