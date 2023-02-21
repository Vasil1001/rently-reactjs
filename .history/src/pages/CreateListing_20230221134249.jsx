import React, { useState } from 'react'

export default function CreateListing() {
  const [ formData, setFormData ] = useState({
    type: '',
    name: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
  })
  
  return (
    <div>CreateListing</div>
  )
}
