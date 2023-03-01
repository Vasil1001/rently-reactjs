import React, { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"

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
    <div>
      // ? RESPONSIVE PHOTO GALLERY 3/3 GRID WITH 2/3 IMAGE ON LEFT
      <div className="container mx-auto ">
        <section className="py-2 ">
          <div className="flex flex-wrap">
            <div className="hidden md:block md:w-3/5 px-2">
              <div
                className="h-full w-full bg-cover rounded shadow-md"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/random/1280x720')",
                }}
              ></div>
            </div>
            <div className="md:w-2/5 h-auto  overflow: hidden;">
              <div class="mb-2">
                <img
                  className="rounded shadow-md object-containh-26  overflow: hidden;"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/victorian-ground-floor-flat-for-sale-rachel-khoo-former-home-ravensworthroad-dexters-exterior-1591631748.jpg?crop=0.668xw:1.00xh;0.195xw,0&resize=640:*"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded shadow-md"
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
