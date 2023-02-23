import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"

export default function CreateListing() {
  const [geoLocationEnabled, setGeoLocationEnabled] = useState(true)
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
    latitude: "",
    longitude: "",
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
    <div>
      <p className="text-xl my-5">Create a Listing</p>
      <form onSubmit={onSubmit} className="flex flex-col">
        <label>Sell / Rent</label>
        <button
          type="submit"
          className={
            type === "sale"
              ? " text-white w-32 px-4 py-3 mt-2 font-semibold rounded-md dark:bg-[#4cee3b] dark:text-gray-900 hover:bg-[#7cfb6d]"
              : " text-white w-32 px-4 py-3 mt-2 font-semibold rounded-md dark:dark:bg-[#3b94ee] dark:text-gray-900 hover:dark:bg-[#65aff9]"
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
              ? " text-white w-32 px-4 py-3 mt-2 font-semibold rounded-md dark:bg-[#4cee3b] dark:text-gray-900 hover:bg-[#7cfb6d]"
              : " text-white w-32 px-4 py-3 mt-2 font-semibold rounded-md dark:bg-[#b0b7af] dark:text-gray-900 hover:bg-[#7cfb6d]"
          }
          id="type"
          value="rent"
          onClick={onMutate}
        >
          <b>Rent</b>
        </button>

        <label className="formLabel">Name</label>
        <input
          className="formInputName"
          type="text"
          id="name"
          value={name}
          onChange={onMutate}
          maxLength="32"
          minLength="10"
          required
        />
      </form>
      // FORM ROOMS SECTION
      <div className="formRooms flex">
        <div>
          <label className="formLabel">Bedrooms</label>
          <input
            className="formInputSmall"
            type="number"
            id="bedrooms"
            value={bedrooms}
            onChange={onMutate}
            min="1"
            max="50"
            required
          />
        </div>
        <div>
          <label className="formLabel">Bathrooms</label>
          <input
            className="formInputSmall"
            type="number"
            id="bathrooms"
            value={bathrooms}
            onChange={onMutate}
            min="1"
            max="50"
            required
          />
        </div>
      </div>
      // PARKING
      <label className="formLabel">Parking spot</label>
      <div className="formButtons">
        <button
          className={parking ? "formButtonActive" : "formButton"}
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
            !parking && parking !== null ? "formButtonActive" : "formButton"
          }
          type="button"
          id="parking"
          value={false}
          onClick={onMutate}
        >
          No
        </button>
      </div>
      <label className="formLabel">Furnished</label>
      <div className="formButtons">
        <button
          className={furnished ? "formButtonActive" : "formButton"}
          type="button"
          id="furnished"
          value={true}
          onClick={onMutate}
        >
          Yes
        </button>
        <button
          className={
            !furnished && furnished !== null ? "formButtonActive" : "formButton"
          }
          type="button"
          id="furnished"
          value={false}
          onClick={onMutate}
        >
          No
        </button>
      </div>
      <label className="formLabel">Address</label>
      <textarea
        className="formInputAddress"
        type="text"
        id="address"
        value={address}
        onChange={onMutate}
        required
      />
    </div>
  )
}
