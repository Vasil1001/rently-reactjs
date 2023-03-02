import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom"
import {collection, getDocs, query, orderBy, limit} from "firebase/firestore"
import {db} from "../../../firebase"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function Slider() {
  return (
    <div>Slider</div>
  )
}
