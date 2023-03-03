import React from "react"
import { Link } from "react-router-dom"
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg"
import exteriorImage from "../assets/house-images/exterior_6.jpeg"

import Slider from "../components/Slider"

export default function Explore() {
  return (
    <div className="lg:w-12/12 md:w-12/12 sm:w-12/12 vh-screen mx-auto w-full  pt-5 xl:w-10/12">
      <header className="mb-5">
        <h1 className="mb-5 text-4xl font-bold">Explore</h1>
        <div className=" mb-5 rounded-lg bg-base-300">
          <div className="p-6 text-center">
            <div className="max-w-full">
              <h1 className="mb-4 text-2xl font-bold">Refined Search</h1>
              <p className="mb-4 font-bold">
                Search properties for sale and to rent in the UK
              </p>
              <input
                type="text"
                placeholder="e.g. London or E11 1EE"
                className="input mb-3 w-full max-w-md rounded border border-gray-200 bg-gray-200 py-3 px-4 text-gray-700 focus:border-gray-500 focus:bg-white"
              />
            </div>
          </div>
        </div>
      </header>

      <h1 className="mb-2 mt-5 text-3xl font-bold">Recommended</h1>

      <Slider />

      <h1 className="mb-2 mt-5 text-3xl font-bold">Categories</h1>
      <div className="mx-auto grid  auto-cols-max grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
        <Link to="/category/rent">
          <img
            src={rentCategoryImage}
            alt="rentCategoryImage"
            className="rounded-lg object-cover shadow-md sm:h-max md:h-max lg:h-56 xl:h-64"
          />
          <p className="mt-1 font-bold">Places for Rent</p>
        </Link>
        <Link to="/category/sale">
          <img
            src={sellCategoryImage}
            alt="sellCategoryImage"
            className="rounded-lg object-cover shadow-md sm:h-max md:h-max lg:h-56 xl:h-64"
          />
          <p className="mt-1 font-bold">Places for Sale</p>
        </Link>

        <Link to="/profile">
          <img
            src={exteriorImage}
            alt="exteriorImage"
            className="rounded-lg object-cover shadow-md sm:h-max md:h-max lg:h-56 xl:h-64"
          />
          <p className="mt-1 font-bold">Posted listings</p>
        </Link>
      </div>

      <h1 className="mb-2 mt-10 text-3xl font-bold">User Features</h1>

      <div className="row flex gap-5">
        <Link to="/category/rent">
          <img
            src={rentCategoryImage}
            alt="rentCategoryImage"
            className="w-52 rounded-lg object-cover shadow-md"
          />
          <p className="mt-1 font-bold">Saved places</p>
        </Link>
      </div>
    </div>
  )
}
