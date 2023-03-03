import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import { IoChevronBackOutline } from "react-icons/io5"

export default function Contact() {
  const [message, setMessage] = useState("")
  const [landlord, setLandlord] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setLandlord(docSnap.data())
      } else {
        toast.error("Could not get landlord data")
      }
    }
    getLandlord()
  }, [params.landlordId])

  const onChange = (e) => setMessage(e.target.value)

  return (
    <div className="mx-auto mt-5 rounded-lg sm:w-8/12 md:w-8/12 lg:w-5/12 xl:w-4/12">
      <span className="mb-1 flex items-center " onClick={() => navigate(-1)}>
        <IoChevronBackOutline className="cursor-pointer" />
        <span className="cursor-pointer">&nbsp;&nbsp;</span>
        <p className="text-md cursor-pointer tracking-wide">Back to listing</p>
      </span>
      <p className="text-2xl font-bold  ">Contact Landlord</p>
      {landlord !== null && (
        <main>
          <div>
            <p className="mt-1">Landlord: {landlord?.name}</p>
          </div>

          <form action="">
            <div className="mt-3 flex flex-col">
              <textarea
                name="message"
                className="no-resize resize-none appearance-none rounded-xl p-2"
                placeholder="Type your message here..."
                id="message"
                value={message}
                onChange={onChange}
                cols="30"
                rows="10"
              ></textarea>
              <a
                href={`mailto:${landlord.email}?Subject=${searchParams.get(
                  "listingName"
                )}&body=${message}`}
              >
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-secondary btn mt-4 text-center"
                  >
                    Send Message
                  </button>
                </div>
              </a>
            </div>
          </form>
        </main>
      )}
    </div>
  )
}
