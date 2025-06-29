import React from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="homepage">
      {/* Privacy Policy Header */}
      <section className="hero" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Privacy Policy
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '2rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>1. Introduction</h2>
              <p>
                Kyushu Educational Consultancy Pvt. Ltd. ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website or services.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="100">
              <h2>2. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, phone number, and educational details when you register, contact us, or apply for visa assistance. We also collect non-personal data like IP addresses and browsing activity for analytics.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>3. How We Use Your Information</h2>
              <p>
                Your information is used to provide our services, process visa applications, communicate with you, and improve our offerings. We may also use it for marketing with your consent.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="300">
              <h2>4. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your data from unauthorized access, but no online transmission is fully secure. We encourage you to contact us at info@kyushuedu.com if you suspect a breach.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data. To exercise these rights, please email us at info@kyushuedu.com. We will respond within 30 days.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="500">
              <h2>6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. The latest version will be posted here with an updated date. Your continued use of our services constitutes acceptance of the changes.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="600">
              <p>
                For further inquiries, contact us at <Link to="/contact">Contact Us</Link> or email info@kyushuedu.com.
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

export default PrivacyPolicy;