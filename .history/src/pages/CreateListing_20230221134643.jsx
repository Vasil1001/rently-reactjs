import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"

export default function CreateListing() {
  const [geoLocationEnabled, setGeoLocationEnabled] = useState(true)

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
  const auth = getAuth()

  useEffect(() => {
    first
    return () => {
      second
    }
  }, [third])

  return <div>CreateListing</div>
}
