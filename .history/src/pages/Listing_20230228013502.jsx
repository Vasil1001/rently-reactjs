import React, { useEffect, useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate, Link, useParams } from "react-router-dom"
import { db } from "../firebase.config"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import Spinner from "../components/Spinner"
import shareIcon from "../assets/svg/shareIcon.svg"

export default function Listing() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [shareLinkCopied, setShareLinkCopied] = useState(false)

  const useNavigate = useParams()
  const params = useParams()
  const auth = getAuth()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        console.log(docSnap.data())

        setListing(docSnap.data())
        setLoading(false)
      } else {
        console.log("No such document")
      }
    }

    fetchListing()
  }, [useNavigate, params.listingId])

  if (loading) {
    return <Spinner />
  }
  const onSubmit = () => {
    console.log(123)
  }
  return (
    <div className="rounded-lg  mx-auto xl:w-9/12 lg:w-12/12 md:w-12/12 mt-5">
      {/* SLIDER */}
      <div
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          setShareLinkCopied(true)
          setTimeout(() => {
            setShareLinkCopied(false)
          }, 2000)
        }}
        className="flex flex-col items-center justify-center"
      >
        <img
          src={shareIcon}
          alt="Share Icon"
          style={{ filter: "invert(91%) " }}
        />
      </div>

      {shareLinkCopied && <p>Link Copied!</p>}

      <div><p>
        {listing.name}
        {listing.offer ? listing.discountedPrice : listing.price}
        
      </p></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-5 md:gap-5">
        <div className=" rounded-lg mb-6  card md:mb-0 ">
          <figure className="">
            <img
              className="rounded-lg"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Image"
            />
          </figure>
        </div>

        <div className="flex flex-col col-span-2 xl:col-start-2 xl:col-span-12  justify-between">
          <div className="w-full grow text-gray-200 text-lg">
            <div className="stat">
              <div className="text-lg stat-value">
                <div className="flex justify-between">
                  <h1 className="text-2xl ">My Profile</h1>
                </div>
              </div>
              <hr className="my-3" />
              <p>
                Description, this user has been selling properties for 5 years
                and has sold 10 properties in the last 12 months.
              </p>
            </div>
          </div>

          <div className="w-full mt-5 rounded-lg shadow-md stats text-slate-100">
            <Link to="/listings">
              <div className="stat ">
                <div className="stat-title text-md">Listing</div>
                <div className="text-lg stat-value">Sell or Rent your home</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg shadow-md bg-neutral stats text-slate-100 mb-5">
        <div className="stat ">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="text-lg stat-value">Personal Details</div>
            </div>
            <hr className="my-3" />
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
