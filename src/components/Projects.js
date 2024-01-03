// Projects.js

import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1.",
      link: "https://github.com/your-username/project1",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
      link: "https://github.com/your-username/project2",
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
