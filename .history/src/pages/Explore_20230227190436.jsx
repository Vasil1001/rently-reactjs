import React from "react"
import { Link } from "react-router-dom"
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg"

export default function Explore() {
  return (
    <div className="pt-5 mx-auto xl:w-10/12 lg:w-12/12 md:w-12/12 sm:w-12/12  w-full vh-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-5">Explore</h1>
        <div className=" bg-base-300 rounded-lg mb-5">
          <div className="p-6 text-center">
            <div className="max-w-full">
              <h1 className="text-2xl font-bold mb-4">Refined Search</h1>
              <p className="mb-4 font-bold">
                Search properties for sale and to rent in the UK
              </p>
              <input
                type="text"
                placeholder="e.g. London or E11 1EE"
                className="input bg-slate-50 w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </header>

      <h1 className="text-3xl font-bold  mb-2 mt-5">Categories</h1>
      <div className="grid grid-cols-4  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mx-auto align-center gap-5 ">
        <Link to="/category/rent">
          <img
            src={rentCategoryImage}
            alt="rentCategoryImage"
            className="grow col-span-2 h-44 object-cover rounded-lg shadow-md"
          />
          <p className="font-bold mt-1">Places for Rent</p>
        </Link>

        <Link to="/category/sale">
          <img
            src={sellCategoryImage}
            alt="sellCategoryImage"
            className="grow h-44 object-cover rounded-lg shadow-md"
          />
          <p className="font-bold mt-1">Places for Sale</p>
        </Link>

        <Link to="/category/rent">
          <img
            src={rentCategoryImage}
            alt="rentCategoryImage"
            className="grow h-44 object-cover rounded-lg shadow-md "
          />
          <p className="font-bold mt-1">Saved places</p>
        </Link>

        <Link to="/category/sale">
          <img
            src={sellCategoryImage}
            alt="sellCategoryImage"
            className="grow h-44 object-cover rounded-lg shadow-md"
          />
          <p className="font-bold mt-1">Posted listings</p>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2 mt-10">User Features</h1>

      <div className="flex row gap-5">
        <Link to="/category/rent">
          <img
            src={rentCategoryImage}
            alt="rentCategoryImage"
            className="w-52 object-cover rounded-lg shadow-md"
          />
          <p className="font-bold mt-1">Saved places</p>
        </Link>

        <Link to="/category/sale">
          <img
            src={sellCategoryImage}
            alt="sellCategoryImage"
            className="w-52 object-cover rounded-lg shadow-md"
          />
          <p className="font-bold mt-1">Posted listings</p>
        </Link>
      </div>
    </div>
  )
}
