import React, { useState } from "react"

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
