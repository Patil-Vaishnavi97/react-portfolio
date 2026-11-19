import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaCopy,
  FaClock
} from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vaishup7832@gmail.com");
    setCopiedEmail(true);
    toast.info("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Sending email via emailjs with public key
      await emailjs.send(
        'service_492czu6',
        'template_vcdaw0n',
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject || "Portfolio Contact Inquiry",
          message: data.message,
        },
        'HWWsQyRjJGTbzDlYR'
      );
      toast.success("Thank you! Your message has been sent successfully.");
      reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      // Fallback helpful message
      toast.error("Unable to send via automated gateway. Opening your default email client...");
      window.location.href = `mailto:vaishup7832@gmail.com?subject=${encodeURIComponent(data.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Hi Vaishnavi,\n\n${data.message}\n\nFrom: ${data.name} (${data.email})`)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="section-badge">Get In Touch</span>
          <h1 className="section-title">Let's Connect & Collaborate</h1>
          <p className="section-subtitle">
            Whether you have an exciting full-time opportunity, project discussion, or want to talk tech,
            my inbox is always open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            <div className="info-card">
              <h2 className="info-card-title">Contact Information</h2>
              <p className="info-card-desc">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
              </p>

              <div className="channels-list">
                {/* Email Item */}
                <div className="channel-box">
                  <div className="channel-icon email"><FaEnvelope /></div>
                  <div className="channel-details">
                    <span className="channel-label">Email Address</span>
                    <a href="mailto:vaishup7832@gmail.com" className="channel-value">
                      vaishup7832@gmail.com
                    </a>
                  </div>
                  <button
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <FaCheckCircle className="copied-icon" /> : <FaCopy />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="channel-box">
                  <div className="channel-icon phone"><FaPhoneAlt /></div>
                  <div className="channel-details">
                    <span className="channel-label">Phone / WhatsApp</span>
                    <a href="tel:+919673921531" className="channel-value">
                      +91-9673921531
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="channel-box">
                  <div className="channel-icon location"><FaMapMarkerAlt /></div>
                  <div className="channel-details">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">Pune, Maharashtra, India</span>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="channel-box">
                  <div className="channel-icon linkedin"><FaLinkedin /></div>
                  <div className="channel-details">
                    <span className="channel-label">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/vaishnavi-patil-6a9283334/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value"
                    >
                      linkedin.com/in/vaishnavi-patil
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className="availability-card">
                <div className="status-indicator">
                  <span className="pulse-dot"></span>
                  <span className="status-text">Available for Full-time Roles</span>
                </div>
                <p className="availability-sub">
                  Actively open to Java Full Stack Developer & Frontend (React.js) roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="form-card">
              <h2 className="form-title">Send a Direct Message</h2>
              <p className="form-subtitle">Fill in the form below and I'll get back to you promptly.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser className="input-icon" /> Your Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Please enter your name' })}
                    placeholder="e.g. John Doe"
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <span className="error-msg">{errors.name.message}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope className="input-icon" /> Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    placeholder="e.g. johndoe@example.com"
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-msg">{errors.email.message}</span>}
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject">Subject (Optional)</label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message">
                    Your Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...register('message', {
                      required: 'Please write your message',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters long',
                      },
                    })}
                    placeholder="Hi Vaishnavi, I would like to connect with you regarding..."
                    rows={5}
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && <span className="error-msg">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
