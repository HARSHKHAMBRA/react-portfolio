// Introduction.js

import React from 'react';
import './css/Introduction.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSmile } from '@fortawesome/free-solid-svg-icons'; // Import the smile icon from Font Awesome

const Introduction = () => {
  return (
    <section id="introduction" className="introduction-container"> {/* Add a class name */}
      <div className="card shadow"> {/* Add Bootstrap classes */}
        <div className="card-body">
          <h2 className="card-title">Introduction</h2>
          <p className="card-text">Hello, I'm Harsh Khambra. As a dedicated individual, I aspire to channel my inner Tony Stark and become a trailblazing innovator in the world of technology, engineering, and business. My aim is to contribute to groundbreaking projects that make a positive impact on society while embracing a relentless pursuit of excellence. <FontAwesomeIcon icon={faSmile} /></p>
          <button className="btn btn-primary">Learn More</button> {/* Button with appropriate styles */}
        </div>
      </div>
    </section>
  );
}

export default Introduction;
