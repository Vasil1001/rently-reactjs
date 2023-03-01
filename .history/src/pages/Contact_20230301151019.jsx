import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import { IoChevronBackOutline } from "react-icons/io5"

export default function Contact() {
  const [message, setMessage] = useState("")
  const [landlord, setLandlord] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
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

  const onChange = (e) => setMessage(e.target.value)

  return (
    <div className="rounded-lg mx-auto xl:w-9/12 lg:w-12/12 md:w-12/12 sm:w-12/12 mt-5">
      <span className="flex items-center mb-3 " onClick={() => navigate(-1)}>
        <IoChevronBackOutline className="cursor-pointer" />
        <span className="cursor-pointer">&nbsp;&nbsp;</span>
        <p className="text-sm tracking-wide cursor-pointer">Back to listing</p>
      </span>
      <p className="text-3xl font-bold ">Contact Landlord</p>
      {landlord !== null && (
        <main>
          <div>
            <p>Contact {landlord?.name}</p>
          </div>

          <form action="">
            <label htmlFor="message">Message</label>
            <br></br>
            <textarea
              name="message"
              id="message"
              value="message"
              onChange={onChange}
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </main>
      )}
    </div>
  )
}
