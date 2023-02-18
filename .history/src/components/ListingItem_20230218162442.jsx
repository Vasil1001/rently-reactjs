import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id }) {
  return (
    <div>
      <li>
        <Link to={`/category/${listing.type}/${id}`}>
          <img src={listing.imgUrls[0]} alt={listing.name} />
        </Link>
      </li>
    </div>
  )
}
