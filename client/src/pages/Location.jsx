"use client"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaDirections,
  FaCalendarAlt,
  FaUsers,
  FaHandshake,
  FaInfoCircle,
  FaFileAlt, // Import FaFileAlt here
} from "react-icons/fa"
import "../styles/Location.css"

const Location = () => {
  const [isVisible, setIsVisible] = useState({})

  const infoRef = useRef(null)
  const mapRef = useRef(null)
  const visitRef = useRef(null)

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

    const sections = [infoRef, mapRef, visitRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `loc-section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const contactDetails = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Main Office",
      details: ["Chabahil, Kathmandu, Nepal", "5 minutes from Chabahil Chowk", "Easy public transport access"],
    },
    {
      icon: FaPhone,
      title: "Call Us Directly",
      details: ["+977-14581248", "Available during office hours", "For urgent inquiries & support"],
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["kyushuedu@gmail.com", "Response within 24 hours", "Detailed inquiries & document submission"],
    },
    {
      icon: FaClock,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  const whyVisit = [
    {
      icon: FaHandshake,
      title: "Personalized Consultation",
      description: "Receive one-on-one guidance tailored to your specific education and visa needs.",
    },
    {
      icon: FaUsers,
      title: "Meet Our Experts",
      description: "Connect directly with our experienced counselors and Japanese language instructors.",
    },
    {
      icon: FaFileAlt,
      title: "On-Spot Document Review",
      description: "Bring your documents for immediate assessment and professional advice.",
    },
    {
      icon: FaInfoCircle,
      title: "Comprehensive Information",
      description: "Get detailed insights into courses, visa processes, and life in Japan.",
    },
  ]

  return (
    <div className="loc-page">
      {/* Hero Section */}
      <section className="loc-hero">
        <div className="loc-hero-background">
          <div className="loc-hero-overlay" />
        </div>
        <div className="loc-container">
          <div className="loc-hero-content">
            <div className="loc-hero-badge">
              <FaMapMarkerAlt />
              <span>Find Us Here</span>
            </div>
            <h1 className="loc-hero-title">
              Our Convenient Location
              <span className="loc-highlight"> in Kathmandu</span>
            </h1>
            <p className="loc-hero-description">
              Kyushu Edu Consultancy is strategically located in Chabahil, Kathmandu, making it easily accessible for
              all your Japanese education and visa needs. Visit our office for a personalized consultation.
            </p>
            <div className="loc-hero-actions">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Chabahil%2C%20Kathmandu%2C%20Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="loc-btn loc-btn-primary"
              >
                <span>Get Directions</span>
                <FaDirections />
              </a>
              <Link to="/contact" className="loc-btn loc-btn-outline">
                <span>Contact Us</span>
                <FaArrowRight />
              </Link>
            </div>
            <div className="loc-hero-stats">
              <div className="loc-stat-item">
                <span className="loc-stat-number">Chabahil</span>
                <span className="loc-stat-label">Kathmandu, Nepal</span>
              </div>
              <div className="loc-stat-item">
                <span className="loc-stat-number">+977-14581248</span>
                <span className="loc-stat-label">Call Us</span>
              </div>
              <div className="loc-stat-item">
                <span className="loc-stat-number">9 AM - 6 PM</span>
                <span className="loc-stat-label">Mon-Fri</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="loc-info-section" ref={infoRef}>
        <div className="loc-container">
          <div className="loc-section-header">
            <h2 className="loc-section-title">Our Office Details</h2>
            <p className="loc-section-subtitle">
              Everything you need to know to reach us and plan your visit for expert guidance.
            </p>
          </div>

          <div className="loc-info-grid">
            {contactDetails.map((info, index) => (
              <div
                key={index}
                className={`loc-info-card ${isVisible["loc-section-0"] ? "loc-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="loc-info-icon">
                  <info.icon />
                </div>
                <div className="loc-info-content">
                  <h3>{info.title}</h3>
                  <ul>
                    {info.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="loc-map-section" ref={mapRef}>
        <div className="loc-container">
          <div className="loc-section-header">
            <h2 className="loc-section-title">Locate Us on the Map</h2>
            <p className="loc-section-subtitle">
              Easily find our office using the interactive map below. We look forward to welcoming you!
            </p>
          </div>

          <div
            className={`loc-map-container ${isVisible["loc-section-1"] ? "loc-visible" : ""}`}
            style={{ "--delay": "0.2s" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.845681462287!2d85.34710307544434!3d27.713156532183304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f9f6e3e4f3%3A0x7a8e7b9b7e9e8a!2sChabahil%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1624369200000"
              width="100%"
              height="450px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Kyushu Educational Consultancy Location"
              aria-label="Google Map showing Kyushu Educational Consultancy location in Chabahil, Kathmandu, Nepal"
            ></iframe>
          </div>

          <div className="loc-map-cta">
            <div className="loc-cta-content">
              <h3>Planning Your Visit?</h3>
              <p>
                Our office is conveniently located and easily accessible. Click below to get precise directions or
                schedule an appointment for a dedicated consultation.
              </p>
              <div className="loc-cta-buttons">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Chabahil%2C%20Kathmandu%2C%20Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-btn loc-btn-primary"
                >
                  <FaDirections />
                  <span>Get Directions</span>
                </a>
                <Link to="/contact" className="loc-btn loc-btn-outline">
                  <FaCalendarAlt />
                  <span>Schedule Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="loc-visit-section" ref={visitRef}>
        <div className="loc-container">
          <div className="loc-section-header">
            <h2 className="loc-section-title">Benefits of an In-Person Visit</h2>
            <p className="loc-section-subtitle">
              Experience the difference of face-to-face interaction and comprehensive support at our office.
            </p>
          </div>

          <div className="loc-visit-grid">
            {whyVisit.map((reason, index) => (
              <div
                key={index}
                className={`loc-visit-card ${isVisible["loc-section-2"] ? "loc-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="loc-visit-icon">
                  <reason.icon />
                </div>
                <div className="loc-visit-content">
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="loc-final-cta">
        <div className="loc-container">
          <div className="loc-final-cta-content">
            <h2 className="loc-final-cta-title">Ready to Visit or Connect?</h2>
            <p className="loc-final-cta-description">
              We are eager to assist you on your journey to Japan. Reach out or visit us during office hours for expert
              guidance and support.
            </p>
            <div className="loc-final-cta-actions">
              <Link to="/contact" className="loc-btn loc-btn-primary">
                <span>Contact Our Team</span>
                <FaArrowRight />
              </Link>
              <Link to="/about" className="loc-btn loc-btn-outline">
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="loc-footer">
        <div className="loc-container">
          <div className="loc-footer-content">
            <div className="loc-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Your trusted partner for Japanese education and visa services in Nepal. Professional guidance with
                proven results since 2018.
              </p>
              <div className="loc-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="loc-footer-links">
              <div className="loc-footer-column">
                <h4>Our Services</h4>
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
                    <Link to="/documentation">Documentation</Link>
                  </li>
                </ul>
              </div>

              <div className="loc-footer-column">
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

              <div className="loc-footer-column">
                <h4>Contact Info</h4>
                <div className="loc-contact-info">
                  <div className="loc-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="loc-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="loc-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="loc-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Education Services in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Location
