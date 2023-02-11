import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu dropdown-content  mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <a
                className={
                  pathMatchRoute("/")
                    ? "bg-[#4a4f5e] hover:bg-[#636a7e] mb-1"
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
                    ? "bg-[#4a4f5e] hover:bg-[#636a7e] my-1"
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
                    ? "bg-[#4a4f5e] hover:bg-[#636a7e] mt-1"
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
        <a
          onClick={() => navigate("/")}
          className={
            pathMatchRoute("/")
              ? "bg-[#4a4f5e] btn btn-link normal-case text-lg text-white mx-1 hover:bg-[#636a7e]"
              : "mx-1 bg-base-300 btn btn-ghost normal-case text-lg"
          }
        >
          Explore
        </a>
        <a
          onClick={() => navigate("/offers")}
          className={
            pathMatchRoute("/offers")
              ? "bg-[#4a4f5e] btn btn-link normal-case text-lg text-white mx-1 hover:bg-[#636a7e]"
              : "mx-1 bg-base-300 btn btn-ghost normal-case text-lg"
          }
        >
          Offers
        </a>
        <a
          onClick={() => navigate("/profile")}
          className={
            pathMatchRoute("/profile")
              ? "bg-[#4a4f5e] btn btn-link normal-case text-lg text-white mx-1 hover:bg-[#636a7e]"
              : "mx-1 bg-base-300 btn btn-ghost normal-case text-lg"
          }
        >
          Profile
        </a>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className={
                  pathMatchRoute("/register")
                    ? "bg-[#4a4f5e] hover:bg-[#636a7e] mb-1"
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
                    ? "bg-[#7c84d9] hover:bg-[#636a7e] my-1"
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
                    ? "bg-[#4a4f5e] hover:bg-[#636a7e] mt-1"
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
  );
}
