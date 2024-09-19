import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar-content">
            <ul>
            <div className="Logo-container">
            <img className="logo-pic" src="/movie-finder-logo.png" alt="Logo"></img>
        </div>
                <li>Home</li>
                <li>New Movies</li>
                <li>New Series</li>
                <li>All Movies</li>
            </ul>

        </nav>
    )
}
                export default Navbar;