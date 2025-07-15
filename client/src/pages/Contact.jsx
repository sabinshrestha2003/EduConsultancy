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
  FaUsers,
  FaCheckCircle,
  FaExclamationTriangle,
  FaComments,
  FaHandshake,
  FaDirections,
  FaCalendarAlt,
} from "react-icons/fa"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [submitMessage, setSubmitMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  const formRef = useRef(null)
  const infoRef = useRef(null)
  const mapRef = useRef(null)

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

    const sections = [formRef, infoRef, mapRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `contact-section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Track visit
  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch("http://localhost:5000/api/admin/track-visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      } catch (error) {
        console.error("Visit tracking failed:", error)
      }
    }
    trackVisit()
  }, [])

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: "", email: "", phone: "", service: "", message: "" }

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
      isValid = false
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        const response = await fetch("http://localhost:5000/api/admin/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        const data = await response.json()
        setSubmitMessage(
          data.message ||
            "Thank you for your inquiry! We'll contact you within 24 hours to schedule a consultation at our Chabahil office.",
        )
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        setErrors({ name: "", email: "", phone: "", service: "", message: "" })
      } catch (error) {
        setSubmitMessage(
          "We're experiencing technical difficulties. Please visit our Chabahil office directly or try again later.",
        )
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      details: ["Chabahil, Kathmandu, Nepal", "5 minutes from Chabahil Chowk", "Easy public transport access"],
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["+977-14581248", "Available during office hours", "For urgent inquiries"],
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["kyushuedu@gmail.com", "Response within 24 hours", "Detailed inquiries welcome"],
    },
    {
      icon: FaClock,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  const services = [
    "Japanese Language Classes",
    "Student Visa Services",
    "Career Counseling",
    "Document Processing",
    "JLPT Preparation",
    "General Inquiry",
  ]

  const whyVisit = [
    {
      icon: FaHandshake,
      title: "Personal Consultation",
      description: "Meet our expert counselors face-to-face for personalized guidance on your Japan journey.",
    },
    {
      icon: FaUsers,
      title: "Meet Our Team",
      description: "Get to know our experienced instructors and counselors who will support your success.",
    },
    {
      icon: FaCheckCircle,
      title: "Document Review",
      description: "Bring your documents for immediate review and professional assessment.",
    },
    {
      icon: FaComments,
      title: "Detailed Discussion",
      description: "Have in-depth conversations about your goals, timeline, and available options.",
    },
  ]

  return (
    <div className="con-page">
      {/* Hero Section */}
      <section className="con-hero">
        <div className="con-hero-background">
          <div className="con-hero-overlay" />
        </div>
        <div className="con-container">
          <div className="con-hero-content">
            <div className="con-hero-badge">
              <FaComments />
              <span>Get In Touch With Us</span>
            </div>
            <h1 className="con-hero-title">
              Start Your Japan Journey
              <span className="con-highlight"> Today</span>
            </h1>
            <p className="con-hero-description">
              Ready to take the next step? Contact us for expert guidance on Japanese language learning, visa services,
              and career counseling. We're here to make your dreams of studying and working in Japan a reality.
            </p>
            <div className="con-hero-actions">
              <a href="#contact-form" className="con-btn con-btn-primary">
                <span>Send Message</span>
                <FaArrowRight />
              </a>
              <a href="#office-info" className="con-btn con-btn-outline">
                <FaDirections />
                <span>Visit Our Office</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="con-form-section" id="contact-form" ref={formRef}>
        <div className="con-container">
          <div className="con-section-header">
            <h2 className="con-section-title">Send Us a Message</h2>
            <p className="con-section-subtitle">
              Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
            </p>
          </div>

          <div className="con-form-container">
            <div
              className={`con-form-card ${isVisible["contact-section-0"] ? "con-visible" : ""}`}
              style={{ "--delay": "0.2s" }}
            >
              <form onSubmit={handleSubmit} className="con-contact-form">
                <div className="con-form-row">
                  <div className="con-form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "con-error-input" : ""}
                    />
                    {errors.name && (
                      <span className="con-error-message">
                        <FaExclamationTriangle />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="con-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "con-error-input" : ""}
                    />
                    {errors.email && (
                      <span className="con-error-message">
                        <FaExclamationTriangle />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="con-form-row">
                  <div className="con-form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "con-error-input" : ""}
                    />
                    {errors.phone && (
                      <span className="con-error-message">
                        <FaExclamationTriangle />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="con-form-group">
                    <label htmlFor="service">Service of Interest *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={errors.service ? "con-error-input" : ""}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="con-error-message">
                        <FaExclamationTriangle />
                        {errors.service}
                      </span>
                    )}
                  </div>
                </div>

                <div className="con-form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your goals, timeline, and any specific questions you have..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={errors.message ? "con-error-input" : ""}
                  />
                  {errors.message && (
                    <span className="con-error-message">
                      <FaExclamationTriangle />
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="con-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="con-spinner" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaArrowRight />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div
                    className={`con-submit-message ${
                      submitMessage.includes("technical difficulties") ? "con-error" : "con-success"
                    }`}
                  >
                    {submitMessage.includes("technical difficulties") ? <FaExclamationTriangle /> : <FaCheckCircle />}
                    <span>{submitMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="con-info-section" id="office-info" ref={infoRef}>
        <div className="con-container">
          <div className="con-section-header">
            <h2 className="con-section-title">Get In Touch</h2>
            <p className="con-section-subtitle">
              Multiple ways to reach us. We encourage office visits for the most comprehensive consultation experience.
            </p>
          </div>

          <div className="con-info-grid">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`con-info-card ${isVisible["contact-section-1"] ? "con-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="con-info-icon">
                  <info.icon />
                </div>
                <div className="con-info-content">
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

      {/* Why Visit Section */}
      <section className="con-visit-section" ref={mapRef}>
        <div className="con-container">
          <div className="con-section-header">
            <h2 className="con-section-title">Why Visit Our Chabahil Office?</h2>
            <p className="con-section-subtitle">
              Experience personalized service and get immediate answers to all your questions about studying in Japan.
            </p>
          </div>

          <div className="con-visit-grid">
            {whyVisit.map((reason, index) => (
              <div
                key={index}
                className={`con-visit-card ${isVisible["contact-section-2"] ? "con-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="con-visit-icon">
                  <reason.icon />
                </div>
                <div className="con-visit-content">
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="con-visit-cta">
            <div className="con-cta-content">
              <h3>Ready to Visit Us?</h3>
              <p>
                Our Chabahil office is easily accessible and equipped with everything you need for a comprehensive
                consultation. Walk-ins welcome during office hours!
              </p>
              <div className="con-cta-buttons">
                <Link to="/about" className="con-btn con-btn-primary">
                  <FaCalendarAlt />
                  <span>Schedule Appointment</span>
                </Link>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="con-btn con-btn-outline"
                >
                  <FaDirections />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="con-final-cta">
        <div className="con-container">
          <div className="con-final-cta-content">
            <h2 className="con-final-cta-title">Take the First Step Towards Your Japan Dream</h2>
            <p className="con-final-cta-description">
              Whether you're just starting to explore opportunities in Japan or ready to begin your application process,
              we're here to guide you every step of the way.
            </p>
            <div className="con-final-cta-actions">
              <a href="#contact-form" className="con-btn con-btn-primary">
                <span>Send Message Now</span>
                <FaArrowRight />
              </a>
              <Link to="/classes" className="con-btn con-btn-outline">
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="con-footer">
        <div className="con-container">
          <div className="con-footer-content">
            <div className="con-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Your trusted partner for Japanese education and visa services in Nepal. Professional guidance with
                proven results since 2018.
              </p>
              <div className="con-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="con-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="con-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="con-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="con-footer-links">
              <div className="con-footer-column">
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

              <div className="con-footer-column">
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

              <div className="con-footer-column">
                <h4>Contact Info</h4>
                <div className="con-contact-info">
                  <div className="con-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="con-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="con-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="con-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Education Services in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact
