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
    <header></header>
      <form onSubmit={onSubmit}>
        <button
          type="submit"
          className="w-sm px-4 py-3 font-semibold rounded-md dark:bg-[#ec48fb] dark:text-gray-900 hover:bg-[#ee7bf8]"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}