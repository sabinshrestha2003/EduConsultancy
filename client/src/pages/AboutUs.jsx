"use client"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaQuoteLeft,
  FaArrowRight,
  FaUsers,
  FaGraduationCap,
  FaAward,
  FaHandshake,
  FaStar,
  FaLightbulb,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"
import ManagingDirectorImage from "../assets/managing-director.jpg"
import "../styles/AboutUs.css"

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({})

  const statsRef = useRef(null)
  const storyRef = useRef(null)
  const timelineRef = useRef(null)
  const directorRef = useRef(null)
  const valuesRef = useRef(null)

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }))
        }
      })
    }, observerOptions)

    const sections = [statsRef, storyRef, timelineRef, directorRef, valuesRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `about-section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { number: "500+", label: "Students Guided", icon: FaUsers },
    { number: "95%", label: "Success Rate", icon: FaAward },
    { number: "7+", label: "Years Experience", icon: FaGraduationCap },
    { number: "100%", label: "Satisfaction", icon: FaHandshake },
  ]

  const values = [
    {
      icon: FaHandshake,
      title: "Trust & Integrity",
      description:
        "Building lasting relationships through honest, transparent communication and ethical practices in all our services.",
    },
    {
      icon: FaStar,
      title: "Excellence",
      description:
        "Delivering exceptional service and results that consistently exceed expectations with attention to detail.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Continuously improving our methods and embracing new technologies to provide better service to our clients.",
    },
    {
      icon: FaGlobe,
      title: "Cultural Bridge",
      description:
        "Connecting Nepal and Japan through education, understanding, and meaningful cross-cultural relationships.",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Foundation Established",
      description:
        "Kyushu Edu Consultancy was founded with a vision to connect Nepal and Japan through quality education services.",
    },
    {
      year: "2020",
      title: "First 100 Students",
      description:
        "Successfully helped our first 100 students achieve their Japan education dreams with comprehensive support.",
    },
    {
      year: "2022",
      title: "Service Expansion",
      description: "Expanded our services to include comprehensive visa processing and cultural integration programs.",
    },
    {
      year: "2024",
      title: "500+ Success Stories",
      description: "Reached the milestone of helping over 500 students successfully pursue their education in Japan.",
    },
  ]

  const features = [
    {
      title: "Expert Guidance",
      description: "Professional counselors with extensive experience in Japanese education system.",
      icon: FaGraduationCap,
    },
    {
      title: "Proven Success",
      description: "95% success rate with over 500 students successfully placed in Japanese institutions.",
      icon: FaAward,
    },
    {
      title: "Comprehensive Support",
      description: "End-to-end assistance from language training to visa processing and beyond.",
      icon: FaHandshake,
    },
  ]

  return (
    <div className="abt-page">
      {/* Hero Section */}
      <section className="abt-hero">
        <div className="abt-hero-background">
          <div className="abt-hero-overlay" />
        </div>
        <div className="abt-container">
          <div className="abt-hero-content">
            <div className="abt-hero-badge">
              <FaStar />
              <span>About Kyushu Edu Consultancy</span>
            </div>
            <h1 className="abt-hero-title">
              Empowering Dreams,
              <span className="abt-highlight"> Connecting Futures</span>
            </h1>
            <p className="abt-hero-description">
              With over 7 years of experience, we are Nepal's trusted partner for Japanese education and visa services.
              Our commitment to excellence has helped 500+ students achieve their dreams of studying and working in
              Japan.
            </p>
            <div className="abt-hero-actions">
              <Link to="/contact" className="abt-btn abt-btn-primary">
                <span>Get Free Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="#story" className="abt-btn abt-btn-outline">
                <span>Our Story</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="abt-stats-section" ref={statsRef}>
        <div className="abt-container">
          <div className="abt-stats-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`abt-stat-card ${isVisible["about-section-0"] ? "abt-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="abt-stat-icon">
                  <achievement.icon />
                </div>
                <div className="abt-stat-content">
                  <div className="abt-stat-number">{achievement.number}</div>
                  <div className="abt-stat-label">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="abt-story-section" id="story" ref={storyRef}>
        <div className="abt-container">
          <div className="abt-section-header">
            <h2 className="abt-section-title">Our Foundation Story</h2>
            <p className="abt-section-subtitle">
              Discover the journey that made us Nepal's leading Japanese education consultancy
            </p>
          </div>

          <div className="abt-story-content">
            <div className="abt-story-text">
              <div className="abt-story-item">
                <div className="abt-story-icon">
                  <FaLightbulb />
                </div>
                <div className="abt-story-details">
                  <h3>Our Mission</h3>
                  <p>
                    Kyushu Edu Consultancy is dedicated to helping individuals explore opportunities in Japan through
                    exceptional educational and immigration support. We provide comprehensive language training, visa
                    processing, and cultural integration programs in a supportive environment.
                  </p>
                </div>
              </div>

              <div className="abt-story-item">
                <div className="abt-story-icon">
                  <FaGlobe />
                </div>
                <div className="abt-story-details">
                  <h3>Our Vision</h3>
                  <p>
                    We aim to empower 10,000 individuals to relocate and thrive in Japan by 2030. Through top-tier
                    educational resources, streamlined visa assistance, and personalized career guidance, we make dreams
                    of living in Japan a reality.
                  </p>
                </div>
              </div>

              <div className="abt-story-item">
                <div className="abt-story-icon">
                  <FaAward />
                </div>
                <div className="abt-story-details">
                  <h3>Our Commitment</h3>
                  <p>
                    Since our founding in 2018, we have grown from a small startup to Nepal's most trusted name in
                    Japanese education consultancy. Our passion and dedication have helped hundreds achieve their goals
                    with personalized support and proven methodologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="abt-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="abt-feature-card">
                  <div className="abt-feature-icon">
                    <feature.icon />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="abt-timeline-section" ref={timelineRef}>
        <div className="abt-container">
          <div className="abt-section-header">
            <h2 className="abt-section-title">Our Journey & Milestones</h2>
            <p className="abt-section-subtitle">
              Key moments that shaped our path to becoming Nepal's leading Japan education consultancy
            </p>
          </div>

          <div className="abt-timeline">
            <div className="abt-timeline-line"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`abt-timeline-item ${isVisible["about-section-2"] ? "abt-visible" : ""}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <div className="abt-timeline-marker">
                  <div className="abt-timeline-year">{milestone.year}</div>
                </div>
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
      <section className="abt-director-section" ref={directorRef}>
        <div className="abt-container">
          <div className="abt-section-header">
            <h2 className="abt-section-title">Meet Our Leadership</h2>
            <p className="abt-section-subtitle">
              Visionary leadership driving excellence in Japanese education consultancy
            </p>
          </div>

          <div className="abt-director-content">
            <div className="abt-director-image">
              <div className="abt-image-wrapper">
                <img src={ManagingDirectorImage || "/placeholder.svg?height=400&width=400"} alt="Managing Director" />
                <div className="abt-image-badge">Managing Director</div>
              </div>
            </div>

            <div className="abt-director-info">
              <div className="abt-quote-container">
                <div className="abt-quote-icon">
                  <FaQuoteLeft />
                </div>
                <blockquote className="abt-director-quote">
                  "At Kyushu Edu Consultancy, our vision is to bridge dreams with reality by empowering individuals to
                  embrace opportunities in Japan. With dedication, expertise, and a passion for cultural exchange, we
                  are committed to guiding you every step of the way. Your journey to Japan is our mission, and
                  together, we can make it extraordinary."
                </blockquote>
                <div className="abt-quote-author">
                  <div className="abt-author-name">Dr. John Doe</div>
                  <div className="abt-author-title">Managing Director & Founder</div>
                  <div className="abt-author-credentials">PhD in International Education, 15+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="abt-values-section" ref={valuesRef}>
        <div className="abt-container">
          <div className="abt-section-header">
            <h2 className="abt-section-title">Our Core Values</h2>
            <p className="abt-section-subtitle">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="abt-values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className={`abt-value-card ${isVisible["about-section-4"] ? "abt-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="abt-value-icon">
                  <value.icon />
                </div>
                <div className="abt-value-content">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="abt-cta-section">
        <div className="abt-container">
          <div className="abt-cta-content">
            <h2 className="abt-cta-title">Ready to Begin Your Japan Journey?</h2>
            <p className="abt-cta-description">
              Join hundreds of successful students who have achieved their dreams with our expert guidance and support.
            </p>
            <div className="abt-cta-actions">
              <Link to="/contact" className="abt-btn abt-btn-primary">
                <span>Schedule Free Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/classes" className="abt-btn abt-btn-outline">
                <span>View Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="abt-footer">
        <div className="abt-container">
          <div className="abt-footer-content">
            <div className="abt-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Your trusted partner for Japanese education and visa services in Nepal. Professional guidance with
                proven results since 2018.
              </p>
              <div className="abt-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="abt-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="abt-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="abt-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="abt-footer-links">
              <div className="abt-footer-column">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link to="/classes">Japanese Classes</Link>
                  </li>
                  <li>
                    <Link to="/visa">Visa Services</Link>
                  </li>
                  <li>
                    <Link to="/counseling">Career Counseling</Link>
                  </li>
                  <li>
                    <Link to="/support">Student Support</Link>
                  </li>
                </ul>
              </div>

              <div className="abt-footer-column">
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/success-stories">Success Stories</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>

              <div className="abt-footer-column">
                <h4>Contact Info</h4>
                <div className="abt-contact-info">
                  <div className="abt-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="abt-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="abt-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="abt-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Education Services in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs
