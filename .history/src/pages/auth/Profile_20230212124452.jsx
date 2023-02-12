import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({});

  return user ? <h1>{user.displayName}</h1> : "Not logged in";
}
