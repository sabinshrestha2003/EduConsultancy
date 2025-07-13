"use client"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaArrowRight,
  FaGraduationCap,
  FaBook,
  FaStar,
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaAward,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaLanguage,
  FaCertificate,
} from "react-icons/fa"
import "../styles/ExploreClasses.css"

const ExploreClasses = () => {
  const [isVisible, setIsVisible] = useState({})

  const classesRef = useRef(null)
  const featuresRef = useRef(null)
  const scheduleRef = useRef(null)

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

    const sections = [classesRef, featuresRef, scheduleRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `classes-section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const classLevels = [
    {
      icon: FaGraduationCap,
      title: "Beginner Level",
      subtitle: "N5 - N4 JLPT Preparation",
      description:
        "Perfect for new learners starting their Japanese journey. Master the fundamentals with our structured approach.",
      features: [
        "Basic Grammar & Vocabulary",
        "Hiragana & Katakana",
        "Essential Conversation",
        "Cultural Introduction",
      ],
      duration: "3-6 months",
      students: "150+",
      price: "Starting from NPR 8,000",
      level: "N5-N4",
      color: "#1e3a8a",
    },
    {
      icon: FaBook,
      title: "Intermediate Level",
      subtitle: "N3 - N2 JLPT Preparation",
      description:
        "Build confidence with advanced grammar, conversation practice, and comprehensive reading comprehension.",
      features: ["Complex Grammar Patterns", "Kanji Mastery (500+)", "Conversation Practice", "Reading Comprehension"],
      duration: "6-9 months",
      students: "120+",
      price: "Starting from NPR 12,000",
      level: "N3-N2",
      color: "#f97316",
    },
    {
      icon: FaStar,
      title: "Advanced Level",
      subtitle: "N1 JLPT Preparation",
      description:
        "Achieve native-level fluency with business Japanese, advanced topics, and comprehensive N1 preparation.",
      features: ["Business Japanese", "Advanced Kanji (1000+)", "Native Fluency", "Professional Communication"],
      duration: "9-12 months",
      students: "80+",
      price: "Starting from NPR 15,000",
      level: "N1",
      color: "#1e3a8a",
    },
  ]

  const scheduleInfo = [
    {
      icon: FaClock,
      title: "Weekday Evening Classes",
      time: "6:00 PM – 8:00 PM",
      days: "Monday to Friday",
      description: "Perfect for working professionals and students with daytime commitments",
      availability: "Available",
    },
    {
      icon: FaCalendarAlt,
      title: "Weekend Intensive",
      time: "10:00 AM – 1:00 PM",
      days: "Saturday & Sunday",
      description: "Ideal for those with busy weekday schedules who prefer intensive learning",
      availability: "Limited Seats",
    },
  ]

  const features = [
    {
      icon: FaChalkboardTeacher,
      title: "Expert Native Instructors",
      description:
        "Learn from certified Japanese language teachers with extensive teaching experience and cultural knowledge.",
    },
    {
      icon: FaUsers,
      title: "Small Class Sizes",
      description:
        "Maximum 12 students per class ensuring personalized attention and interactive learning environment.",
    },
    {
      icon: FaAward,
      title: "JLPT Preparation",
      description: "Comprehensive preparation for all JLPT levels with regular mock tests and performance tracking.",
    },
    {
      icon: FaLanguage,
      title: "Interactive Learning",
      description: "Modern teaching methods with multimedia resources, conversation practice, and cultural immersion.",
    },
    {
      icon: FaCertificate,
      title: "Certification Support",
      description: "Official certificates upon completion and guidance for international language proficiency tests.",
    },
    {
      icon: FaCheckCircle,
      title: "Flexible Scheduling",
      description: "Multiple time slots and makeup classes available to accommodate your busy lifestyle.",
    },
  ]

  const stats = [
    { number: "500+", label: "Students Taught" },
    { number: "95%", label: "JLPT Pass Rate" },
    { number: "7+", label: "Years Experience" },
    { number: "12", label: "Max Class Size" },
  ]

  return (
    <div className="exp-page">
      {/* Hero Section */}
      <section className="exp-hero">
        <div className="exp-hero-background">
          <div className="exp-hero-overlay" />
        </div>
        <div className="exp-container">
          <div className="exp-hero-content">
            <div className="exp-hero-badge">
              <FaGraduationCap />
              <span>Japanese Language Classes</span>
            </div>
            <h1 className="exp-hero-title">
              Master Japanese Language
              <span className="exp-highlight"> From Beginner to Fluent</span>
            </h1>
            <p className="exp-hero-description">
              Discover our comprehensive Japanese language courses designed for all skill levels. From absolute beginner
              to advanced fluency, we provide expert instruction and proven methodologies to help you achieve your
              language learning goals.
            </p>
            <div className="exp-hero-actions">
              <Link to="/contact" className="exp-btn exp-btn-primary">
                <span>Start Learning Today</span>
                <FaArrowRight />
              </Link>
              <Link to="#classes" className="exp-btn exp-btn-outline">
                <FaBook />
                <span>View All Courses</span>
              </Link>
            </div>
            <div className="exp-hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="exp-stat-item">
                  <span className="exp-stat-number">{stat.number}</span>
                  <span className="exp-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="exp-classes-section" id="classes" ref={classesRef}>
        <div className="exp-container">
          <div className="exp-section-header">
            <h2 className="exp-section-title">Choose Your Learning Path</h2>
            <p className="exp-section-subtitle">
              From absolute beginner to advanced fluency, we have the perfect course tailored to your Japanese learning
              journey and goals.
            </p>
          </div>

          <div className="exp-classes-grid">
            {classLevels.map((classLevel, index) => (
              <div
                key={index}
                className={`exp-class-card ${isVisible["classes-section-0"] ? "exp-visible" : ""}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <div className="exp-class-header">
                  <div className="exp-class-icon" style={{ backgroundColor: classLevel.color }}>
                    <classLevel.icon />
                  </div>
                  <div className="exp-class-level">{classLevel.level}</div>
                </div>

                <div className="exp-class-content">
                  <h3 className="exp-class-title">{classLevel.title}</h3>
                  <p className="exp-class-subtitle">{classLevel.subtitle}</p>
                  <p className="exp-class-description">{classLevel.description}</p>

                  <div className="exp-class-features">
                    <h4>What You'll Learn:</h4>
                    <ul>
                      {classLevel.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <FaCheckCircle />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="exp-class-details">
                    <div className="exp-detail-item">
                      <FaClock />
                      <span>Duration: {classLevel.duration}</span>
                    </div>
                    <div className="exp-detail-item">
                      <FaUsers />
                      <span>{classLevel.students} students enrolled</span>
                    </div>
                    <div className="exp-detail-item">
                      <FaAward />
                      <span>{classLevel.price}</span>
                    </div>
                  </div>

                  <Link to="/contact" className="exp-class-cta">
                    <span>Enroll Now</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="exp-features-section" ref={featuresRef}>
        <div className="exp-container">
          <div className="exp-section-header">
            <h2 className="exp-section-title">Why Choose Our Japanese Classes?</h2>
            <p className="exp-section-subtitle">
              Experience the difference with our proven teaching methods, expert instructors, and comprehensive support
              system.
            </p>
          </div>

          <div className="exp-features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`exp-feature-card ${isVisible["classes-section-1"] ? "exp-visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="exp-feature-icon">
                  <feature.icon />
                </div>
                <div className="exp-feature-content">
                  <h4 className="exp-feature-title">{feature.title}</h4>
                  <p className="exp-feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="exp-schedule-section" ref={scheduleRef}>
        <div className="exp-container">
          <div className="exp-section-header">
            <h2 className="exp-section-title">Flexible Class Schedules</h2>
            <p className="exp-section-subtitle">
              Choose the schedule that works best for your lifestyle and commitments. We offer multiple time slots to
              accommodate everyone.
            </p>
          </div>

          <div className="exp-schedule-grid">
            {scheduleInfo.map((schedule, index) => (
              <div
                key={index}
                className={`exp-schedule-card ${isVisible["classes-section-2"] ? "exp-visible" : ""}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <div className="exp-schedule-icon">
                  <schedule.icon />
                </div>
                <div className="exp-schedule-content">
                  <h4 className="exp-schedule-title">{schedule.title}</h4>
                  <div className="exp-schedule-time">{schedule.time}</div>
                  <div className="exp-schedule-days">{schedule.days}</div>
                  <p className="exp-schedule-description">{schedule.description}</p>
                  <div
                    className={`exp-availability ${schedule.availability === "Available" ? "available" : "limited"}`}
                  >
                    {schedule.availability}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="exp-schedule-cta">
            <div className="exp-cta-content">
              <h3>Ready to Begin Your Japanese Learning Journey?</h3>
              <p>
                Visit our Chabahil office to meet our expert instructors, tour our facilities, and find the perfect
                class schedule that fits your lifestyle!
              </p>
              <div className="exp-cta-buttons">
                <Link to="/contact" className="exp-btn exp-btn-primary">
                  <span>Schedule Free Consultation</span>
                  <FaArrowRight />
                </Link>
                <Link to="/about" className="exp-btn exp-btn-outline">
                  <span>Meet Our Instructors</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="exp-final-cta">
        <div className="exp-container">
          <div className="exp-final-cta-content">
            <h2 className="exp-final-cta-title">Start Your Japanese Learning Journey Today</h2>
            <p className="exp-final-cta-description">
              Join hundreds of successful students who have achieved their Japanese language goals with our expert
              guidance and proven teaching methods.
            </p>
            <div className="exp-final-cta-actions">
              <Link to="/contact" className="exp-btn exp-btn-primary">
                <span>Get Free Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/about" className="exp-btn exp-btn-outline">
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="exp-footer">
        <div className="exp-container">
          <div className="exp-footer-content">
            <div className="exp-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Empowering your journey to Japan with expert language education and comprehensive support. Your success
                is our mission.
              </p>
              <div className="exp-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="exp-footer-links">
              <div className="exp-footer-column">
                <h4>Our Courses</h4>
                <ul>
                  <li>
                    <Link to="/classes">Beginner Japanese (N5-N4)</Link>
                  </li>
                  <li>
                    <Link to="/classes">Intermediate Japanese (N3-N2)</Link>
                  </li>
                  <li>
                    <Link to="/classes">Advanced Japanese (N1)</Link>
                  </li>
                  <li>
                    <Link to="/classes">JLPT Preparation</Link>
                  </li>
                </ul>
              </div>

              <div className="exp-footer-column">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link to="/visa">Visa Services</Link>
                  </li>
                  <li>
                    <Link to="/counseling">Career Counseling</Link>
                  </li>
                  <li>
                    <Link to="/support">Student Support</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>

              <div className="exp-footer-column">
                <h4>Contact Info</h4>
                <div className="exp-contact-info">
                  <div className="exp-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="exp-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="exp-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="exp-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Language Education in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ExploreClasses
