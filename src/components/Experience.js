import React from 'react';
import resume from '../images/resume.pdf';

function Experience() {
  const experiences = [
    {
      date: "Jun 2022 - Dec 2023",
      title: "Software Engineer · Eli Lilly and Company, Bangalore, India",
      description: "Architected and improved full-stack applications, product engineering with AI and machine learning integration using React, Flask, and Python, improving cross-browser compatibility by 95% and reducing load times through AWS API Gateway and CloudFront.",
      technologies: ["React", "Flask", "Python", "AWS", "AI", "Machine Learning"]
    },
    {
      date: "Apr 2021 - May 2022",
      title: "Software Engineer · CGI, Bangalore, India  ",
      description: "Expanded a financial data model based on business requirements tracking over 150,000 project finances using Java, .NET Core, C#, SQL Server, JavaScript, and Entity Framework for efficient database management.",
      technologies: ["Java", ".NET Core", "C#", "SQL Server", "JavaScript", "Entity Framework"]
    },
    {
      date: "Aug 2019 - Apr 2021",
      title: "Technical Associate · Atyati Technologies, Bangalore, India",
      description: "Developed high-performance banking applications using ASP.NET Core MVC, JavaScript, RESTful APIs and MySQL Database. Implemented complex T-SQL stored procedures and functions for financial data processing in SQL with database transaction management.",
      technologies: ["ASP.NET Core MVC", "JavaScript", "RESTful APIs", "MySQL", "T-SQL"]
    }
  ];

  return (
    <section id="experience">
      <div className="section-header">
        <h2>EXPERIENCE</h2>
        <a href={resume }target="_blank" rel="noopener noreferrer" className="resume-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>View Resume</span>
        </a>
      </div>
      {experiences.map((job, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <span className="date">{job.date}</span>
            <h3>{job.title}</h3>
          </div>
          <p>{job.description}</p>
          <div className="job-technologies">
            {job.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="technology">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
