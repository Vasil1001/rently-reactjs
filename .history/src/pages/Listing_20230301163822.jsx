import React, { useEffect, useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate, Link, useParams } from "react-router-dom"
import { db } from "../firebase.config"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import Spinner from "../components/Spinner"
import shareIcon from "../assets/svg/shareIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"
import { toast } from "react-toastify"
import { IoChevronBackOutline } from "react-icons/io5"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
export default function Listing() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [shareLinkCopied, setShareLinkCopied] = useState(false)

  const useNavigater = useParams()

  const params = useParams()
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setListing(docSnap.data())
        setLoading(false)
      } else {
        console.log("No such document")
      }
    }

    fetchListing()
  }, [useNavigater, params.listingId])

  if (loading) {
    return <Spinner />
  }
  const onClickLinkCopied = () => {
    toast.success("Link Copied!")
    navigator.clipboard.writeText(window.location.href)
    setShareLinkCopied(true)
    setTimeout(() => {
      setShareLinkCopied(false)
    }, 2000)
  }

  const onSubmit = () => {
    console.log(123)
  }
  const discounted = listing.regularPrice - listing.discountedPrice
  return (
    <div className="rounded-lg  mx-auto xl:w-9/12 lg:w-12/12 md:w-12/12 sm:w-12/12 mt-5">
      {/* SLIDER */}

      {/* // ? RESPONSIVE PHOTO GALLERY 3/3 GRID WITH 2/3 IMAGE ON LEFT */}
      <div className="mx-auto ">
        <span className="flex items-center mb-3 " onClick={() => navigate(-1)}>
          <IoChevronBackOutline className="cursor-pointer" />
          <span className="cursor-pointer">&nbsp;&nbsp;</span>
          <p className="text-sm tracking-wide cursor-pointer">
            Back to listings
          </p>
        </span>
        <section className="h-1/2">
          <div className="flex flex-wrap ">
            <div className=" md:block md:w-3/5  pr-2 ">
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
                  className="rounded bg-cover shadow-md h-1/2 "
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/victorian-ground-floor-flat-for-sale-rachel-khoo-former-home-ravensworthroad-dexters-exterior-1591631748.jpg?crop=0.668xw:1.00xh;0.195xw,0&resize=640:*"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="hidden md:block rounded bg-cover shadow-md h-1/2"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-5 pt-1 ">
        <div className="col-span-5">
          <div className="flex justify-between">
            <p className="text-2xl ">{listing.name}</p>
            <div
              onClick={() => onClickLinkCopied()}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex">
                {shareLinkCopied && (
                  <p className="mr-16 hidden xl:block lg:block md:block sm:hidden">
                    Link Copied!
                  </p>
                )}
                <img
                  src={shareIcon}
                  alt="Share Icon"
                  style={{ filter: "invert(91%) " }}
                  className="cursor-pointer"
                />
              </div>
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
            </div>

            <div className="flex place-items-center gap-2 ">
              {listing.offer && (
                <span className="rounded-lg bg-secondary p-1 px-2 text-sm  ">
                  <p>
                    <b>
                      $
                      {discounted
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      discount
                    </b>
                  </p>
                </span>
              )}
              <span className="rounded-lg  bg-green-700 p-1 px-2 text-sm ">
                <b>{listing.type === "rent" ? "Rent" : "Sale"}</b>
              </span>
            </div>
          </div>

          <hr className="my-3" />
          <div>
            <h1 className="text-gray-300 text-md">Location</h1>
            <p className="text-lg">{listing.location}</p>
          </div>

          <div className="flex gap-14 mt-2">
            <div className="flex flex-col">
              <h1 className="text-gray-300 text-md">Bedrooms</h1>
              <span className="flex gap-3 text-xl">
                <img
                  src={bedIcon}
                  className="h-7 w-7"
                  alt="bed"
                  style={{ filter: "invert(91%) " }}
                />

                <p className="text-sm mt-1">×</p>
                <b>
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} `
                    : `${listing.bedrooms} `}
                </b>
              </span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-gray-300 text-md">Bathrooms</h1>
              <span className="flex gap-3 text-xl">
                <img
                  src={bathtubIcon}
                  className="h-6 w-7"
                  alt="bed"
                  style={{ filter: "invert(91%) " }}
                />

                <p className="text-sm mt-1">×</p>
                <b>
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} `
                    : `${listing.bathrooms} `}
                </b>
              </span>
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
      ></div>

     

      {auth.currentUser?.uid !== listing.userRef && (
        <div className="bg-slate-700 w-52 mt-3 p-3  text-lg font-bold rounded text-center hover:bg-slate-600">
          <Link
            to={`/contact/${listing.userRef}?listingName=${listing.name}`}
            className="primaryButton"
          >
            Contact Landlord
          </Link>
        </div>
      )}
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

       {/* MAP */}
       <div id="map">
        <MapContainer style={{ height: "300px"}}
          center={[listing.geolocation.lat, listing.geolocation.lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  )
}

// ? https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat
