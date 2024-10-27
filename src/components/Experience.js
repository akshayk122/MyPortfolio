import React from 'react';

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
      title: "CGI, Bangalore, India · Software Engineer",
      description: "Expanded a financial data model based on business requirements tracking over 150,000 project finances using Java, .NET Core, C#, SQL Server, JavaScript, and Entity Framework for efficient database management.",
      technologies: ["Java", ".NET Core", "C#", "SQL Server", "JavaScript", "Entity Framework"]
    },
    {
      date: "Aug 2019 - Apr 2021",
      title: "Aryati Technologies, Bangalore, India · Technical Associate",
      description: "Developed high-performance banking applications using ASP.NET Core MVC, JavaScript, RESTful APIs and MySQL Database. Implemented complex T-SQL stored procedures and functions for financial data processing in SQL with database transaction management.",
      technologies: ["ASP.NET Core MVC", "JavaScript", "RESTful APIs", "MySQL", "T-SQL"]
    }
  ];

  return (
    <section id="experience">
      <h2>EXPERIENCE</h2>
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
