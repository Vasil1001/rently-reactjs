import React, { useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { db } from "../../firebase.config"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import homeIcon from "../../assets/svg/homeIcon.svg"
import keyboardArrowRightIcon from "../../assets/svg/keyboardArrowRightIcon.svg"

export default function Profile() {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const { name, email } = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate("/")
  }

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update display name in Firebase
        await updateProfile(auth.currentUser, {
          displayName: name,
        })

        // Update in Firestore doc
        const userRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(userRef, {
          name,
        })
      }
    } catch (error) {
      console.log(error)
      toast.error("Could not update profile details")
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="rounded-lg bg-[#2d323b] p-6 mx-auto xl:w-8/12 lg:w-12/12 md:w-12/12 mt-5">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 mb-5 md:gap-5">
        <div className=" rounded-lg mb-6  card md:mb-0 ">
          <figure className="">
            <img
              className="rounded-lg"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Image"
            />
          </figure>
          <div className="w-full mt-5 rounded-lg shadow-md bg-neutral stats text-slate-100">
            <Link to="/create-listing">
              <div className="p-5 grow h-full ">
                <div className="flex justify-between align-center">
                  <div className="text-lg md:text-md stat-value">
                    Saved Listings
                  </div>

                  <img
                    src={keyboardArrowRightIcon}
                    style={{ filter: "invert(91%) " }}
                    alt="Next"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:col-span-2 col-span-2 xl:col-start-2 xl:col-span-12  justify-between">
          <div className="w-full grow rounded-lg shadow-md bg-neutral stats text-slate-100">
            <div className="stat">
              <div className="text-lg stat-value">
                <div className="flex justify-between">
                  <div className="flex">
                    <h1 className="text-2xl ">Profile </h1>
                  </div>
                  <div className="flex gap-2">
                    <p
                      className="btn btn-outline hover:btn-warning btn-sm active:text-red-400"
                      onClick={() => {
                        changeDetails && onSubmit()
                        setChangeDetails((prevState) => !prevState)
                      }}
                    >
                      {changeDetails ? "Done" : "Edit"}
                    </p>
                    <button
                      className="btn btn-outline hover:btn-error btn-sm"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-1" />
              <div className="grid grid-cols-2 sm:gap-1 md:gap-5 lg:gap-5">
                <form className="flex flex-col sm:col-span-2 md:col-span-2 lg:col-span-2 col-span-2 ">
                  <div className="stat-title text-md ml-1">Name</div>
                  <input
                    type="text"
                    id="name"
                    className={
                      !changeDetails
                        ? "bg-slate-700 mb-3 p-2 rounded-lg mt-1"
                        : "bg-slate-600 mb-3 p-2 rounded-lg mt-1 ring-1 ring-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    }
                    disabled={!changeDetails}
                    value={name}
                    onChange={onChange}
                  />

                  <div className="stat-title text-md ml-1">Email</div>
                  <input
                    type="text"
                    id="email"
                    className={
                      !changeDetails
                        ? "bg-slate-700 mb-3 p-2 rounded-lg mt-1"
                        : "bg-slate-600 mb-3 p-2 rounded-lg mt-1 ring-1 ring-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    }
                    disabled={!changeDetails}
                    value={email}
                    onChange={onChange}
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 rounded-lg shadow-md bg-neutral stats text-slate-100">
            <Link to="/create-listing">
              <div className="stat ">
                <div className="flex justify-between">
                  <div className="text-lg stat-value">View listings</div>

                  <img
                    src={keyboardArrowRightIcon}
                    style={{ filter: "invert(91%) " }}
                    alt="Next"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mb-5  rounded-lg shadow-md stats text-slate-100">
        <Link to="/create-listing">
          <div className="p-5 grow h-full ">
            <div className="flex justify-between align-center">
              <img
                src={homeIcon}
                style={{ filter: "invert(91%)" }}
                alt="Home"
              />

              <div className="text-lg md:text-md stat-value">
                Sell or Rent your home
              </div>

              <img
                src={keyboardArrowRightIcon}
                style={{ filter: "invert(91%) " }}
                alt="Next"
              />
            </div>
          </div>
        </Link>
      </div>

      
      <div className="w-full rounded-lg shadow-md bg-neutral  text-slate-100 mb-5">
        <div className="grid grid-cols-5  gap-x-6  xl:grid-cols-5 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-2">
          <div className="flex flex-col col-span-full xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2">
            <img
              className="rounded-lg"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Image"
            />
            <div className="w-full mt-5 mb-5 rounded-lg shadow-md bg-gray stats text-slate-100 hover:bg-slate-700">
              <Link to="/create-listing">
                <div className="p-5 ">
                  <div className="flex justify-between align-center">
                    <img
                      src={homeIcon}
                      style={{ filter: "invert(91%)" }}
                      alt="Home"
                    />

                    <div className="text-lg md:text-md sm:text-sm stat-value ">
                      Sell or Rent your home
                    </div>

                    <img
                      src={keyboardArrowRightIcon}
                      style={{ filter: "invert(91%) " }}
                      alt="Next"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-span-full xl:col-span-3 lg:col-span-5 md:col-span-3 sm:col-span-2">
            <div className="">
              <div className="text-lg stat-value">
                <div className="flex justify-between">
                  <div className="flex">
                    <h1 className="text-2xl ">Profile </h1>
                  </div>
                  <div className="flex gap-2">
                    <p
                      className="btn btn-outline hover:btn-warning btn-sm active:text-red-400"
                      onClick={() => {
                        changeDetails && onSubmit()
                        setChangeDetails((prevState) => !prevState)
                      }}
                    >
                      {changeDetails ? "Done" : "Edit"}
                    </p>
                    <button
                      className="btn btn-outline hover:btn-error btn-sm"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-1" />
              <div className="grid grid-cols-2 sm:gap-1 md:gap-5 lg:gap-5">
                <form className="flex flex-col sm:col-span-2 md:col-span-2 lg:col-span-2 col-span-2 ">
                  <div className="stat-title text-md ml-1">Name</div>
                  <input
                    type="text"
                    id="name"
                    className={
                      !changeDetails
                        ? "bg-slate-700 mb-3 p-2 rounded-lg mt-1"
                        : "bg-slate-600 mb-3 p-2 rounded-lg mt-1 ring-1 ring-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    }
                    disabled={!changeDetails}
                    value={name}
                    onChange={onChange}
                  />

                  <div className="stat-title text-md ml-1">Email</div>
                  <input
                    type="text"
                    id="email"
                    className={
                      !changeDetails
                        ? "bg-slate-700 mb-3 p-2 rounded-lg mt-1"
                        : "bg-slate-600 mb-3 p-2 rounded-lg mt-1 ring-1 ring-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    }
                    disabled={!changeDetails}
                    value={email}
                    onChange={onChange}
                  />
                  <div className="flex gap-3">
                    <div className="w-full mt-3 rounded-lg shadow-md bg-gray stats text-slate-100 hover:bg-slate-700">
                      <Link to="/create-listing">
                        <div className="p-5 grow h-full ">
                          <div className="flex justify-between align-center">
                            <div className="text-sm xl:text-lg lg:text-lg md:text-md sm:text-md ">
                              Saved Listings
                            </div>

                            <img
                              src={keyboardArrowRightIcon}
                              style={{ filter: "invert(91%) " }}
                              alt="Next"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="w-full mt-3  rounded-lg shadow-md bg-gray stats text-slate-100 hover:bg-slate-700">
                      <Link to="/create-listing">
                        <div className="p-5 grow h-full ">
                          <div className="flex justify-between align-center">
                            <div className="text-sm xl:text-lg lg:text-lg md:text-md sm:text-md">
                              Your Listings
                            </div>

                            <img
                              src={keyboardArrowRightIcon}
                              style={{ filter: "invert(91%) " }}
                              alt="Next"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND FULL ROW AFTER PICTURE */}
      <div className="w-full rounded-lg shadow-md bg-neutral stats text-slate-100 mb-5">
        <div className="stat ">
          <div className="stat-title text-md">Location</div>
          <div className="text-lg stat-value">Stoke Newington</div>
        </div>

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
  )
}
