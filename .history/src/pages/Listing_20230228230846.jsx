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
    <div className="rounded-lg mx-auto w-12/12 xl:w-9/12 lg:w-12/12 md:w-12/12 sm:w-12/12 mt-5">
      {/* SLIDER */}
      {/* // ? RESPONSIVE PHOTO GALLERY 3/3 GRID WITH 2/3 IMAGE ON LEFT */}
      <div class="mx-auto ">
        <section class="h-1/2">
          <div class="flex flex-wrap ">
            <div class="hidden md:block md:w-3/5 px-2 ">
              <div
                className="h-full w-full bg-cover rounded shadow-md"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/random/1280x720')",
                }}
              ></div>
            </div>
            <div className="md:w-2/5 h-50">
              <div className="mb-2">
                <img
                  className="rounded bg-cover shadow-md h-1/2"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/victorian-ground-floor-flat-for-sale-rachel-khoo-former-home-ravensworthroad-dexters-exterior-1591631748.jpg?crop=0.668xw:1.00xh;0.195xw,0&resize=640:*"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded bg-cover shadow-md h-1/2"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-5 p-2 gap-2 ">
        <div className="col-span-3">
          <div className="flex justify-between">
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
      <div className="grid grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 mb-5 md:gap-5">
        <div className="col-span-3 row-span-2 ">
          <img
            src="https://www.habituallychic.luxury/wp-content/uploads/2019/03/virginia-howard-london-flat-habituallychic-001-1024x683.jpg"
            alt="Exterior1"
            className="h-full w-full bg-cover"
          />
        </div>
        <div className="col-span-2 row-span-2 ">
          <div className="flex flex-col gap-2 items-center justify-center">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/victorian-ground-floor-flat-for-sale-rachel-khoo-former-home-ravensworthroad-dexters-exterior-1591631748.jpg?crop=0.668xw:1.00xh;0.195xw,0&resize=640:*"
              alt="a"
              className="h-full w-full bg-cover"
            />

            <img
              src="https://media.houseandgarden.co.uk/photos/61893aa251c95671034bb431/master/w_1600%2Cc_limit/171130_rui3123.jpg"
              alt="a"
              className="h-full w-full bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
