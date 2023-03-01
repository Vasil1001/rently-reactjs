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
    <div className="rounded-lg mx-auto xl:w-4/12 lg:w-5/12 md:w-8/12 sm:w-8/12 mt-5">
      <span className="flex items-center mb-1 " onClick={() => navigate(-1)}>
        <IoChevronBackOutline className="cursor-pointer" />
        <span className="cursor-pointer">&nbsp;&nbsp;</span>
        <p className="text-sm tracking-wide cursor-pointer">Back to listing</p>
      </span>
      <p className="text-2xl font-bold  ">Contact Landlord</p>
      {landlord !== null && (
        <main>
          <div>
            <p className="mt-1">Landlord: {landlord?.name}</p>
          </div>

          <form action="">
            <div className="flex flex-col mt-3">
              <textarea
                name="message"
                className="p-2 rounded-xl no-resize resize-none appearance-none"
                placeholder="Type your message here..."
                id="message"
                value=""
                onChange={onChange}
                cols="30"
                rows="10"
              ></textarea>
              <a
                href={`mailto:${landlord.email}?Subject=${searchParams.get(
                  "listingName"
                )}&body=${message}`}
              >
              flex
                <button className="btn btn-secondary text-center mt-4">Send Message</button>
              </a>
            </div>
          </form>
        </main>
      )}
    </div>
  )
}
