"use client"

import { useState, useEffect } from "react"
import "../styles/AboutUs.css"
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
  FaStar,
  FaHeart,
  FaLightbulb,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa"
import ManagingDirectorImage from "../assets/managing-director.jpg"

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0)
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.dataset.animate]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { number: "500+", label: "Students Helped", icon: FaUsers, delay: "0s" },
    { number: "95%", label: "Success Rate", icon: FaGraduationCap, delay: "0.2s" },
    { number: "7+", label: "Years Experience", icon: FaPassport, delay: "0.4s" },
    { number: "15+", label: "Awards Won", icon: FaAward, delay: "0.6s" },
  ]

  const values = [
    {
      icon: FaHandshake,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest, transparent communication and ethical practices.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaStar,
      title: "Excellence",
      description: "Delivering exceptional service and results that consistently exceed expectations.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Continuously improving our methods and embracing new technologies to serve you better.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaGlobe,
      title: "Cultural Bridge",
      description: "Connecting Nepal and Japan through education, understanding, and meaningful relationships.",
      color: "from-green-500 to-green-600",
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge" data-animate="hero-badge">
            <span>🏢 About Kyushu Edu</span>
          </div>
          <h1 className="hero-title" data-animate="hero-title">
            Discover Our
            <br />
            <span className="accent-text">Story</span>
          </h1>
          <p className="hero-description" data-animate="hero-desc">
            Empowering dreams and connecting futures with Japan through expert guidance, personalized support, and
            unwavering commitment to your success.
          </p>
          <div className="hero-buttons" data-animate="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started
              <FaArrowRight />
            </Link>
            <Link to="#story" className="btn btn-glass">
              Our Story
              <FaHeart />
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`stat-card ${visibleElements.has(`achievement-${index}`) ? "animate" : ""}`}
                data-animate={`achievement-${index}`}
                style={{ animationDelay: achievement.delay }}
              >
                <div className="card-glow"></div>
                <div className="stat-icon">
                  <achievement.icon />
                </div>
                <div className="stat-number">{achievement.number}</div>
                <div className="stat-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="pathways-section" id="story">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="story-badge">
              Our Foundation
            </span>
            <h2 className="section-title" data-animate="story-title">
              Built on Excellence
            </h2>
            <p className="section-subtitle" data-animate="story-subtitle">
              Discover what drives us and how we've become Nepal's trusted partner for Japan education
            </p>
          </div>
          <div className="pathways-grid">
            <div
              className={`pathway-card ${visibleElements.has("mission") ? "animate" : ""}`}
              data-animate="mission"
            >
              <div className="card-glow"></div>
              <div className="pathway-icon">
                <div className="card-icon">🎯</div>
              </div>
              <h3>Our Mission</h3>
              <p>
                Kyushu Edu Consultancy is dedicated to helping individuals explore opportunities in Japan through
                exceptional educational and immigration support. Our services include language training, visa
                processing, and cultural integration programs, fostering a supportive environment for all.
              </p>
            </div>
            <div
              className={`pathway-card ${visibleElements.has("vision") ? "animate" : ""}`}
              data-animate="vision"
            >
              <div className="card-glow"></div>
              <div className="pathway-icon">
                <div className="card-icon">🌟</div>
              </div>
              <h3>Our Vision</h3>
              <p>
                We aim to empower 10,000 individuals to relocate and thrive in Japan by 2030. Through top-tier
                educational resources, streamlined visa assistance, and personalized career guidance, we make dreams of
                living in Japan a reality.
              </p>
            </div>
            <div
              className={`pathway-card ${visibleElements.has("journey") ? "animate" : ""}`}
              data-animate="journey"
            >
              <div className="card-glow"></div>
              <div className="pathway-icon">
                <div className="card-icon">🚀</div>
              </div>
              <h3>Our Journey</h3>
              <p>
                Since our founding in 2018, Kyushu Edu Consultancy has grown from a small startup to a trusted name in
                educational consultancy. Over the past 7 years, we've helped hundreds achieve their goals with passion
                and dedication.
              </p>
            </div>
            <div
              className={`pathway-card ${visibleElements.has("choose") ? "animate" : ""}`}
              data-animate="choose"
            >
              <div className="card-glow"></div>
              <div className="pathway-icon">
                <div className="card-icon">⭐</div>
              </div>
              <h3>Why Choose Us?</h3>
              <p>
                With unmatched expertise and a commitment to excellence, we provide tailored solutions for a seamless
                journey to Japan. Our team's personalized support and proven success make us the ideal partner for your
                aspirations.
              </p>
              <Link to="/contact" className="pathway-arrow">
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="timeline-badge">
              Our Journey
            </span>
            <h2 className="section-title" data-animate="timeline-title">
              Milestones & Achievements
            </h2>
            <p className="section-subtitle" data-animate="timeline-subtitle">
              Key moments that shaped our path to becoming Nepal's leading Japan education consultancy
            </p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-item ${visibleElements.has(`milestone-${index}`) ? "animate" : ""}`}
                data-animate={`milestone-${index}`}
              >
                <div className="card-glow"></div>
                <div className="timeline-number">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="director-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="director-badge">
              Leadership
            </span>
            <h2 className="section-title" data-animate="director-title">
              Meet Our Managing Director
            </h2>
            <p className="section-subtitle" data-animate="director-subtitle">
              Visionary leadership driving excellence in education consultancy
            </p>
          </div>
          <div className="director-content">
            <div
              className={`director-image ${visibleElements.has("director-img") ? "animate" : ""}`}
              data-animate="director-img"
            >
              <div className="image-wrapper">
                <img
                  src={ManagingDirectorImage || "/placeholder.svg?height=400&width=400"}
                  alt="Managing Director Dr. John Doe"
                />
                <div className="image-overlay">
                  <div className="image-badge">Managing Director</div>
                </div>
                <div className="image-glow"></div>
              </div>
            </div>
            <div
              className={`director-info ${visibleElements.has("director-info") ? "animate" : ""}`}
              data-animate="director-info"
            >
              <div className="quote-container">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <blockquote className="director-quote">
                  At Kyushu Edu Consultancy, our vision is to bridge dreams with reality by empowering individuals to
                  embrace opportunities in Japan. With dedication, expertise, and a passion for cultural exchange, we
                  are committed to guiding you every step of the way. Your journey to Japan is our mission, and
                  together, we can make it extraordinary.
                </blockquote>
                <div className="quote-author">
                  <div className="author-name">Dr. John Doe</div>
                  <div className="author-title">Managing Director & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="values-badge">
              Our Values
            </span>
            <h2 className="section-title" data-animate="values-title">
              What We Stand For
            </h2>
            <p className="section-subtitle" data-animate="values-subtitle">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>
          <div className="pathways-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className={`pathway-card ${visibleElements.has(`value-${index}`) ? "animate" : ""}`}
                data-animate={`value-${index}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-glow"></div>
                <div className={`pathway-icon bg-gradient-to-br ${value.color}`}>
                  <value.icon />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="pathway-arrow">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Your trusted partner for Japan education and visa services in Nepal.</p>
              <div className="social-links">
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
            <div className="footer-contact">
              <h4>Contact Info</h4>
              <div className="contact-item">
                <span>📧</span>
                <span>kyushuedu@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <span>+977-14581248</span>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <span>Chabahil, Kathmandu</span>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <Link to="/classes">Japanese Classes</Link>
              <Link to="/visa">Visa Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs