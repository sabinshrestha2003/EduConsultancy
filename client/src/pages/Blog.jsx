"use client"
import { useState, useEffect, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaArrowRight,
  FaNewspaper, // New icon for blog hero
  FaBookOpen, // Icon for article cards
  FaLightbulb, // Icon for article cards
  FaPencilAlt, // For stats (Expert Authors)
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock, // For stats (Years Blogging)
  FaPassport, // For visa tips article
} from "react-icons/fa"
import "../styles/Blog.css"

const Blog = () => {
  const { slug } = useParams()
  const [isVisible, setIsVisible] = useState({})

  const heroRef = useRef(null)
  const articlesListRef = useRef(null)
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

    const sections = [heroRef, articlesListRef, ctaRef]
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.id = `blog-section-${index}`
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const articles = [
    {
      slug: "top-cities",
      title: "Top Cities for Students in Japan",
      excerpt:
        "Discover the best cities to study in Japan, from bustling Tokyo to historic Kyoto and vibrant Osaka. Find your ideal study destination!",
      content: (
        <>
          <p>
            Japan offers a variety of vibrant cities perfect for international students. Each city provides unique
            opportunities and experiences. Here are some of the top picks:
          </p>
          <h3>Tokyo: The Dynamic Capital</h3>
          <ul>
            <li>
              <strong>World-Class Universities:</strong> Home to prestigious institutions like the University of Tokyo,
              Waseda University, and Keio University.
            </li>
            <li>
              <strong>Career Opportunities:</strong> A global economic hub with numerous internship and job prospects in
              various industries.
            </li>
            <li>
              <strong>Vibrant Culture:</strong> Endless entertainment, dining, and cultural experiences, from
              traditional temples to futuristic districts.
            </li>
          </ul>
          <h3>Osaka: The Friendly Metropolis</h3>
          <ul>
            <li>
              <strong>Affordable Living:</strong> Generally lower cost of living compared to Tokyo, making it an
              attractive option for students.
            </li>
            <li>
              <strong>Rich Food Scene:</strong> Known as "Japan's Kitchen," offering delicious local cuisine and a
              lively nightlife.
            </li>
            <li>
              <strong>Excellent Universities:</strong> Features reputable universities such as Osaka University and
              Osaka Metropolitan University.
            </li>
          </ul>
          <h3>Kyoto: The Cultural Heart</h3>
          <ul>
            <li>
              <strong>Historical Significance:</strong> Immerse yourself in traditional Japanese culture with countless
              temples, shrines, and gardens.
            </li>
            <li>
              <strong>Specialized Studies:</strong> Ideal for students interested in Japanese history, arts, and
              traditional crafts.
            </li>
            <li>
              <strong>Serene Environment:</strong> Offers a more relaxed pace of life compared to Tokyo or Osaka,
              perfect for focused study.
            </li>
          </ul>
          <p>
            Choosing the right city depends on your academic goals, budget, and lifestyle preferences. Visit our
            Chabahil office for personalized advice on choosing the right one!
          </p>
        </>
      ),
      date: "July 10, 2025",
      category: "Study Abroad",
      icon: FaBookOpen,
    },
    {
      slug: "jlpt-n5",
      title: "What is JLPT N5? Your First Step to Japan",
      excerpt:
        "The Japanese Language Proficiency Test (JLPT) N5 is the entry-level exam for non-native speakers. Learn why it's essential and how we can help you prepare.",
      content: (
        <>
          <h2>What is JLPT N5? Your First Step to Japan</h2>
          <p>
            The Japanese Language Proficiency Test (JLPT) N5 is the entry-level examination for non-native speakers of
            Japanese. It assesses basic reading and listening skills, making it a crucial first step for anyone planning
            to study or work in Japan.
          </p>
          <h3>Key Aspects of JLPT N5:</h3>
          <ul>
            <li>
              <strong>Vocabulary:</strong> Covers approximately 800 basic vocabulary words.
            </li>
            <li>
              <strong>Kanji:</strong> Requires knowledge of about 100 fundamental kanji characters.
            </li>
            <li>
              <strong>Grammar:</strong> Focuses on basic grammatical structures used in everyday conversations.
            </li>
            <li>
              <strong>Listening:</strong> Tests comprehension of simple, short conversations and information.
            </li>
          </ul>
          <p>
            Achieving JLPT N5 demonstrates your foundational understanding of Japanese, which is often a prerequisite
            for entry-level language schools and some vocational programs in Japan. It also builds a strong base for
            further language learning.
          </p>
          <p>
            Our Chabahil classes offer tailored preparation to help you pass! We provide structured lessons, practice
            tests, and expert guidance to ensure you are fully prepared for the exam.
          </p>
          <p>
            Ready to start your Japanese language journey? Contact us or visit our office for a free assessment and
            learn more about our JLPT N5 preparation courses.
          </p>
        </>
      ),
      date: "July 5, 2025",
      category: "Language Learning",
      icon: FaLightbulb,
    },
    {
      slug: "visa-application-tips",
      title: "Top Tips for a Smooth Japan Visa Application",
      excerpt:
        "Applying for a Japan visa can be complex. Follow these expert tips to ensure a smooth and successful application process.",
      content: (
        <>
          <p>
            Applying for a Japan visa requires careful attention to detail. Here are some top tips from our experts to
            help you navigate the process smoothly:
          </p>
          <h3>1. Start Early</h3>
          <p>
            Visa processing can take time, especially during peak seasons. Begin gathering your documents and submitting
            your application well in advance of your intended travel date.
          </p>
          <h3>2. Gather All Required Documents</h3>
          <p>
            Ensure you have all necessary documents, including your passport, Certificate of Eligibility (if
            applicable), financial statements, educational certificates, and any other supporting documents. Missing
            documents are a common cause of delays.
          </p>
          <h3>3. Accuracy is Key</h3>
          <p>
            Double-check all information on your application forms for accuracy. Any discrepancies or errors can lead to
            rejection. Our team can help you review your forms meticulously.
          </p>
          <h3>4. Financial Proof</h3>
          <p>
            Provide clear and sufficient proof of funds to cover your expenses in Japan. This is a critical requirement
            for most long-term visas, especially student visas.
          </p>
          <h3>5. Prepare for Interview (if required)</h3>
          <p>
            If an interview is part of your visa process, be prepared to discuss your purpose of visit, financial
            situation, and ties to your home country. We offer interview preparation sessions to boost your confidence.
          </p>
          <p>
            For personalized assistance and to ensure your application is flawless, visit our Chabahil office. Our visa
            experts are here to guide you every step of the way.
          </p>
        </>
      ),
      date: "June 28, 2025",
      category: "Visa Services",
      icon: FaPassport,
    },
  ]

  const article = articles.find((a) => a.slug === slug)
  const isArticleView = !!slug

  const blogStats = [
    { number: "15+", label: "Articles Published", icon: FaNewspaper },
    { number: "5+", label: "Topics Covered", icon: FaBookOpen },
    { number: "3+", label: "Expert Authors", icon: FaPencilAlt },
    { number: "2+", label: "Years Blogging", icon: FaClock },
  ]

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero" ref={heroRef}>
        <div className="blog-hero-background">
          <div className="blog-hero-overlay" />
        </div>
        <div className="blog-container">
          <div className="blog-hero-content">
            <div className="blog-hero-badge">
              <FaNewspaper />
              <span>{isArticleView ? "Article Details" : "Our Blog"}</span>
            </div>
            <h1 className="blog-hero-title">
              {isArticleView ? article.title : "Insights & Guides for Your Japan Journey"}
              <span className="blog-highlight">{isArticleView ? "" : " to Japan"}</span>
            </h1>
            <p className="blog-hero-description">
              {isArticleView
                ? "Dive deep into this article for valuable insights and expert advice on your journey to Japan."
                : "Explore our comprehensive collection of articles, guides, and tips designed to help you navigate your education and career path in Japan."}
            </p>
            <div className="blog-hero-actions">
              {!isArticleView && (
                <Link to="/contact" className="blog-btn blog-btn-primary">
                  <span>Get Free Consultation</span>
                  <FaArrowRight />
                </Link>
              )}
              {isArticleView ? (
                <Link to="/blog" className="blog-btn blog-btn-outline">
                  <span>Back to All Articles</span>
                  <FaArrowRight />
                </Link>
              ) : (
                <Link to="#articles" className="blog-btn blog-btn-outline">
                  <span>View Latest Articles</span>
                  <FaArrowRight />
                </Link>
              )}
            </div>
            {!isArticleView && (
              <div className="blog-hero-stats">
                {blogStats.map((stat, index) => (
                  <div key={index} className="blog-stat-item">
                    <div className="blog-stat-icon">
                      <stat.icon />
                    </div>
                    <span className="blog-stat-number">{stat.number}</span>
                    <span className="blog-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-content-section" id="articles" ref={articlesListRef}>
        <div className="blog-container">
          <div className="blog-section-header">
            <h2 className="blog-section-title">{isArticleView ? "Article Details" : "Latest Articles & Guides"}</h2>
            <p className="blog-section-subtitle">
              {isArticleView
                ? `Published on ${article.date} in ${article.category}`
                : "Stay informed with our expert insights on Japanese education, visa processes, and cultural tips."}
            </p>
          </div>

          {!isArticleView ? (
            <div className="blog-articles-grid">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className={`blog-article-card ${isVisible["blog-section-1"] ? "blog-visible" : ""}`}
                  style={{ "--delay": `${index * 0.15}s` }}
                >
                  <div className="blog-article-icon">
                    <article.icon />
                  </div>
                  <div className="blog-article-content">
                    <h3 className="blog-article-title">{article.title}</h3>
                    <p className="blog-article-excerpt">{article.excerpt}</p>
                    <div className="blog-article-meta">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>
                    <Link to={`/blog/${article.slug}`} className="blog-article-link">
                      <span>Read More</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="blog-article-detail-card">
              <div className="blog-article-detail-content">{article.content}</div>
              <div className="blog-article-detail-actions">
                <Link to="/blog" className="blog-btn blog-btn-primary">
                  <span>Back to All Articles</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section" ref={ctaRef}>
        <div className="blog-container">
          <div className="blog-cta-content">
            <h2 className="blog-cta-title">Have Questions? Get Personalized Guidance</h2>
            <p className="blog-cta-description">
              Our expert counselors are ready to provide tailored support for your Japanese education and visa needs.
              Contact us today for a free consultation.
            </p>
            <div className="blog-cta-actions">
              <Link to="/contact" className="blog-btn blog-btn-primary">
                <span>Schedule Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/about" className="blog-btn blog-btn-outline">
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="blog-footer">
        <div className="blog-container">
          <div className="blog-footer-content">
            <div className="blog-footer-brand">
              <h3>Kyushu Edu Consultancy</h3>
              <p>
                Your trusted partner for Japanese education and visa services in Nepal. Professional guidance with
                proven results since 2018.
              </p>
              <div className="blog-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="blog-footer-links">
              <div className="blog-footer-column">
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

              <div className="blog-footer-column">
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

              <div className="blog-footer-column">
                <h4>Contact Info</h4>
                <div className="blog-contact-info">
                  <div className="blog-contact-item">
                    <FaMapMarkerAlt />
                    <span>Chabahil, Kathmandu, Nepal</span>
                  </div>
                  <div className="blog-contact-item">
                    <FaPhone />
                    <span>+977-14581248</span>
                  </div>
                  <div className="blog-contact-item">
                    <FaEnvelope />
                    <span>kyushuedu@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-footer-bottom">
            <p>&copy; 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            <p>Professional Japanese Education Services in Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Blog
