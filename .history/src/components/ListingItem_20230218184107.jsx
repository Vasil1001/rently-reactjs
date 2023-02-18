import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id, onDelete }) {
  return (
    <li>
      <div className="grid grid-cols-4 col-span-4">
        <div className="flex  col-span-4 h-56 bg-slate-100 shadow-xl text-black">
          <figure className="col-span-4">
          
            <img
              src={listing.imageUrls[0]}
              alt={listing.name}
              className="col-span-2"
            />
          </figure>
          <div className="flex flex-col grow p-5 justify-between">
            <h2 className="card-title ">{listing.name}</h2>
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

            <div className="flex">
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
      </div>
    </li>
  )
}
