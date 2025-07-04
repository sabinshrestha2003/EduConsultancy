"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaArrowRight,
  FaPlay,
  FaGraduationCap,
  FaPassport,
  FaUsers,
  FaChevronDown,
} from "react-icons/fa"
import "../styles/HomePage.css"

// Import images
import CityImage from "../assets/city.jpg"
import KyotoImage from "../assets/kyoto.jpg"
import OsakaImage from "../assets/osaka.jpg"
import TokyoImage from "../assets/tokyo.jpg"
import CherryImage from "../assets/cherry.jpg"
import NightCityImage from "../assets/nightcity.jpg"
import StreetImage from "../assets/street.jpg"

const HomePage = () => {
  const images = [CityImage, KyotoImage, OsakaImage, TokyoImage, CherryImage, NightCityImage, StreetImage]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Preload images
    images.forEach((image) => {
      const img = new Image()
      img.src = image
      img.onload = () => console.log(`Loaded: ${image}`)
      img.onerror = () => console.error(`Failed to load: ${image}`)
    })

    const transition = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const interval = setInterval(() => {
      requestAnimationFrame(transition)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const toggleFAQ = (index) => {
    setActiveFAQ((prev) => (prev === index ? null : index))
  }

  const stats = [
    { number: "500+", label: "Students Helped", icon: FaUsers },
    { number: "95%", label: "Success Rate", icon: FaGraduationCap },
    { number: "5+", label: "Years Experience", icon: FaPassport },
  ]

  const faqs = [
    {
      question: "What documents are needed for Japan visa?",
      answer:
        "You'll need a valid passport, application forms, proof of funds, educational certificates, and sponsor documents. We'll guide you through the complete checklist.",
    },
    {
      question: "How long does the visa process take?",
      answer:
        "Typically 2-4 weeks for processing, but preparation time varies. Our expert team ensures all documents are perfect before submission.",
    },
    {
      question: "Do I need Japanese language skills?",
      answer:
        "Not initially! We offer courses from complete beginner (N5) to advanced levels. Our structured program builds confidence step by step.",
    },
    {
      question: "What are the costs involved?",
      answer:
        "Costs vary by program type and duration. Visit our office for a detailed breakdown and personalized consultation based on your goals.",
    },
  ]

  const pathways = [
    {
      title: "Study in Japan",
      description: "Academic programs and language courses",
      icon: FaGraduationCap,
      link: "/classes",
    },
    {
      title: "Work in Japan",
      description: "Career opportunities and work visas",
      icon: FaPassport,
      link: "/visa",
    },
    {
      title: "Learn Japanese",
      description: "Language mastery from N5 to N1",
      icon: FaPlay,
      link: "/classes",
    },
  ]

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {images.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentImageIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
            />
          ))}
          <div className="hero-overlay" />
          <div className="hero-particles">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>🇯🇵 Your Gateway to Japan</span>
          </div>
          <h1 className="hero-title">
            Master Japanese.
            <br />
            <span className="accent-text">Achieve Your Dreams.</span>
          </h1>
          <p className="hero-description">
            Expert language training and visa guidance in the heart of Kathmandu. Join 500+ successful students who
            trusted their Japan journey with us.
          </p>
          <div className="hero-buttons">
            <Link to="/classes" className="btn btn-primary">
              Start Your Journey
              <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-glass">
              <FaPlay />
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card-glow"></div>
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="pathways-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Choose Your Path</span>
            <h2 className="section-title">How do you want to experience Japan?</h2>
            <p className="section-subtitle">Every journey is unique. Find the path that matches your dreams.</p>
          </div>
          <div className="pathways-grid">
            {pathways.map((pathway, index) => (
              <Link key={index} to={pathway.link} className="pathway-card">
                <div className="card-glow"></div>
                <div className="pathway-icon">
                  <pathway.icon />
                </div>
                <h3>{pathway.title}</h3>
                <p>{pathway.description}</p>
                <div className="pathway-arrow">
                  <FaArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Your Journey</span>
            <h2 className="section-title">From consultation to success</h2>
            <p className="section-subtitle">We guide you through every step of your Japan journey</p>
          </div>
          <div className="timeline">
            {[
              { step: "01", title: "Free Consultation", desc: "Visit our Chabahil office for personalized guidance" },
              { step: "02", title: "Language Training", desc: "Master Japanese with our expert instructors" },
              { step: "03", title: "Document Preparation", desc: "Complete all paperwork with our assistance" },
              { step: "04", title: "Visa Application", desc: "Secure your visa with our proven process" },
              { step: "05", title: "Japan Ready", desc: "Begin your new adventure with confidence" },
            ].map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="card-glow"></div>
                <div className="timeline-number">{item.step}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Common questions answered</h2>
            <p className="section-subtitle">Get instant answers to your most pressing concerns</p>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFAQ === index ? "active" : ""}`}>
                <div className="card-glow"></div>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <FaChevronDown className={`faq-icon ${activeFAQ === index ? "rotated" : ""}`} />
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <span>Ready to start?</span>
            </div>
            <h2>Your Japan journey begins today</h2>
            <p>Join hundreds of successful students who trusted us with their dreams</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white">
                Visit Our Office
                <FaArrowRight />
              </Link>
              <Link to="/classes" className="btn btn-outline-white">
                Explore Programs
              </Link>
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

export default HomePage
