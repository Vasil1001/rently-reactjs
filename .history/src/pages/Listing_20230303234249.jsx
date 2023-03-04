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

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

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
    <div className="lg:w-12/12  md:w-12/12 sm:w-12/12 mx-auto mt-5 rounded-lg xl:w-9/12">
      {/* SLIDER */}

      {/* // ? RESPONSIVE PHOTO GALLERY 3/3 GRID WITH 2/3 IMAGE ON LEFT */}
      <div className="mx-auto ">
        <span className="mb-3 flex items-center " onClick={() => navigate(-1)}>
          <IoChevronBackOutline className="cursor-pointer" />
          <span className="cursor-pointer">&nbsp;&nbsp;</span>
          <p className="text-md cursor-pointer tracking-wide">
            Back to listings
          </p>
        </span>

        {/* // ? SWIPING  RESPONSIVE PHOTO GALLERY 3/3 GRID WITH 2/3 IMAGE ON LEFT */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          a11y={true}
          style={{ height: "300px", minHeight: "30rem" }}
          className="mb-5 "
        >
          {listing.imgUrls.map((url, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  style={{
                    background: `url(${listing.imgUrls[index]}) center no-repeat`,
                    backgroundSize: "cover",
                    minHeight: "20rem",
                  }}
                  className=""
                ></div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <section className="">
          <div className="flex flex-wrap ">
            <div className="h-[300px] min-h-[30rem] pr-2 md:block md:w-3/5">
              <div
                className="h-[300px] min-h-[30rem] w-full rounded bg-cover shadow-md"
                style={{
                  backgroundImage: `url(${listing.imgUrls[0]})`,
                }}
              ></div>
            </div>
            <div className="flex h-[300px] min-h-[30rem] flex-col gap-2  overflow-hidden rounded-md md:w-2/5">
              <div
                className="h-[150px] min-h-[15rem] w-full rounded bg-cover shadow-md "
                style={{
                  backgroundImage: `url(${listing.imgUrls[1]})`,
                }}
              ></div>
              <div
                className="h-[150px] min-h-[15rem] w-full rounded bg-cover shadow-md"
                style={{
                  backgroundImage: `url(${listing.imgUrls[2]})`,
                }}
              ></div>
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
                  <p className="mr-16 hidden sm:hidden md:block lg:block xl:block">
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
            <h1 className="text-md text-gray-300">Location</h1>
            <p className="text-lg">{listing.location}</p>
          </div>

          <div className="mt-2 flex gap-14">
            <div className="flex flex-col">
              <h1 className="text-md text-gray-300">Bedrooms</h1>
              <span className="flex gap-3 text-xl">
                <img
                  src={bedIcon}
                  className="h-7 w-7"
                  alt="bed"
                  style={{ filter: "invert(91%) " }}
                />

                <p className="mt-1 text-sm">×</p>
                <b>
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} `
                    : `${listing.bedrooms} `}
                </b>
              </span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-md text-gray-300">Bathrooms</h1>
              <span className="flex gap-3 text-xl">
                <img
                  src={bathtubIcon}
                  className="h-6 w-7"
                  alt="bed"
                  style={{ filter: "invert(91%) " }}
                />

                <p className="mt-1 text-sm">×</p>
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
        <div className="mt-4 w-52 rounded bg-slate-700  p-3 text-center text-lg font-bold hover:bg-slate-600">
          <Link
            to={`/contact/${listing.userRef}?listingName=${listing.name}`}
            className="primaryButton"
          >
            Contact Landlord
          </Link>
        </div>
      )}
      <br />

      {/* MAP */}
      <div id="map">
        <MapContainer
          style={{ height: "300px" }}
          center={[listing.geolocation.lat, listing.geolocation.lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          />
          <Marker position={[listing.geolocation.lat, listing.geolocation.lng]}>
            <Popup>{listing.location}</Popup>
          </Marker>
        </MapContainer>
      </div>
      <br />
      <br />
    </div>
  )
}

// ? https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat
