import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const [formData, setFormData] = useState({

  });
  const auth = getAuth();


  return user ? <h1>{user.displayName}</h1> : 'Not logged in'
}
