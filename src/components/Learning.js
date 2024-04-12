// Learning.js

import React from 'react';
import './css/Learning.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Import the graduation cap icon from Font Awesome

const Learning = () => {
  return (
    <section id="learning" className="learning-container"> {/* Add a class name */}
      <div className="card shadow"> {/* Add Bootstrap classes */}
        <div className="card-body">
          <h2 className="card-title"><FontAwesomeIcon icon={faGraduationCap} /> Learning</h2>
          <p className="card-text">"I am learning Next.js as a part of my journey in web development." 🚀</p>
        </div>
      </div>
    </section>
  );
}

export default Learning;
