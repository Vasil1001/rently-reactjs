import React, { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"

export default function Contact() {
  const [message, setMessage] = useState("")
  const [landlord, setLandlord] = useState("")
  const [searchParams, setSearchParams] = useSearchParams(null)

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
    <div>
      // ? RESPONSIVE PHOTO GALLERY 3/3 GRID WITH 2/3 IMAGE ON LEFT
      <div class="container mx-auto ">
        <section class="py-2 ">
          <div class="flex flex-wrap">
            <div class="hidden md:block md:w-3/5 px-2">
              <div
                class="h-full w-full bg-cover rounded shadow-md"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/random/1280x720')",
                }}
              ></div>
            </div>
            <div class="md:w-2/5 h-auto">
              <div class="mb-2">
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
