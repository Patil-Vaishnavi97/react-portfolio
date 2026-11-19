import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaFileAlt,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaCheckCircle,
  FaRocket
} from 'react-icons/fa';
import profileImg from '../assets/Vaishnavi_Profile.jpg';
import ResumeModal from '../Components/ResumeModal';
import './About.scss';

const About = () => {
  const navigate = useNavigate();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="about-picto-page">
      <div className="about-container">
        {/* Header */}
        <div className="about-page-header">
          <span className="section-mini-tag">ABOUT ME</span>
          <h1 className="about-page-title">Personal Biography & Journey</h1>
          <p className="about-page-subtitle">
            Passionate Software Engineer & Java Full Stack Developer dedicated to building scalable,
            high-performance web applications and intuitive interfaces.
          </p>
        </div>

        {/* Main Grid */}
        <div className="about-main-layout">
          {/* Left Column: Photo Card */}
          <div className="about-left-col">
            <div className="profile-box-card">
              <div className="photo-frame-wrap">
                <img src={profileImg} alt="Vaishnavi Patil" className="profile-img-picto" />
                <div className="status-tag">
                  <span className="dot"></span> Open to Opportunities
                </div>
              </div>

              <h2 className="profile-name">Vaishnavi Patil</h2>
              <h3 className="profile-title">Java Full Stack Developer</h3>
              <p className="profile-company">Software Engineer &bull; Nebula Technology</p>

              <div className="quick-specs-list">
                <div className="spec-item">
                  <FaMapMarkerAlt className="icon" />
                  <div>
                    <span className="lbl">Location</span>
                    <span className="val">Pune, Maharashtra, India</span>
                  </div>
                </div>
                <div className="spec-item">
                  <FaGraduationCap className="icon" />
                  <div>
                    <span className="lbl">Education</span>
                    <span className="val">B.Voc in Software Dev (CGPA: 8.02)</span>
                  </div>
                </div>
                <div className="spec-item">
                  <FaBriefcase className="icon" />
                  <div>
                    <span className="lbl">Experience</span>
                    <span className="val">Software Engineer & Intern (Nebula Tech)</span>
                  </div>
                </div>
                <div className="spec-item">
                  <FaEnvelope className="icon" />
                  <div>
                    <span className="lbl">Email</span>
                    <a href="mailto:vaishup7832@gmail.com" className="val link">vaishup7832@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="profile-btn-row">
                <button className="btn-picto-primary w-full" onClick={() => setIsResumeOpen(true)}>
                  <FaFileAlt /> View Resume
                </button>
                <a
                  href="https://www.linkedin.com/in/vaishnavi-patil-6a9283334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-picto-secondary w-full"
                >
                  <FaLinkedin /> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="about-right-col">
            <div className="story-card">
              <h2 className="story-title">
                Building Real-World Web Applications with Precision & Passion
              </h2>

              <div className="story-paragraphs">
                <p>
                  I am a <strong>Software Engineer</strong> with professional experience in frontend development using 
                  <strong> React.js, JavaScript, HTML5, CSS3, and SCSS</strong>. Currently working on an enterprise 
                  <strong> School ERP project</strong> at <strong>Nebula Technology</strong> in Pune, where I lead the frontend 
                  development of the <strong>Super Admin module</strong>.
                </p>
                <p>
                  My day-to-day work involves architecting intuitive user interfaces, creating responsive administration 
                  dashboards, dynamic data tables, and connecting frontend components with <strong>REST APIs</strong>. I focus 
                  extensively on client-side form validation, seamless loading states, error boundaries, and robust 
                  authentication and access controls for protected application routes.
                </p>
                <p>
                  In addition to frontend engineering, I possess a strong technical background in 
                  <strong> Core Java, OOP concepts, Spring Boot, Microservices, and SQL</strong>. I am enthusiastic about 
                  leveraging these full-stack capabilities to deliver scalable, high-performance end-to-end applications.
                </p>
              </div>

              <div className="story-stats-grid">
                <div className="stat-card-inner">
                  <span className="stat-val">1+</span>
                  <span className="stat-name">Years Experience</span>
                </div>
                <div className="stat-card-inner">
                  <span className="stat-val">ERP</span>
                  <span className="stat-name">Super Admin Module</span>
                </div>
                <div className="stat-card-inner">
                  <span className="stat-val">8.02</span>
                  <span className="stat-name">CGPA (B.Voc SD)</span>
                </div>
                <div className="stat-card-inner">
                  <span className="stat-val">100%</span>
                  <span className="stat-name">Clean Code Driven</span>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="pillars-grid">
              <div className="pillar-box">
                <div className="icon-circle purple"><FaCode /></div>
                <h3>Modern Frontend</h3>
                <p>React.js component-driven development, custom hooks, dynamic routing, and modular SCSS styles.</p>
              </div>
              <div className="pillar-box">
                <div className="icon-circle blue"><FaRocket /></div>
                <h3>Enterprise Quality</h3>
                <p>Real-world ERP dashboard design, robust form validation, loading states, and access control.</p>
              </div>
              <div className="pillar-box">
                <div className="icon-circle green"><FaDatabase /></div>
                <h3>Java & Backend</h3>
                <p>Core Java, OOP principles, Spring Boot REST APIs, and structured relational SQL databases.</p>
              </div>
            </div>

            <div className="about-action-strip">
              <button className="btn-picto-primary" onClick={() => navigate("/experience")}>
                Explore My Experience &rarr;
              </button>
              <button className="btn-picto-secondary" onClick={() => navigate("/contact")}>
                Let's Discuss Opportunities &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default About;
