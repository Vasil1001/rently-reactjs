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

  const onSubmit = () => {
    console.log(123);
  };
  return (
    <div className="container rounded-lg bg-[#2d323b] p-6 mx-auto lg:w-10/12 mt-5">
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 auto-cols-max mb-5 md:gap-7">
        <div className="mb-6 card  md:mb-0 shadow-sm">
          <figure>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Image"
            />
          </figure>
        </div>

        <div className="flex flex-col col-span-2 xl:col-start-2 xl:col-span-12 justify-between">
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
          <p
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
          <div className="w-full rounded-lg shadow-md bg-neutral stats text-slate-100">
            <div className="stat ">
              <div className="stat-title text-md">Location</div>
              <div className="text-lg stat-value">
                <div className="flex justify-between">
                  <h1 className="text-3xl card-title">
                    Name
                    <div className="ml-2 mr-1 badge badge-success">badge</div>
                  </h1>
                  <button className="btn btn-outline" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>

            <div className="stat flex justify-between align-center text-white">
              <div className="stat-title text-md items-start">Logged in</div>
              <div className="text-lg stat-value items-center">
                <button className="btn btn-outline" onClick={onLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md bg-neutral stats  text-slate-100">
            <div className="stat ">
              <div className="stat-title text-md">Location</div>
              <div className="text-lg stat-value">Stoke Newington</div>
            </div>

            <div className="stat ">
              <div className="stat-title text-md">Type</div>
              <div className="text-lg stat-value">Semi Detatched</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg shadow-md bg-neutral stats text-slate-100 mb-5">
        <div className="stat ">
          <div className="stat-title text-md">Location</div>
          <div className="text-lg stat-value">Stoke Newington</div>
        </div>

        <div className="stat ">
          <div className="stat-title text-md">Type</div>
          <div className="text-lg stat-value">Semi Detatched</div>
        </div>
      </div>

      <div className="rounded-lg shadow-lg card bg-neutral">
        <div className="card-body">
          <h2 className="text-3xl font-bold card-title">Listed Properties</h2>
          <div className="w-full py-5  mt-3 rounded-lg shadow-lg stats bg-[#20252e] p-4">
            2 Bedroom flat in Stoke Newington
          </div>
          <div className="w-full py-5 mt-3 rounded-lg shadow-lg stats bg-[#20252e] p-4">
            2 Bedroom flat in Stoke Newington
          </div>
        </div>
      </div>
    </div>
  );
}
