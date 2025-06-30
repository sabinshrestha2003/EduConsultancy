import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import CityImage from '../assets/city.jpg';
import KyotoImage from '../assets/kyoto.jpg';
import OsakaImage from '../assets/osaka.jpg';
import TokyoImage from '../assets/tokyo.jpg';
import Instructor1 from '../assets/instructor1.jpg'; // Placeholder for instructor images
import Instructor2 from '../assets/instructor2.jpg'; // Placeholder for instructor images

const HomePage = () => {
  const images = [CityImage, KyotoImage, OsakaImage, TokyoImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const instructors = [
    { name: "Hiroshi Tanaka", role: "Japanese Instructor", bio: "Specializes in N5-N2 with 8 years of experience.", image: Instructor1 },
    { name: "Aiko Sato", role: "Visa Consultant", bio: "Expert in visa processes with 5 years of guidance.", image: Instructor2 },
  ];

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
              Master Japanese, streamline your documentation, and secure your visa with our expert guidance. Visit us in Chabahil!
            </p>
            <div className="hero-buttons">
              <Link to="/classes" className="btn btn-primary">
                <span>Explore Classes</span>
                <div className="btn-shine"></div>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Visit Us
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Your Journey to Japan Timeline */}
      <section className="timeline">
        <div className="container">
          <h2 className="section-title">Your Journey to Japan</h2>
          <div className="timeline-content">
            <div className="timeline-step" data-aos="fade-right">
              <div className="timeline-circle"></div>
              <h3>Visit Our Office</h3>
              <p>Start with a consultation at Chabahil, Kathmandu.</p>
            </div>
            <div className="timeline-step" data-aos="fade-right" data-aos-delay="200">
              <div className="timeline-circle"></div>
              <h3>Enroll in Classes</h3>
              <p>Join our tailored Japanese language courses.</p>
            </div>
            <div className="timeline-step" data-aos="fade-right" data-aos-delay="400">
              <div className="timeline-circle"></div>
              <h3>Complete Documentation</h3>
              <p>Get support for certificates and forms.</p>
            </div>
            <div className="timeline-step" data-aos="fade-right" data-aos-delay="600">
              <div className="timeline-circle"></div>
              <h3>Visa Approval</h3>
              <p>Secure your visa with our expert assistance.</p>
            </div>
            <div className="timeline-step" data-aos="fade-right" data-aos-delay="800">
              <div className="timeline-circle"></div>
              <h3>Arrive in Japan</h3>
              <p>Begin your new journey with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-content">
            {[
              { question: "What documents are needed?", answer: "Passport, application forms, and proof of funds. Visit us for details!" },
              { question: "How long does it take to get a visa?", answer: "Typically 2-4 weeks. Let us guide you through it." },
              { question: "Do I need prior Japanese knowledge?", answer: "No, we start from N5. Stop by to learn more!" },
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
      </section>

      {/* Success Pathways Cards */}
      <section className="pathways">
        <div className="container">
          <h2 className="section-title">Choose Your Route</h2>
          <div className="pathways-grid">
            <Link to="/classes" className="pathway-card" data-aos="fade-up" data-aos-delay="100">
              <h3>I want to study in Japan</h3>
              <p>Explore our language and academic programs.</p>
            </Link>
            <Link to="/visa" className="pathway-card" data-aos="fade-up" data-aos-delay="200">
              <h3>I want to work in Japan</h3>
              <p>Get expert visa and career support.</p>
            </Link>
            <Link to="/classes" className="pathway-card" data-aos="fade-up" data-aos-delay="300">
              <h3>I want to learn Japanese</h3>
              <p>Start with our beginner-friendly courses.</p>
            </Link>
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
              <Link to="/success-stories" className="btn btn-outline">
                See Success Stories
              </Link>
            </div>
            <div className="about-visual" data-aos="fade-left">
              <img src={CityImage} alt="City view, Japan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Spotlight */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {instructors.map((instructor, index) => (
              <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 200}>
                <img src={instructor.image} alt={instructor.name} className="team-image" />
                <h3>{instructor.name}</h3>
                <p className="team-role">{instructor.role}</p>
                <p className="team-bio">{instructor.bio} Visit us to meet the team!</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study in Japan Info Hub */}
      <section className="info-hub">
        <div className="container">
          <h2 className="section-title">Study in Japan Info Hub</h2>
          <div className="info-grid">
            <Link to="/blog/top-cities" className="info-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Top Cities for Students</h3>
              <p>Discover the best study destinations.</p>
            </Link>
            <Link to="/blog/jlpt-n5" className="info-card" data-aos="fade-up" data-aos-delay="200">
              <h3>What is JLPT N5?</h3>
              <p>Learn why it’s your first step to Japan.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map with Office Location */}
      <section className="map">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-content">
            <iframe
              title="Kyushu Edu Consultancy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456!2d85.323456!3d27.712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzQ0LjgiTiA4NcKwMTknMzAuMiJF!5e0!3m2!1sen!2snp!4v1623456789!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="map-directions">
              <p>5 mins from Chabahil Chowk</p>
              <p>Near XYZ Café – Visit today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Japan? Highlight Section */}
      <section className="why-japan">
        <div className="container">
          <h2 className="section-title">Why Japan?</h2>
          <div className="why-japan-grid">
            <div className="why-japan-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Top 3 Safest Countries</h3>
              <p>A secure place to study or work.</p>
            </div>
            <div className="why-japan-card" data-aos="fade-up" data-aos-delay="200">
              <h3>10+ Tuition-Free Universities</h3>
              <p>Affordable education awaits.</p>
            </div>
            <div className="why-japan-card" data-aos="fade-up" data-aos-delay="300">
              <h3>300,000+ Job Opportunities</h3>
              <p>Japan needs skilled workers like you!</p>
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

export default HomePage;