import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AllProjects.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-card-year">{project.year}</div>
        <div className="project-card-type">{project.type}</div>
      </div>
      <div className="project-card-content">
        <h3>{project.name}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tech">
          {project.builtWith.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-card-links">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              className="project-card-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>
          )}
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              className="project-card-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function AllProjects() {
  const projects = [
    {
      year: '2023',
      name: 'Generative AI Based Student Assistant',
      type: 'AI & Education',
      description: 'An intelligent assistant that helps students with their queries using advanced AI models and natural language processing.',
      builtWith: ['Python', 'StreamLit', 'Llama3.2', 'OpenAI', 'Git'],
      githubLink: 'https://github.com/akshayk122/ClassCompanion',
      demoLink: 'https://classcompanion.demo.com'
    },
    {
      year: '2023',
      name: 'Smart Expense Tracker',
      type: 'Finance & ML',
      description: 'Automated expense tracking system with receipt scanning, categorization, and detailed analytics for better financial management.',
      builtWith: ['Flask', 'SQL', 'Machine Learning', 'OCR', 'Cloud Run'],
      githubLink: 'https://github.com/akshayk122/ExpenseTracker',
      demoLink: 'https://expensetracker.demo.com'
    },
    {
      year: '2022',
      name: 'PicToText Using Gemini',
      type: 'AI & Vision',
      description: 'Advanced image-to-text conversion tool powered by Google Gemini AI, providing detailed descriptions and analysis of images.',
      builtWith: ['Python', 'Gemini AI', 'Computer Vision', 'NLP', 'React'],
      githubLink: 'https://github.com/akshayk122/imageg2caption',
      demoLink: 'https://pictotext.demo.com'
    },
    {
      year: '2022',
      name: 'Portfolio Website',
      type: 'Web Development',
      description: 'Personal portfolio website built with React, featuring modern design, smooth animations, and responsive layout.',
      builtWith: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git'],
      githubLink: 'https://github.com/akshayk122/portfolio',
      demoLink: 'https://akshay.dev'
    },
    {
      year: '2022',
      name: 'Weather Dashboard',
      type: 'Web App',
      description: 'Real-time weather monitoring dashboard with detailed forecasts, interactive maps, and severe weather alerts.',
      builtWith: ['React', 'Node.js', 'Weather API', 'Charts.js', 'MapBox'],
      githubLink: 'https://github.com/akshayk122/weather-dashboard',
      demoLink: 'https://weather.demo.com'
    },
    {
      year: '2021',
      name: 'Task Management API',
      type: 'Backend',
      description: 'RESTful API for task management with authentication, real-time updates, and team collaboration features.',
      builtWith: ['Node.js', 'Express', 'MongoDB', 'WebSocket', 'JWT'],
      githubLink: 'https://github.com/akshayk122/task-api'
    }
  ];

  return (
    <div className="all-projects">
      <div className="header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>All Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
