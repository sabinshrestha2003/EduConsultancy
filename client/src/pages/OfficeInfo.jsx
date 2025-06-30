import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const OfficeInfo = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('http://localhost:5000/api/admin/track-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('Visit tracking failed:', error);
      }
    };
    trackVisit();
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="homepage">
      {/* Office Info Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Office Information
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Learn about our Chabahil office and why visiting is the best way to start your journey to Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Office Info Content */}
      <section className="about">
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Office Location</h2>
              <p>Our office is conveniently located to serve you better. We encourage all students to visit for personalized consultations.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>📍 <strong>Address:</strong> Chabahil, Kathmandu, Nepal (5 minutes from Chabahil Chowk)</li>
                <li>🚶‍♂️ <strong>Accessibility:</strong> Easily accessible by public transport; parking available nearby</li>
              </ul>
              <Link to="/location" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Get Directions
              </Link>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>Office Hours</h2>
              <p>Plan your visit during our regular hours to meet with our team.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>⏰ <strong>Monday–Friday:</strong> 9:00 AM – 6:00 PM</li>
                <li>⏰ <strong>Saturday:</strong> 10:00 AM – 2:00 PM</li>
                <li>⏰ <strong>Sunday:</strong> Closed</li>
              </ul>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Services Offered</h2>
              <p>Visit us to take advantage of our expert services:</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>🎓 <strong>Japanese Language Consultations:</strong> From N5 to advanced levels</li>
                <li>📑 <strong>Document Review:</strong> Assistance with visas and applications</li>
                <li>🤝 <strong>Personalized Guidance:</strong> Tailored advice for your journey to Japan</li>
              </ul>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="600">
              <h2>What to Expect</h2>
              <p>When you visit our Chabahil office, you can look forward to:</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>👥 <strong>Meet Our Team:</strong> Speak with experienced instructors and consultants</li>
                <li>🏢 <strong>Explore Facilities:</strong> See our classrooms and resources</li>
                <li>💡 <strong>Get Answers:</strong> Resolve all your inquiries in person</li>
              </ul>
              <p>We highly recommend scheduling a visit to get the most out of our services. Drop by today!</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Schedule a Visit
              </Link>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="800">
              <h2>Frequently Asked Questions</h2>
              <p>Find quick answers below, but visit our office for detailed assistance.</p>
              <div className="faq-content">
                {[
                  { question: "What should I bring to a consultation?", answer: "Bring your passport, educational certificates, and any visa-related documents. Our team will guide you further during your visit!" },
                  { question: "Can I get visa help on my first visit?", answer: "Yes, we offer initial visa guidance. Visit us to start the process and get personalized support." },
                  { question: "Do I need an appointment?", answer: "While walk-ins are welcome, booking an appointment via our contact page ensures priority service." },
                ].map((item, index) => (
                  <div key={index} className="faq-item" data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                      {item.question} <span className={`faq-toggle ${activeFAQ === index ? 'open' : ''}`}>▼</span>
                    </div>
                    <div className={`faq-answer ${activeFAQ === index ? 'open' : ''}`}>
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
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

export default OfficeInfo;