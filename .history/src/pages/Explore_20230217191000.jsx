import React from "react"
import { Link } from "react-router-dom"
import rentCategoryImage from "../assets/jpg/sellCategoryImage.jpg"

export default function Explore() {
  return (
    <div className="container">
      <div className=" flex flex-col justify-top pt-10 w-full h-screen">
        <header>
          <h1 className="text-4xl font-bold">Explore</h1>
        </header>

        <main>
          <div>
            <Link to="/category/rent">
              <img
                src={rentCategoryImage}
                alt="rentCategoryImage"
                className="w-84 rounded-lg shadow-md"
              />
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
