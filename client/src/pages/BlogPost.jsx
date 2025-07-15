"use client"

import { useEffect, useRef } from "react"
import "../styles/BlogPost.css" // Changed to BlogPost.css
import { Link, useParams } from "react-router-dom"
import { FaFacebookF, FaGoogle, FaInstagram, FaNewspaper, FaCalendarAlt, FaUserEdit } from "react-icons/fa" // Added more icons

const BlogPost = () => {
  const { slug } = useParams()
  const articles = [
    {
      slug: "top-cities",
      title: "Top Cities for Students in Japan",
      excerpt: "Discover the best cities to study in Japan, from Tokyo to Osaka. Visit us for more insights!",
      date: "July 10, 2025",
      category: "Study Abroad",
      author: "Kyushu Edu Team",
      image: "/placeholder.svg?height=400&width=600", // Placeholder image
      content: (
        <>
          <h2>Top Cities for Students in Japan</h2>
          <p>Japan offers a variety of vibrant cities perfect for international students. Here are the top picks:</p>
          <ul>
            <li>
              <strong>Tokyo</strong>: The bustling capital with world-class universities like the University of Tokyo.
            </li>
            <li>
              <strong>Osaka</strong>: Known for its friendly culture and affordable living, home to Osaka University.
            </li>
            <li>
              <strong>Kyoto</strong>: Rich in history and tradition, ideal for cultural studies at Kyoto University.
            </li>
          </ul>
          <p>
            Each city provides unique opportunities. Visit our Chabahil office for personalized advice on choosing the
            right one!
          </p>
        </>
      ),
    },
    {
      slug: "jlpt-n5",
      title: "What is JLPT N5? Your First Step to Japan",
      excerpt: "Learn why JLPT N5 is essential and how we can help you prepare. Stop by our Chabahil office!",
      date: "July 5, 2025",
      category: "Language Learning",
      author: "Kyushu Edu Team",
      image: "/placeholder.svg?height=400&width=600", // Placeholder image
      content: (
        <>
          <h2>What is JLPT N5? Your First Step to Japan</h2>
          <p>
            The Japanese Language Proficiency Test (JLPT) N5 is the entry-level exam for non-native speakers. It
            assesses basic reading and listening skills.
          </p>
          <p>
            Key points about JLPT N5: - Covers approximately 100 kanji and 800 vocabulary words. - Required for beginner
            students planning to study or work in Japan. - Our Chabahil classes offer tailored preparation to help you
            pass!
          </p>
          <p>Ready to start? Contact us or visit our office for a free assessment.</p>
        </>
      ),
    },
  ]

  const article = articles.find((a) => a.slug === slug)

  const animatedRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    animatedRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      animatedRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [slug]) // Re-run effect if slug changes

  if (!article) {
    return (
      <div className="blog-post-page">
        <section className="blog-post-hero">
          <div className="blog-post-container blog-post-hero-content">
            <div className="blog-post-hero-badge">
              <span>
                <FaNewspaper /> Blog
              </span>
            </div>
            <h1 className="blog-post-hero-title">Article Not Found</h1>
            <p className="blog-post-hero-description">
              The article you are looking for does not exist. Please check the URL or go back to the blog list.
            </p>
            <Link to="/blog" className="blog-post-btn blog-post-btn-secondary">
              Back to All Articles
            </Link>
          </div>
        </section>
        <section className="blog-post-content">
          <div className="blog-post-container">
            <div className="blog-post-section aos-init" ref={(el) => (animatedRefs.current[0] = el)}>
              <h2>Get Personalized Guidance</h2>
              <p>Have questions? Contact us or visit our Chabahil office for tailored support.</p>
              <Link to="/contact" className="blog-post-btn blog-post-btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        <footer className="blog-post-footer">
          <div className="blog-post-container">
            <div className="blog-post-footer-content">
              <div className="blog-post-footer-section">
                <h3>Kyushu Edu Consultancy</h3>
                <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
                <div className="blog-post-social-links">
                  <a
                    href="https://www.facebook.com/kyushuedu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-post-social-link"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="mailto:kyushuedu@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-post-social-link"
                  >
                    <FaGoogle />
                  </a>
                  <a
                    href="https://www.instagram.com/kyushuedu/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-post-social-link"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div className="blog-post-footer-section">
                <h3>Contact Us</h3>
                <div className="blog-post-contact-info">
                  <p>📧 kyushuedu@gmail.com</p>
                  <p>📞 +014581248</p>
                  <p>📍 Chabahil, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="blog-post-footer-section">
                <h3>Quick Links</h3>
                <div className="blog-post-footer-links">
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/terms">Terms of Service</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="blog-post-footer-bottom">
              <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      {/* Blog Post Header */}
      <section className="blog-post-hero aos-init" ref={(el) => (animatedRefs.current[0] = el)}>
        <div className="blog-post-container blog-post-hero-content">
          <div className="blog-post-hero-badge">
            <span>
              <FaNewspaper /> {article.category}
            </span>
          </div>
          <h1 className="blog-post-hero-title">{article.title}</h1>
          <p className="blog-post-hero-description">
            Dive into this article for valuable insights on your journey to Japan.
          </p>
          <div className="blog-post-meta">
            <span>
              <FaCalendarAlt /> {article.date}
            </span>
            <span>
              <FaUserEdit /> {article.author}
            </span>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="blog-post-content">
        <div className="blog-post-container">
          <div className="blog-post-article-card aos-init" ref={(el) => (animatedRefs.current[1] = el)}>
            {article.image && (
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="blog-post-article-image" />
            )}
            <div className="blog-post-article-body">{article.content}</div>
            <Link to="/blog" className="blog-post-btn blog-post-btn-secondary">
              Back to All Articles
            </Link>
          </div>

          <div className="blog-post-section aos-init" ref={(el) => (animatedRefs.current[2] = el)}>
            <h2>Get Personalized Guidance</h2>
            <p>Have questions? Contact us or visit our Chabahil office for tailored support.</p>
            <Link to="/contact" className="blog-post-btn blog-post-btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="blog-post-footer">
        <div className="blog-post-container">
          <div className="blog-post-footer-content">
            <div className="blog-post-footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="blog-post-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-post-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-post-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-post-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="blog-post-footer-section">
              <h3>Contact Us</h3>
              <div className="blog-post-contact-info">
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="blog-post-footer-section">
              <h3>Quick Links</h3>
              <div className="blog-post-footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="blog-post-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BlogPost
