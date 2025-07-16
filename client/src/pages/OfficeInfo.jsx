"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  MapPin,
  Clock,
  Briefcase,
  Users,
  Building,
  Lightbulb,
  CalendarDays,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react"
import "../styles/OfficeInfo.css"

const OfficeInfo = () => {
  const [activeFAQ, setActiveFAQ] = useState(null)
  const sectionRefs = useRef([])

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up-active")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "What should I bring to a consultation?",
      answer:
        "Bring your passport, educational certificates, and any visa-related documents. Our team will guide you further during your visit!",
    },
    {
      question: "Can I get visa help on my first visit?",
      answer: "Yes, we offer initial visa guidance. Visit us to start the process and get personalized support.",
    },
    {
      question: "Do I need an appointment?",
      answer: "While walk-ins are welcome, booking an appointment via our contact page ensures priority service.",
    },
  ]

  return (
    <div className="office-page">
      {/* Office Info Header */}
      <section className="office-hero fade-in-up">
        <div className="office-container office-hero-content">
          <div className="office-hero-badge">
            <span>
              <Building size={16} /> Office Information
            </span>
          </div>
          <h1 className="office-hero-title">
            Our <span className="office-accent-text">Chabahil</span> Office
          </h1>
          <p className="office-hero-description">
            Your gateway to Japan starts here. Visit us for personalized guidance and expert solutions.
          </p>
          <div className="office-hero-actions">
            <Link to="/contact" className="office-btn office-btn-primary">
              <CalendarDays size={18} /> Schedule a Visit
            </Link>
            <Link to="/location" className="office-btn office-btn-secondary">
              <MapPin size={18} /> Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Office Info Content */}
      <section className="office-content">
        <div className="office-container">
          <div className="office-content-sections">
            <div className="office-section fade-in-up" ref={(el) => (sectionRefs.current[0] = el)}>
              <h2>
                <MapPin size={24} className="section-icon" /> Our Location
              </h2>
              <p>
                Our office is conveniently located in Chabahil, Kathmandu, making it easily accessible for all students.
                We encourage you to visit us for a direct and personalized consultation.
              </p>
              <ul className="office-list">
                <li>
                  <MapPin size={18} /> <strong>Address:</strong> Chabahil, Kathmandu, Nepal (5 minutes from Chabahil
                  Chowk)
                </li>
                <li>
                  <Briefcase size={18} /> <strong>Accessibility:</strong> Easily accessible by public transport; ample
                  parking available nearby.
                </li>
              </ul>
              <Link to="/location" className="office-btn office-btn-primary">
                View on Map
              </Link>
            </div>

            <div className="office-section fade-in-up" ref={(el) => (sectionRefs.current[1] = el)}>
              <h2>
                <Clock size={24} className="section-icon" /> Office Hours
              </h2>
              <p>
                Plan your visit during our operational hours to meet with our dedicated team of consultants and
                instructors.
              </p>
              <ul className="office-list">
                <li>
                  <Clock size={18} /> <strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM
                </li>
                <li>
                  <Clock size={18} /> <strong>Saturday:</strong> 10:00 AM – 2:00 PM
                </li>
                <li>
                  <Clock size={18} /> <strong>Sunday:</strong> Closed
                </li>
              </ul>
            </div>

            <div className="office-section fade-in-up" ref={(el) => (sectionRefs.current[2] = el)}>
              <h2>
                <Briefcase size={24} className="section-icon" /> Services Offered
              </h2>
              <p>
                At our Chabahil office, you can access a wide range of expert services designed to facilitate your
                journey to Japan:
              </p>
              <ul className="office-list">
                <li>
                  <Users size={18} /> <strong>Japanese Language Consultations:</strong> From JLPT N5 to advanced levels,
                  get tailored advice.
                </li>
                <li>
                  <Lightbulb size={18} /> <strong>Document Review & Visa Assistance:</strong> Comprehensive support for
                  your visa applications and necessary paperwork.
                </li>
                <li>
                  <CalendarDays size={18} /> <strong>Personalized Guidance:</strong> One-on-one sessions to discuss your
                  academic and career goals in Japan.
                </li>
              </ul>
            </div>

            <div className="office-section fade-in-up" ref={(el) => (sectionRefs.current[3] = el)}>
              <h2>
                <Building size={24} className="section-icon" /> What to Expect During Your Visit
              </h2>
              <p>
                When you step into our Chabahil office, you can look forward to a welcoming environment and
                comprehensive support:
              </p>
              <ul className="office-list">
                <li>
                  <Users size={18} /> <strong>Meet Our Experts:</strong> Engage directly with our experienced
                  instructors and consultants.
                </li>
                <li>
                  <Building size={18} /> <strong>Explore Facilities:</strong> Get a glimpse of our modern classrooms and
                  resource center.
                </li>
                <li>
                  <Lightbulb size={18} /> <strong>Get All Your Questions Answered:</strong> Receive clear, concise
                  answers to all your inquiries in person.
                </li>
              </ul>
              <p className="mt-4">
                We highly recommend scheduling a visit to get the most out of our services. Drop by today!
              </p>
              <Link to="/contact" className="office-btn office-btn-primary">
                Schedule Your Consultation
              </Link>
            </div>

            <div className="office-section fade-in-up" ref={(el) => (sectionRefs.current[4] = el)}>
              <h2>
                <Lightbulb size={24} className="section-icon" /> Frequently Asked Questions
              </h2>
              <p>
                Find quick answers to common questions below. For more detailed assistance, we encourage you to visit
                our office.
              </p>
              <div className="office-faq-content">
                {faqs.map((item, index) => (
                  <div key={index} className="office-faq-item">
                    <div className="office-faq-question" onClick={() => toggleFAQ(index)}>
                      {item.question}{" "}
                      <ChevronDown size={20} className={`office-faq-toggle ${activeFAQ === index ? "open" : ""}`} />
                    </div>
                    <div className={`office-faq-answer ${activeFAQ === index ? "open" : ""}`}>{item.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="office-footer">
        <div className="office-container">
          <div className="office-footer-content">
            <div className="office-footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="office-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-social-link"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-social-link"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-social-link"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="office-footer-section">
              <h3>Contact Us</h3>
              <div className="office-contact-info">
                <p>
                  <Mail size={18} /> kyushuedu@gmail.com
                </p>
                <p>
                  <Phone size={18} /> +014581248
                </p>
                <p>
                  <MapPin size={18} /> Chabahil, Kathmandu, Nepal
                </p>
              </div>
            </div>
            <div className="office-footer-section">
              <h3>Quick Links</h3>
              <div className="office-footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="office-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OfficeInfo
