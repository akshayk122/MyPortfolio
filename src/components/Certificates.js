import React from 'react';
import '../styles/Certificates.css';
import certIcon from '../images/certs/aws.png';

function Certificates() {
  const certificates = [
    {
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      icon: certIcon
    },
    {
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-900",
      icon: certIcon
    },
    {
      issuer: "Scrum.org",
      date: "2023",
      credentialId: "PSM-I",
      icon: certIcon
    }
  ];

  return (
    <section id="certificates">
      <h2>CERTIFICATIONS</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="cert-header">
              <img src={cert.icon} alt={cert.issuer} className="cert-icon" />
            </div>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            <p className="credential">ID: {cert.credentialId}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
