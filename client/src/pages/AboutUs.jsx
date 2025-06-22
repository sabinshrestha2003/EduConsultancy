import React from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Import Facebook icon
import { FaGoogle } from 'react-icons/fa';   // Import Google icon
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

const AboutUs = () => {
  return (
    <div className="homepage">
      {/* About Us Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              About Us
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Learn more about our mission and journey.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>What is the Company About?</h2>
              <p>
                Kyushu Edu Consultancy is a leading educational and immigration support provider dedicated to helping
                individuals explore opportunities in Japan. We specialize in offering a wide range of services including
                language training, visa processing, and cultural integration programs. Our team is passionate about
                creating a supportive environment for learners and professionals alike.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>What is Its Goal?</h2>
              <p>
                Our goal is to empower 10,000 individuals to successfully relocate and thrive in Japan by 2030. We aim
                to achieve this by providing top-notch educational resources, streamlined visa assistance, and
                personalized career guidance, ensuring every client achieves their dream of living in Japan.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Till How Much Time It Has Been Working?</h2>
              <p>
                Kyushu Edu Consultancy has been proudly serving clients for the past 7 years, since our establishment in
                2018. Over this period, we have grown from a small startup to a trusted name in educational consultancy,
                helping hundreds of individuals achieve their goals.
              </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="600">
              <h2>Why Choose Us?</h2>
              <p>
                Choose Kyushu Edu Consultancy for our unmatched expertise, personalized support, and a proven track
                record of success. With a team of dedicated professionals and a commitment to excellence, we offer
                tailored solutions that make your journey to Japan seamless and rewarding.
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

export default AboutUs;