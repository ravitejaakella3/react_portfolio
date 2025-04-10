import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const[count, setCount]=useState(0);

  const btnClicked=()=>{
    setCount(count=>count+1)
  }

  return (
    <section className="hero">
      <img
        src="/assets/Ravi.jpg"
        alt="Ravi Teja Akella"
        className="profile-pic"
      />
      <div className="hero-content">
        <h1>
          I'm <span className="highlight">V S Ravi Teja Akella</span>, a passionate
          developer.
        </h1>
        <p>Specializing in full-stack application development.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/V S Ravi Resume.pdf" download className="btn secondary" onClick={btnClicked} >
            Download Resume
          </a>
          <p>Resume Download Count:{count}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;




