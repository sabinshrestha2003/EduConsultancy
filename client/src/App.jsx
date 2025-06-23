import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ExploreClasses from './pages/ExploreClasses';
import Documentation from './pages/Documentation';
import VisaAssistance from './pages/VisaAssistance';
import Location from './pages/Location';
import Testimonials from './pages/Testimonials';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import kyushulogo from './assets/kyushulogo.png';
import './App.css';

function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? 'active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function Dropdown({ closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="nav-link dropdown-toggle" onClick={(e) => e.preventDefault()}>
        Others
      </span>
      <div className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
        <NavLink to="/documentation" onClick={closeMenu}>Documentation</NavLink>
        <NavLink to="/visa" onClick={closeMenu}>Visa Assistance</NavLink>
        <NavLink to="/location" onClick={closeMenu}>Location</NavLink>
        <NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={kyushulogo} alt="Kyushu Educational Consultancy Logo" />
            </Link>
          </div>
          <nav className="navbar-links">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/classes" onClick={closeMenu}>Explore Classes</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            <Dropdown closeMenu={closeMenu} />
          </nav>
          <div className="navbar-contact-right">
            <a href="tel:+15551234567" className="contact-link">📞 +1-555-123-4567</a>
            <a href="mailto:info@kyushuedu.com" className="contact-link">📧 info@kyushuedu.com</a>
          </div>
          <button
            className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span className="hamburger"></span>
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/classes" element={<ExploreClasses />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/visa" element={<VisaAssistance />} />
            <Route path="/location" element={<Location />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;