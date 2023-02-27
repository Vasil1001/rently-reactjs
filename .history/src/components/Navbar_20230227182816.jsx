import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg"
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg"
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg"

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true
  }

  return (
    <div className="navbar bg-base-300 border-gray-600 border-b">
      <div className="navbar-start">
        <div className="dropdown block xl:hidden lg:hidden md:block sm:block">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content compact mt-4 p-2 ring-2 ring-gray-900 shadow-2xl bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className={
                  pathMatchRoute("/")
                    ? "bg-[#2e5590] hover:bg-[#1b4584] mb-1"
                    : " mb-1 bg-base-300 hover:bg-[#3b414a] active:bg-[#2d4b73]"
                }
                onClick={() => navigate("/")}
              >
                <ExploreIcon
                  fill={pathMatchRoute("/") ? "#fec826" : "#9f9f9f"}
                  width="2em"
                  height="2em"
                />
                <p>Explore</p>
              </a>
            </li>
            <li>
              <a
                className={
                  pathMatchRoute("/offers")
                    ? "bg-[#2e5590] hover:bg-[#1b4584] my-1"
                    : " my-1 bg-base-300 hover:bg-[#3b414a] active:bg-[#2d4b73]"
                }
                onClick={() => navigate("/offers")}
              >
                <OfferIcon
                  fill={pathMatchRoute("/offers") ? "#fec826" : "#9f9f9f"}
                  width="2em"
                  height="2em"
                />
                Offers
              </a>
            </li>
            <li>
              <a
                className={
                  pathMatchRoute("/profile")
                    ? "bg-[#2e5590] hover:bg-[#1b4584] mt-1"
                    : "mt-1 bg-base-300 hover:bg-[#3b414a] active:bg-[#2d4b73]"
                }
                onClick={() => navigate("/profile")}
              >
                <PersonOutlineIcon
                  fill={pathMatchRoute("/profile") ? "#fec826" : "#9f9f9f"}
                  width="2em"
                  height="2em"
                />
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden xl:block lg:block md:hidden sm:hidden">
          <a
            onClick={() => navigate("/")}
            className={
              pathMatchRoute("/")
                ? "bg-[#2e5590] hover:bg-[#1b4584] btn btn-link normal-case text-lg text-white mx-1 "
                : "mx-1 bg-base-300 btn btn-ghost normal-case text-lg"
            }
          >
            Explore
          </a>
          <a
            onClick={() => navigate("/offers")}
            className={
              pathMatchRoute("/offers")
                ? "bg-[#2e5590] hover:bg-[#1b4584] btn btn-link normal-case text-lg text-white mx-1 "
                : "mx-1 bg-base-300 btn btn-ghost normal-case text-lg"
            }
          >
            Offers
          </a>
          <a
            onClick={() => navigate("/profile")}
            className={
              pathMatchRoute("/profile")
                ? "bg-[#2e5590] hover:bg-[#1b4584] btn btn-link normal-case text-lg text-white mx-1 "
                : "mx-1 bg-base-300 btn btn-ghost normal-case text-lg"
            }
          >
            Profile
          </a>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl ">
          <strong>Rently</strong>
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <PersonOutlineIcon fill="white" width="2em" height="2em" />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content compact mt-4 p-2 ring-2 ring-gray-900 shadow-2xl bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className={
                  pathMatchRoute("/register")
                    ? "bg-[#2e5590] hover:bg-[#1b4584] mb-1"
                    : " mb-1 bg-base-300 hover:bg-[#3b414a] active:bg-[#2d4b73]"
                }
                onClick={() => navigate("/register")}
              >
                Register
              </a>
            </li>
            <li>
              <a
                className={
                  pathMatchRoute("/login")
                    ? "bg-[#2e5590] hover:bg-[#1b4584] my-1"
                    : " my-1 bg-base-300 hover:bg-[#3b414a] active:bg-[#2d4b73]"
                }
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </li>
            <li>
              <a
                className={
                  pathMatchRoute("/")
                    ? "bg-[#2e5590] hover:bg-[#1b4584] mt-1"
                    : " mt-1 bg-base-300 hover:bg-[#3b414a] active:bg-[#7e3838]"
                }
                onClick={() => navigate("/login")}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
