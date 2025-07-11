"use client"

import { Link } from "react-router-dom"
import "../styles/Documentation.css"
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
    <div className="doc-page">
      {/* Hero Section */}
      <section className="doc-hero">
        <div className="doc-container doc-hero-content">
          <div className="doc-hero-badge">
            <span>📋 Documentation Services</span>
          </div>
          <h1 className="doc-hero-title">
            Expert Document
            <br />
            <span className="doc-accent-text">Assistance</span>
          </h1>
          <p className="doc-hero-description">
            Simplify your paperwork with our comprehensive documentation services. From visa applications to educational
            certifications, we handle it all with precision and care.
          </p>
          <div className="doc-hero-buttons">
            <Link to="/contact" className="doc-btn doc-btn-primary">
              Get Started
              <FaArrowRight />
            </Link>
            <Link to="#services" className="doc-btn doc-btn-secondary">
              Our Services
              <FaFileAlt />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="doc-services-section" id="services">
        <div className="doc-container">
          <div className="doc-section-header">
            <span className="doc-section-badge">Our Services</span>
            <h2 className="doc-section-title">Comprehensive Documentation Solutions</h2>
            <p className="doc-section-subtitle">
              Professional document preparation and processing services tailored for your Japan journey
            </p>
          </div>
          <div className="doc-services-grid">
            {documentTypes.map((service, index) => (
              <div key={index} className="doc-service-card">
                <div className="doc-service-icon">
                  <service.icon />
                </div>
                <h3 className="doc-service-title">{service.title}</h3>
                <p className="doc-service-description">{service.description}</p>
                <div className="doc-service-items">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="doc-service-item">
                      <FaCheckCircle className="doc-check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="doc-documents-section">
        <div className="doc-container">
          <div className="doc-section-header">
            <span className="doc-section-badge">Required Documents</span>
            <h2 className="doc-section-title">Essential Paperwork Checklist</h2>
            <p className="doc-section-subtitle">
              Complete list of documents typically required for Japan visa and study applications
            </p>
          </div>
          <div className="doc-documents-grid">
            {requiredDocs.map((doc, index) => (
              <div key={index} className="doc-document-card">
                <div className="doc-document-icon">{doc.icon}</div>
                <h4 className="doc-document-title">{doc.title}</h4>
                <p className="doc-document-description">{doc.description}</p>
              </div>
            ))}
          </div>
          <div className="doc-documents-note">
            <div className="doc-note-content">
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
      <section className="doc-features-section">
        <div className="doc-container">
          <div className="doc-section-header">
            <span className="doc-section-badge">Why Choose Us</span>
            <h2 className="doc-section-title">Professional Excellence</h2>
            <p className="doc-section-subtitle">
              Experience the difference with our proven documentation expertise
            </p>
          </div>
          <div className="doc-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="doc-feature-card">
                <div className="doc-feature-icon">
                  <feature.icon />
                </div>
                <h4 className="doc-feature-title">{feature.title}</h4>
                <p className="doc-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="doc-cta-section">
        <div className="doc-container">
          <div className="doc-cta-content">
            <div className="doc-cta-badge">
              <span>Ready to get started?</span>
            </div>
            <h2>Let Us Handle Your Documentation</h2>
            <p>
              Visit our Chabahil office for a comprehensive consultation and personalized document preparation
              assistance
            </p>
            <div className="doc-cta-buttons">
              <Link to="/contact" className="doc-btn doc-btn-primary">
                Schedule Consultation
                <FaArrowRight />
              </Link>
              <Link to="/about" className="doc-btn doc-btn-secondary">
                Learn More
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
              <p>Empowering your journey to Japan with expert documentation and comprehensive support.</p>
              <div className="doc-social-links">
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
            <div className="doc-footer-contact">
              <h4>Contact Info</h4>
              <div className="doc-contact-item">
                <span>📧</span>
                <span>kyushuedu@gmail.com</span>
              </div>
              <div className="doc-contact-item">
                <span>📞</span>
                <span>+977-14581248</span>
              </div>
              <div className="doc-contact-item">
                <span>📍</span>
                <span>Chabahil, Kathmandu</span>
              </div>
            </div>
            <div className="doc-footer-links">
              <h4>Quick Links</h4>
              <Link to="/classes">Japanese Classes</Link>
              <Link to="/visa">Visa Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="doc-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Documentation