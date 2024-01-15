// AboutMe.js

import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-me-content">
        <h2>About Me</h2>
        <div className="text-box">
          <p>
            <h3>Welcome to my Portfolio</h3>
            <p>
              Hey there! I'm Tommy Ye, a current 2nd year Software Engineering
              undergraduate at UWO.
            </p>
            <h3>What drives me</h3>{" "}
            <p>
              I'm not just here to earn a degree; I'm passionate about
              engineering. Whether it's delving into the intricacies of software
              and programming or getting involved in the various clubs on
              campus, every day is a chance to grow and learn.
            </p>
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Whether you're a fellow student, a potential
            collaborator, or someone passionate about software engineering, I'd
            love to hear from you. <p>Cheers, </p> <p>Tommy</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
