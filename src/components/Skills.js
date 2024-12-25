import React from 'react';


function Skills() {
  const skills = [
    "C#", "Python", "Java", "C", "C++", "SQL", "JavaScript", "MySQL", "Oracle", "MongoDB", "PostgreSQL",
    ".Net", "React", "Flask", "NUnit", "Unix", "AWS", "GCP", "Kubernetes", "Docker", "Git", "GitLab", 
    "Informatica", "GraphQL", "JIRA", "Splunk", "Pandas", "NumPy", "TensorFlow", "Scikit-Learn", "NLTK", 
    "LLMs", "LangChain", "OpenAI", "CrewAI", "CipherQL"
  ];
  

  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="job-technologies">
        {skills.map((skill, index) => (
          <span key={index} className="technology">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;