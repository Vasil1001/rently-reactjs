import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id, onDelete }) {
  return (
    <div>
      {/* ? Split space into 4 grid cols */}
      <Link to={`/category/${listing.type}/${id}`}>
        <div className="grid grid-cols-4 col-span-4 mb-5  ">
          {/* ? Left 50% half, with space for 2 Images */}
          <div className="flex col-span-4 gap-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4">
            <div className="card col-span-1 grow bg-[#1a1b1e] gap-2 lg:col-span-2 md:col-span-2 ">
              <img
                src={listing.imgUrls[0]}
                alt={listing.name}
                className=" object-fill rounded-l-xl h-min-44 h-44"
              />
            </div>
            <div className="col-span-1 ">
              <img
                src={listing.imgUrls[1]}
                alt={listing.name}
                className=" object-fill h-min-44 h-44 xl:block lg:block md:block"
              />
            </div>
          </div>

          {/* ? Right 50% half, with Title, Description, Price, Beds, Bathrooms */}
          <div className="flex flex-col relative rounded-r-xl col-span-4 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 p-5 bg-slate-100 shadow-xl justify-between text-black flex-auto overflow-hidden  ">
            <h2 className="card-title  ">{listing.name}</h2>
            <p className="hidden xl:block lg:block md:block">
              {listing.location}
            </p>
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

            <div className="flex gap-1">
              <img src={bedIcon} alt="bed" />
              <p>{listing.bedrooms > 1 ? `${listing.bedrooms} ` : "1"}</p>

              <p className="hidden xl:block lg:block md:block mr-2">
                {listing.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
              </p>

              <img src={bathtubIcon} alt="bath" />
              <p className="overflow-hidden">
                {listing.bathrooms > 1 ? `${listing.bathrooms} ` : "1"}
              </p>
              <p className="hidden xl:block lg:block md:block mr-2">
                {listing.bathrooms > 1 ? "Bathrooms" : "Bathroom"}
              </p>
            </div>
          </div>
          <div className="absolute right-9 top-88 ">
            {onDelete && (
              <DeleteIcon
                className="w-7 h-7"
                fill="rgb(231, 76,60)"
                onClick={() => onDelete(listing.id, listing.name)}
              />
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
