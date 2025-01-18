import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/assets/Ravi.jpg"
        alt="Profile Picture"
        className="profile-pic"
      />
      <div className="hero-content">
        <h1>
          I'm <span className="highlight">V S Ravi Teja Akella</span>, a passionate
          developer.
        </h1>
        <p>Specializing in creating modern, responsive web applications.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/A Ravi Teja Resume.pdf" download className="btn secondary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;




