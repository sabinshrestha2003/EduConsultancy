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
    }, 4000)

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
    <div className="kec-homepage">
      {/* Hero Section */}
      <section className="kec-hero">
        <div className="kec-hero-slideshow">
          {images.map((image, index) => (
            <div
              key={index}
              className={`kec-hero-slide ${index === currentImageIndex ? "kec-active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="kec-hero-overlay" />
        </div>
        <div className="kec-container kec-hero-content">
          <h1 className="kec-hero-title">
            Master Japanese.
            <br />
            <span className="kec-accent-text">Achieve Your Dreams.</span>
          </h1>
          <p className="kec-hero-description">
            Expert language training and visa guidance in Kathmandu. Join 500+ successful students on their Japan journey.
          </p>
          <div className="kec-hero-buttons">
            <Link to="/classes" className="kec-btn kec-btn-primary">
              Start Your Journey
              <FaArrowRight />
            </Link>
            <Link to="/contact" className="kec-btn kec-btn-secondary">
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="kec-stats-section">
        <div className="kec-container">
          <div className="kec-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="kec-stat-card">
                <div className="kec-stat-icon">
                  <stat.icon />
                </div>
                <div className="kec-stat-number">{stat.number}</div>
                <div className="kec-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="kec-pathways-section">
        <div className="kec-container">
          <div className="kec-section-header">
            <h2 className="kec-section-title">Choose Your Path</h2>
            <p className="kec-section-subtitle">Find the journey that matches your dreams.</p>
          </div>
          <div className="kec-pathways-grid">
            {pathways.map((pathway, index) => (
              <Link key={index} to={pathway.link} className="kec-pathway-card">
                <div className="kec-pathway-icon">
                  <pathway.icon />
                </div>
                <h3>{pathway.title}</h3>
                <p>{pathway.description}</p>
                <div className="kec-pathway-arrow">
                  <FaArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="kec-journey-section">
        <div className="kec-container">
          <div className="kec-section-header">
            <h2 className="kec-section-title">Your Journey</h2>
            <p className="kec-section-subtitle">We guide you every step to Japan.</p>
          </div>
          <div className="kec-timeline">
            {[
              { step: "01", title: "Free Consultation", desc: "Visit our Chabahil office for personalized guidance" },
              { step: "02", title: "Language Training", desc: "Master Japanese with our expert instructors" },
              { step: "03", title: "Document Preparation", desc: "Complete all paperwork with our assistance" },
              { step: "04", title: "Visa Application", desc: "Secure your visa with our proven process" },
              { step: "05", title: "Japan Ready", desc: "Begin your new adventure with confidence" },
            ].map((item, index) => (
              <div key={index} className="kec-timeline-item">
                <div className="kec-timeline-number">{item.step}</div>
                <div className="kec-timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="kec-faq-section">
        <div className="kec-container">
          <div className="kec-section-header">
            <h2 className="kec-section-title">Common Questions</h2>
            <p className="kec-section-subtitle">Answers to your most pressing concerns.</p>
          </div>
          <div className="kec-faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`kec-faq-item ${activeFAQ === index ? "kec-active" : ""}`}>
                <button className="kec-faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <FaChevronDown className={`kec-faq-icon ${activeFAQ === index ? "kec-rotated" : ""}`} />
                </button>
                <div className="kec-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="kec-footer">
        <div className="kec-container">
          <div className="kec-footer-content">
            <div className="kec-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Your trusted partner for Japan education and visa services in Nepal.</p>
              <div className="kec-social-links">
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
            <div className="kec-footer-contact">
              <h4>Contact Info</h4>
              <div className="kec-contact-item">
                <span>📧</span>
                <span>kyushuedu@gmail.com</span>
              </div>
              <div className="kec-contact-item">
                <span>📞</span>
                <span>+977-14581248</span>
              </div>
              <div className="kec-contact-item">
                <span>📍</span>
                <span>Chabahil, Kathmandu</span>
              </div>
            </div>
            <div className="kec-footer-links">
              <h4>Quick Links</h4>
              <Link to="/classes">Japanese Classes</Link>
              <Link to="/visa">Visa Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="kec-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage