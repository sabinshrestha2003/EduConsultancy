"use client"

import { useState, useEffect } from "react"
import "../styles/Documentation.css"
import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaArrowRight,
  FaFileAlt,
  FaPassport,
  FaGraduationCap,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa"

const Documentation = () => {
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

  const documentTypes = [
    {
      icon: FaPassport,
      title: "Visa Documentation",
      description: "Complete visa application support with document preparation and submission guidance",
      items: ["Passport verification", "Application forms", "Supporting documents", "Embassy submission"],
    },
    {
      icon: FaGraduationCap,
      title: "Educational Certificates",
      description: "Academic document verification and translation services for Japanese institutions",
      items: ["Transcript verification", "Degree authentication", "Document translation", "Apostille services"],
    },
    {
      icon: FaFileAlt,
      title: "Legal Documentation",
      description: "Professional handling of legal documents and official paperwork requirements",
      items: ["Legal translations", "Notarization", "Document legalization", "Official certifications"],
    },
  ]

  const requiredDocs = [
    { icon: "📄", title: "Passport Copy", description: "Valid passport with at least 6 months validity" },
    { icon: "📝", title: "Application Forms", description: "Completed visa and enrollment application forms" },
    { icon: "🎓", title: "Educational Certificates", description: "Academic transcripts and degree certificates" },
    { icon: "💰", title: "Financial Statements", description: "Bank statements and financial proof documents" },
    { icon: "🗾", title: "Language Certificate", description: "JLPT or other Japanese proficiency certificates" },
    { icon: "📋", title: "Medical Records", description: "Health certificates and medical examination reports" },
  ]

  const features = [
    {
      icon: FaCheckCircle,
      title: "100% Accuracy",
      description: "Meticulous document review ensuring error-free submissions",
    },
    {
      icon: FaClock,
      title: "Fast Processing",
      description: "Quick turnaround times without compromising quality",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Handling",
      description: "Confidential and secure processing of all documents",
    },
  ]

  return (
    <div className="documentation-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-badge" data-animate="hero-badge">
            <span>📋 Documentation Services</span>
          </div>
          <h1 className="hero-title" data-animate="hero-title">
            Expert Document
            <br />
            <span className="accent-text">Assistance</span>
          </h1>
          <p className="hero-description" data-animate="hero-desc">
            Simplify your paperwork with our comprehensive documentation services. From visa applications to educational
            certifications, we handle it all with precision and care.
          </p>
          <div className="hero-buttons" data-animate="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started
              <FaArrowRight />
            </Link>
            <Link to="#services" className="btn btn-glass">
              Our Services
              <FaFileAlt />
            </Link>
          </div>
        </div>
        <div className="floating-elements">
          <div className="floating-element element-1">📋</div>
          <div className="floating-element element-2">📄</div>
          <div className="floating-element element-3">✅</div>
          <div className="floating-element element-4">🎯</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="services-badge">
              Our Services
            </span>
            <h2 className="section-title" data-animate="services-title">
              Comprehensive Documentation Solutions
            </h2>
            <p className="section-subtitle" data-animate="services-subtitle">
              Professional document preparation and processing services tailored for your Japan journey
            </p>
          </div>

          <div className="services-grid">
            {documentTypes.map((service, index) => (
              <div
                key={index}
                className={`service-card ${visibleElements.has(`service-${index}`) ? "animate" : ""}`}
                data-animate={`service-${index}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-items">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="service-item">
                      <FaCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="service-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="documents-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" data-animate="docs-badge">
              Required Documents
            </span>
            <h2 className="section-title" data-animate="docs-title">
              Essential Paperwork Checklist
            </h2>
            <p className="section-subtitle" data-animate="docs-subtitle">
              Complete list of documents typically required for Japan visa and study applications
            </p>
          </div>

          <div className="documents-grid">
            {requiredDocs.map((doc, index) => (
              <div
                key={index}
                className={`document-card ${visibleElements.has(`doc-${index}`) ? "animate" : ""}`}
                data-animate={`doc-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="document-icon">{doc.icon}</div>
                <h4 className="document-title">{doc.title}</h4>
                <p className="document-description">{doc.description}</p>
              </div>
            ))}
          </div>

          <div
            className={`documents-note ${visibleElements.has("docs-note") ? "animate" : ""}`}
            data-animate="docs-note"
          >
            <div className="note-content">
              <h3>📝 Important Note</h3>
              <p>
                Document requirements may vary based on your specific situation and destination. Our team will provide
                you with a personalized checklist during your consultation at our Chabahil office.
              </p>
            </div>
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
              Professional Excellence
            </h2>
            <p className="section-subtitle" data-animate="features-subtitle">
              Experience the difference with our proven documentation expertise
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className={`cta-content ${visibleElements.has("cta") ? "animate" : ""}`} data-animate="cta">
            <div className="cta-badge">
              <span>Ready to get started?</span>
            </div>
            <h2>Let Us Handle Your Documentation</h2>
            <p>
              Visit our Chabahil office for a comprehensive consultation and personalized document preparation
              assistance
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white">
                Schedule Consultation
                <FaArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline-white">
                Learn More
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
              <p>Empowering your journey to Japan with expert documentation and comprehensive support.</p>
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

export default Documentation
