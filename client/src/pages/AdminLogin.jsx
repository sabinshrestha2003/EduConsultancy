"use client"

import { useState, useEffect } from "react"
import "../styles/AdminLogin.css" // Import the new CSS file
import { Link, useNavigate } from "react-router-dom"
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa" // For footer social links
import { User, Lock, LogIn } from "lucide-react" // Lucide icons for form fields and button

const AdminLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Initialize AOS if not already done globally
    // import AOS from 'aos';
    // import 'aos/dist/aos.css';
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }
      if (data.token) {
        localStorage.setItem("adminToken", data.token)
        // Force a refresh of the authentication state
        window.dispatchEvent(new Event("storage"))
        navigate("/dashboard", { replace: true })
      }
    } catch (error) {
      setMessage(error.message || "Login failed. Please try again.")
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="admin-login-page">
      {/* Admin Login Header */}
      <section className="admin-login-hero" data-aos="fade-up">
        <div className="admin-login-container admin-login-hero-content">
          <div className="admin-login-hero-badge">
            <span>🔑 Admin Access</span>
          </div>
          <h1 className="admin-login-hero-title">
            Admin/Staff <span className="admin-login-accent-text">Login</span>
          </h1>
          <p className="admin-login-hero-description">Secure access for authorized personnel only.</p>
        </div>
      </section>

      {/* Admin Login Content */}
      <section className="admin-login-content">
        <div className="admin-login-container">
          <div className="admin-login-form-card" data-aos="fade-up" data-aos-delay="200">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit} className="admin-login-form">
              <div className="admin-login-form-group">
                <label htmlFor="username">Username</label>
                <div className="admin-login-input-wrapper">
                  <User className="admin-login-input-icon" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="admin-login-input"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>
              <div className="admin-login-form-group">
                <label htmlFor="password">Password</label>
                <div className="admin-login-input-wrapper">
                  <Lock className="admin-login-input-icon" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="admin-login-input"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="admin-login-button" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="admin-login-spinner"></span> Logging in...
                  </>
                ) : (
                  <>
                    <LogIn className="admin-login-button-icon" /> Login
                  </>
                )}
              </button>
            </form>
            {message && (
              <p className={`admin-login-message ${message.toLowerCase().includes("fail") ? "error" : "success"}`}>
                {message}
              </p>
            )}
            <p className="admin-login-assistance-text">
              For assistance, contact the admin team at{" "}
              <Link to="/contact" className="admin-login-link">
                Contact Us
              </Link>{" "}
              or email info@kyushuedu.com.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="admin-login-footer">
        <div className="admin-login-container">
          <div className="admin-login-footer-content">
            <div className="admin-login-footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="admin-login-social-links">
                <a
                  href="https://www.facebook.com/kyushuedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-login-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:kyushuedu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-login-social-link"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://www.instagram.com/kyushuedu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-login-social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="admin-login-footer-section">
              <h3>Contact Us</h3>
              <div className="admin-login-contact-info">
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="admin-login-footer-section">
              <h3>Quick Links</h3>
              <div className="admin-login-footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="admin-login-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AdminLogin
