// Education.js

import React from 'react';
import './css/Education.css'; // Import the CSS file

const Education = () => {
  return (
    <section id="education" className="education-container">
      <h2>Education</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Open Source University</h5>
          <p className="card-text">Computer Science (2020 - 2023)</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Arya P.G. College Panipat</h5>
          <p className="card-text">Bachelor Of Arts (2020 - 2024)</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
