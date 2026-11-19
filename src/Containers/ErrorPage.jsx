import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="error-icon-box">
          <FaExclamationTriangle />
        </div>
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-desc">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-btn">
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
