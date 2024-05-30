import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="mailto:youremail@example.com">Email</a>
                <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;
