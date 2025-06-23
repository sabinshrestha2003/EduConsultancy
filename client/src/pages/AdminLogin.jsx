import React, { useState } from 'react';
import '../styles/HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.token) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
        console.log('Token stored:', data.token);
        navigate('/dashboard'); // Redirect to dashboard on success
      }
    } catch (error) {
      setMessage('Server error');
    }
  };

  return (
    <div className="homepage">
      {/* Admin Login Header */}
      <section className="hero" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Admin/Staff Login
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Secure access for authorized personnel only.
            </p>
          </div>
        </div>
      </section>

      {/* Admin Login Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Login</h2>
              <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--gray)', borderRadius: '4px' }}
                    placeholder="Enter username"
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--gray)', borderRadius: '4px' }}
                    placeholder="Enter password"
                  />
                </div>
                <button
                  type="submit"
                  style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--primary-blue)', color: 'var(--white)', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Login
                </button>
              </form>
              {message && <p style={{ marginTop: '1rem', color: message.includes('Invalid') ? 'red' : 'green' }}>{message}</p>}
              {token && <p>Token: {token.substring(0, 20)}...</p>}
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <p>
                For assistance, contact the admin team at <Link to="/contact">Contact Us</Link> or email info@kyushuedu.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Reused from HomePage) */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Kyushu Educational Consultancy Pvt. Ltd.</h3>
              <p>Empowering your journey to Japan with expert solutions.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyusu@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGoogle />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <p>📧 info@kyushuedu.com</p>
                <p>📞 +123-456-7890</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
            <div className="footer-section">
              <h3>Admin Login</h3>
              <Link to="/admin-login" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Admin Login
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Kyushu Educational Consultancy Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLogin;