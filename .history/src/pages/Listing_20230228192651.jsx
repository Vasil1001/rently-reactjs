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
    <div className="rounded-lg mx-auto xl:w-9/12 lg:w-12/12 md:w-12/12 mt-5 mx-1">
      {/* SLIDER */}
      
        <div class="grid-cols-3 m-2 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full col-span-2 row-span-2 rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
        </div>

      <div className="grid grid-cols-5 p-2 grid-cols-4 gap-2 ">

      
        <div className="col-span-3 row-span-2 ">
          <img
            src="https://www.habituallychic.luxury/wp-content/uploads/2019/03/virginia-howard-london-flat-habituallychic-001-1024x683.jpg"
            alt="Exterior1"
            className="object-fit h-104"
          />
        </div>
        <div className="col-span-2 row-span-2 ">
          <div className="flex flex-col gap-2 items-center justify-center">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/victorian-ground-floor-flat-for-sale-rachel-khoo-former-home-ravensworthroad-dexters-exterior-1591631748.jpg?crop=0.668xw:1.00xh;0.195xw,0&resize=640:*"
              alt="a"
              className="object-cover h-52"
            />

            <img
              src="https://media.houseandgarden.co.uk/photos/61893aa251c95671034bb431/master/w_1600%2Cc_limit/171130_rui3123.jpg"
              alt="a"
              className="object-cover h-max bg-clip-content	"
            />
          </div>
        </div>
      </div>
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

      <div>
        <p>
          {listing.name} - £
          {listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p>{listing.location}</p>
        <p>For {listing.type === "rent" ? "Rent" : "Sale"}</p>
        {listing.offer && (
          <p>${listing.regularPrice - listing.discountedPrice} discount</p>
        )}
      </div>
      <br />
      <ul>
        <li>
          {listing.bedrooms > 1
            ? `${listing.bedrooms} Bedrooms`
            : `${listing.bedrooms} Bedroom`}
        </li>
        <li>
          {listing.bathrooms > 1
            ? `${listing.bathrooms} Bathrooms`
            : `${listing.bathrooms} Bedroom`}
        </li>
        <li>{listing.parking > 1 && "Parking Spot Available"}</li>
        <li>{listing.furnished > 1 && "Furnished"}</li>
      </ul>

      <p>Location</p>

      {/* MAP */}
      <div>
        {auth.currentUser?.uid !== listing.userRef && (
          <Link to={`/contact/${listing.userRef}?listingName=${listing.name}`}>
            Contact Landlord
          </Link>
        )}
      </div>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-5 md:gap-5"></div>
    </div>
  )
}
