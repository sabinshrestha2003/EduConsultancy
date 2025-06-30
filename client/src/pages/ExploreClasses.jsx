import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const ExploreClasses = () => {
  return (
    <div className="homepage">
      {/* Explore Classes Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Explore Classes
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Discover our tailored Japanese language courses. Visit our Chabahil office to enroll!
            </p>
          </div>
        </div>
      </section>

      {/* Classes Content */}
      <section className="about">
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Our Class Categories</h2>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🎌</div>
                  <h3>Beginner (N5-N4)</h3>
                  <p>Perfect for new learners, covering basics of Japanese language and culture.</p>
                  <Link to="/contact" className="service-link">Enroll Now <span className="arrow">→</span></Link>
                </div>
                <div className="service-card">
                  <div className="service-icon">📖</div>
                  <h3>Intermediate (N3-N2)</h3>
                  <p>Enhance your skills with grammar, conversation, and reading practice.</p>
                  <Link to="/contact" className="service-link">Enroll Now <span className="arrow">→</span></Link>
                </div>
                <div className="service-card">
                  <div className="service-icon">🌟</div>
                  <h3>Advanced (N1)</h3>
                  <p>Master fluency with advanced topics and JLPT N1 preparation.</p>
                  <Link to="/contact" className="service-link">Enroll Now <span className="arrow">→</span></Link>
                </div>
              </div>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>About Our Classes</h2>
              <p>
                Our classes are designed for all levels, led by expert instructors with flexible schedules. Visit our Chabahil office to meet the team and start your learning journey.
              </p>
              <Link to="/team" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Meet Our Instructors
              </Link>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Class Schedules</h2>
              <p>Weekday Classes: 6:00 PM – 8:00 PM | Weekend Classes: 10:00 AM – 1:00 PM</p>
              <p>Contact us or visit to find a slot that fits your schedule!</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Contact Us
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

export default ExploreClasses;