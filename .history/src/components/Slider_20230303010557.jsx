import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { db } from "../firebase.config"
import Spinner from "./Spinner"

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function Slider() {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings")
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5))
      const querySnap = await getDocs(q)

      let listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      console.log(listings)
      setListings(listings)
      setLoading(false)
    }

    fetchListings()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (listings.length === 0) {
    return <></>
  }

  return (
    listings && (
      <>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          style={{ height: "300px", minHeight: "23rem" }} //<--slider not show if missing this line
        >
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background: `url(${data.imgUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                  minHeight: "23rem",
                }}
                className=""
              >
                <section className="bg-slate-500 bg-opacity-40 p-2">
                  <p className="text-xl font-bold text-gray-100">{data.name}</p>
                  <p className="text-lg text-gray-200">
                    $
                    {data.discountedPrice ??
                      data.regularPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    {data.type === "rent" && "/ month"}
                  </p>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  )
}