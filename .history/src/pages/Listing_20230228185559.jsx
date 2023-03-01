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
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmetro.co.uk%2F2022%2F02%2F10%2Ftiny-london-studio-flat-on-the-market-for-50k-has-bed-on-top-of-the-microwave-16084226%2F&psig=AOvVaw2DaSv-EcgOaq5Pn5IVmPwH&ust=1677696830631000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKCm7-7xuP0CFQAAAAAdAAAAABAE"
            alt="Exterior1"
          />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center justify-center">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.habituallychic.luxury%2F2019%2F03%2Fanother-lovely-london-flat%2F&psig=AOvVaw13oij2Rw7Xn0MvG3Ol0TaY&ust=1677696931303000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKj5957yuP0CFQAAAAAdAAAAABAI" alt="" />
            
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
