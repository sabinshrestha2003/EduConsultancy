import React from 'react';
import '../styles/VisaAssistance.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const VisaAssistance = () => {
  return (
    <div className="visa-page">
      {/* Visa Assistance Header */}
      <section className="visa-hero">
        <div className="visa-container visa-hero-content">
          <div className="visa-hero-badge">
            <span>📜 Visa Services</span>
          </div>
          <h1 className="visa-hero-title">
            Visa <span className="visa-accent-text">Assistance</span>
          </h1>
          <p className="visa-hero-description">
            Expert support for your visa to Japan. Visit our Chabahil office for a consultation!
          </p>
        </div>
      </section>

      {/* Visa Assistance Content */}
      <section className="visa-content">
        <div className="visa-container">
          <div className="visa-content-sections">
            <div className="visa-section">
              <h2>Overview of Visa Services</h2>
              <p>
                We help you navigate working visas, student visas, and more for Japan. Visit us in Chabahil for personalized guidance.
              </p>
            </div>
            <div className="visa-section">
              <h2>Application Process</h2>
              <ol className="visa-timeline-content">
                <li className="visa-timeline-step">Submit your application and details.</li>
                <li className="visa-timeline-step">Provide documents (e.g., job offer, passport).</li>
                <li className="visa-timeline-step">Attend an interview (if required) with our support.</li>
                <li className="visa-timeline-step">Receive visa approval and relocation assistance.</li>
              </ol>
              <p>Our team ensures a smooth process—stop by for help!</p>
            </div>
            <div className="visa-section">
              <h2>Start Your Visa Journey</h2>
              <p>Take the first step toward Japan. Visit our office or contact us for expert assistance.</p>
              <div className="visa-buttons">
                <Link to="/contact" className="visa-btn visa-btn-primary">
                  Contact Us
                </Link>
                <Link to="/location" className="visa-btn visa-btn-secondary">
                  Find Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="visa-footer">
        <div className="visa-container">
          <div className="visa-footer-content">
            <div className="visa-footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="visa-social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="visa-social-link">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyushuedu@gmail.com" target="_blank" rel="noopener noreferrer" className="visa-social-link">
                  <FaGoogle />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="visa-social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="visa-footer-section">
              <h3>Contact Us</h3>
              <div className="visa-contact-info">
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="visa-footer-section">
              <h3>Quick Links</h3>
              <div className="visa-footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="visa-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisaAssistance;