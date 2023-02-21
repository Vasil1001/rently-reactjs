import React, { useState } from 'react'

export default function CreateListing() {
  const [geoLocationEnabled, setGeoLocationEnabled] = useState(false)
  
  const [ formData, setFormData ] = useState({
    type: 'rent',
    name: '',
    bedrooms: '1',
    bathrooms: '1',
    parking: 'false',
    furnished: 'false',
    address: '',
    offer: 'false',
    regularPrice: '0',
    discountedPrice: '0',
    images: {}, 
    latitute: '',
    longitude: '',
  })
  
  return (
    <div>CreateListing</div>
  )
}
