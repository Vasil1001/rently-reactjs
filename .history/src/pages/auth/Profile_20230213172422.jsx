import React, { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../firebase.config";
import { updateDoc } from "firebase/firestore";

export default function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <header>
        <p>My profile</p>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </header>
      
      <main>
        <p>Personal Details</p>
        <p>{changeDetails ? 'done' : 'change'}</p>
      </main>
    </div>
  );
}
