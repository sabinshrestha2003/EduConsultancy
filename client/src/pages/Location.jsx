import React from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Import Facebook icon
import { FaGoogle } from 'react-icons/fa';   // Import Google icon
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

const Location = () => {
  return (
    <div className="homepage">
      {/* Location Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Our Location
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Find us in the heart of Kathmandu, Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Location Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Our Office</h2>
              <p>
                Kyushu Educational Consultancy Pvt. Ltd. is based in Kathmandu, serving as a hub for students
                planning to study abroad. Visit our office for personalized guidance.
              </p>
              <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                Address: Chabahil, Kathmandu, Nepal
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>Find Us on Map</h2>
              <div style={{ width: '100%', height: '400px', border: '0', borderRadius: '10px', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.845681462287!2d85.34710307544434!3d27.713156532183304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f9f6e3e4f3%3A0x7a8e7b9b7e9e8a!2sChabahil%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1624369200000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Kyushu Educational Consultancy Location"
                ></iframe>
              </div>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Visit or Contact Us</h2>
              <p>
                Whether you’re local or planning a visit, we’re here to assist. Reach out to schedule an appointment
                or learn more about our services.
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
              <h3>Kyushu Educational Consultancy Pvt. Ltd.</h3>
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
                <p>📧 info@kyushuedu.com</p>
                <p>📞 +123-456-7890</p>
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
            <p>© 2025 Kyushu Educational Consultancy Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Location;