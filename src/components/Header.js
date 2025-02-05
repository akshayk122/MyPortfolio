import React from 'react';
import '../styles/Header.css';
import profileImage from '../images/Profile.jpeg';

function Header() {
  return (
    <header>
      <div className="profile-photo">
        <img 
          src={profileImage}
          alt="Akshay Kumar" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
          }}
        />
      </div>
      <h1>Akshay Kumar</h1>
      <h2>Software Engineer</h2>
      <p>Design 👨‍💻,Develop and Deploy</p>
      <nav>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#projects">PROJECTS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
