import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
  FaGithub
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="logo-badge">VP</span>
              <span className="brand-name">Vaishnavi Patil</span>
            </div>
            <p className="brand-desc">
              Java Full Stack Developer with hands-on experience building scalable, responsive
              web applications using React.js, REST APIs, and Core Java.
            </p>
            <div className="footer__contact-quick">
              <a href="mailto:vaishup7832@gmail.com" className="quick-item">
                <FaEnvelope className="icon" /> vaishup7832@gmail.com
              </a>
              <a href="tel:+919673921531" className="quick-item">
                <FaPhoneAlt className="icon" /> +91-9673921531
              </a>
              <span className="quick-item">
                <FaMapMarkerAlt className="icon" /> Pune, Maharashtra, India
              </span>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="group-title">Navigation</h4>
            <ul className="links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/project">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__connect">
            <h4 className="group-title">Connect & Socials</h4>
            <p className="connect-text">
              Looking for a dedicated Full Stack or Frontend Developer for your team? Let's connect!
            </p>
            <div className="social-pills">
              <a
                href="https://www.linkedin.com/in/vaishnavi-patil-6a9283334/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill linkedin"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="mailto:vaishup7832@gmail.com"
                className="social-pill email"
              >
                <FaEnvelope /> Email Me
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Vaishnavi Patil. All rights reserved.
          </p>
          <div className="built-with">
            <span>Crafted with</span>
            <FaHeart className="heart-icon" />
            <span>using React.js & modern SCSS</span>
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
