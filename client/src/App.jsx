import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExploreClasses from './pages/ExploreClasses';
import Documentation from './pages/Documentation';
import VisaAssistance from './pages/VisaAssistance';
import kyushulogo from './assets/kyushulogo.png';
import './App.css';

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`} aria-current={isActive ? 'page' : undefined}>
      {children}
    </Link>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link to="#" className="dropdown-toggle nav-link" onClick={(e) => e.preventDefault()}>
        Others
      </Link>
      <div className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
        <NavLink to="/documentation">Documentation</NavLink>
        <NavLink to="/visa">Visa Assistance</NavLink>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="navbar-logo">
            <Link to="/" aria-label="Home">
              <img src={kyushulogo} alt="Kyushu Edu Consultancy Logo" className="logo" />
            </Link>
          </div>
          <nav className="navbar-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/classes">Explore Classes</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </nav>
          <div className="navbar-contact-right">
            <a href="tel:+15551234567" className="contact-link">+1-555-123-4567</a>
            <a href="mailto:info@kyushuedu.com" className="contact-link">info@kyushuedu.com</a>
          </div>
          <div className="navbar-dropdown">
            <Dropdown />
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
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/visa" element={<VisaAssistance />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/classes" element={<ExploreClasses />} />
            <Route path="/privacy" element={<div>Privacy Policy</div>} />
            <Route path="/terms" element={<div>Terms of Service</div>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> {/* Corrected from 'event' to 'element' */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;