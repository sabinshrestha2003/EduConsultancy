import React from 'react';
import '../styles/ExploreClasses.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const ExploreClasses = () => {
  return (
    <div className="homepage">
      {/* Explore Classes Header */}
      <section className="hero" style={{ 
        minHeight: '60vh', 
        background: 'linear-gradient(120deg, var(--primary-blue) 0%, rgba(30, 58, 138, 0.8) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="hero-overlay" style={{ 
          background: 'rgba(0, 0, 0, 0.3)', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%' 
        }}></div>
        <div className="hero-content" style={{ zIndex: 3 }}>
          <div className="hero-text" style={{ textAlign: 'center', padding: '3rem 1rem' }} data-aos="fade-down" data-aos-duration="1000">
            <h1 className="hero-title" style={{ 
              color: 'var(--white)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 800, 
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' 
            }}>
              Explore Our Classes
            </h1>
            <p className="hero-description typewriter" style={{ 
              color: 'var(--white)', 
              maxWidth: '800px', 
              margin: '1rem auto', 
              fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
              fontWeight: 300 
            }}>
              Discover our tailored Japanese language courses. Visit our Chabahil office to enroll!
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }} data-aos="zoom-in" data-aos-delay="200">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Content */}
      <section className="about" style={{ padding: '5rem 0', backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up" data-aos-duration="800">
              <h2 className="section-title">Our Class Categories</h2>
              <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="service-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                  <div className="service-icon">🎌</div>
                  <h3>Beginner (N5-N4)</h3>
                  <p>Perfect for new learners, covering basics of Japanese language and culture.</p>
                  <Link to="/contact" className="service-link">Enroll Now <span className="arrow">→</span></Link>
                </div>
                <div className="service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                  <div className="service-icon">📖</div>
                  <h3>Intermediate (N3-N2)</h3>
                  <p>Enhance your skills with grammar, conversation, and reading practice.</p>
                  <Link to="/contact" className="service-link">Enroll Now <span className="arrow">→</span></Link>
                </div>
                <div className="service-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                  <div className="service-icon">🌟</div>
                  <h3>Advanced (N1)</h3>
                  <p>Master fluency with advanced topics and JLPT N1 preparation.</p>
                  <Link to="/contact" className="service-link">Enroll Now <span className="arrow">→</span></Link>
                </div>
              </div>
            </div>
            <div className="about-text about-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <h2 className="about-heading">About Our Classes</h2>
              <p>
                Our classes are designed for all levels, led by expert instructors with flexible schedules. Visit our Chabahil office to meet the team and start your learning journey.
              </p>
              <Link to="/team" className="btn btn-outline" style={{ marginTop: '1rem', display: 'block', textAlign: 'center' }}>
                Meet Our Instructors
              </Link>
            </div>
            <div className="about-text about-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <h2 className="about-heading">Class Schedules</h2>
              <p>Weekday Classes: 6:00 PM – 8:00 PM</p>
              <p>Weekend Classes: 10:00 AM – 1:00 PM</p>
              <p>Contact us or visit to find a slot that fits your schedule!</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'block', textAlign: 'center' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: 'var(--primary-blue)' }}>
        <div className="container">
          <div className="footer-content" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="footer-section" data-aos="fade-up" data-aos-duration="800">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="social-link" data-aos="zoom-in" data-aos-delay="100">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyushuedu@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link" data-aos="zoom-in" data-aos-delay="200">
                  <FaGoogle />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link" data-aos="zoom-in" data-aos-delay="300">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="footer-section" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="footer-section" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <Link to="/privacy" data-aos="fade-up" data-aos-delay="500">Privacy Policy</Link>
                <Link to="/terms" data-aos="fade-up" data-aos-delay="600">Terms of Service</Link>
                <Link to="/contact" data-aos="fade-up" data-aos-delay="700">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom" data-aos="fade-up" data-aos-delay="800">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExploreClasses;