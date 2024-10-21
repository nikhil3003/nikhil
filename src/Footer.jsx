import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>&copy; 2024 FitFlex. All rights reserved.</p>
      </div>

      {/* Social Media Section */}
      <div className="footer-socials">
        <h4>Follow Us:</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
      </div>

      {/* Contact Us Section */}
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Email: support@fitflex.com</p>
        <p>Phone: +91 90308 86589</p>
      </div>
    </footer>
  );
};

export default Footer;
