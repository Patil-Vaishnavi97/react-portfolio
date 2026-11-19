import React, { useState } from 'react';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
  FaLayerGroup,
  FaCalendarAlt,
  FaLaptopCode,
  FaBuilding,
  FaGraduationCap,
  FaUserCheck
} from 'react-icons/fa';
import './Project.scss';

const projectsData = [
  {
    id: 1,
    title: "School ERP Management System",
    subtitle: "Super Admin Module — Enterprise Application",
    type: "Enterprise / Industry Project",
    typeIcon: <FaBuilding />,
    period: "2026 – Present",
    company: "Nebula Technology",
    summary: "A robust enterprise School ERP platform empowering administrators with comprehensive tools for multi-school onboarding, student/staff records, roles & permissions, and institutional operations.",
    features: [
      "Designed and implemented the core Super Admin dashboard for centralized school governance and data visualization.",
      "Built dynamic, responsive tables and comprehensive administrative forms with real-time field validation.",
      "Connected frontend modules with REST APIs to seamlessly perform CRUD operations, data fetching, and mutations.",
      "Integrated loading skeletons, error boundaries, and informative feedback toasts for optimal user experience.",
      "Enforced role-based access control and JWT-protected route authentication across administrative workflows."
    ],
    techStack: [
      "React.js",
      "JavaScript (ES6+)",
      "React Router",
      "REST APIs",
      "JWT Auth",
      "Form Validation",
      "SCSS"
    ],
    badge: "Production Project"
  },
  {
    id: 2,
    title: "Online Food Ordering System",
    subtitle: "Full Stack Academic Capstone Project",
    type: "Academic Capstone Project",
    typeIcon: <FaGraduationCap />,
    period: "Academic Project",
    company: "PDEA's Annasaheb Magar College",
    summary: "An interactive, user-friendly online food ordering application designed to provide practical experience in end-to-end full stack web development and order workflow simulation.",
    features: [
      "Created dynamic food category listings with real-time price calculation, item customization, and search filters.",
      "Implemented a persistent shopping cart with live quantity updates, pricing totals, and checkout flow.",
      "Designed clean relational database schemas in SQL to manage food items, categories, customer records, and orders.",
      "Applied Core Java and backend principles for application data flow and transaction processing.",
      "Designed a responsive, mobile-optimized UI with modern layout standards and interactive states."
    ],
    techStack: [
      "Core Java",
      "React.js",
      "SQL (MySQL)",
      "REST APIs",
      "HTML5 / CSS3",
      "JavaScript"
    ],
    badge: "Full Stack Capstone"
  },
  {
    id: 3,
    title: "Personal Developer Portfolio",
    subtitle: "Modern React.js Showcase & Interactive Hub",
    type: "Personal Project",
    typeIcon: <FaLaptopCode />,
    period: "2026",
    company: "Open Source / Portfolio",
    summary: "A clean, modern, and high-performance portfolio website built from scratch to showcase professional projects, technical skills, and career achievements.",
    features: [
      "Built with component-driven architecture using modern React.js, React Router, and modular SCSS.",
      "Includes an interactive in-browser printable Resume modal viewer and live contact form integration.",
      "Engineered with a responsive dark-mode tech aesthetic, glowing accents, and smooth user interactions.",
      "Organized clean directory architecture with reusable layout components and error boundaries."
    ],
    techStack: [
      "React.js",
      "React Router",
      "SCSS",
      "EmailJS",
      "React Icons",
      "Vite"
    ],
    badge: "Portfolio Website"
  }
];

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = selectedFilter === "all"
    ? projectsData
    : projectsData.filter(p => p.type.toLowerCase().includes(selectedFilter));

  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="section-badge">Featured Work</span>
          <h1 className="section-title">Projects & Applications</h1>
          <p className="section-subtitle">
            A showcase of real-world enterprise software and practical full stack applications I have developed,
            highlighting frontend engineering, REST API integration, and clean code principles.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-row">
          <button
            className={`filter-btn ${selectedFilter === "all" ? "active" : ""}`}
            onClick={() => setSelectedFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${selectedFilter === "enterprise" ? "active" : ""}`}
            onClick={() => setSelectedFilter("enterprise")}
          >
            Enterprise / Industry
          </button>
          <button
            className={`filter-btn ${selectedFilter === "academic" ? "active" : ""}`}
            onClick={() => setSelectedFilter("academic")}
          >
            Academic Capstone
          </button>
          <button
            className={`filter-btn ${selectedFilter === "personal" ? "active" : ""}`}
            onClick={() => setSelectedFilter("personal")}
          >
            Personal Portfolio
          </button>
        </div>

        {/* Projects Cards */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-header">
                <div className="project-badge-row">
                  <span className="type-badge">
                    {project.typeIcon} {project.type}
                  </span>
                  <span className="period-badge">
                    <FaCalendarAlt /> {project.period}
                  </span>
                </div>
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
                {project.company && (
                  <div className="company-badge">
                    <FaBuilding /> {project.company}
                  </div>
                )}
              </div>

              <p className="project-summary">{project.summary}</p>

              <div className="project-features">
                <h4 className="features-heading">Key Features & Architecture:</h4>
                <ul className="features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-footer">
                <h4 className="tech-heading">Technologies Used:</h4>
                <div className="tech-tags">
                  {project.techStack.map((tech, tIdx) => (
                    <span className="tech-tag" key={tIdx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
