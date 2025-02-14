import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';
import genai from '../images/projects/GenAi.jpg';
import expense from '../images/projects/Expense.jpg';
import PicToText from '../images/projects/img2.jpg';

function Projects() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "GenAI Student Assistant",
      description: "Developed an AI-powered assistant for student interactions, integrating APIs for data retrieval and processing.",
      technologies: ["Python", "StreamLit", "Llama3.2", "OpenAI(Swarm)", "Git","MultiAgent Systems"],
      githubLink: "https://github.com/akshayk122/ClassCompanion",
      image:genai
    },
    {
      title: "Smart Expense Tracker",
      description: "Built an expense tracking app with information extraction, spending analytics, and serverless deployment.",
      technologies: ["Flask", "SQL", "Machine Learning", "Optical Character Recognition", "Cloud Run"],
      githubLink: "https://github.com/akshayk122/ExpenseTracker",
      image:expense
    },
    {
      title: "PicToText Using Gemini",
      description: "Created a system for analyzing financial data using AI, implementing complex SQL stored procedures for data processing.",
      technologies: ["Python", "SQL", "AI", "Data Analysis", "Financial Modeling"],
      githubLink: "https://github.com/akshayk122/imageg2caption",
      image:PicToText
    }
  ];

  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-content">
            <div className="project-header">
              <h3>{project.title}</h3>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                GitHub <span>↗</span>
              </a>
            </div>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="view-all-projects">
        <button 
          className="view-all-link"
          onClick={() => navigate('/projects')}
        >
          View All Projects →
        </button>
      </div>
    </section>
  );
}

export default Projects;