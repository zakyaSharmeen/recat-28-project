import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import { FiAlignJustify } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";



function Header() {
  return (
    <div>
        <header>
            <div className="container flexSB">
                <nav className="flexSB">
                    <div className="logo">
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <ul className="flexSB">
                        <Link to="/">Home</Link>
                        <Link to="/series">Series</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/pages">Pages</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/contact">Contact</Link>

                    </ul>

                    <button className='toggle'>
                    <FiAlignJustify />
                    </button>
                </nav>

                <div className="account flexSB">
                <i><FaSearch /></i>
                <i><FaSearch /></i>
                <i><FaSearch /></i>
                <button>Subscribe Now</button>
                </div>

            </div>
        </header>
    </div>
  )
}

export default Header