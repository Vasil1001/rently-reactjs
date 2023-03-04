import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

export default function ListingItem({ listing, id, onDelete, onEdit }) {
  return (
    <div className="h-screen-vh mb-5 overflow-hidden rounded-lg border border-2 border-gray-600">
      <div className="grid grid-cols-5">
        <div className="relative bg-slate-100 col-span-full md:col-span-2 lg:col-span-2 xl:col-span-2 ">
          <img
            className="absolute bottom-0 h-full w-full object-cover"
            src={listing.imgUrls[0]}
            alt="image"
          />
        </div>

        <div className="min-h-72 col-span-full bg-slate-100 p-6 md:col-span-3 lg:col-span-3 xl:col-span-3">
          <div className="flex items-baseline ">
            <div className="ml-2 text-xs font-bold uppercase tracking-wide text-gray-700 ">
              <div className="text-md flex gap-1">
                <img src={bedIcon} alt="bed" />
                <p className="mt-1 text-lg overflow-hidden">
                  {listing.bedrooms > 1 ? `${listing.bedrooms} ` : "1"}
                </p>
                <p className="mr-4 mt-3  md:block lg:block xl:block">
                  {listing.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
                </p>

                <img src={bathtubIcon} alt="bath" />
                <p className="mt-1 text-lg overflow-hidden">
                  {listing.bathrooms > 1 ? `${listing.bathrooms} ` : "1"}
                </p>
                <p className="mr-2 mt-3  md:block lg:block xl:block">
                  {listing.bathrooms > 1 ? "Bathrooms" : "Bathroom"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// {/* ? Split space into 4 grid cols */}
// <div className="col-span-4 mb-5 grid  grid-cols-4  ">
// {/* ? Left 50% half, with space for 2 Images */}
// <div className="col-span-4  flex gap-2 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 ">
//   <div className="card col-span-1 grow gap-2 bg-[#1a1b1e] md:col-span-2 lg:col-span-2 ">
//     <img
//       src={listing.imgUrls[0]}
//       alt={listing.name}
//       className=" h-min-44 h-44 rounded-tl-lg object-fill sm:rounded-tl-lg md:rounded-l-xl  lg:rounded-l-xl xl:rounded-l-xl"
//     />
//   </div>
//   <div className="col-span-1 ">
//     <img
//       src={listing.imgUrls[1]}
//       alt={listing.name}
//       className=" h-min-44 h-44 rounded-tr-xl object-fill sm:rounded-tr-xl md:block md:rounded-r-none lg:block lg:rounded-r-none xl:block xl:rounded-r-none"
//     />
//   </div>
// </div>

// {/* ? Right 50% half, with Title, Description, Price, Beds, Bathrooms */}
// <div className="relative col-span-4 flex flex-auto flex-col  justify-between justify-between overflow-hidden rounded-bl-xl rounded-br-xl bg-slate-100 p-3 px-4 text-black shadow-xl sm:col-span-4 sm:rounded-br-xl sm:rounded-bl-xl md:col-span-2 md:rounded-br-xl md:rounded-bl-none md:rounded-tr-xl lg:col-span-2 lg:rounded-br-xl lg:rounded-bl-none xl:col-span-2 xl:rounded-br-xl xl:rounded-bl-none ">
//   <Link to={`/category/${listing.type}/${id}`}>
//     <h2 className="card-title  ">{listing.name}</h2>
//   </Link>
//   <p className="hidden md:block lg:block xl:block">
//     {listing.location}
//   </p>
//   <p>
//     £
//     {listing.offer
//       ? listing.discountedPrice
//           .toString()
//           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//       : listing.regularPrice
//           .toString()
//           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//     {listing.type === "rent" && " / month"}
//   </p>

//   <div className="flex gap-1">
//     <img src={bedIcon} alt="bed" />
//     <p>{listing.bedrooms > 1 ? `${listing.bedrooms} ` : "1"}</p>

//     <p className="mr-2 hidden md:block lg:block xl:block">
//       {listing.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
//     </p>

//     <img src={bathtubIcon} alt="bath" />
//     <p className="overflow-hidden">
//       {listing.bathrooms > 1 ? `${listing.bathrooms} ` : "1"}
//     </p>
//     <p className="mr-2 hidden md:block lg:block xl:block">
//       {listing.bathrooms > 1 ? "Bathrooms" : "Bathroom"}
//     </p>
//   </div>
//   <div className="absolute right-2 mt-0 flex  cursor-pointer gap-3 ">
//     {onEdit && (
//       <EditIcon
//         className="h-6 w-6 "
//         fill="rgb(250, 150, 60)"
//         onClick={() => onEdit(id)}
//       />
//     )}

//     {onDelete && (
//       <DeleteIcon
//         className="h-6 w-6"
//         fill="rgb(231, 30, 60)"
//         onClick={() => onDelete(listing.id, listing.name)}
//       />
//     )}
//   </div>
// </div>
// </div>
