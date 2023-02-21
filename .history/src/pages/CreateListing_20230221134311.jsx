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
    offer: 'false'
  })
  
  return (
    <div>CreateListing</div>
  )
}
