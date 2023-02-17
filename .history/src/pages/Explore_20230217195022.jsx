import React from "react"
import { Link } from "react-router-dom"
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg"

export default function Explore() {
  return (
    <div className=" flex flex-col justify-top pt-5 w-full h-screen">
      <header>
        <h1 className="text-4xl font-bold mb-5">Explore</h1>
        <div className=" bg-base-300 rounded-lg mb-5">
          <div className="p-6 text-center">
            <div className="max-w-full">
              <h1 className="text-2xl font-bold mb-4">Refine Search</h1>
              <p className="mb-4 font-bold">Search properties for sale and to rent in the UK</p>
              <input type="text" placeholder="e.g. London or E11 1EE" className="input bg-slate-50 w-full max-w-md" />
            </div>
          </div>
        </div>
      </header>
      <h1 className="text-2xl font-bold mb-2">Categories</h1>
      <div className="flex row gap-5">
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
  )
}
