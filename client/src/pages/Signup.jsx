import React, { useState } from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Import Facebook icon
import { FaGoogle } from 'react-icons/fa';   // Import Google icon
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Placeholder for backend submission
      alert('Account created successfully! (Backend integration pending)');
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setErrors({ name: '', email: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <div className="homepage">
      {/* Signup Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Sign Up
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Create an account to start your journey with us!
            </p>
          </div>
        </div>
      </section>

      {/* Signup Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
            <div className="about-text" data-aos="fade-up" style={{ maxWidth: '500px', width: '100%' }}>
              <h2>Create Your Account</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ padding: '0.5rem', border: '1px solid var(--light-gray)', borderRadius: '5px' }}
                />
                {errors.name && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name}</p>}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ padding: '0.5rem', border: '1px solid var(--light-gray)', borderRadius: '5px' }}
                />
                {errors.email && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</p>}
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ padding: '0.5rem', border: '1px solid var(--light-gray)', borderRadius: '5px' }}
                />
                {errors.password && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.password}</p>}
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={{ padding: '0.5rem', border: '1px solid var(--light-gray)', borderRadius: '5px' }}
                />
                {errors.confirmPassword && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.confirmPassword}</p>}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: 'fit-content', alignSelf: 'center' }}
                  disabled={Object.values(errors).some(error => error) || !Object.values(formData).every(value => value.trim())}
                >
                  Sign Up
                </button>
              </form>
              <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                Already have an account? <Link to="/login" style={{ color: 'var(--primary-blue)' }}>Log in here</Link>.
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
              <h3>Kyushu Edu Consultancy</h3>
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
                <p>📍 123 Education Street, Tokyo, Japan</p>
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
          </div>
          <div className="footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;