// Introduction.js

import React from 'react';
import './css/Introduction.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSmile, faCode, faRocket } from '@fortawesome/free-solid-svg-icons'; // Import additional icons from Font Awesome

const Introduction = () => {
  return (
    <section id="introduction" className="introduction-container">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">Introduction</h2>
          <p className="card-text">
            Hello, I'm <strong>Harsh Khambra</strong>, a full-stack developer with a passion for innovation and technology. 
            As a dedicated individual, I aspire to channel my inner <FontAwesomeIcon icon={faRocket} /> and become a trailblazing innovator in the world of technology, engineering, and business. 
            My aim is to contribute to groundbreaking projects that make a positive impact on society while embracing a relentless pursuit of excellence. 
            <FontAwesomeIcon icon={faSmile} /> Let's build the future together!
          </p>
          <hr /> {/* Add horizontal line */}
          <div className="additional-info">
            <div className="icon-block">
              <FontAwesomeIcon icon={faCode} className="icon" />
              <p className="info-text">Specialize in DevOps, React, Database Science, Machine Learning, and more!</p>
            </div>
            <div className="icon-block">
              <FontAwesomeIcon icon={faRocket} className="icon" />
              <p className="info-text">Passionate about pushing boundaries and exploring new technologies.</p>
            </div>
          </div>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
}
  
export default Introduction;
