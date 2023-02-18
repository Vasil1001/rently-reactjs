import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id, onDelete }) {
  return (
    <li>
      {/* ? Split space into 4 grid cols */}
      <div className="grid grid-cols-4 col-span-4 mb-3 xl:mb-3 lg:mb-3 md:mb-2 sm:mb-2 ">
        {/* ? Left 50% half, with space for 2 Images */}
        <div className="flex col-span-2 gap-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2">
          <div className="card col-span-1 grow bg-[#1a1b1e] gap-2 lg:col-span-2 md:col-span-2 ">
            <img
              src={listing.imageUrls[0]}
              alt={listing.name}
              className=" object-fill h-min-56 h-56"
            />
          </div>
          <div className="col-span-1 ">
            <Link to={`/category/${listing.type}/${id}`}>
              <img
                src="https://media.rightmove.co.uk/71k/70202/131800415/70202_102565008604_IMG_00_0000.jpeg"
                alt={listing.name}
                className="hidden object-fill h-min-56 h-56 xl:block lg:block md:block"
              />
            </Link>
          </div>
        </div>

        {/* ? Right 50% half, with Title, Description, Price, Beds, Bathrooms */}
        <div className="flex flex-col  col-span-2 p-3 bg-slate-100 shadow-xl justify-between text-black flex-auto overflow-hidden  ">
          <h2 className="card-title  ">{listing.name}</h2>
          <p className="hidden xl:block lg:block md:block">{listing.location}</p>
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
                ? `${listing.bedrooms} `
                : "1"}
                Bedrooms
            </p>

            <img src={bathtubIcon} alt="bath" />
            <p className="overflow-hidden">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : "1 Bathroom"}
            </p>
          </div>
        </div>

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
