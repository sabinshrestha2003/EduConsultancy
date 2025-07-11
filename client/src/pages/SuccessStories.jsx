import React from 'react';
import '../styles/SuccessStories.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import Student1 from '../assets/student1.jpg';
import Student2 from '../assets/student2.jpg';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Anita Sharma',
      role: 'Software Engineer in Tokyo',
      photo: Student1,
      comment: 'Kyushu Edu helped me master N3 and secure my working visa in just 6 months!',
      quote: 'The instructors were amazing, and the visa support was seamless. Highly recommend visiting their Chabahil office!',
    },
    {
      name: 'Ramesh Thapa',
      role: 'Student at Kyoto University',
      photo: Student2,
      comment: 'From N5 to N2, their classes prepared me for university life in Japan.',
      quote: 'The personalized guidance made all the difference. Drop by their office for a consultation!',
    },
  ];

  return (
    <div className="suc-page">
      {/* Success Stories Header */}
      <section className="suc-hero">
        <div className="suc-container suc-hero-content">
          <div className="suc-hero-badge">
            <span>🌟 Success Stories</span>
          </div>
          <h1 className="suc-hero-title">
            Success <span className="suc-accent-text">Stories</span>
          </h1>
          <p className="suc-hero-description">
            Hear from our students and professionals who achieved their dreams in Japan. Visit us in Chabahil to start yours!
          </p>
        </div>
      </section>

      {/* Success Stories Content */}
      <section className="suc-content">
        <div className="suc-container">
          <div className="suc-content-sections">
            <div className="suc-section">
              <h2>Real Stories, Real Success</h2>
              <p>
                Our students and clients have transformed their lives with our support. Read their journeys and get inspired to visit our office!
              </p>
            </div>
            <div className="suc-stories-grid">
              {stories.map((story, index) => (
                <div key={index} className="suc-story-card">
                  <img src={story.photo} alt={`${story.name}'s photo`} className="suc-story-image" />
                  <h3 className="suc-story-name">{story.name}</h3>
                  <p className="suc-story-role">{story.role}</p>
                  <p className="suc-story-comment">{story.comment}</p>
                  <blockquote className="suc-story-quote">
                    "{story.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
            <div className="suc-section">
              <h2>Start Your Success Story</h2>
              <p>Ready to achieve your goals in Japan? Contact us or visit our Chabahil office for expert guidance.</p>
              <div className="suc-buttons">
                <Link to="/contact" className="suc-btn suc-btn-primary">
                  Contact Us
                </Link>
                <Link to="/location" className="suc-btn suc-btn-secondary">
                  Find Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="suc-footer">
        <div className="suc-container">
          <div className="suc-footer-content">
            <div className="suc-footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="suc-social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="suc-social-link">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyushuedu@gmail.com" target="_blank" rel="noopener noreferrer" className="suc-social-link">
                  <FaGoogle />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="suc-social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="suc-footer-section">
              <h3>Contact Us</h3>
              <div className="suc-contact-info">
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="suc-footer-section">
              <h3>Quick Links</h3>
              <div className="suc-footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="suc-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SuccessStories;