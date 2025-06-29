import React from 'react';
import '../styles/HomePage.css'; // Reuse existing styles for consistency
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai'; // Facebook and Email icons
import { FiInstagram } from 'react-icons/fi'; // Instagram icon

const Testimonials = () => {
  return (
    <div className="homepage">
      {/* Testimonials Header */}
      <section className="hero" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, var(--primary-blue) 0%, var(--white) 70%)' }}>
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            <h1 className="hero-title" style={{ color: 'var(--primary-blue)' }}>
              What Our Students Say
            </h1>
            <p className="hero-description" style={{ color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
              Hear from those who’ve achieved their study abroad dreams with us.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Content */}
      <section className="about" style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-content" style={{ flexDirection: 'column', gap: '3rem' }}>
            <div className="about-text" data-aos="fade-up">
              <h2>Student Testimonials</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
                  <p>
                    "I am so grateful to Kyushu Educational Consultancy for guiding me through my visa process for Australia. After being denied once, their team, especially Pramila Ma’am, helped me reapply, and I got my visa in just two weeks. It was a dream come true!"
                  </p>
                  <p style={{ fontStyle: 'italic', marginTop: '1rem', color: 'var(--primary-blue)' }}>
                    - Anjali Sharma, Batch 2023, Successfully Visited Australia
                  </p>
                </div>
                <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
                  <p>
                    "The support from KEC was exceptional. They helped me with documentation and prepared me for my visa interview, leading to my successful approval for Canada. Thank you to Suhail Sir for his dedication!"
                  </p>
                  <p style={{ fontStyle: 'italic', marginTop: '1rem', color: 'var(--primary-blue)' }}>
                    - Rajesh Thapa, Batch 2022, Canada Visa Approved
                  </p>
                </div>
                <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
                  <p>
                    "Choosing Kyushu Educational Consultancy was the best decision. Their team guided me from university selection to visa approval for the UK. The process was smooth, and I’m now pursuing my MBA!"
                  </p>
                  <p style={{ fontStyle: 'italic', marginTop: '1rem', color: 'var(--primary-blue)' }}>
                    - Suman Gurung, Batch 2021, UK Visa Success
                  </p>
                </div>
                <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
                  <p>
                    "I was nervous about studying abroad, but KEC made it easy. Their counselors helped me secure a scholarship and visa for the USA. Highly recommend their services!"
                  </p>
                  <p style={{ fontStyle: 'italic', marginTop: '1rem', color: 'var(--primary-blue)' }}>
                    - Priya K.C., Batch 2024, USA Visa Granted
                  </p>
                </div>
              </div>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2>Why Choose Us?</h2>
              <p>
                At Kyushu Educational Consultancy Pvt. Ltd., we pride ourselves on personalized guidance, expert visa assistance, and a proven track record of helping students achieve their global education goals. Contact us to start your journey!
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Get in Touch
              </Link>
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
                  <AiFillFacebook />
                </a>
                <a href="mailto:info@kyushuedu.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <AiOutlineMail />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiInstagram />
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
            <p>© 2025 Kyushu Educational Consultancy Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;