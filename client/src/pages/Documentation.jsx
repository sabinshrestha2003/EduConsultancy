import React from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Import Facebook icon
import { FaGoogle } from 'react-icons/fa';   // Import Google icon
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

const Documentation = () => {
  return (
    <div className="homepage">
      {/* Documentation Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Documentation Services
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Simplify your paperwork with our expert assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Overview of Services</h2>
              <p>
                Our documentation services are designed to streamline the process of preparing and submitting paperwork
                for your journey to Japan. From visa applications to educational certifications, we handle it all with
                precision and care, ensuring compliance with Japanese regulations.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>Required Documents</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✅ Passport copy</li>
                <li>✅ Visa application form</li>
                <li>✅ Proof of enrollment or employment</li>
                <li>✅ Financial statements</li>
                <li>✅ Language proficiency certificate (e.g., JLPT)</li>
              </ul>
              <p>
                Our team will guide you through gathering these documents and assist with any additional requirements.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Get Assistance Today</h2>
              <p>
                Let us help you prepare your documentation seamlessly. Contact us to schedule a consultation or learn
                more about our services.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Reused from HomePage) */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyusu@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
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

export default Documentation;