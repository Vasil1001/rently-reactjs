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
    <div className="container rounded-xl bg-[#2d323b] p-6 mx-auto lg:w-10/12">
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-xl rounded-xl shadow-xl ">
            <figure>
              <img
                className="rounded-sm"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Image"
              />
            </figure>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-6">
            <div className="flex justify-between">
              <h1 className="text-3xl card-title">
                Name
                <div className="ml-2 mr-1 badge badge-success">badge</div>
              </h1>
              <button className="btn btn-outline" onClick={onLogout}>
                Logout
              </button>
            </div>
            description
            <p>{changeDetails ? "done" : "change"}</p>
            <div className="mt-4 card-actions"></div>
          </div>
        </div>
      </div>

      <div className="w-full py-5 mb-6 rounded-lg shadow-lg stats bg-neutral p-4">
        Listed Properties
      </div>
    </div>
  );
}
