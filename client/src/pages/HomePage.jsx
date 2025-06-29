import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Facebook icon
import { FaGoogle } from 'react-icons/fa';   // Google icon
import { FaInstagram } from 'react-icons/fa'; // Instagram icon
import CityImage from '../assets/city.jpg';
import KyotoImage from '../assets/kyoto.jpg';
import OsakaImage from '../assets/osaka.jpg';
import TokyoImage from '../assets/tokyo.jpg';

const HomePage = () => {
  const images = [CityImage, KyotoImage, OsakaImage, TokyoImage]; // Array of image imports
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="homepage">
      {/* Hero Section with Slideshow */}
      <section className="hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 1s ease-in-out',
          }}
        ></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Your Path to</span>
              <span className="title-highlight">Japan</span>
            </h1>
            <p className="hero-description">
              Master Japanese, streamline your documentation, and secure your working visa with our expert guidance.
            </p>
            <div className="hero-buttons">
              <Link to="/classes" className="btn btn-primary">
                <span>Explore Classes</span>
                <div className="btn-shine"></div>
              </Link>
              <Link to="/signup" className="btn btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Everything you need for your journey to Japan</p>
          </div>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon">🎌</div>
              <h3>Japanese Language Classes</h3>
              <p>Learn Japanese from N5 to N1 with expert instructors and flexible schedules.</p>
              <Link to="/classes" className="service-link">
                View Classes <span className="arrow">→</span>
              </Link>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon">📋</div>
              <h3>Documentation Services</h3>
              <p>Simplify applications with support for certificates, forms, and legal paperwork.</p>
              <Link to="/documentation" className="service-link">
                Learn More <span className="arrow">→</span>
              </Link>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon">✈️</div>
              <h3>Working Visa Assistance</h3>
              <p>Expert guidance for visa applications and a smooth transition to Japan.</p>
              <Link to="/visa" className="service-link">
                Get Started <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <h2>Why Choose Us?</h2>
              <p>
                We empower students and professionals with top-tier educational and visa services. Our expert team
                ensures success with personalized Japanese training and comprehensive documentation support.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Students Helped</div>
                </div>
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline">
                About Us
              </Link>
            </div>
            <div className="about-visual" data-aos="fade-left">
              <img src={CityImage} alt="City view, Japan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

export default HomePage;