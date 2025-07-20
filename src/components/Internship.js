import React from 'react';
import './Internship.css';

const Internship = () => {
  return (
    <section className="internship" id="internship">
      <h2>Internship</h2>
      <div className="intern">
        <h3>Backend Engineer at PearlThoughts</h3>
        <ul>
          <li>Collaborated closely with a team of developers to complete daily tasks and provide regular updates on progress.</li>
          <li>Worked together with the team to design, develop, and implement key features, ensuring project milestones were met on time.</li>
          <li>Contributed to backend development using NestJS, PostgreSQL and GraphQL.</li>
        </ul>
        <a href="https://drive.google.com/file/d/1ZO6FLH1G8Fm7ghymXAxAOX7d-mjKhRGh/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Intern certificate</a>
      </div>
      <div className="intern">
        <h3>Prestigious Gaming (Associate Software Developer Intern) <span style={{fontWeight: "normal"}}>May 2025 – Present</span></h3>
        <ul>
          <li>Developing backend modules for gaming applications using PHP and CodeIgniter.</li>
          <li>Actively communicating with the team for daily updates and sprint progress.</li>
          <li>Focused on writing clean, maintainable code and collaborating on platform improvements.</li>
        </ul>
       {/* <p><em>Certificate not yet received</em></p> */}
      </div>
    </section>
  );
};

export default Internship;