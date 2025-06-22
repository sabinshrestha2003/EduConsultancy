import React from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Import Facebook icon
import { FaGoogle } from 'react-icons/fa';   // Import Google icon
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

const Contact = () => {
  return (
    <div className="homepage">
      {/* Contact Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Contact Us
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Get in touch with us for support and inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Contact Form</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
                <input type="text" placeholder="Your Name" style={{ padding: '0.5rem', border: '1px solid var(--light-gray)', borderRadius: '5px' }} />
                <input type="email" placeholder="Your Email" style={{ padding: '0.5rem', border: '1px solid var(--light-gray)', borderRadius: '5px' }} />
                <textarea placeholder="Your Message" rows="5" style={{ padding: '0.5rem', border: '1px solid var(--light-gray)', borderRadius: '5px' }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ width: 'fit-content', alignSelf: 'flex-start' }}>
                  Send Message
                </button>
              </form>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>Contact Information</h2>
              <p>
                Reach out to us anytime with the details below:
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>📧 Email: info@kyushuedu.com</li>
                <li>📞 Phone: +123-456-7890</li>
                <li>📍 Address: 123 Education Street, Tokyo, Japan</li>
              </ul>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Let’s Connect</h2>
              <p>
                We’re here to assist you on your journey to Japan. Feel free to reach out or follow us on social media
                for updates and support.
              </p>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Learn More About Us
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
                <p>📧 info@kyushuedu.com</p>
                <p>📞 +123-456-7890</p>
                <p>📍 123 Education Street, Tokyo, Japan</p>
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

export default Contact;