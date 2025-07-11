"use client"

import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaQuoteLeft,
  FaArrowRight,
  FaUsers,
  FaGraduationCap,
  FaPassport,
  FaAward,
  FaHandshake,
  FaStar,
  FaLightbulb,
  FaGlobe,
} from "react-icons/fa"
import ManagingDirectorImage from "../assets/managing-director.jpg"
import "../styles/AboutUs.css"

const AboutUs = () => {
  const achievements = [
    { number: "500+", label: "Students Helped", icon: FaUsers },
    { number: "95%", label: "Success Rate", icon: FaGraduationCap },
    { number: "7+", label: "Years Experience", icon: FaPassport },
    { number: "15+", label: "Awards Won", icon: FaAward },
  ]

  const values = [
    {
      icon: FaHandshake,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest, transparent communication and ethical practices.",
    },
    {
      icon: FaStar,
      title: "Excellence",
      description: "Delivering exceptional service and results that consistently exceed expectations.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Continuously improving our methods and embracing new technologies to serve you better.",
    },
    {
      icon: FaGlobe,
      title: "Cultural Bridge",
      description: "Connecting Nepal and Japan through education, understanding, and meaningful relationships.",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Kyushu Edu Consultancy was established with a vision to connect Nepal and Japan",
    },
    {
      year: "2020",
      title: "First 100 Students",
      description: "Successfully helped our first 100 students achieve their Japan dreams",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded our services to include comprehensive visa and cultural programs",
    },
    {
      year: "2024",
      title: "500+ Success Stories",
      description: "Reached the milestone of helping over 500 students successfully",
    },
  ]

  return (
    <div className="abt-page">
      {/* Hero Section */}
      <section className="abt-hero">
        <div className="abt-container abt-hero-content">
          <div className="abt-hero-badge">
            <span>🏢 About Kyushu Edu</span>
          </div>
          <h1 className="abt-hero-title">
            About Us
            <br />
            <span className="abt-accent-text">Our Story</span>
          </h1>
          <p className="abt-hero-description">
            Empowering dreams and connecting futures with Japan through expert guidance, personalized support, and
            unwavering commitment to your success.
          </p>
          <div className="abt-hero-buttons">
            <Link to="/contact" className="abt-btn abt-btn-primary">
              Get Started
              <FaArrowRight />
            </Link>
            <Link to="#story" className="abt-btn abt-btn-secondary">
              Our Story
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="abt-stats-section">
        <div className="abt-container">
          <div className="abt-stats-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="abt-stat-card">
                <div className="abt-stat-icon">
                  <achievement.icon />
                </div>
                <div className="abt-stat-number">{achievement.number}</div>
                <div className="abt-stat-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="abt-story-section" id="story">
        <div className="abt-container">
          <div className="abt-section-header">
            <span className="abt-section-badge">Our Foundation</span>
            <h2 className="abt-section-title">Built on Excellence</h2>
            <p className="abt-section-subtitle">
              Discover what drives us and how we've become Nepal's trusted partner for Japan education
            </p>
          </div>
          <div className="abt-story-grid">
            <div className="abt-story-card">
              <div className="abt-story-icon">
                <div className="abt-card-icon">🎯</div>
              </div>
              <h3>Our Mission</h3>
              <p>
                Kyushu Edu Consultancy is dedicated to helping individuals explore opportunities in Japan through
                exceptional educational and immigration support. Our services include language training, visa
                processing, and cultural integration programs, fostering a supportive environment for all.
              </p>
            </div>
            <div className="abt-story-card">
              <div className="abt-story-icon">
                <div className="abt-card-icon">🌟</div>
              </div>
              <h3>Our Vision</h3>
              <p>
                We aim to empower 10,000 individuals to relocate and thrive in Japan by 2030. Through top-tier
                educational resources, streamlined visa assistance, and personalized career guidance, we make dreams of
                living in Japan a reality.
              </p>
            </div>
            <div className="abt-story-card">
              <div className="abt-story-icon">
                <div className="abt-card-icon">🚀</div>
              </div>
              <h3>Our Journey</h3>
              <p>
                Since our founding in 2018, Kyushu Edu Consultancy has grown from a small startup to a trusted name in
                educational consultancy. Over the past 7 years, we've helped hundreds achieve their goals with passion
                and dedication.
              </p>
            </div>
            <div className="abt-story-card">
              <div className="abt-story-icon">
                <div className="abt-card-icon">⭐</div>
              </div>
              <h3>Why Choose Us?</h3>
              <p>
                With unmatched expertise and a commitment to excellence, we provide tailored solutions for a seamless
                journey to Japan. Our team's personalized support and proven success make us the ideal partner for your
                aspirations.
              </p>
              <Link to="/contact" className="abt-story-arrow">
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="abt-timeline-section">
        <div className="abt-container">
          <div className="abt-section-header">
            <span className="abt-section-badge">Our Journey</span>
            <h2 className="abt-section-title">Milestones & Achievements</h2>
            <p className="abt-section-subtitle">
              Key moments that shaped our path to becoming Nepal's leading Japan education consultancy
            </p>
          </div>
          <div className="abt-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="abt-timeline-item">
                <div className="abt-timeline-year">{milestone.year}</div>
                <div className="abt-timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="abt-director-section">
        <div className="abt-container">
          <div className="abt-section-header">
            <span className="abt-section-badge">Leadership</span>
            <h2 className="abt-section-title">Meet Our Managing Director</h2>
            <p className="abt-section-subtitle">
              Visionary leadership driving excellence in education consultancy
            </p>
          </div>
          <div className="abt-director-content">
            <div className="abt-director-image">
              <div className="abt-image-wrapper">
                <img
                  src={ManagingDirectorImage || "/placeholder.svg?height=400&width=400"}
                  alt="Managing Director Dr. John Doe"
                />
                <div className="abt-image-badge">Managing Director</div>
              </div>
            </div>
            <div className="abt-director-info">
              <div className="abt-quote-container">
                <div className="abt-quote-icon">
                  <FaQuoteLeft />
                </div>
                <blockquote className="abt-director-quote">
                  At Kyushu Edu Consultancy, our vision is to bridge dreams with reality by empowering individuals to
                  embrace opportunities in Japan. With dedication, expertise, and a passion for cultural exchange, we
                  are committed to guiding you every step of the way. Your journey to Japan is our mission, and
                  together, we can make it extraordinary.
                </blockquote>
                <div className="abt-quote-author">
                  <div className="abt-author-name">Dr. John Doe</div>
                  <div className="abt-author-title">Managing Director & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="abt-values-section">
        <div className="abt-container">
          <div className="abt-section-header">
            <span className="abt-section-badge">Our Values</span>
            <h2 className="abt-section-title">What We Stand For</h2>
            <p className="abt-section-subtitle">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>
          <div className="abt-values-grid">
            {values.map((value, index) => (
              <div key={index} className="abt-value-card">
                <div className="abt-value-icon">
                  <value.icon />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="abt-footer">
        <div className="abt-container">
          <div className="abt-footer-content">
            <div className="abt-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Your trusted partner for Japan education and visa services in Nepal.</p>
              <div className="abt-social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyushuedu@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaGoogle />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="abt-footer-contact">
              <h4>Contact Info</h4>
              <div className="abt-contact-item">
                <span>📧</span>
                <span>kyushuedu@gmail.com</span>
              </div>
              <div className="abt-contact-item">
                <span>📞</span>
                <span>+977-14581248</span>
              </div>
              <div className="abt-contact-item">
                <span>📍</span>
                <span>Chabahil, Kathmandu</span>
              </div>
            </div>
            <div className="abt-footer-links">
              <h4>Quick Links</h4>
              <Link to="/classes">Japanese Classes</Link>
              <Link to="/visa">Visa Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="abt-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs