import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Generative AI Based Student Assistant",
      description: "Developed an AI-powered assistant for student interactions, integrating APIs for data retrieval and processing.",
      technologies: ["AI", "Python", "NLP", "API Integration", "Flask", "Google Cloud"]
    },
    {
      title: "Smart Expense Tracker",
      description: "Built an expense tracking app with information extraction, spending analytics, and serverless deployment.",
      technologies: ["Flask", "SQL", "Machine Learning", "Optical Character Recognition", "Cloud Run"]
    },
    {
      title: "AI-Powered Financial Data Analysis",
      description: "Created a system for analyzing financial data using AI, implementing complex SQL stored procedures for data processing.",
      technologies: ["Python", "SQL", "AI", "Data Analysis", "Financial Modeling"]
    }
  ];

  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
