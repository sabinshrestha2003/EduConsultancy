import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const VisaAssistance = () => {
  return (
    <div className="homepage">
      {/* Visa Assistance Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Visa Assistance
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Expert support for your visa to Japan. Visit our Chabahil office for a consultation!
            </p>
          </div>
        </div>
      </section>

      {/* Visa Assistance Content */}
      <section className="about">
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Overview of Visa Services</h2>
              <p>
                We help you navigate working visas, student visas, and more for Japan. Visit us in Chabahil for personalized guidance.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>Application Process</h2>
              <ol className="timeline-content" style={{ paddingLeft: '20px' }}>
                <li className="timeline-step"><div className="timeline-circle"></div>Submit your application and details.</li>
                <li className="timeline-step"><div className="timeline-circle"></div>Provide documents (e.g., job offer, passport).</li>
                <li className="timeline-step"><div className="timeline-circle"></div>Attend an interview (if required) with our support.</li>
                <li className="timeline-step"><div className="timeline-circle"></div>Receive visa approval and relocation assistance.</li>
              </ol>
              <p>Our team ensures a smooth process—stop by for help!</p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Start Your Visa Journey</h2>
              <p>Take the first step toward Japan. Visit our office or contact us for expert assistance.</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Contact Us
              </Link>
              <Link to="/location" className="btn btn-outline" style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyushuedu@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGoogle />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisaAssistance;