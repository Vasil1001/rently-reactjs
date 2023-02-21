import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useState } from "react"
import {useNavigate} from "react-router-dom";
import Spinner from
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

  useEffect(() => {
    first
    getAuth()
    return () => {
      second
    }
  }, [third])
  
  return <div>CreateListing</div>
}
