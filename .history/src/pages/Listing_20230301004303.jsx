import React, { useEffect, useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate, Link, useParams } from "react-router-dom"
import { db } from "../firebase.config"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import Spinner from "../components/Spinner"
import shareIcon from "../assets/svg/shareIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

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
  const discounted = listing.regularPrice - listing.discountedPrice
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
        <div className="col-span-5">
          <div className="flex justify-between">
            <p className="text-2xl font-bold">{listing.name}</p>
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
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between ">
            <div>
              <p className="text-3xl">
                <strong></strong>£
                {listing.offer
                  ? listing.discountedPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : listing.regularPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              {shareLinkCopied && <p>Link Copied!</p>}
            </div>

            <div className="flex place-items-center gap-2 ">
              <span className="rounded-lg  bg-secondary p-1 px-2 text-sm  ">
                {listing.offer && (
                  <p>
                    $
                    {discounted
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    discount
                  </p>
                )}
              </span>
              <span className="rounded-lg  bg-green-700 p-1 px-2 text-sm ">
                {listing.type === "rent" ? "Rent" : "Sale"}
              </span>
            </div>
          </div>

          <hr className="my-2" />
          <div>
            <p>{listing.location}</p>
          </div>
          <br />
          <div className="flex gap-10">
            <div className="flex flex-col">
              <h1 className="text-gray-300 text-md">Bedrooms</h1>
              <span className="flex gap-3 text-xl">
                <img
                  src={bedIcon}
                  className="h-7 w-7"
                  alt="bed"
                  style={{ filter: "invert(91%) " }}
                />
                <strong>
                  ×
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} `
                    : `${listing.bedrooms} `}
                </strong>
              </span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-gray-300 text-md">Bathrooms</h1>
              <span className="flex gap-3 text-xl">
                <img
                  src={bedIcon}
                  className="h-7 w-7"
                  alt="bed"
                  style={{ filter: "invert(91%) " }}
                />
                
                  <p className="text-sm mt-2">×</p> 
                  <bold>{listing.bathrooms > 1
                    ? `${listing.bathrooms} `
                    : `${listing.bathrooms} `}
                </bold>
              </span>
            </div>
          </div>
          <ul>
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
              <Link
                to={`/contact/${listing.userRef}?listingName=${listing.name}`}
              >
                Contact Landlord
              </Link>
            )}
          </div>
          <br />
          <br />
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
