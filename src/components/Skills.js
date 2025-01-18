import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <img src="/assets/html.png" alt="HTML" />
          <h3>HTML</h3>
          <p>Crafting structured and semantic web pages with HTML5.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/css.png" alt="CSS" />
          <h3>CSS</h3>
          <p>Styling modern web pages with CSS3 and responsive design.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/javascript.png" alt="JavaScript" />
          <h3>JavaScript</h3>
          <p>Adding interactivity and logic to web applications.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/react.png" alt="React" />
          <h3>React</h3>
          <p>Building dynamic and reusable UI components with React.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/nodejs.png" alt="Node.js" />
          <h3>Node.js</h3>
          <p>Creating server-side applications with Node.js and JavaScript.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/java.png" alt="Java" />
          <h3>Java</h3>
          <p>Developing robust backend systems and applications with Java.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/sql.png" alt="SQL" />
          <h3>SQL</h3>
          <p>Managing and querying relational databases using SQL.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/mongo-db.png" alt="MongoDB" />
          <h3>MongoDB</h3>
          <p>Designing and working with NoSQL databases using MongoDB.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/python.png" alt="Python" />
          <h3>Python</h3>
          <p>Building versatile applications and scripts with Python.</p>
        </div>
        <div className="skill-card">
          <img src="/assets/aws.png" alt="AWS" />
          <h3>AWS</h3>
          <p>Deploying and managing cloud infrastructure with AWS.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;


