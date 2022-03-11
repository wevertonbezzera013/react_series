import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar__container">
            <div>
                <h1>LOGO</h1>
            </div>

            <lu className="navbar__container-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </lu>
        </nav>
    )
}

export default Navbar