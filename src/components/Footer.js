// src/components/Footer.js
import React from 'react';
import '../index.css'; // Import your CSS file for footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Let's Connect !!</h3>
        <p>&copy; {new Date().getFullYear()} Mansi Vast. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Mansivast" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mansi-vast-318189263/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a> */}
          {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
