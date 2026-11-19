import React, { useState } from 'react';
import {
  FaJava,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLock,
  FaShieldAlt,
  FaCheckDouble,
  FaServer,
  FaNetworkWired,
  FaTools
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiPostman,
  SiIntellijidea,
  SiMysql
} from 'react-icons/si';
import { TbLayersLinked, TbDeviceDesktopAnalytics, TbBrandVscode } from 'react-icons/tb';
import './Skills.scss';

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <FaReact />,
    description: "Building responsive, component-driven, high-performance web applications.",
    skills: [
      { name: "React.js", level: "Advanced", icon: <FaReact />, desc: "Component architecture, SPA, Virtual DOM, state management" },
      { name: "React Hooks", level: "Advanced", icon: <TbLayersLinked />, desc: "useState, useEffect, custom hooks, reactive updates" },
      { name: "React Router", level: "Advanced", icon: <FaNetworkWired />, desc: "Dynamic route configuration, protected routes, URL state" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: <FaJs />, desc: "Async/await, closures, modern ES features, DOM manipulation" },
      { name: "HTML5 & CSS3", level: "Expert", icon: <FaHtml5 />, desc: "Semantic structure, responsive grid, flexbox, animations" },
      { name: "SCSS / SASS", level: "Advanced", icon: <FaSass />, desc: "Variables, nesting, modular styles, responsive mixins" }
    ]
  },
  {
    id: "languages",
    title: "Programming & Java Core",
    icon: <FaJava />,
    description: "Solid foundation in Object-Oriented Programming and backend logic.",
    skills: [
      { name: "Core Java", level: "Proficient", icon: <FaJava />, desc: "Core language features, multi-threading, memory model" },
      { name: "OOP Concepts", level: "Proficient", icon: <TbDeviceDesktopAnalytics />, desc: "Inheritance, Polymorphism, Encapsulation, Abstraction" },
      { name: "Exception Handling", level: "Proficient", icon: <FaShieldAlt />, desc: "Robust error catching, custom exceptions, safe execution" },
      { name: "Collections Framework", level: "Proficient", icon: <TbLayersLinked />, desc: "Lists, Sets, Maps, Queues, Iterators, algorithmic efficiency" },
      { name: "SQL", level: "Proficient", icon: <SiMysql />, desc: "Complex queries, joins, schema design, constraints, aggregation" }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: <SiSpringboot />,
    description: "Designing and consuming RESTful web services and enterprise backends.",
    skills: [
      { name: "Spring Boot", level: "Working Knowledge", icon: <SiSpringboot />, desc: "REST controllers, dependency injection, application structure" },
      { name: "REST APIs", level: "Advanced", icon: <FaServer />, desc: "API integration, JSON data exchange, CRUD endpoints" },
      { name: "Microservices", level: "Knowledge", icon: <FaNetworkWired />, desc: "Distributed system concepts, service communication" },
      { name: "Relational Database (MySQL)", level: "Proficient", icon: <FaDatabase />, desc: "Database structuring, relational data management" }
    ]
  },
  {
    id: "concepts",
    title: "Development Concepts",
    icon: <FaCheckDouble />,
    description: "Best practices applied across enterprise software engineering workflows.",
    skills: [
      { name: "Reusable Components", level: "Advanced", icon: <TbLayersLinked />, desc: "Modular, decoupled UI architecture for maintainability" },
      { name: "Responsive Design", level: "Expert", icon: <TbDeviceDesktopAnalytics />, desc: "Pixel-perfect adaptation across mobile, tablet, and desktop" },
      { name: "Form Validation", level: "Advanced", icon: <FaCheckDouble />, desc: "Real-time client-side validation, error messaging, sanitization" },
      { name: "Error & Loading States", level: "Advanced", icon: <FaShieldAlt />, desc: "Skeletons, spinners, toasts, fail-safe user feedback" },
      { name: "JWT Authentication", level: "Proficient", icon: <FaLock />, desc: "Token authentication, authorization headers, route guards" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environments",
    icon: <FaTools />,
    description: "Industry-standard developer toolchain and version control.",
    skills: [
      { name: "Git", level: "Proficient", icon: <FaGitAlt />, desc: "Version control, branching, commits, repository maintenance" },
      { name: "GitHub", level: "Proficient", icon: <FaGithub />, desc: "Remote collaboration, pull requests, issue tracking" },
      { name: "Postman", level: "Proficient", icon: <SiPostman />, desc: "API testing, request headers, payload debugging" },
      { name: "VS Code", level: "Expert", icon: <TbBrandVscode />, desc: "Primary frontend development environment" },
      { name: "IntelliJ IDEA", level: "Proficient", icon: <SiIntellijidea />, desc: "Java and backend enterprise application development" }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = activeCategory === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className="skills-page">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <span className="section-badge">Technical Arsenal</span>
          <h1 className="section-title">Skills & Technologies</h1>
          <p className="section-subtitle">
            A comprehensive overview of the programming languages, frontend frameworks, backend technologies,
            and developer tools I utilize to craft scalable applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="category-tabs">
          <button
            className={`tab-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="categories-stack">
          {filteredCategories.map((cat) => (
            <div className="category-section" key={cat.id}>
              <div className="category-header">
                <div className="category-icon-box">{cat.icon}</div>
                <div>
                  <h2 className="category-title">{cat.title}</h2>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skills-grid">
                {cat.skills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-card-top">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className={`level-pill ${skill.level.toLowerCase().replace(/\s+/g, '-')}`}>
                        {skill.level}
                      </span>
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
