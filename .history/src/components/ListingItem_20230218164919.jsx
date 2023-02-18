import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id }) {
  return (
      <li>
        <Link to={`/category/${listing.type}/${id}`}>
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className='w-40 h-40'
        />
        <p>{li}</p>
        <p>{listing.name}</p>
        </Link>
      </li>
  )
}
