"use client"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaArrowRight,
  FaPassport,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChild,
  FaPlaneDeparture,
  FaFileAlt,
  FaAward,
} from "react-icons/fa"
import "../styles/VisaAssistance.css"

const VisaAssistance = () => {
  const [isVisible, setIsVisible] = useState({})

  const typesRef = useRef(null)
  const processRef = useRef(null)
  const featuresRef = useRef(null)

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

    const sections = [typesRef, processRef, featuresRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `visa-section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const visaTypes = [
    {
      icon: FaGraduationCap,
      title: "Student Visa",
      description:
        "Comprehensive support for students seeking to pursue higher education or language studies in Japan.",
      features: [
        "University/School application",
        "Certificate of Eligibility (COE) assistance",
        "Financial documentation guidance",
        "Interview preparation",
      ],
      tag: "Study in Japan",
      color: "#1e3a8a",
    },
    {
      icon: FaBriefcase,
      title: "Work Visa",
      description: "Assistance for professionals and skilled workers looking for employment opportunities in Japan.",
      features: [
        "Job offer document verification",
        "Sponsorship letter guidance",
        "Employment contract review",
        "Category-specific visa advice",
      ],
      tag: "Work in Japan",
      color: "#f97316",
    },
    {
      icon: FaChild,
      title: "Dependent Visa",
      description: "Support for family members (spouses, children) of individuals residing in Japan on a valid visa.",
      features: [
        "Relationship proof documentation",
        "Financial support evidence",
        "Application for family members",
        "Extension and renewal guidance",
      ],
      tag: "Family Reunion",
      color: "#1e3a8a",
    },
    {
      icon: FaPlaneDeparture,
      title: "Tourist & Short-Term Visa",
      description: "Guidance for individuals planning short visits to Japan for tourism, business, or temporary stays.",
      features: [
        "Itinerary planning assistance",
        "Accommodation proof guidance",
        "Invitation letter support",
        "Short-term business visit advice",
      ],
      tag: "Short Stays",
      color: "#f97316",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation & Assessment",
      description:
        "We begin with a detailed consultation to understand your goals and assess your eligibility for various visa categories. We'll outline the best path forward.",
      icon: FaUsers,
    },
    {
      step: "02",
      title: "Document Preparation & Review",
      description:
        "Our experts guide you through gathering all necessary documents, ensuring each is accurate, complete, and meets embassy requirements to avoid delays.",
      icon: FaFileAlt,
    },
    {
      step: "03",
      title: "Application Submission & Follow-up",
      description:
        "We assist with the meticulous completion and submission of your visa application. We also handle all necessary follow-ups with the embassy.",
      icon: FaPassport,
    },
    {
      step: "04",
      title: "Interview Preparation & Approval",
      description:
        "If an interview is required, we provide comprehensive preparation. Upon approval, we guide you through the final steps for a smooth departure to Japan.",
      icon: FaCheckCircle,
    },
  ]

  const features = [
    {
      icon: FaCheckCircle,
      title: "High Success Rate",
      description: "Our proven methodologies and meticulous approach ensure a high success rate for visa approvals.",
      stats: "95% Success Rate",
    },
    {
      icon: FaClock,
      title: "Timely Processing",
      description: "We prioritize efficiency to ensure your visa application is processed as quickly as possible.",
      stats: "Fast Turnaround",
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Confidential",
      description: "Your personal information and documents are handled with the utmost security and confidentiality.",
      stats: "Data Protection",
    },
    {
      icon: FaAward,
      title: "Expert Guidance",
      description: "Benefit from the knowledge of our experienced visa counselors who stay updated on regulations.",
      stats: "Certified Counselors",
    },
    {
      icon: FaUsers,
      title: "Personalized Support",
      description: "Receive one-on-one attention and tailored advice for your unique visa application needs.",
      stats: "Dedicated Support",
    },
    {
      icon: FaPassport,
      title: "End-to-End Assistance",
      description:
        "From initial consultation to visa approval, we provide comprehensive support every step of the way.",
      stats: "Full Service",
    },
  ]

  const stats = [
    { number: "500+", label: "Visas Processed" },
    { number: "95%", label: "Approval Rate" },
    { number: "7+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="visa-page">
      {/* Hero Section */}
      <section className="visa-hero">
        <div className="visa-hero-background">
          <div className="visa-hero-overlay" />
        </div>
        <div className="visa-container">
          <div className="visa-hero-content">
            <div className="visa-hero-badge">
              <FaPassport />
              <span>Your Japan Visa Partner</span>
            </div>
            <h1 className="visa-hero-title">
              Seamless Visa
              <span className="visa-highlight"> Assistance for Japan</span>
            </h1>
            <p className="visa-hero-description">
              Navigate the complexities of Japanese visa applications with our expert guidance. We provide end-to-end
              support for student, work, dependent, and short-term visas, ensuring a smooth and successful process for
              your journey to Japan.
            </p>
            <div className="visa-hero-actions">
              <Link to="/contact" className="visa-btn visa-btn-primary">
                <span>Get Free Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="#visa-types" className="visa-btn visa-btn-outline">
                <FaPassport />
                <span>Explore Visa Types</span>
              </Link>
            </div>
            <div className="visa-hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="visa-stat-item">
                  <span className="visa-stat-number">{stat.number}</span>
                  <span className="visa-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="visa-types-section" id="visa-types" ref={typesRef}>
        <div className="visa-container">
          <div className="visa-section-header">
            <h2 className="visa-section-title">Explore Japanese Visa Categories</h2>
            <p className="visa-section-subtitle">
              We offer specialized assistance for various visa types, tailored to your specific purpose of stay in
              Japan.
            </p>
          </div>

          <div className="visa-types-grid">
            {visaTypes.map((type, index) => (
              <div
                key={index}
                className={`visa-type-card ${isVisible["visa-section-0"] ? "visa-visible" : ""}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <div className="visa-type-header">
                  <div className="visa-type-icon" style={{ backgroundColor: type.color }}>
                    <type.icon />
                  </div>
                  <div className="visa-type-tag">{type.tag}</div>
                </div>
                <div className="visa-type-content">
                  <h3 className="visa-type-title">{type.title}</h3>
                  <p className="visa-type-description">{type.description}</p>
                  <div className="visa-type-features">
                    <h4>Key Assistance:</h4>
                    <ul>
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <FaCheckCircle />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="visa-type-cta">
                    <span>Apply Now</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="visa-process-section" ref={processRef}>
        <div className="visa-container">
          <div className="visa-section-header">
            <h2 className="visa-section-title">Our Streamlined Visa Application Process</h2>
            <p className="visa-section-subtitle">
              We simplify every step of your visa application, from initial assessment to final approval, ensuring a
              hassle-free experience.
            </p>
          </div>

          <div className="visa-process-timeline">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`visa-process-step ${isVisible["visa-section-1"] ? "visa-visible" : ""}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <div className="visa-step-number">{step.step}</div>
                <div className="visa-step-content">
                  <div className="visa-step-icon">
                    <step.icon />
                  </div>
                  <h4 className="visa-step-title">{step.title}</h4>
                  <p className="visa-step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="visa-features-section" ref={featuresRef}>
        <div className="visa-container">
          <div className="visa-section-header">
            <h2 className="visa-section-title">Why Choose Kyushu Edu for Visa Assistance?</h2>
            <p className="visa-section-subtitle">
              Benefit from our expertise, personalized support, and commitment to making your Japan visa journey a
              success.
            </p>
          </div>

          <div className="visa-features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`visa-feature-card ${isVisible["visa-section-2"] ? "visa-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="visa-feature-icon">
                  <feature.icon />
                </div>
                <div className="visa-feature-content">
                  <h4 className="visa-feature-title">{feature.title}</h4>
                  <p className="visa-feature-description">{feature.description}</p>
                  <div className="visa-feature-stats">{feature.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="visa-cta-section">
        <div className="visa-container">
          <div className="visa-cta-content">
            <h2 className="visa-cta-title">Ready to Secure Your Japan Visa?</h2>
            <p className="visa-cta-description">
              Let our experienced team guide you through every step of the application process. Contact us today for a
              free consultation and take the first step towards your Japanese dream.
            </p>
            <div className="visa-cta-actions">
              <Link to="/contact" className="visa-btn visa-btn-primary">
                <span>Schedule Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/documentation" className="visa-btn visa-btn-outline">
                <span>View Document Requirements</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="visa-footer">
        <div className="visa-container">
          <div className="visa-footer-content">
            <div className="visa-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Your trusted partner for Japanese education and visa services in Nepal. Professional guidance with
                proven results since 2018.
              </p>
              <div className="visa-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visa-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visa-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visa-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="visa-footer-links">
              <div className="visa-footer-column">
                <h4>Visa Services</h4>
                <ul>
                  <li>
                    <Link to="/visa">Student Visa</Link>
                  </li>
                  <li>
                    <Link to="/visa">Work Visa</Link>
                  </li>
                  <li>
                    <Link to="/visa">Dependent Visa</Link>
                  </li>
                  <li>
                    <Link to="/visa">Short-Term Visa</Link>
                  </li>
                </ul>
              </div>

              <div className="visa-footer-column">
                <h4>Other Services</h4>
                <ul>
                  <li>
                    <Link to="/classes">Japanese Classes</Link>
                  </li>
                  <li>
                    <Link to="/documentation">Documentation</Link>
                  </li>
                  <li>
                    <Link to="/counseling">Career Counseling</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>

              <div className="visa-footer-column">
                <h4>Contact Info</h4>
                <div className="visa-contact-info">
                  <div className="visa-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="visa-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="visa-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="visa-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Education Services in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default VisaAssistance
