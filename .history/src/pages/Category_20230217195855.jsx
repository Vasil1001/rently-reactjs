import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"

export default function Category() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(() => {
    const fetchListings = async () => {
      try {
        e
      } catch (error) {}
    }
    fetchListings()
  })
  //     const fetchListings = async () => {
  //       try {
  //         const q = query(
  //           collection(db, "listings"),
  //           where("category", "==", params.category),
  //           orderBy("createdAt", "desc"),
  //           limit(9)
  //         )
  //         const querySnapshot = await getDocs(q)
  //         const listings = []
  //         querySnapshot.forEach((doc) => {
  //           listings.push({ id: doc.id, ...doc.data() })
  //         })
  //         setListings(listings)
  //         setLoading(false)
  //       } catch (error) {
  //         console.log(error)
  //         toast.error("Could not fetch listings")
  //       }
  //     }
  //     fetchListings()
  //   })
  return <div>Category</div>
}
