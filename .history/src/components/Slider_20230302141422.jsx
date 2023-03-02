import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom"
import {collection, getDocs, query, orderBy, limit} from "firebase/firestore"
import { db } from "../firebase.config"
import Spinner from './Spinner'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function Slider() {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const listingsRef = collection(db, "listings")
        const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5))
        
    }, [])



  return (
    <div>Slider</div>
  )
}
