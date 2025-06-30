import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import Student1 from '../assets/student1.jpg'; // Placeholder for student photo
import Student2 from '../assets/student2.jpg'; // Placeholder for student photo

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
    <div className="homepage">
      {/* Success Stories Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Success Stories
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Hear from our students and professionals who achieved their dreams in Japan. Visit us in Chabahil to start yours!
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Content */}
      <section className="about">
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Real Stories, Real Success</h2>
              <p>
                Our students and clients have transformed their lives with our support. Read their journeys and get inspired to visit our office!
              </p>
            </div>
            <div className="services-grid">
              {stories.map((story, index) => (
                <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 200}>
                  <img src={story.photo} alt={`${story.name}'s photo`} className="team-image" />
                  <h3>{story.name}</h3>
                  <p className="team-role">{story.role}</p>
                  <p className="team-bio">{story.comment}</p>
                  <blockquote style={{ fontStyle: 'italic', color: 'var(--dark-gray)', opacity: 0.9, marginTop: '1rem' }}>
                    "{story.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Start Your Success Story</h2>
              <p>Ready to achieve your goals in Japan? Contact us or visit our Chabahil office for expert guidance.</p>
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

export default SuccessStories;