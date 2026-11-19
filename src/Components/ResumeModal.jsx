import React from 'react';
import { FaDownload, FaTimes, FaPrint, FaBriefcase, FaGraduationCap, FaCode, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './ResumeModal.scss';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3>Resume Preview</h3>
          <div className="resume-modal-actions">
            <button className="action-btn print-btn" onClick={handlePrint} title="Print or Save as PDF">
              <FaPrint /> Print / Save PDF
            </button>
            <button className="action-btn close-btn" onClick={onClose} title="Close">
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="resume-paper" id="resume-printable-area">
          {/* Header */}
          <header className="resume-header">
            <h1 className="name">Vaishnavi Patil</h1>
            <h2 className="title">Java Full Stack Developer</h2>
            <div className="contact-info">
              <span><FaPhoneAlt /> +91-9673921531</span>
              <span><FaEnvelope /> vaishup7832@gmail.com</span>
              <a href="https://www.linkedin.com/in/vaishnavi-patil-6a9283334/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <span><FaMapMarkerAlt /> Pune, Maharashtra, India</span>
            </div>
          </header>

          <hr className="divider" />

          {/* Summary */}
          <section className="resume-section">
            <h3 className="section-title">Summary</h3>
            <p className="summary-text">
              Software Engineer with professional experience in frontend development using React.js, JavaScript, HTML, CSS,
              and SCSS. Currently working on a School ERP project, developing responsive user interfaces and connecting
              frontend modules with REST APIs. Knowledge of Core Java, OOP concepts, Spring Boot, and SQL. Interested in
              growing as a Java Full Stack Developer while contributing to real-world application development.
            </p>
          </section>

          {/* Professional Experience */}
          <section className="resume-section">
            <h3 className="section-title"><FaBriefcase /> Professional Experience</h3>

            <div className="experience-item">
              <div className="item-header">
                <div>
                  <h4 className="role">Software Engineer</h4>
                  <span className="company">Nebula Technology (On-site)</span>
                </div>
                <div className="date-location">
                  <span className="date">Nov 2025 – Present</span>
                  <span className="location">Pune, Maharashtra, India</span>
                </div>
              </div>
              <ul className="bullet-points">
                <li>Develop and maintain the <strong>Super Admin module</strong> using <strong>React.js</strong>, building responsive and user-friendly interfaces for administrative workflows.</li>
                <li>Implement frontend screens, forms, tables, and dashboards for managing schools, users, and administrative operations within the School ERP system.</li>
                <li>Connect frontend modules with <strong>REST APIs</strong> to fetch, display, create, update, and manage application data.</li>
                <li>Implement form validation, loading states, error handling, and user-friendly feedback across different Super Admin workflows.</li>
                <li>Work with authentication and access control to support appropriate access to Super Admin features and protected application routes.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div>
                  <h4 className="role">Software Engineer Intern</h4>
                  <span className="company">Nebula Technology (On-site)</span>
                </div>
                <div className="date-location">
                  <span className="date">May 2025 – Sep 2025</span>
                  <span className="location">Pune, Maharashtra, India</span>
                </div>
              </div>
              <ul className="bullet-points">
                <li>Worked on frontend development of the <strong>ROP project</strong> using <strong>React.js</strong>, contributing to responsive user interfaces and project workflows.</li>
                <li>Connected frontend components with <strong>REST APIs</strong> and worked on data handling, form validation, and application workflows.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h3 className="section-title"><FaCode /> Technical Skills</h3>
            <div className="skills-category-list">
              <p><strong>Programming Languages:</strong> Core Java, JavaScript (ES6+), SQL</p>
              <p><strong>Java Concepts:</strong> OOP Concepts, Exception Handling, Collections Framework</p>
              <p><strong>Frontend Technologies:</strong> React.js, React Hooks, React Router, HTML5, CSS3, SCSS</p>
              <p><strong>Backend Knowledge:</strong> Spring Boot, REST APIs, Microservices</p>
              <p><strong>Development Concepts:</strong> Reusable Components, Responsive Design, Form Validation, Error Handling, JWT Authentication</p>
              <p><strong>Tools:</strong> Git, GitHub, Postman, VS Code, IntelliJ IDEA</p>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h3 className="section-title">Projects</h3>

            <div className="project-item">
              <div className="item-header">
                <h4 className="project-title">School ERP Management System</h4>
                <span className="date">2026 – Present</span>
              </div>
              <ul className="bullet-points">
                <li>Contributing to frontend development of a School ERP Management System using <strong>React.js</strong>, with a focus on the Super Admin module.</li>
                <li>Developing responsive user interfaces, forms, tables, and administrative workflows for school management operations.</li>
                <li>Connecting frontend modules with <strong>REST APIs</strong> and handling data rendering, validation, loading states, and error handling.</li>
              </ul>
            </div>

            <div className="project-item">
              <div className="item-header">
                <h4 className="project-title">Online Food Ordering System</h4>
                <span className="date">College-Level Project</span>
              </div>
              <ul className="bullet-points">
                <li>Developed an Online Food Ordering System as an academic project to gain practical experience in application development and state management.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h3 className="section-title"><FaGraduationCap /> Education</h3>
            <div className="education-item">
              <div className="item-header">
                <div>
                  <h4 className="degree">Bachelor of Vocation in Software Development (B.Voc. SD)</h4>
                  <span className="institution">PDEA's Annasaheb Magar College, Hadapsar, Pune</span>
                </div>
                <div className="date-location">
                  <span className="grad-year">Graduated: 2025</span>
                  <span className="cgpa"><strong>CGPA: 8.02 / 10</strong></span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
