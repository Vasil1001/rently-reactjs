import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id, onDelete }) {
  return (
    <li>
      <div className="card lg:card-side h bg-slate-100 shadow-xl text-black">
        <figure>
          <img
            src={listing.imageUrls[0]}
            alt={listing.name}
            className="w-52"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>

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
          <p>
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : "1 Bathroom"}
          </p>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className="w-40 h-40"
          fill="rgb(231, 76,60)"
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  )
}
