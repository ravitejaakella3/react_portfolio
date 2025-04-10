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
      <div className="project-card">
        <h3>Project 3: Job Portal</h3>
        <p><strong>Technologies Used:</strong> NodeJs, Express.js, React.Js, MongoDB, Local Storage </p>
        <p><strong>Frontend:</strong>Developed using React.js with job listings, search filters, and job application management.</p>
        <p><strong>Backend:</strong> Implemented using Node.js and Express.js to manage user authentication, job postings, and
        application tracking</p>
        <strong>Roles based access:</strong><p><strong>1.Job Seeker</strong> Can view all jobs, apply for jobs, and track application status (Accepted, Rejected,
          Pending).</p><p><strong>2.Recruiter</strong> Can post jobs, view applications, accept/reject applicants, and manage posted jobs.</p>
        <p><strong>Database:</strong> Used MongoDB for storing job listings, user roles, and applications</p>
        <p><strong>Data Persistence:</strong> Implemented Local Storage on the frontend for temporary data storage and session
        management.</p>
        <a href="https://github.com/ravitejaakella3/job-portol-frontend" target="_blank" rel="noopener noreferrer">View on GitHub</a> &nbsp; <a href="https://job-portol-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
      </div>
    </section>
  );
};

export default Projects;

