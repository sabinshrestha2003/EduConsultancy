import React from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="homepage">
      {/* Terms and Conditions Header */}
      <section className="hero" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Terms and Conditions
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Please review the terms governing your use of our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '2rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services of Kyushu Educational Consultancy Pvt. Ltd. ("we," "us," or "our"), you agree to be bound by these Terms and Conditions.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="100">
              <h2>2. Services Provided</h2>
              <p>
                We offer visa assistance, educational counseling, and related services. All services are subject to availability and our discretion.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>3. User Responsibilities</h2>
              <p>
                You are responsible for providing accurate information and complying with all applicable laws, including immigration regulations.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="300">
              <h2>4. Payment and Fees</h2>
              <p>
                Fees for our services will be communicated prior to engagement. Payments are non-refundable unless otherwise stated in writing.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>5. Limitation of Liability</h2>
              <p>
                We are not liable for visa rejections or delays caused by factors beyond our control, such as government policies or incomplete documentation.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="500">
              <h2>6. Termination</h2>
              <p>
                We reserve the right to terminate or suspend services if you breach these terms. Contact us at info@kyushuedu.com for disputes.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="600">
              <h2>7. Changes to Terms</h2>
              <p>
                These Terms may be updated periodically. The latest version will be posted here with an updated date. Your continued use signifies acceptance.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="700">
              <p>
                For questions, contact us at <Link to="/contact">Contact Us</Link> or email info@kyushuedu.com.
              </p>
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
                  <span role="img" aria-label="Facebook">🌐</span>
                </a>
                <a href="mailto:info@kyushuedu.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span role="img" aria-label="Email">📧</span>
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span role="img" aria-label="Instagram">📸</span>
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
            <p>© 2025 Kyushu Educational Consultancy Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;