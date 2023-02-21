import React, { useState } from 'react'

export default function CreateListing() {
  const [ formData, setFormData ] = useState({
    type: '',
    name: '',
    bedrooms: '1',
    bathrooms: '1',
    parking: 'false',
  })
  
  return (
    <div>CreateListing</div>
  )
}
