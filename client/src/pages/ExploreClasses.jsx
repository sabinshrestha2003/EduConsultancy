"use client"
import { useState, useEffect } from "react"
import "../styles/ExploreClasses.css"
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

const ExploreClasses = () => {
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
    <div className="explore-classes-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-badge" data-animate="hero-badge">
            <span>🎌 Japanese Classes</span>
          </div>
          <h1 className="hero-title" data-animate="hero-title">
            Explore Our
            <br />
            <span className="accent-text">Classes</span>
          </h1>
          <p className="hero-description" data-animate="hero-desc">
            Discover our tailored Japanese language courses designed for all skill levels. From beginner to advanced,
            we'll guide you on your journey to fluency.
          </p>
          <div className="hero-buttons" data-animate="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started
              <FaArrowRight />
            </Link>
            <Link to="#classes" className="btn btn-glass">
              View Classes
              <FaBook />
            </Link>
          </div>
        </div>
        <div className="floating-elements">
          <div className="floating-element element-1">🎌</div>
          <div className="floating-element element-2">📚</div>
          <div className="floating-element element-3">✏️</div>
          <div className="floating-element element-4">🌸</div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="classes-section" id="classes">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="classes-badge">
              Our Programs
            </span>
            <h2 className="section-title" data-animate="classes-title">
              Choose Your Learning Path
            </h2>
            <p className="section-subtitle" data-animate="classes-subtitle">
              From absolute beginner to advanced fluency, we have the perfect course for your Japanese learning journey
            </p>
          </div>

          <div className="classes-grid">
            {classLevels.map((classLevel, index) => (
              <div
                key={index}
                className={`class-card ${visibleElements.has(`class-${index}`) ? "animate" : ""}`}
                data-animate={`class-${index}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="class-header">
                  <div className="class-icon">
                    <classLevel.icon />
                  </div>
                  <div className="class-stats">
                    <div className="stat">
                      <span className="stat-number">{classLevel.students}</span>
                      <span className="stat-label">Students</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">{classLevel.duration}</span>
                      <span className="stat-label">Duration</span>
                    </div>
                  </div>
                </div>
                <h3 className="class-title">{classLevel.title}</h3>
                <p className="class-description">{classLevel.description}</p>
                <div className="class-features">
                  {classLevel.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="class-cta">
                  Enroll Now
                  <FaArrowRight />
                </Link>
                <div className="class-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="features-badge">
              Why Choose Us
            </span>
            <h2 className="section-title" data-animate="features-title">
              Excellence in Japanese Education
            </h2>
            <p className="section-subtitle" data-animate="features-subtitle">
              Experience the difference with our proven teaching methods and dedicated support
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${visibleElements.has(`feature-${index}`) ? "animate" : ""}`}
                data-animate={`feature-${index}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="schedule-badge">
              Class Schedule
            </span>
            <h2 className="section-title" data-animate="schedule-title">
              Flexible Learning Times
            </h2>
            <p className="section-subtitle" data-animate="schedule-subtitle">
              Choose the schedule that works best for your lifestyle and commitments
            </p>
          </div>

          <div className="schedule-grid">
            {scheduleInfo.map((schedule, index) => (
              <div
                key={index}
                className={`schedule-card ${visibleElements.has(`schedule-${index}`) ? "animate" : ""}`}
                data-animate={`schedule-${index}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="schedule-icon">
                  <schedule.icon />
                </div>
                <h4 className="schedule-title">{schedule.title}</h4>
                <div className="schedule-time">{schedule.time}</div>
                <p className="schedule-description">{schedule.description}</p>
              </div>
            ))}
          </div>

          <div
            className={`schedule-cta ${visibleElements.has("schedule-cta") ? "animate" : ""}`}
            data-animate="schedule-cta"
          >
            <div className="cta-content">
              <h3>Ready to Start Learning?</h3>
              <p>Visit our Chabahil office to meet our instructors and find the perfect class schedule for you!</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Visit Our Office
                  <FaArrowRight />
                </Link>
                <Link to="/team" className="btn btn-outline">
                  Meet Instructors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert language education and comprehensive support.</p>
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

export default ExploreClasses
