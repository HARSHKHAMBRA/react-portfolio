// Header.js

import React from 'react';
import './css/Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container"> {/* Add a class name */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Add Bootstrap classes */}
        <div className="container"> {/* Add Bootstrap container class */}
          <a className="navbar-brand" href="/">Your Logo</a> {/* Customize with your logo */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
