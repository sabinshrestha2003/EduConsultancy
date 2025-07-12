"use client"
import { useState, useEffect, useRef } from "react"
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
  FaStar,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaAward,
  FaGlobe,
  FaHandshake,
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
  const [isVisible, setIsVisible] = useState({})

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const faqRef = useRef(null)

  // Intersection Observer for smooth animations
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

    const sections = [statsRef, servicesRef, aboutRef, faqRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [images.length])

  const toggleFAQ = (index) => {
    setActiveFAQ((prev) => (prev === index ? null : index))
  }

  const stats = [
    { number: "500+", label: "Students Guided", icon: FaUsers },
    { number: "95%", label: "Success Rate", icon: FaAward },
    { number: "5+", label: "Years Experience", icon: FaGraduationCap },
    { number: "100%", label: "Satisfaction", icon: FaHandshake },
  ]

  const services = [
    {
      title: "Japanese Language Training",
      description:
        "Comprehensive courses from beginner (N5) to advanced (N1) levels with experienced native instructors.",
      icon: FaGraduationCap,
      features: ["Native Instructors", "JLPT Preparation", "Small Class Sizes", "Flexible Schedules"],
    },
    {
      title: "Student Visa Services",
      description: "Complete visa processing assistance with document preparation and application guidance.",
      icon: FaPassport,
      features: ["Document Review", "Application Support", "Interview Prep", "Fast Processing"],
    },
    {
      title: "Career Counseling",
      description: "Professional guidance for study and work opportunities in Japan with personalized planning.",
      icon: FaGlobe,
      features: ["Career Planning", "University Selection", "Job Placement", "Ongoing Support"],
    },
  ]

  const faqs = [
    {
      question: "What documents are required for a Japan student visa?",
      answer:
        "Required documents include a valid passport, Certificate of Eligibility, application forms, financial proof, educational certificates, and health certificates. We provide a complete checklist and assist with document preparation.",
    },
    {
      question: "How long does the visa application process take?",
      answer:
        "The typical processing time is 2-4 weeks after submission. However, document preparation may take additional time. We ensure all documents are properly prepared before submission to avoid delays.",
    },
    {
      question: "Do I need to know Japanese before applying?",
      answer:
        "Basic Japanese knowledge is helpful but not mandatory for initial application. We offer comprehensive language courses from beginner level to help you prepare for your journey to Japan.",
    },
    {
      question: "What are the total costs involved?",
      answer:
        "Costs vary depending on the program and duration. This includes tuition fees, visa processing, and living expenses. We provide detailed cost breakdowns during consultation to help you plan your budget.",
    },
    {
      question: "Do you provide post-arrival support in Japan?",
      answer:
        "Yes, we maintain connections with our students and provide guidance on accommodation, part-time work regulations, and academic support throughout their stay in Japan.",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student at Tokyo University",
      text: "KEC's professional guidance made my dream of studying in Japan a reality. Their systematic approach and expert counseling were exceptional.",
      rating: 5,
    },
    {
      name: "Rajesh Thapa",
      role: "Working Professional in Osaka",
      text: "The language training was comprehensive and the visa process was handled professionally. I highly recommend their services to anyone planning to go to Japan.",
      rating: 5,
    },
  ]

  return (
    <div className="kec-homepage">
      {/* Hero Section */}
      <section className="kec-hero" ref={heroRef}>
        <div className="kec-hero-background">
          {images.map((image, index) => (
            <div
              key={index}
              className={`kec-hero-slide ${index === currentImageIndex ? "kec-active" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            />
          ))}
          <div className="kec-hero-overlay" />
        </div>

        <div className="kec-container">
          <div className="kec-hero-content">
            <div className="kec-hero-badge">
              <FaStar />
              <span>Trusted Education Consultancy Since 2019</span>
            </div>

            <h1 className="kec-hero-title">
              Your Gateway to
              <span className="kec-highlight"> Japanese Education</span>
            </h1>

            <p className="kec-hero-description">
              Professional language training and comprehensive visa services in Kathmandu. We guide students through
              every step of their journey to Japan with expert counseling and proven success.
            </p>

            <div className="kec-hero-actions">
              <Link to="/contact" className="kec-btn kec-btn-primary">
                <span>Get Free Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/classes" className="kec-btn kec-btn-outline">
                <FaPlay />
                <span>View Our Courses</span>
              </Link>
            </div>

            <div className="kec-hero-stats">
              <div className="kec-stat-item">
                <span className="kec-stat-number">500+</span>
                <span className="kec-stat-label">Students Guided</span>
              </div>
              <div className="kec-stat-item">
                <span className="kec-stat-number">95%</span>
                <span className="kec-stat-label">Success Rate</span>
              </div>
              <div className="kec-stat-item">
                <span className="kec-stat-number">5+</span>
                <span className="kec-stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="kec-stats-section" ref={statsRef}>
        <div className="kec-container">
          <div className="kec-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`kec-stat-card ${isVisible["section-0"] ? "kec-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="kec-stat-icon">
                  <stat.icon />
                </div>
                <div className="kec-stat-content">
                  <div className="kec-stat-number">{stat.number}</div>
                  <div className="kec-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="kec-services-section" ref={servicesRef}>
        <div className="kec-container">
          <div className="kec-section-header">
            <h2 className="kec-section-title">Our Professional Services</h2>
            <p className="kec-section-subtitle">
              Comprehensive solutions for your Japanese education journey with expert guidance and proven methodologies.
            </p>
          </div>

          <div className="kec-services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`kec-service-card ${isVisible["section-1"] ? "kec-visible" : ""}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <div className="kec-service-icon">
                  <service.icon />
                </div>
                <div className="kec-service-content">
                  <h3 className="kec-service-title">{service.title}</h3>
                  <p className="kec-service-description">{service.description}</p>
                  <ul className="kec-service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="kec-about-section" ref={aboutRef}>
        <div className="kec-container">
          <div className="kec-about-content">
            <div className="kec-about-text">
              <div className="kec-section-header">
                <h2 className="kec-section-title">Why Choose Kyushu Edu Consultancy?</h2>
                <p className="kec-section-subtitle">
                  With over 5 years of experience, we have established ourselves as Nepal's leading Japanese education
                  consultancy.
                </p>
              </div>

              <div className="kec-about-features">
                <div className="kec-feature-item">
                  <div className="kec-feature-icon">
                    <FaAward />
                  </div>
                  <div className="kec-feature-content">
                    <h4>Proven Track Record</h4>
                    <p>95% visa success rate with over 500 students successfully placed in Japanese institutions.</p>
                  </div>
                </div>

                <div className="kec-feature-item">
                  <div className="kec-feature-icon">
                    <FaUsers />
                  </div>
                  <div className="kec-feature-content">
                    <h4>Expert Team</h4>
                    <p>Experienced counselors and native Japanese instructors providing personalized guidance.</p>
                  </div>
                </div>

                <div className="kec-feature-item">
                  <div className="kec-feature-icon">
                    <FaHandshake />
                  </div>
                  <div className="kec-feature-content">
                    <h4>End-to-End Support</h4>
                    <p>Complete assistance from language training to visa processing and post-arrival support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="kec-about-image">
              <div className="kec-image-placeholder">
                <FaGraduationCap />
                <p>Professional Education Consultancy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="kec-testimonials-section">
        <div className="kec-container">
          <div className="kec-section-header">
            <h2 className="kec-section-title">Student Success Stories</h2>
            <p className="kec-section-subtitle">
              Hear from our successful students who are now pursuing their dreams in Japan.
            </p>
          </div>

          <div className="kec-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="kec-testimonial-card">
                <div className="kec-testimonial-quote">
                  <FaQuoteLeft />
                </div>
                <p className="kec-testimonial-text">{testimonial.text}</p>
                <div className="kec-testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="kec-testimonial-author">
                  <div className="kec-author-name">{testimonial.name}</div>
                  <div className="kec-author-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="kec-faq-section" ref={faqRef}>
        <div className="kec-container">
          <div className="kec-section-header">
            <h2 className="kec-section-title">Frequently Asked Questions</h2>
            <p className="kec-section-subtitle">
              Find answers to common questions about our services and the Japan education process.
            </p>
          </div>

          <div className="kec-faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`kec-faq-item ${activeFAQ === index ? "kec-active" : ""}`}>
                <button className="kec-faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <FaChevronDown className="kec-faq-icon" />
                </button>
                <div className="kec-faq-answer">
                  <div className="kec-faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="kec-cta-section">
        <div className="kec-container">
          <div className="kec-cta-content">
            <h2 className="kec-cta-title">Ready to Start Your Japan Journey?</h2>
            <p className="kec-cta-description">
              Get expert guidance and professional support for your Japanese education goals. Contact us today for a
              free consultation.
            </p>
            <div className="kec-cta-actions">
              <Link to="/contact" className="kec-btn kec-btn-primary">
                <span>Schedule Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/about" className="kec-btn kec-btn-outline">
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="kec-footer">
        <div className="kec-container">
          <div className="kec-footer-content">
            <div className="kec-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Your trusted partner for Japanese education and visa services in Nepal. Professional guidance with
                proven results since 2019.
              </p>
              <div className="kec-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kec-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kec-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kec-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="kec-footer-links">
              <div className="kec-footer-column">
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

              <div className="kec-footer-column">
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

              <div className="kec-footer-column">
                <h4>Contact Info</h4>
                <div className="kec-contact-info">
                  <div className="kec-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="kec-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="kec-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="kec-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Education Services in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
