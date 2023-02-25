import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"

export default function CreateListing() {
  const [geoLocationEnabled, setGeoLocationEnabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: "1",
    bathrooms: "1",
    parking: "false",
    furnished: "false",
    address: "",
    offer: "false",
    regularPrice: "0",
    discountedPrice: "0",
    images: {},
    latitude: 0,
    longitude: 0,
  })

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData

  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)
  const onSubmit = (e) => {
    e.preventDefault()
  }
  const onMutate = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid })
        } else {
          navigate("/login")
        }
      })
    }
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="rounded-lg bg-[#2d323b] p-6 mx-auto xl:w-10/12 lg:w-12/12 md:w-12/12 mt-5">
      <p className="text-xl mb-5">Create a Listing</p>
      <form onSubmit={onSubmit} className="flex flex-col">
        <label>Sell / Rent</label>
        <div className="flex gap-3">
          <button
            type="submit"
            className={
              type === "sale"
                ? "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                : "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
            }
            id="type"
            value="sale"
            onClick={onMutate}
          >
            <b>Sell</b>
          </button>
          <button
            type="submit"
            className={
              type === "rent"
                ? "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                : "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
            }
            id="type"
            value="rent"
            onClick={onMutate}
          >
            <b>Rent</b>
          </button>
        </div>

        <label className="formLabel">Name</label>
        <input
          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
          type="text"
          id="name"
          value={name}
          onChange={onMutate}
          maxLength="32"
          minLength="10"
          required
        />

        <div className="flex flex-wrap  gap-x-5">
          <div className="grow">
            <label className="">Bedrooms</label>
            <input
              className=" w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onMutate}
              min="1"
              max="50"
              required
            />
          </div>
          <div className="grow">
            <label className="formLabel">Bathrooms</label>
            <input
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onMutate}
              min="1"
              max="50"
              required
            />
          </div>
          <div>
            <label>Parking spot</label>
            <div className="flex gap-3">
              <button
                className={
                  parking
                    ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="parking"
                value={true}
                onClick={onMutate}
                min="1"
                max="50"
              >
                Yes
              </button>
              <button
                className={
                  !parking && parking !== null
                    ? " px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : " px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="parking"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>
          </div>

          <div>
            <label className="formLabel">Furnished</label>
            <div className="flex gap-3">
              <button
                className={
                  furnished
                    ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="furnished"
                value={true}
                onClick={onMutate}
              >
                Yes
              </button>
              <button
                className={
                  !furnished && furnished !== null
                    ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="furnished"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>
          </div>
        </div>

        <label className="formLabel">Address</label>
        <textarea
          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
          type="text"
          id="address"
          value={address}
          onChange={onMutate}
          required
        />

        {!geoLocationEnabled && (
          <div className="flex gap-3">
            <div className="grow">
              <label className="">Latitude</label>
              <input
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                type="number"
                id="latitude"
                value={latitude}
                onChange={onMutate}
                required
              />
            </div>
            <div className="grow">
              <label className="formLabel">Longitude</label>
              <input
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                type="number"
                id="longitude"
                value={longitude}
                onChange={onMutate}
                required
              />
            </div>
          </div>
        )}

        <div>
          <label className="formLabel">Offer</label>
          <div className="flex gap-3">
            <button
              className={
                offer
                  ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                  : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
              }
              type="button"
              id="offer"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              className={
                !offer && offer !== null ? "formButtonActive" : "formButton"
              }
              type="button"
              id="offer"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>
        </div>

        <div className="flex">
          <div>
            <label className="formLabel">Regular Price</label>
            <div className="">
              <input
                className="formInputSmall"
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onMutate}
                min="50"
                max="750000000"
                required
              />
              {type === "rent" && <p className="formPriceText">$ / Month</p>}
            </div>
          </div>
          {offer && (
            <>
              <label className="formLabel">Discounted Price</label>
              <input
                className="formInputSmall"
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onMutate}
                min="50"
                max="750000000"
                required={offer}
              />
            </>
          )}
        </div>

        <label className="formLabel">Images</label>
        <p className="imagesInfo">The first image will be the cover (max 6).</p>
        <input
          className="formInputFile"
          type="file"
          id="images"
          onChange={onMutate}
          max="6"
          accept=".jpg,.png,.jpeg"
          multiple
          required
        />
        <div>
          <button
            className="mt-6 w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-orange-700 hover:bg-orange-600"
            type="number"
            id="longitude"
            value={longitude}
            onChange={onMutate}
            required
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
  )
}
