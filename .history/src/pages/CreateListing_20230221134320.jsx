import React, { useState } from 'react'

export default function CreateListing() {
  const [ formData, setFormData ] = useState({
    type: '',
    name: '',
    bedrooms: '1',
    bathrooms: '1',
    parking: 'false',
    address: '',
    furnished: 'false',
    offer: 'false',
    regularPrice: '0',
    
  })
  
  return (
    <div>CreateListing</div>
  )
}
