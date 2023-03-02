import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id, onDelete, onEdit }) {
  return (
    <div>
      {/* ? Split space into 4 grid cols */}
        <div className="grid grid-cols-4 col-span-4 mb-5  ">
          {/* ? Left 50% half, with space for 2 Images */}

          <div className="flex col-span-4 gap-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 ">
            <div className="card col-span-1 grow bg-[#1a1b1e] gap-2 lg:col-span-2 md:col-span-2 ">
              <img
                src={listing.imgUrls[0]}
                alt={listing.name}
                className=" object-fill rounded-tl-lg xl:rounded-l-xl lg:rounded-l-xl md:rounded-l-xl sm:rounded-tl-lg  h-min-44 h-44"
              />
            </div>
            <div className="col-span-1 ">
              <img
                src={listing.imgUrls[1]}
                alt={listing.name}
                className=" object-fill h-min-44 h-44 xl:block lg:block md:block rounded-tr-xl xl:rounded-r-none lg:rounded-r-none md:rounded-r-none sm:rounded-tr-xl"
              />
            </div>
          </div>
</Link>
          {/* ? Right 50% half, with Title, Description, Price, Beds, Bathrooms */}
          <div className="flex flex-col col-span-4  xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 p-3 px-4 bg-slate-100 shadow-xl justify-between text-black flex-auto overflow-hidden rounded-bl-xl rounded-br-xl xl:rounded-br-xl lg:rounded-br-xl md:rounded-br-xl sm:rounded-br-xl xl:rounded-bl-none lg:rounded-bl-none md:rounded-bl-none sm:rounded-bl-xl md:rounded-tr-xl ">
            <div className="relative">
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
            <div className="flex gap-3 absolute right-10  mt-0 ">
              <span className="bg-green-50 p-2">{onEdit && (
                <EditIcon
                  className="w-6 h-6 "
                  fill="rgb(260, 170, 60)"
                  onClick={() => onEdit(id)}
                />
              )}</span>
              
              {onDelete && (
                <DeleteIcon
                  className="w-6 h-6"
                  fill="rgb(231, 30, 60)"
                  onClick={() => onDelete(listing.id, listing.name)}
                />
              )}
            </div>
          </div>
        </div>
      
    </div>
  )
}
