import React from 'react';

function Skills() {
  const skillGroups = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      skills: ['C#', 'Python', 'Java', 'C', 'C++', 'JavaScript']
    },
    {
      title: 'Web & Framework',
      icon: 'fas fa-globe',
      skills: ['React', '.Net', 'Flask', 'GraphQL']
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      skills: ['MySQL', 'Oracle', 'MongoDB', 'PostgreSQL', 'SQL']
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Git', 'GitLab']
    },
    {
      title: 'AI & ML',
      icon: 'fas fa-brain',
      skills: ['TensorFlow', 'Scikit-Learn', 'NLTK', 'LLMs', 'LangChain', 'OpenAI', 'CrewAI']
    },
    {
      title: 'Tools',
      icon: 'fas fa-tools',
      skills: ['Informatica', 'JIRA', 'Splunk', 'Unix', 'NUnit', 'CipherQL']
    }
  ];

  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="skill-group">
            <h3><i className={group.icon}></i>{group.title}</h3>
            <div className="job-technologies">
              {group.skills.map((skill, skillIndex) => (
                <span key={`${groupIndex}-${skillIndex}`} className="technology">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;