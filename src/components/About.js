// About.js

import React from 'react';
import './css/About.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon from Font Awesome

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2><FontAwesomeIcon icon={faUser} className="icon" /> About Me</h2>
      <p><FontAwesomeIcon icon={faUser} className="icon" /> I'm a passionate full-stack developer with expertise in both front-end and back-end technologies...</p>
    </section>
  );
}

export default About;
