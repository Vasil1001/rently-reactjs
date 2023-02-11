import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);

  return <div>Profile</div>;
}
