import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Project 1: ABC Travels and Logistics Automation</h3>
        <p><strong>Technologies Used :</strong> Java, JDBC, MySQL, Collections, Exception Handling </p>
        <p>Developed a login system that enables users to securely authenticate and access the
        application, ensuring data integrity and personalized user experience.</p>
        <p>Implemented functionality for users to book tickets by selecting travel details
        (source, destination, and date) and reschedule existing bookings, with real time validation and error handling.</p>
        <p>Created a dynamic billing system that calculates fares based on user inputs, applying surge pricing for weekends and generating detailed invoices, enhancing the overall user experience.</p>
        <a href="https://github.com/ravitejaakella3/Java-Projects/tree/main/Travel%20bookings" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>Project 2: Schedular</h3>
        <p><strong>Technologies Used:</strong> NodeJs, NestJS, Graphql, PostgreSQL </p>
        <p>Developed the backend of a healthcare scheduling system, including patient and doctor login, appointment booking,
        feedback, chat and support ticket using NestJS, PostgreSQL and GraphQL.</p>
        <p>Implemented complex query handling, role-based access, and real time data retrieval to optimize backend functionality
        and API performance.</p>
        <a href="https://github.com/Daily-Utils/schedular" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;

