import React, { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import { IoChevronBackOutline } from "react-icons/io5"

export default function Contact() {
  const [message, setMessage] = useState("")
  const [landlord, setLandlord] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()
  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists) {
        setLandlord(docSnap.data())
      } else {
        toast.error("Could not get landlord data")
      }
    }
  }, [params.landlordId])
  return (
    <div className="rounded-lg mx-auto xl:w-9/12 lg:w-12/12 md:w-12/12 sm:w-12/12 mt-5">
      <div className="container mx-auto ">
        <div className="flex items-center mb-3">
          <IoChevronBackOutline />
          &nbsp;&nbsp; <p className="text-sm mt-0">Back to listings</p>
        </div>
        <p className="underline  decoration-8">Contact Landlord</p>
      </div>
    </div>
  )
}
