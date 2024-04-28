// Skills.js

import React from 'react';
import './css/Skills.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCode, faServer, faTools } from '@fortawesome/free-solid-svg-icons'; // Import additional icons from Font Awesome

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="card skill-category">
        <div className="card-body">
          <h3><FontAwesomeIcon icon={faCode} /> Front-End Development:</h3>
          <p>Proficiency in building and styling web pages using HTML for structure, CSS for styling, and JavaScript for interactivity.</p>
          <h4>Front-end Frameworks:</h4>
          <p>Knowledge of popular front-end frameworks like React and Next.js.</p>
          <h4>Responsive Design:</h4>
          <p>Experience in creating responsive and mobile-friendly layouts using media queries and flexbox.</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="card skill-category">
        <div className="card-body">
          <h3><FontAwesomeIcon icon={faServer} /> Back-End Development:</h3>
          <p>Understanding of server-side programming languages like Node.js and Python for building robust back-end systems.</p>
          <h4>API Development:</h4>
          <p>Experience in designing and implementing RESTful APIs for seamless communication between front-end and back-end.</p>
          <h4>Database Management:</h4>
          <p>Familiarity with database systems such as MySQL, MongoDB, and PostgreSQL for storing and retrieving data efficiently.</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="card skill-category">
        <div className="card-body">
          <h3><FontAwesomeIcon icon={faTools} /> DevOps:</h3>
          <p>Knowledge of DevOps practices for automating deployment pipelines, containerization with Docker, and orchestration with Kubernetes.</p>
          <h4>Continuous Integration/Continuous Deployment (CI/CD):</h4>
          <p>Experience in setting up CI/CD pipelines using tools like Jenkins, Travis CI, or GitLab CI.</p>
          <h4>Infrastructure as Code (IaC):</h4>
          <p>Proficiency in managing infrastructure using tools such as Terraform or CloudFormation.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
