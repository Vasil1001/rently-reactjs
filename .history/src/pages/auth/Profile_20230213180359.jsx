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
    <div className="card compact side min-h-screen min-w-screen  text-white justify-between dark:bg-[#1a1b1e]">
      <div className="flex gap-5">
        <p>Picture</p>
        <p>My profile</p>
      </div>

      <main>
        <p>Personal Details</p>
        <p>{changeDetails ? "done" : "change"}</p>
      </main>

      <button className="btn btn-outline" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}