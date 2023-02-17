import React from "react"
import { Link } from "react-router-dom"
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg"

export default function Explore() {
  return (
    <div className=" flex flex-col justify-top pt-5 w-full h-screen">
      <header>
        <h1 className="text-4xl font-bold mb-5">Explore</h1>
      </header>
      <h1 className="text-2xl font-bold">Categories</h1>
      <div className="flex">
        <div>
        asd 
        asd 
        asd
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rentCategoryImage"
              className="w-52 object-cover rounded-lg shadow-md"
            />
          </Link>

          <Link to="/category/sell">
            <img
              src={sellCategoryImage}
              alt="sellCategoryImage"
              className="w-52 object-cover rounded-lg shadow-md"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
