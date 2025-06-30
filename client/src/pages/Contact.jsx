import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('http://localhost:5000/api/admin/track-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('Visit tracking failed:', error);
      }
    };
    trackVisit();
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

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
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/admin/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        setSubmitMessage(data.message || 'Form submitted successfully! We’ll contact you soon.');
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } catch (error) {
        setSubmitMessage('Error submitting form. Please try again or visit us in Chabahil.');
      }
    }
  };

  return (
    <div className="homepage">
      {/* Contact Header */}
      <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              Contact Us
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Get in touch or visit our Chabahil office for personalized support on your journey to Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="about">
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Contact Form</h2>
              <p>Fill out the form below or stop by our office for immediate assistance.</p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
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
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  style={{ padding: '0.5rem', border: '1px solid var(--light-gray)', borderRadius: '5px' }}
                />
                {errors.message && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.message}</p>}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: 'fit-content', alignSelf: 'flex-start' }}
                  disabled={Object.values(errors).some(error => error) || !Object.values(formData).every(value => value.trim())}
                >
                  Send Message
                </button>
                {submitMessage && <p style={{ marginTop: '1rem', color: submitMessage.includes('Error') ? 'red' : 'green' }}>{submitMessage}</p>}
              </form>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>Contact Information</h2>
              <p>Reach out or visit us at:</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>📧 Email: kyushuedu@gmail.com</li>
                <li>📞 Phone: +014581248</li>
                <li>📍 Address: Chabahil, Kathmandu, Nepal (5 mins from Chabahil Chowk)</li>
              </ul>
              <Link to="/location" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                View Map
              </Link>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="400">
              <h2>Office Hours</h2>
              <p>Monday–Friday: 9:00 AM – 6:00 PM | Saturday: 10:00 AM – 2:00 PM | Sunday: Closed</p>
              <p>Drop by during these hours for a consultation!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyushuedu@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
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
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
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
          </div>
          <div className="footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;