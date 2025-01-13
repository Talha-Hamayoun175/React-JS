import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-logo">My Website</h1>
                <nav className="header-nav">
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/google">Google Map</Link>
                        </li>
                        <li>
                            <Link to="/weather">Weather</Link>
                        </li>
                        <li>
                            <Link to="/tailwind">Tailwind CSS</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
