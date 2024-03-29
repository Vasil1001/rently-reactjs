import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id, onDelete }) {
  return (
    <li>
      <div className="grid grid-cols-4 col-span-4"> {/* ? Split space into 4 grid cols */}
        
        {/* ? Left 50% half, with space for 2 Images */}
        <div className="col-span-2 bg-slate-700"> {/* ? Takes 2 25% for 2 pictures */}
          <div className="flex grid-cols-2"> {/* ? Grid to fit 2 equal pictures */}
            <div className=" col-span-1">
              <img
                src="https://media.rightmove.co.uk/71k/70202/131800415/70202_102565008604_IMG_00_0000.jpeg"
                alt={listing.name}
                className="object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://media.rightmove.co.uk/71k/70202/131800415/70202_102565008604_IMG_00_0000.jpeg"
                alt={listing.name}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ? Right 50% half, with Title, Description, Price, Beds, Bathrooms */}
        <div className="col-span- bg-slate-100 shadow-xl text-black">TEXT</div>

        <div className="flex col-span-4 h-56 bg-slate-100 shadow-xl text-black">
          <figure className="flex col-span-2">
            <img
              src={listing.imageUrls[0]}
              alt={listing.name}
              className="w-52 h-56"
            />
            <img
              src={listing.imageUrls[0]}
              alt={listing.name}
              className="w-52 h-56"
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
