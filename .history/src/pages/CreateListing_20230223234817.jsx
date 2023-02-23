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
          className={type === 'rent'? 'bg-blue-500 text-white' :} 
          id="type"
          value="sale"
          onClick={onMutate}
        >
          <b>Sell</b>
        </button>
        <button
          type="submit"
          className="w-32 px-4 py-3 mt-2 font-semibold rounded-md dark:bg-[#4cee3b] dark:text-gray-900 hover:bg-[#7cfb6d]"
          id="type"
          value="rent"
          onClick={onMutate}
        >
          <b>Rent</b>
        </button>
      </form>
    </div>
  )
}
