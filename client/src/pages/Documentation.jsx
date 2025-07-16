"use client"
import { useState, useEffect, useRef } from "react"
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
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaHandshake,
  FaAward,
  FaLanguage,
  FaClipboardList,
  FaStamp,
  FaInfoCircle,
} from "react-icons/fa"
import "../styles/Documentation.css"

const Documentation = () => {
  const [isVisible, setIsVisible] = useState({})

  const servicesRef = useRef(null)
  const documentsRef = useRef(null)
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

    const sections = [servicesRef, documentsRef, processRef, featuresRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `doc-section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const documentTypes = [
    {
      icon: FaPassport,
      title: "Visa Documentation",
      description:
        "Complete visa application support with expert document preparation, review, and embassy submission guidance.",
      items: [
        "Passport verification and processing",
        "Visa application form completion",
        "Supporting document compilation",
        "Embassy submission assistance",
      ],
      color: "#1e3a8a",
      timeline: "5-7 business days",
    },
    {
      icon: FaGraduationCap,
      title: "Educational Certificates",
      description:
        "Academic document verification, authentication, and translation services for Japanese educational institutions.",
      items: [
        "Academic transcript verification",
        "Degree certificate authentication",
        "Professional document translation",
        "Apostille and legalization services",
      ],
      color: "#f97316",
      timeline: "3-5 business days",
    },
    {
      icon: FaFileAlt,
      title: "Legal Documentation",
      description:
        "Professional handling of legal documents, official paperwork, and certification requirements for Japan.",
      items: [
        "Legal document translation",
        "Notarization services",
        "Document legalization process",
        "Official certification assistance",
      ],
      color: "#1e3a8a",
      timeline: "7-10 business days",
    },
  ]

  const requiredDocs = [
    {
      icon: FaPassport,
      title: "Valid Passport",
      description: "Original passport with minimum 6 months validity remaining",
      priority: "High",
      category: "Identity",
    },
    {
      icon: FaClipboardList,
      title: "Application Forms",
      description: "Completed visa and enrollment application forms with accurate information",
      priority: "High",
      category: "Application",
    },
    {
      icon: FaGraduationCap,
      title: "Educational Certificates",
      description: "Academic transcripts, degree certificates, and educational qualifications",
      priority: "High",
      category: "Academic",
    },
    {
      icon: FaFileAlt,
      title: "Financial Statements",
      description: "Bank statements, financial proof, and sponsorship documents",
      priority: "High",
      category: "Financial",
    },
    {
      icon: FaLanguage,
      title: "Language Certificates",
      description: "JLPT certificates or other Japanese language proficiency proof",
      priority: "Medium",
      category: "Language",
    },
    {
      icon: FaStamp,
      title: "Medical Records",
      description: "Health certificates, medical examination reports, and vaccination records",
      priority: "Medium",
      category: "Medical",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Meet with our experts to assess your documentation needs and create a personalized checklist.",
      icon: FaUsers,
    },
    {
      step: "02",
      title: "Document Collection",
      description: "Gather all required documents with our guidance and support throughout the process.",
      icon: FaClipboardList,
    },
    {
      step: "03",
      title: "Review & Verification",
      description: "Our team thoroughly reviews and verifies all documents for accuracy and completeness.",
      icon: FaCheckCircle,
    },
    {
      step: "04",
      title: "Processing & Submission",
      description: "Professional processing, translation, and submission to relevant authorities or institutions.",
      icon: FaHandshake,
    },
  ]

  const features = [
    {
      icon: FaCheckCircle,
      title: "100% Accuracy Guarantee",
      description: "Meticulous document review and verification process ensuring error-free submissions every time.",
      stats: "99.8% success rate",
    },
    {
      icon: FaClock,
      title: "Fast Processing Times",
      description: "Quick turnaround times without compromising quality, meeting all your deadline requirements.",
      stats: "3-7 day average",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Document Handling",
      description: "Confidential and secure processing of all sensitive documents with professional data protection.",
      stats: "Bank-level security",
    },
    {
      icon: FaAward,
      title: "Expert Translation Services",
      description: "Certified translators providing accurate translations accepted by Japanese institutions.",
      stats: "Certified translators",
    },
    {
      icon: FaHandshake,
      title: "End-to-End Support",
      description: "Complete assistance from initial consultation to final document submission and follow-up.",
      stats: "Full service support",
    },
    {
      icon: FaUsers,
      title: "Experienced Team",
      description: "Dedicated professionals with years of experience in Japanese documentation requirements.",
      stats: "7+ years experience",
    },
  ]

  const stats = [
    { number: "500+", label: "Documents Processed" },
    { number: "99.8%", label: "Success Rate" },
    { number: "3-7", label: "Days Processing" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="doc-page">
      {/* Hero Section */}
      <section className="doc-hero">
        <div className="doc-hero-background">
          <div className="doc-hero-overlay" />
        </div>
        <div className="doc-container">
          <div className="doc-hero-content">
            <div className="doc-hero-badge">
              <FaFileAlt />
              <span>Professional Documentation Services</span>
            </div>
            <h1 className="doc-hero-title">
              Expert Document Processing
              <span className="doc-highlight"> Made Simple</span>
            </h1>
            <p className="doc-hero-description">
              Streamline your Japan journey with our comprehensive documentation services. From visa applications to
              educational certifications, we handle every detail with precision and expertise, ensuring your documents
              meet all requirements.
            </p>
            <div className="doc-hero-actions">
              <Link to="/contact" className="doc-btn doc-btn-primary">
                <span>Get Started Today</span>
                <FaArrowRight />
              </Link>
              <Link to="#services" className="doc-btn doc-btn-outline">
                <FaFileAlt />
                <span>View Our Services</span>
              </Link>
            </div>
            <div className="doc-hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="doc-stat-item">
                  <span className="doc-stat-number">{stat.number}</span>
                  <span className="doc-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="doc-services-section" id="services" ref={servicesRef}>
        <div className="doc-container">
          <div className="doc-section-header">
            <h2 className="doc-section-title">Comprehensive Documentation Solutions</h2>
            <p className="doc-section-subtitle">
              Professional document preparation and processing services tailored specifically for your Japan journey
              requirements.
            </p>
          </div>

          <div className="doc-services-grid">
            {documentTypes.map((service, index) => (
              <div
                key={index}
                className={`doc-service-card ${isVisible["doc-section-0"] ? "doc-visible" : ""}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <div className="doc-service-header">
                  <div className="doc-service-icon" style={{ backgroundColor: service.color }}>
                    <service.icon />
                  </div>
                  <div className="doc-service-timeline">
                    <FaClock />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <div className="doc-service-content">
                  <h3 className="doc-service-title">{service.title}</h3>
                  <p className="doc-service-description">{service.description}</p>

                  <div className="doc-service-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <FaCheckCircle />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="doc-service-cta">
                    <span>Get Started</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="doc-documents-section" ref={documentsRef}>
        <div className="doc-container">
          <div className="doc-section-header">
            <h2 className="doc-section-title">Essential Document Checklist</h2>
            <p className="doc-section-subtitle">
              Complete overview of documents typically required for Japan visa and study applications, organized by
              priority and category.
            </p>
          </div>

          <div className="doc-documents-grid">
            {requiredDocs.map((doc, index) => (
              <div
                key={index}
                className={`doc-document-card ${isVisible["doc-section-1"] ? "doc-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="doc-document-header">
                  <div className="doc-document-icon">
                    <doc.icon />
                  </div>
                  <div className="doc-document-badges">
                    <span className={`doc-priority ${doc.priority.toLowerCase()}`}>{doc.priority}</span>
                    <span className="doc-category">{doc.category}</span>
                  </div>
                </div>
                <div className="doc-document-content">
                  <h4 className="doc-document-title">{doc.title}</h4>
                  <p className="doc-document-description">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="doc-documents-note">
            <div className="doc-note-content">
              <div className="doc-note-icon">
                <FaInfoCircle />
              </div>
              <div className="doc-note-text">
                <h3>Important Information</h3>
                <p>
                  Document requirements may vary based on your specific situation, destination, and type of application.
                  Our experienced team will provide you with a personalized checklist and guide you through each step
                  during your consultation at our Chabahil office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="doc-process-section" ref={processRef}>
        <div className="doc-container">
          <div className="doc-section-header">
            <h2 className="doc-section-title">Our Documentation Process</h2>
            <p className="doc-section-subtitle">
              A streamlined, step-by-step approach ensuring your documents are processed efficiently and accurately.
            </p>
          </div>

          <div className="doc-process-timeline">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`doc-process-step ${isVisible["doc-section-2"] ? "doc-visible" : ""}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <div className="doc-step-number">{step.step}</div>
                <div className="doc-step-content">
                  <div className="doc-step-icon">
                    <step.icon />
                  </div>
                  <h4 className="doc-step-title">{step.title}</h4>
                  <p className="doc-step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="doc-features-section" ref={featuresRef}>
        <div className="doc-container">
          <div className="doc-section-header">
            <h2 className="doc-section-title">Why Choose Our Documentation Services?</h2>
            <p className="doc-section-subtitle">
              Experience the difference with our proven expertise, professional handling, and commitment to excellence.
            </p>
          </div>

          <div className="doc-features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`doc-feature-card ${isVisible["doc-section-3"] ? "doc-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="doc-feature-icon">
                  <feature.icon />
                </div>
                <div className="doc-feature-content">
                  <h4 className="doc-feature-title">{feature.title}</h4>
                  <p className="doc-feature-description">{feature.description}</p>
                  <div className="doc-feature-stats">{feature.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="doc-cta-section">
        <div className="doc-container">
          <div className="doc-cta-content">
            <h2 className="doc-cta-title">Ready to Get Your Documents Processed?</h2>
            <p className="doc-cta-description">
              Don't let paperwork delays hold back your Japan dreams. Our expert team is ready to handle all your
              documentation needs with precision and care. Visit our Chabahil office for a comprehensive consultation.
            </p>
            <div className="doc-cta-actions">
              <Link to="/contact" className="doc-btn doc-btn-primary">
                <span>Schedule Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/about" className="doc-btn doc-btn-outline">
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="doc-footer">
        <div className="doc-container">
          <div className="doc-footer-content">
            <div className="doc-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Your trusted partner for Japanese education and visa services in Nepal. Professional guidance with
                proven results since 2018.
              </p>
              <div className="doc-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="doc-footer-links">
              <div className="doc-footer-column">
                <h4>Documentation Services</h4>
                <ul>
                  <li>
                    <Link to="/documentation">Visa Documentation</Link>
                  </li>
                  <li>
                    <Link to="/documentation">Educational Certificates</Link>
                  </li>
                  <li>
                    <Link to="/documentation">Legal Documentation</Link>
                  </li>
                  <li>
                    <Link to="/documentation">Translation Services</Link>
                  </li>
                </ul>
              </div>

              <div className="doc-footer-column">
                <h4>Other Services</h4>
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
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>

              <div className="doc-footer-column">
                <h4>Contact Info</h4>
                <div className="doc-contact-info">
                  <div className="doc-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="doc-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="doc-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="doc-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Education Services in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Documentation
