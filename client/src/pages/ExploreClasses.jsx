"use client"

import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaArrowRight,
  FaGraduationCap,
  FaBook,
  FaStar,
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa"
import "../styles/ExploreClasses.css"

const ExploreClasses = () => {
  const classLevels = [
    {
      icon: FaGraduationCap,
      title: "Beginner (N5-N4)",
      description:
        "Perfect for new learners, covering basics of Japanese language and culture with interactive lessons.",
      features: ["Basic Grammar", "Hiragana & Katakana", "Essential Vocabulary", "Cultural Introduction"],
      duration: "3-6 months",
      students: "150+",
    },
    {
      icon: FaBook,
      title: "Intermediate (N3-N2)",
      description: "Enhance your skills with advanced grammar, conversation practice, and reading comprehension.",
      features: ["Complex Grammar", "Kanji Mastery", "Conversation Skills", "Reading Practice"],
      duration: "6-9 months",
      students: "120+",
    },
    {
      icon: FaStar,
      title: "Advanced (N1)",
      description: "Master fluency with advanced topics, business Japanese, and comprehensive JLPT N1 preparation.",
      features: ["Business Japanese", "Advanced Kanji", "Native Fluency", "JLPT N1 Prep"],
      duration: "9-12 months",
      students: "80+",
    },
  ]

  const scheduleInfo = [
    {
      icon: FaClock,
      title: "Weekday Classes",
      time: "6:00 PM – 8:00 PM",
      description: "Perfect for working professionals and students",
    },
    {
      icon: FaCalendarAlt,
      title: "Weekend Classes",
      time: "10:00 AM – 1:00 PM",
      description: "Ideal for those with busy weekday schedules",
    },
  ]

  const features = [
    {
      icon: FaChalkboardTeacher,
      title: "Expert Instructors",
      description: "Learn from certified Japanese language teachers with years of experience",
    },
    {
      icon: FaUsers,
      title: "Small Class Size",
      description: "Maximum 12 students per class for personalized attention",
    },
    {
      icon: FaAward,
      title: "JLPT Preparation",
      description: "Comprehensive preparation for all JLPT levels with mock tests",
    },
  ]

  return (
    <div className="exp-page">
      {/* Hero Section */}
      <section className="exp-hero">
        <div className="exp-container exp-hero-content">
          <div className="exp-hero-badge">
            <span>🎌 Japanese Classes</span>
          </div>
          <h1 className="exp-hero-title">
            Explore Our
            <br />
            <span className="exp-accent-text">Classes</span>
          </h1>
          <p className="exp-hero-description">
            Discover our tailored Japanese language courses designed for all skill levels. From beginner to advanced,
            we'll guide you on your journey to fluency.
          </p>
          <div className="exp-hero-buttons">
            <Link to="/contact" className="exp-btn exp-btn-primary">
              Get Started
              <FaArrowRight />
            </Link>
            <Link to="#classes" className="exp-btn exp-btn-secondary">
              View Classes
              <FaBook />
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="exp-classes-section" id="classes">
        <div className="exp-container">
          <div className="exp-section-header">
            <span className="exp-section-badge">Our Programs</span>
            <h2 className="exp-section-title">Choose Your Learning Path</h2>
            <p className="exp-section-subtitle">
              From absolute beginner to advanced fluency, we have the perfect course for your Japanese learning journey
            </p>
          </div>
          <div className="exp-classes-grid">
            {classLevels.map((classLevel, index) => (
              <div key={index} className="exp-class-card">
                <div className="exp-class-header">
                  <div className="exp-class-icon">
                    <classLevel.icon />
                  </div>
                  <div className="exp-class-stats">
                    <div className="exp-stat">
                      <span className="exp-stat-number">{classLevel.students}</span>
                      <span className="exp-stat-label">Students</span>
                    </div>
                    <div className="exp-stat">
                      <span className="exp-stat-number">{classLevel.duration}</span>
                      <span className="exp-stat-label">Duration</span>
                    </div>
                  </div>
                </div>
                <h3 className="exp-class-title">{classLevel.title}</h3>
                <p className="exp-class-description">{classLevel.description}</p>
                <div className="exp-class-features">
                  {classLevel.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="exp-feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="exp-class-cta">
                  Enroll Now
                  <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="exp-features-section">
        <div className="exp-container">
          <div className="exp-section-header">
            <span className="exp-section-badge">Why Choose Us</span>
            <h2 className="exp-section-title">Excellence in Japanese Education</h2>
            <p className="exp-section-subtitle">
              Experience the difference with our proven teaching methods and dedicated support
            </p>
          </div>
          <div className="exp-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="exp-feature-card">
                <div className="exp-feature-icon">
                  <feature.icon />
                </div>
                <h4 className="exp-feature-title">{feature.title}</h4>
                <p className="exp-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="exp-schedule-section">
        <div className="exp-container">
          <div className="exp-section-header">
            <span className="exp-section-badge">Class Schedule</span>
            <h2 className="exp-section-title">Flexible Learning Times</h2>
            <p className="exp-section-subtitle">
              Choose the schedule that works best for your lifestyle and commitments
            </p>
          </div>
          <div className="exp-schedule-grid">
            {scheduleInfo.map((schedule, index) => (
              <div key={index} className="exp-schedule-card">
                <div className="exp-schedule-icon">
                  <schedule.icon />
                </div>
                <h4 className="exp-schedule-title">{schedule.title}</h4>
                <div className="exp-schedule-time">{schedule.time}</div>
                <p className="exp-schedule-description">{schedule.description}</p>
              </div>
            ))}
          </div>
          <div className="exp-schedule-cta">
            <div className="exp-cta-content">
              <h3>Ready to Start Learning?</h3>
              <p>Visit our Chabahil office to meet our instructors and find the perfect class schedule for you!</p>
              <div className="exp-cta-buttons">
                <Link to="/contact" className="exp-btn exp-btn-primary">
                  Visit Our Office
                  <FaArrowRight />
                </Link>
                <Link to="/team" className="exp-btn exp-btn-secondary">
                  Meet Instructors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="exp-footer">
        <div className="exp-container">
          <div className="exp-footer-content">
            <div className="exp-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert language education and comprehensive support.</p>
              <div className="exp-social-links">
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
            <div className="exp-footer-contact">
              <h4>Contact Info</h4>
              <div className="exp-contact-item">
                <span>📧</span>
                <span>kyushuedu@gmail.com</span>
              </div>
              <div className="exp-contact-item">
                <span>📞</span>
                <span>+977-14581248</span>
              </div>
              <div className="exp-contact-item">
                <span>📍</span>
                <span>Chabahil, Kathmandu</span>
              </div>
            </div>
            <div className="exp-footer-links">
              <h4>Quick Links</h4>
              <Link to="/classes">Japanese Classes</Link>
              <Link to="/visa">Visa Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="exp-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ExploreClasses