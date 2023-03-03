import React, { useEffect, useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { db } from "../../firebase.config"
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore"
import { toast } from "react-toastify"
import homeIcon from "../../assets/svg/homeIcon.svg"
import keyboardArrowRightIcon from "../../assets/svg/keyboardArrowRightIcon.svg"
import ListingItem from "../../components/ListingItem"

export default function Profile() {
  const auth = getAuth()
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)
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

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingsRef = collection(db, "listings")
      const q = query(
        listingsRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      )
      const querySnap = await getDocs(q)

      const listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListings(listings)
      setLoading(false)
    }
    fetchUserListings()
  }, [auth.currentUser.uid])

  const onDelete = async (listingId) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      await deleteDoc(doc(db, "listings", listingId))
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      )
      setListings(updatedListings)
      toast.success("Listing deleted successfully")
    }
  }
  const onEdit = (listingId) => navigate(`/edit-listing/${listingId}`)

  return (
    <div className="lg:w-12/12 md:w-12/12 mx-auto mt-5 rounded-lg bg-[#2d323b] p-6 xl:w-9/12">
      <div className="mb-5 grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:grid-cols-3 xl:grid-cols-2">
        <div className=" card mb-6  rounded-lg md:mb-0 ">
          <figure className="">
            <img
              className="rounded-lg"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Image"
            />
          </figure>
        </div>

        <div className="col-span-2 flex flex-col justify-between md:col-span-2 xl:col-span-12  xl:col-start-2">
          <div className="stats w-full grow rounded-lg bg-neutral text-slate-100 shadow-md">
            <div className="stat">
              <div className="stat-value text-lg">
                <div className="flex justify-between">
                  <div className="flex">
                    <h1 className="text-2xl ">Profile </h1>
                  </div>
                  <div className="flex gap-2">
                    <p
                      className="btn-outline btn-sm btn hover:btn-warning active:text-red-400"
                      onClick={() => {
                        changeDetails && onSubmit()
                        setChangeDetails((prevState) => !prevState)
                      }}
                    >
                      {changeDetails ? "Done" : "Edit"}
                    </p>
                    <button
                      className="btn-outline btn-sm btn hover:btn-error"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-3" />
              <div className="grid grid-cols-2 sm:gap-1 md:gap-5 lg:gap-5">
                <form className="col-span-2 flex flex-col sm:col-span-2 md:col-span-2 lg:col-span-2 ">
                  <div className="text-md stat-title ml-1">Name</div>
                  <input
                    type="text"
                    id="name"
                    className={
                      !changeDetails
                        ? "mb-3 mt-1 rounded-lg bg-slate-700 p-2"
                        : "mb-3 mt-1 rounded-lg bg-slate-600 p-2 ring-1 ring-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    }
                    disabled={!changeDetails}
                    value={name}
                    onChange={onChange}
                  />

                  <div className="text-md stat-title ml-1">Email</div>
                  <input
                    type="text"
                    id="email"
                    className={
                      !changeDetails
                        ? "mb-3 mt-1 rounded-lg bg-slate-700 p-2"
                        : "mb-3 mt-1 rounded-lg bg-slate-600 p-2 ring-1 ring-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    }
                    disabled={!changeDetails}
                    value={email}
                    onChange={onChange}
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="stats mt-3 w-full rounded-lg bg-neutral text-slate-100 shadow-md hover:bg-gray-700">
              <Link to="/create-listing">
                <div className="h-full grow p-5 ">
                  <div className="align-center flex justify-between">
                    <div className="md:text-md sm:text-md text-sm lg:text-lg xl:text-lg ">
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

            <div className="stats mt-3  w-full rounded-lg bg-neutral text-slate-100 shadow-md hover:bg-gray-700">
              <Link to="/create-listing">
                <div className="h-full grow p-5 ">
                  <div className="align-center flex justify-between">
                    <div className="md:text-md sm:text-md text-sm lg:text-lg xl:text-lg">
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
        </div>
      </div>

      <div className="stats mb-5  w-full rounded-lg bg-neutral text-slate-100 shadow-md hover:bg-gray-700">
        <Link to="/create-listing">
          <div className="h-full grow p-5 ">
            <div className="align-center flex justify-between">
              <img
                src={homeIcon}
                style={{ filter: "invert(91%)" }}
                alt="Home"
              />

              <div className="md:text-md stat-value text-lg">
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

      {/* SECOND FULL ROW AFTER PICTURE */}
      <div className="stats mb-5 w-full rounded-lg bg-neutral text-slate-100 shadow-md">
        <div className="stat ">
          <div className="text-md stat-title">Location</div>
          <div className="stat-value text-lg">Stoke Newington</div>
        </div>

        <div className="stat ">
          <div className="text-md stat-title">Location</div>
          <div className="stat-value text-lg">Stoke Newington</div>
        </div>

        <div className="stat ">
          <div className="text-md stat-title">Type</div>
          <div className="stat-value text-lg">Semi Detatched</div>
        </div>
      </div>

      <div className="card flex flex-col rounded-lg  bg-neutral shadow-lg">
        <div className="card-body flex flex-col">
          <h2 className="card-title text-3xl font-bold">Listed Properties</h2>
          {!loading && listings.length !== 0 && (
            <div className="mt-3 flex w-full flex-col py-5 ">
              {listings.map((listing) => {
                return (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data}
                    id={listing.id}
                    onDelete={() => onDelete(listing.id)}
                    onEdit={() => onEdit(listing.id)}
                  />
                )
              })}
            </div>
          )}
          <div className="stats mt-3  w-full rounded-lg bg-[#20252e] p-4 py-5 shadow-lg">
            2 Bedroom flat in Stoke Newington
          </div>
          <div className="stats mt-3 w-full rounded-lg bg-[#20252e] p-4 py-5 shadow-lg">
            2 Bedroom flat in Stoke Newington
          </div>
        </div>
      </div>
    </div>
  )
}
