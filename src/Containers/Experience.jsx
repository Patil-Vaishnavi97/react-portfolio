import React, { useState } from 'react';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaCode,
  FaAward,
  FaFileAlt
} from 'react-icons/fa';
import ResumeModal from '../Components/ResumeModal';
import './Experience.scss';

const experiences = [
  {
    role: "Software Engineer",
    company: "Nebula Technology",
    workType: "On-site",
    location: "Pune, Maharashtra, India",
    period: "Nov 2025 – Present",
    status: "Current Role",
    project: "School ERP Management System (Super Admin Module)",
    description: "Developing and maintaining enterprise-level administrative modules using React.js, building scalable user interfaces, connecting secure RESTful APIs, and implementing robust access controls.",
    highlights: [
      "Develop and maintain the Super Admin module using React.js, building responsive and user-friendly interfaces for administrative workflows.",
      "Implement frontend screens, complex forms, data tables, and analytics dashboards for managing schools, users, and administrative operations.",
      "Connect frontend modules with REST APIs to fetch, display, create, update, and manage application data smoothly.",
      "Implement client-side form validation, loading skeletons, error handling, and user-friendly feedback across different Super Admin workflows.",
      "Work with authentication and access control to support appropriate role-based access to Super Admin features and protected application routes."
    ],
    skills: ["React.js", "JavaScript (ES6+)", "REST APIs", "JWT Authentication", "SCSS", "Form Validation", "Protected Routes"]
  },
  {
    role: "Software Engineer Intern",
    company: "Nebula Technology",
    workType: "On-site",
    location: "Pune, Maharashtra, India",
    period: "May 2025 – Sep 2025",
    status: "Internship",
    project: "ROP Project Frontend",
    description: "Contributed to frontend development of the ROP project using modern React.js patterns and component-driven architecture.",
    highlights: [
      "Worked on frontend development of the ROP project using React.js, contributing to responsive user interfaces and seamless project workflows.",
      "Connected frontend components with REST APIs, handling data fetching, mutation, and real-time state management.",
      "Ensured proper data handling, client-side input validation, and user feedback mechanisms."
    ],
    skills: ["React.js", "REST APIs", "JavaScript", "HTML5 & CSS3", "State Management", "Git"]
  }
];

const educationData = {
  degree: "Bachelor of Vocation in Software Development (B.Voc. SD)",
  institution: "PDEA's Annasaheb Magar College, Hadapsar, Pune",
  period: "Graduated: 2025",
  score: "CGPA: 8.02 / 10",
  highlights: [
    "Core curriculum focused on Software Development, Data Structures, OOP, Web Technologies, and Database Management.",
    "Built hands-on academic projects including the Online Food Ordering System using Core Java and web technologies.",
    "Strong foundation in Computer Science fundamentals, Java programming, and software engineering principles."
  ]
};

const Experience = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="experience-page">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <span className="section-badge">Career Journey</span>
          <h1 className="section-title">Professional Experience</h1>
          <p className="section-subtitle">
            Demonstrated track record of delivering responsive, robust web solutions and enterprise
            modules at Nebula Technology.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div className="timeline-card" key={index}>
              <div className="card-top">
                <div className="role-meta">
                  <div className="badge-row">
                    <span className="period-badge">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className={`status-pill ${index === 0 ? "current" : ""}`}>
                      {exp.status}
                    </span>
                  </div>
                  <h2 className="role-title">{exp.role}</h2>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="work-type">({exp.workType})</span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-focus">
                <span className="focus-label">Key Focus:</span> {exp.project}
              </div>

              <p className="experience-desc">{exp.description}</p>

              <div className="responsibilities-section">
                <h3 className="sub-heading">Key Contributions & Deliverables:</h3>
                <ul className="highlights-list">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-tags">
                {exp.skills.map((skill, sIdx) => (
                  <span className="tech-tag" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="education-card">
          <div className="education-icon-box">
            <FaGraduationCap />
          </div>
          <div className="education-content">
            <div className="education-header-row">
              <div>
                <span className="edu-badge">Academic Background</span>
                <h2 className="degree-title">{educationData.degree}</h2>
                <h3 className="institution-name">{educationData.institution}</h3>
              </div>
              <div className="edu-meta">
                <span className="edu-year">{educationData.period}</span>
                <span className="edu-score">
                  <FaAward /> {educationData.score}
                </span>
              </div>
            </div>
            <ul className="edu-highlights">
              {educationData.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Callout */}
        <div className="experience-cta">
          <div>
            <h3>Want a detailed copy of my background?</h3>
            <p>Download my comprehensive resume or view all details online.</p>
          </div>
          <button className="cta-btn" onClick={() => setIsResumeOpen(true)}>
            <FaFileAlt /> View Complete Resume
          </button>
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default Experience;
