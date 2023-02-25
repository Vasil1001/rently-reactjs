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
        <input
                type={}
                id="password"
                placeholder="*****"

                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
              ></input>
        
      </form>
    </div>
  )
}
