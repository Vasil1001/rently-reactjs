import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) return true
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <a onClick={() => navigate('/explore')} className="btn btn-ghost normal-case text-lg" fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}>Explore</a>
                <a onClick={() => navigate('/offers')} className="btn btn-ghost normal-case text-lg">Offers</a>
                <a onClick={() => navigate('/profile')} className="btn btn-ghost normal-case text-lg">Profile</a>

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => navigate('/explore')} >
                            <ExploreIcon fill={pathMatchRoute('/explore') ? '#fec826' : '#9f9f9f'} width='2em' height='2em' />
                            <p className='{pathMatchRoute('/') ?  : '#9f9f9f'}'>Explore</p>
                        </a></li>
                        <li><a onClick={() => navigate('/offers')}>
                            <OfferIcon fill={pathMatchRoute('/offers') ? '#fec826' : '#9f9f9f'} width='2em' height='2em' />
                            Offers
                        </a></li>
                        <li><a onClick={() => navigate('/profile')}>
                            <PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#fec826' : '#9f9f9f'} width='2em' height='2em' />
                            Profile
                        </a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl"><strong>Rently</strong></a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                        <PersonOutlineIcon fill='white' width='2em' height='2em' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>


    )
}
