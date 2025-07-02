import React from 'react';
import '../styles/AboutUs.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import ManagingDirectorImage from '../assets/managing-director.jpg';

const AboutUs = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" style={{ 
        minHeight: '60vh', 
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, rgba(30, 58, 138, 0.8) 100%)',
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
              Discover Our Story
            </h1>
            <p className="hero-description typewriter" style={{ 
              color: 'var(--white)', 
              maxWidth: '700px', 
              margin: '1rem auto', 
              fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
              fontWeight: 300 
            }}>
              Empowering dreams and connecting futures with Japan.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }} data-aos="zoom-in" data-aos-delay="200">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="about" style={{ padding: '5rem 0', backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="about-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="about-card" data-aos="fade-up" data-aos-duration="800">
              <h2 className="about-heading">Our Mission</h2>
              <p className="about-paragraph">
                Kyushu Edu Consultancy is dedicated to helping individuals explore opportunities in Japan through exceptional
                educational and immigration support. Our services include language training, visa processing, and cultural
                integration programs, fostering a supportive environment for all.
              </p>
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <h2 className="about-heading">Our Vision</h2>
              <p className="about-paragraph">
                We aim to empower 10,000 individuals to relocate and thrive in Japan by 2030. Through top-tier educational
                resources, streamlined visa assistance, and personalized career guidance, we make dreams of living in Japan a reality.
              </p>
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <h2 className="about-heading">Our Journey</h2>
              <p className="about-paragraph">
                Since our founding in 2018, Kyushu Edu Consultancy has grown from a small startup to a trusted name in
                educational consultancy. Over the past 7 years, we’ve helped hundreds achieve their goals with passion and dedication.
              </p>
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
              <h2 className="about-heading">Why Choose Us?</h2>
              <p className="about-paragraph">
                With unmatched expertise and a commitment to excellence, we provide tailored solutions for a seamless journey to Japan.
                Our team’s personalized support and proven success make us the ideal partner for your aspirations.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'block', textAlign: 'center' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section className="managing-director" style={{ padding: '5rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="director-content" style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '3rem', 
            alignItems: 'center', 
            justifyContent: 'center', 
            maxWidth: '1000px', 
            margin: '0 auto' 
          }}>
            <div className="director-image" data-aos="zoom-in" data-aos-duration="1000">
              <img 
                src={ManagingDirectorImage} 
                alt="Managing Director Dr. John Doe" 
                style={{ 
                  width: '250px', 
                  height: '250px', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  border: '4px solid var(--primary-blue)', 
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' 
                }} 
              />
            </div>
            <div className="director-text" data-aos="fade-left" data-aos-duration="1000" style={{ maxWidth: '600px' }}>
              <div className="quote-box" style={{
                backgroundColor: 'var(--light-gray)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}>
                <span className="quote-icon" style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '20px',
                  fontSize: '2rem',
                  color: 'var(--primary-blue)'
                }}>“</span>
                <p className="about-paragraph" style={{ 
                  fontStyle: 'italic', 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8' 
                }}>
                  At Kyushu Edu Consultancy, our vision is to bridge dreams with reality by empowering individuals to embrace
                  opportunities in Japan. With dedication, expertise, and a passion for cultural exchange, we are committed to
                  guiding you every step of the way. Your journey to Japan is our mission, and together, we can make it extraordinary.
                </p>
                <p className="director-name" style={{ 
                  fontWeight: '600', 
                  marginTop: '1.5rem', 
                  color: 'var(--primary-blue)', 
                  textAlign: 'right' 
                }}>
                  — Dr. John Doe, Managing Director
                </p>
              </div>
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
              <p>Empowering your journey to Japan with expert solutions.</p>
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

export default AboutUs;