import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaFileDownload,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaCheckCircle,
  FaArrowRight,
  FaBuilding,
  FaServer,
  FaDatabase,
  FaMapMarkerAlt
} from 'react-icons/fa';
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiJavascript
} from 'react-icons/si';
import profileImg from '../assets/Vaishnavi_Profile.jpg';
import ResumeModal from '../Components/ResumeModal';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="home-picto-page">
      <div className="picto-main-container">
        {/* =========================================
            1. PICTO HERO CARD (Matches Figma Design)
            ========================================= */}
        <div className="picto-hero-card">
          {/* Floating Neon Pill Badge (like "FREEBIES" in Figma) */}
          <div className="picto-floating-badge">
            <span>✨ Full Stack & React</span>
          </div>

          <div className="picto-hero-grid">
            {/* Left Content */}
            <div className="picto-hero-left">
              <span className="picto-greeting">Hello, I'm</span>
              <h1 className="picto-hero-name">Vaishnavi Patil</h1>
              
              <p className="picto-hero-role">
                Java Full Stack Developer &bull; Software Engineer
              </p>

              <p className="picto-hero-bio">
                I'm a <strong>Software Engineer</strong> based in <strong>Pune, India</strong> with professional experience
                at <strong>Nebula Technology</strong>. I build responsive, enterprise-grade web applications with 
                <strong> React.js</strong>, connect frontend modules to secure <strong>REST APIs</strong>, and develop scalable backends with 
                <strong> Core Java, Spring Boot, and SQL</strong>.
              </p>

              <div className="picto-hero-actions">
                <button
                  className="btn-picto-primary"
                  onClick={() => navigate("/contact")}
                >
                  Say Hello!
                </button>
                <button
                  className="btn-picto-secondary"
                  onClick={() => setIsResumeOpen(true)}
                >
                  <FaFileDownload /> View Resume
                </button>
              </div>

              {/* Picto-Style Quick Stats Row at Bottom of Left Column */}
              <div className="picto-stats-strip">
                <div className="stat-pill">
                  <span className="stat-num">1+ Y.</span>
                  <span className="stat-sub">Experience</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">ERP</span>
                  <span className="stat-sub">Super Admin</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">8.02</span>
                  <span className="stat-sub">CGPA (B.Voc)</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">15+</span>
                  <span className="stat-sub">Tech Stack</span>
                </div>
              </div>
            </div>

            {/* Right Photo Column (Elevated Rounded Frame like Figma) */}
            <div className="picto-hero-right">
              <div className="picto-photo-frame">
                <img
                  src={profileImg}
                  alt="Vaishnavi Patil"
                  className="picto-avatar"
                />
                <div className="picto-avatar-tag">
                  <span className="online-dot"></span>
                  <span>Software Engineer @ Nebula Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            2. ABOUT & EXPERTISE SECTION
            ========================================= */}
        <section className="picto-section">
          <div className="picto-section-header">
            <span className="section-mini-tag">ABOUT ME</span>
            <h2 className="section-main-heading">Crafting Real-World Enterprise Solutions</h2>
            <p className="section-main-desc">
              From administrative school governance platforms to full-stack applications,
              I build software that balances technical precision with great user experiences.
            </p>
          </div>

          <div className="picto-cards-grid three-cols">
            <div className="picto-card">
              <div className="card-icon-circle purple">
                <SiReact />
              </div>
              <h3 className="card-title">Frontend Engineering</h3>
              <p className="card-body">
                Expertise in modern React.js, hooks, dynamic routing, component-driven UI,
                client-side form validation, and responsive SCSS architectures.
              </p>
              <div className="card-tags">
                <span>React.js</span>
                <span>JavaScript ES6+</span>
                <span>SCSS</span>
                <span>Hooks</span>
              </div>
            </div>

            <div className="picto-card">
              <div className="card-icon-circle blue">
                <FaServer />
              </div>
              <h3 className="card-title">Java & Spring Boot</h3>
              <p className="card-body">
                Strong understanding of Core Java, OOP concepts, Spring Boot REST controllers,
                microservices principles, and secure client-server communication.
              </p>
              <div className="card-tags">
                <span>Core Java</span>
                <span>OOP</span>
                <span>Spring Boot</span>
                <span>REST APIs</span>
              </div>
            </div>

            <div className="picto-card">
              <div className="card-icon-circle pink">
                <FaDatabase />
              </div>
              <h3 className="card-title">Database & Systems</h3>
              <p className="card-body">
                Relational schema design, SQL data querying, CRUD transaction flows,
                error boundaries, and token-based JWT authentication.
              </p>
              <div className="card-tags">
                <span>MySQL</span>
                <span>SQL</span>
                <span>JWT Auth</span>
                <span>Postman</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            3. EXPERIENCE SPOTLIGHT
            ========================================= */}
        <section className="picto-section">
          <div className="picto-experience-banner">
            <div className="exp-banner-left">
              <span className="section-mini-tag">CURRENT ROLE</span>
              <h3 className="exp-role-title">Software Engineer</h3>
              <h4 className="exp-company-sub">
                <FaBuilding /> Nebula Technology &bull; Pune, Maharashtra (On-site)
              </h4>
              <span className="exp-date-badge">Nov 2025 – Present</span>

              <p className="exp-summary-text">
                Leading the frontend development and maintenance of the <strong>Super Admin module</strong> for an enterprise 
                <strong> School ERP Management System</strong> using React.js and REST APIs.
              </p>

              <ul className="exp-points-list">
                <li>
                  <FaCheckCircle className="check" />
                  <span>Build responsive, user-friendly interfaces, dashboards, and tables for school operations.</span>
                </li>
                <li>
                  <FaCheckCircle className="check" />
                  <span>Integrate frontend screens with secure REST APIs, handling data mutations and loading states.</span>
                </li>
                <li>
                  <FaCheckCircle className="check" />
                  <span>Implement form validation, error feedback, and JWT-authenticated protected routes.</span>
                </li>
              </ul>

              <div className="exp-actions">
                <button
                  className="btn-picto-primary"
                  onClick={() => navigate("/experience")}
                >
                  View Full Career Journey <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="exp-banner-right">
              <div className="edu-callout-card">
                <div className="edu-icon-circle">
                  <FaGraduationCap />
                </div>
                <span className="edu-tag">ACADEMIC EXCELLENCE</span>
                <h4 className="edu-degree">B.Voc in Software Development</h4>
                <p className="edu-college">PDEA's Annasaheb Magar College, Pune</p>
                <div className="edu-score-pill">
                  <strong>Graduated: 2025</strong> &bull; CGPA: 8.02 / 10
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. FEATURED PROJECTS PREVIEW
            ========================================= */}
        <section className="picto-section">
          <div className="picto-section-header">
            <span className="section-mini-tag">FEATURED WORK</span>
            <h2 className="section-main-heading">Projects & Applications</h2>
            <p className="section-main-desc">
              Real enterprise platforms and full stack applications developed with modern standards.
            </p>
          </div>

          <div className="picto-cards-grid two-cols">
            {/* Project 1 */}
            <div className="picto-project-card">
              <div className="proj-badge">Enterprise Production</div>
              <h3 className="proj-title">School ERP Management System</h3>
              <span className="proj-subtitle">Super Admin Module &bull; Nebula Technology</span>
              <p className="proj-desc">
                Centralized multi-school administrative platform enabling comprehensive management of institutions,
                staff/student records, interactive data tables, and secure role-based access.
              </p>
              <div className="card-tags">
                <span>React.js</span>
                <span>REST APIs</span>
                <span>JWT Auth</span>
                <span>Form Validation</span>
                <span>SCSS</span>
              </div>
              <button
                className="proj-view-btn"
                onClick={() => navigate("/project")}
              >
                Explore Details & Architecture <FaArrowRight />
              </button>
            </div>

            {/* Project 2 */}
            <div className="picto-project-card">
              <div className="proj-badge">Full Stack Project</div>
              <h3 className="proj-title">Online Food Ordering System</h3>
              <span className="proj-subtitle">Academic Capstone &bull; B.Voc SD</span>
              <p className="proj-desc">
                End-to-end food ordering platform featuring dynamic menu filtering, interactive cart calculations,
                order simulation, and persistent relational database storage in SQL.
              </p>
              <div className="card-tags">
                <span>Core Java</span>
                <span>React.js</span>
                <span>SQL</span>
                <span>REST APIs</span>
                <span>CSS3</span>
              </div>
              <button
                className="proj-view-btn"
                onClick={() => navigate("/project")}
              >
                Explore Details & Architecture <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================
            5. CALL TO ACTION STRIP
            ========================================= */}
        <section className="picto-section">
          <div className="picto-cta-card">
            <div className="cta-left">
              <h2 className="cta-heading">Let's build something great together.</h2>
              <p className="cta-text">
                Currently open to Java Full Stack Developer & Frontend roles. Let's discuss how I can contribute to your team!
              </p>
            </div>
            <div className="cta-right">
              <button
                className="btn-picto-primary lg"
                onClick={() => navigate("/contact")}
              >
                Say Hello!
              </button>
              <button
                className="btn-picto-secondary lg"
                onClick={() => setIsResumeOpen(true)}
              >
                <FaFileDownload /> Get Resume
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
};

export default Home;
