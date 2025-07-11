import React from 'react';
import '../styles/Location.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const Location = () => {
  return (
    <div className="loc-page">
      {/* Location Header */}
      <section className="loc-hero">
        <div className="loc-container loc-hero-content">
          <div className="loc-hero-badge">
            <span>📍 Our Location</span>
          </div>
          <h1 className="loc-hero-title">
            Our <span className="loc-accent-text">Location</span>
          </h1>
          <p className="loc-hero-description">
            Find us in the heart of Kathmandu, Nepal.
          </p>
        </div>
      </section>

      {/* Location Content */}
      <section className="loc-content">
        <div className="loc-container">
          <div className="loc-content-sections">
            <div className="loc-section">
              <h2>Our Office</h2>
              <p>
                Kyushu Educational Consultancy Pvt. Ltd. is based in Kathmandu, serving as a hub for students
                planning to study abroad. Visit our office for personalized guidance.
              </p>
              <p className="loc-address">
                Address: Chabahil, Kathmandu, Nepal
              </p>
            </div>
            <div className="loc-section">
              <h2>Find Us on Map</h2>
              <div className="loc-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.845681462287!2d85.34710307544434!3d27.713156532183304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f9f6e3e4f3%3A0x7a8e7b9b7e9e8a!2sChabahil%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1624369200000"
                  width="100%"
                  height="300px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Kyushu Educational Consultancy Location"
                ></iframe>
              </div>
            </div>
            <div className="loc-section">
              <h2>Visit or Contact Us</h2>
              <p>
                Whether you’re local or planning a visit, we’re here to assist. Reach out to schedule an appointment
                or learn more about our services.
              </p>
              <Link to="/contact" className="loc-btn loc-btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="loc-footer">
        <div className="loc-container">
          <div className="loc-footer-content">
            <div className="loc-footer-section">
              <h3>Kyushu Educational Consultancy Pvt. Ltd.</h3>
              <p>Empowering your journey to Japan with expert solutions.</p>
              <div className="loc-social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="loc-social-link">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyushuedu@gmail.com" target="_blank" rel="noopener noreferrer" className="loc-social-link">
                  <FaGoogle />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="loc-social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="loc-footer-section">
              <h3>Contact Us</h3>
              <div className="loc-contact-info">
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="loc-footer-section">
              <h3>Quick Links</h3>
              <div className="loc-footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
            <div className="loc-footer-section">
              <h3>Admin Login</h3>
              <Link to="/admin-login" className="loc-btn loc-btn-secondary">
                Admin Login
              </Link>
            </div>
          </div>
          <div className="loc-footer-bottom">
            <p>© 2025 Kyushu Educational Consultancy Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Location;