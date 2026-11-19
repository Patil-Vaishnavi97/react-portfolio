import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaEnvelope,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaLinkedin
} from "react-icons/fa";
import ResumeModal from "./ResumeModal";
import ThemeToggle from "./ThemeToggle";
import "./NavBar.scss";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/project" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar__container">
          {/* Logo: Purple circle monogram + Name */}
          <Link to="/" className="navbar__logo">
            <span className="logo-circle">V</span>
            <span className="logo-name">Vaishnavi</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__desktop-nav">
            <ul className="navbar__menu">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={index} className="navbar__menu-item">
                    <Link
                      to={item.to}
                      className={`navbar__menu-link ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="navbar__actions">
              {/* Dark / Light Mode Switch Button */}
              <ThemeToggle />

              <button
                className="btn-resume-outline"
                onClick={() => setIsResumeOpen(true)}
              >
                <FaFileAlt /> Resume
              </button>
              <Link to="/contact" className="btn-contact-pill">
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="navbar__mobile-toggle">
            <ThemeToggle />
            <button
              className="icon-toggle-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`navbar__mobile-drawer ${menuOpen ? "open" : ""}`}>
          <ul className="mobile-menu">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={index} className="mobile-menu-item">
                  <Link
                    to={item.to}
                    className={`mobile-menu-link ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mobile-menu-item">
              <Link
                to="/contact"
                className={`mobile-menu-link ${location.pathname === "/contact" ? "active" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-drawer-footer">
            <button
              className="btn-resume-mobile"
              onClick={() => {
                setMenuOpen(false);
                setIsResumeOpen(true);
              }}
            >
              <FaFileAlt /> View & Download Resume
            </button>
          </div>
        </div>
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
