import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">FitFlex</div>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li onClick={removeActive}>
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/fitness" className="nav-link">Workout Plans</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/nutrition-plans" className="nav-link">Diet Plans</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/movie-recommendations" className="nav-link">Movie Recommendations</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/community" className="nav-link">Community</Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
