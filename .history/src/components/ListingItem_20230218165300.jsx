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
          className="w-40 h-40"
        />
        <p>{listing.location}</p>
        <p>{listing.name}</p>
        <p>
          £
          {listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          {listing.type === "rent" && " / month"}
        </p>

        <div>
          <img src={bedIcon} alt="bed" />
          <p>
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </p>

            <img src={bathtubIcon} alt="bath" />
            <p></p>
        </div>
      </Link>
    </li>
  )
}
