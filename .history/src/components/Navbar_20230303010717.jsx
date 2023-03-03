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
    <div className="navbar border-b border-gray-600 bg-base-300">
      <div className="navbar-start">
        <div className="dropdown block sm:block md:block lg:hidden xl:hidden">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
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
            className="dropdown-content compact menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow-2xl ring-2 ring-gray-900"
          >
            <li>
              <a
                className={
                  pathMatchRoute("/")
                    ? "mb-1 bg-[#2e5590] hover:bg-[#1b4584]"
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
                    ? "my-1 bg-[#2e5590] hover:bg-[#1b4584]"
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
                    ? "mt-1 bg-[#2e5590] hover:bg-[#1b4584]"
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
        <div className="hidden sm:hidden md:hidden lg:block xl:block">
          <a
            onClick={() => navigate("/")}
            className={
              pathMatchRoute("/")
                ? "btn-link btn mx-1 bg-[#2e5590] text-lg normal-case text-white hover:bg-[#1b4584] "
                : "btn-ghost btn mx-1 bg-base-300 text-lg normal-case"
            }
          >
            Explore
          </a>
          <a
            onClick={() => navigate("/offers")}
            className={
              pathMatchRoute("/offers")
                ? "btn-link btn mx-1 bg-[#2e5590] text-lg normal-case text-white hover:bg-[#1b4584] "
                : "btn-ghost btn mx-1 bg-base-300 text-lg normal-case"
            }
          >
            Offers
          </a>
          <a
            onClick={() => navigate("/profile")}
            className={
              pathMatchRoute("/profile")
                ? "btn-link btn mx-1 bg-[#2e5590] text-lg normal-case text-white hover:bg-[#1b4584] "
                : "btn-ghost btn mx-1 bg-base-300 text-lg normal-case"
            }
          >
            Profile
          </a>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn-ghost btn text-xl normal-case ">
          <strong>Rently</strong>
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <PersonOutlineIcon fill="white" width="2em" height="2em" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content compact menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow-2xl ring-2 ring-gray-900"
          >
            <li>
              <a
                className={
                  pathMatchRoute("/register")
                    ? "mb-1 bg-[#2e5590] hover:bg-[#1b4584]"
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
                    ? "my-1 bg-[#2e5590] hover:bg-[#1b4584]"
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
                    ? "mt-1 bg-[#2e5590] hover:bg-[#1b4584]"
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
