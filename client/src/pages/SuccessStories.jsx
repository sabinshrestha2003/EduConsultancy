"use client"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaUsers,
  FaAward,
  FaGlobe,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"
import Student1 from "../assets/student1.jpg"
import Student2 from "../assets/student2.jpg"
import "../styles/SuccessStories.css"

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState({})

  const heroRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

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

    const sections = [heroRef, testimonialsRef, ctaRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `suc-section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const stories = [
    {
      name: "Anita Sharma",
      role: "Software Engineer, Tokyo",
      photo: Student1 || "/placeholder.svg?height=120&width=120",
      quote:
        "Kyushu Edu Consultancy provided exceptional language training and seamless visa support. Their guidance was instrumental in helping me secure my working visa and start my career in Tokyo. Truly a life-changing experience!",
      rating: 5,
      achievement: "Secured Working Visa & N3",
    },
    {
      name: "Ramesh Thapa",
      role: "Student, Kyoto University",
      photo: Student2 || "/placeholder.svg?height=120&width=120",
      quote:
        "From N5 to N2, the Japanese classes at Kyushu Edu were incredibly comprehensive. The personalized attention from instructors and the detailed university application guidance made my dream of studying at Kyoto University a reality.",
      rating: 5,
      achievement: "Admitted to Kyoto University & N2",
    },
    {
      name: "Sita Rai",
      role: "Language Student, Osaka",
      photo: "/placeholder.svg?height=120&width=120", // Placeholder for additional story
      quote:
        "I started with no Japanese knowledge, and now I can confidently communicate. The cultural insights provided by Kyushu Edu were invaluable, making my transition to Osaka much smoother. Highly recommend their beginner courses!",
      rating: 4,
      achievement: "Achieved Conversational Fluency",
    },
    {
      name: "Deepak Gurung",
      role: "IT Professional, Fukuoka",
      photo: "/placeholder.svg?height=120&width=120", // Placeholder for additional story
      quote:
        "The career counseling and job placement assistance were top-notch. Kyushu Edu helped me navigate the Japanese job market and land a great position in Fukuoka. Their support extended beyond just language and visa.",
      rating: 5,
      achievement: "Successful Job Placement in Japan",
    },
  ]

  const stats = [
    { number: "500+", label: "Students Guided", icon: FaUsers },
    { number: "95%", label: "Visa Success Rate", icon: FaAward },
    { number: "10+", label: "Cities in Japan", icon: FaGlobe },
    { number: "100%", label: "Client Satisfaction", icon: FaHandshake },
  ]

  return (
    <div className="suc-page">
      {/* Hero Section */}
      <section className="suc-hero" ref={heroRef}>
        <div className="suc-hero-background">
          <div className="suc-hero-overlay" />
        </div>
        <div className="suc-container">
          <div className="suc-hero-content">
            <div className="suc-hero-badge">
              <FaStar />
              <span>Our Student Success Stories</span>
            </div>
            <h1 className="suc-hero-title">
              Inspiring Journeys,
              <span className="suc-highlight"> Real Achievements</span>
            </h1>
            <p className="suc-hero-description">
              Discover the transformative experiences of our students and clients who have successfully pursued their
              dreams of education and career in Japan with Kyushu Edu Consultancy.
            </p>
            <div className="suc-hero-actions">
              <Link to="/contact" className="suc-btn suc-btn-primary">
                <span>Start Your Story</span>
                <FaArrowRight />
              </Link>
              <Link to="#testimonials" className="suc-btn suc-btn-outline">
                <FaUsers />
                <span>Read Testimonials</span>
              </Link>
            </div>
            <div className="suc-hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="suc-stat-item">
                  <div className="suc-stat-icon">
                    <stat.icon />
                  </div>
                  <span className="suc-stat-number">{stat.number}</span>
                  <span className="suc-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="suc-testimonials-section" id="testimonials" ref={testimonialsRef}>
        <div className="suc-container">
          <div className="suc-section-header">
            <h2 className="suc-section-title">Hear From Our Successful Students</h2>
            <p className="suc-section-subtitle">
              Authentic testimonials from individuals who achieved their Japan dreams with our dedicated support.
            </p>
          </div>

          <div className="suc-testimonials-grid">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`suc-testimonial-card ${isVisible["suc-section-1"] ? "suc-visible" : ""}`}
                style={{ "--delay": `${index * 0.15}s` }}
              >
                <div className="suc-testimonial-header">
                  <img
                    src={story.photo || "/placeholder.svg"}
                    alt={`${story.name}'s photo`}
                    className="suc-testimonial-image"
                  />
                  <div className="suc-testimonial-info">
                    <h3 className="suc-testimonial-name">{story.name}</h3>
                    <p className="suc-testimonial-role">{story.role}</p>
                    <div className="suc-testimonial-rating">
                      {[...Array(story.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="suc-testimonial-quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="suc-testimonial-quote">"{story.quote}"</p>
                <div className="suc-testimonial-achievement">
                  <FaAward />
                  <span>Achievement: {story.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="suc-cta-section" ref={ctaRef}>
        <div className="suc-container">
          <div className="suc-cta-content">
            <h2 className="suc-cta-title">Ready to Write Your Own Success Story?</h2>
            <p className="suc-cta-description">
              Join our growing community of successful students. Contact us today for a free consultation and let us
              guide you towards your dreams in Japan.
            </p>
            <div className="suc-cta-actions">
              <Link to="/contact" className="suc-btn suc-btn-primary">
                <span>Schedule Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/classes" className="suc-btn suc-btn-outline">
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="suc-footer">
        <div className="suc-container">
          <div className="suc-footer-content">
            <div className="suc-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Your trusted partner for Japanese education and visa services in Nepal. Professional guidance with
                proven results since 2018.
              </p>
              <div className="suc-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="suc-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="suc-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="suc-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="suc-footer-links">
              <div className="suc-footer-column">
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

              <div className="suc-footer-column">
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

              <div className="suc-footer-column">
                <h4>Contact Info</h4>
                <div className="suc-contact-info">
                  <div className="suc-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="suc-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="suc-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="suc-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Education Services in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SuccessStories
