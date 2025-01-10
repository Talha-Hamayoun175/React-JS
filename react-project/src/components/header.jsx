import React from "react";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-logo">My Website</h1>
                <nav className="header-nav">
                    <ul className="nav-links">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
