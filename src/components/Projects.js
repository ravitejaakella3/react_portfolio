import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Project 1: ABC Travels and Logistics Automation</h3>
        <p><strong>Technologies Used :</strong> Java, JDBC, MySQL, Collections, Exception Handling </p>
        <ul>
          <li>Developed a login system that enables users to securely authenticate and access the application, ensuring data integrity and personalized user experience.</li>
          <li>Implemented functionality for users to book tickets by selecting travel details (source, destination, and date) and reschedule existing bookings, with real time validation and error handling.</li>
          <li>Created a dynamic billing system that calculates fares based on user inputs, applying surge pricing for weekends and generating detailed invoices, enhancing the overall user experience.</li>
        </ul>
        <a href="https://github.com/ravitejaakella3/Java-Projects/tree/main/Travel%20bookings" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>Project 2: Job Portal API</h3>
        <p><strong>Technologies Used:</strong> Node.js, Express.js, MongoDB, JWT, Mongoose</p>
        <ul>
          <li>Designed and developed a role-based job portal backend for recruiters and job seekers.</li>
          <li>Implemented JWT authentication and password hashing using bcrypt with role-based access control.</li>
          <li>Built RESTful APIs for job posting and application tracking.</li>
        </ul>
        <a href="https://github.com/ravitejaakella3/job-portal.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;

