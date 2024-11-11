// src/components/Navbar.js
import React from 'react';
import '../index.css'; // Import the CSS file

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="brand">PORTFOLIO</h2>
            <div className="links">
                <a href="#about" className="link">About</a>
                <a href="#projects" className="link">Projects</a>
                <a href="#certifications" className="link">Certifications</a>
                <a href="#achievements" className="link">Achievements</a>
            </div>
        </nav>
    );
}

export default Navbar;
