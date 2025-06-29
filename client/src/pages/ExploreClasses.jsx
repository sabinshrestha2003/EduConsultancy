import React from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Import Facebook icon
import { FaGoogle } from 'react-icons/fa';   // Import Google icon
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

const ExploreClasses = () => {
  return (
    <div className="homepage">
      {/* Explore Classes Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Explore Classes
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Discover our Japanese language courses tailored for all levels.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Our Class Categories</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', border: '1px solid var(--light-gray)', borderRadius: '10px', textAlign: 'center' }}>
                  <h3>Beginner (N5-N4)</h3>
                  <p>Perfect for new learners, covering basics of Japanese language and culture.</p>
                </div>
                <div style={{ padding: '1.5rem', border: '1px solid var(--light-gray)', borderRadius: '10px', textAlign: 'center' }}>
                  <h3>Intermediate (N3-N2)</h3>
                  <p>Enhance your skills with grammar, conversation, and reading practice.</p>
                </div>
                <div style={{ padding: '1.5rem', border: '1px solid var(--light-gray)', borderRadius: '10px', textAlign: 'center' }}>
                  <h3>Advanced (N1)</h3>
                  <p>Master fluency with advanced topics and preparation for JLPT N1.</p>
                </div>
              </div>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>About Our Classes</h2>
              <p>
                Our classes are designed to cater to all learning levels, from beginners to advanced learners. With
                expert instructors and flexible schedules, we ensure a supportive environment to help you master
                Japanese and prepare for life in Japan.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Get Started Today</h2>
              <p>
                Enroll in a class that suits your needs and start your journey to Japan. Contact us for more details
                or to schedule a trial lesson.
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

export default ExploreClasses;