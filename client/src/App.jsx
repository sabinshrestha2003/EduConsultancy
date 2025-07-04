import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ExploreClasses from './pages/ExploreClasses';
import Documentation from './pages/Documentation';
import VisaAssistance from './pages/VisaAssistance';
import Location from './pages/Location';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import SuccessStories from './pages/SuccessStories';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import OfficeInfo from './pages/OfficeInfo'; // Added OfficeInfo component
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
      <button className="dropdown-toggle" onClick={(e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}>
        Others <span className="dropdown-arrow">▾</span>
      </button>
      <div className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
        <NavLink to="/documentation" onClick={closeMenu}>Documentation</NavLink>
        <NavLink to="/visa" onClick={closeMenu}>Visa Assistance</NavLink>
        <NavLink to="/location" onClick={closeMenu}>Location</NavLink>
        <NavLink to="/success-stories" onClick={closeMenu}>Success Stories</NavLink>
        <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
        <NavLink to="/office-info" onClick={closeMenu}>Office Info</NavLink> {/* Added Office Info link */}
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('adminToken');
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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

    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('adminToken'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    closeMenu();
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={kyushulogo} alt="Kyushu Educational Consultancy Logo" />
            </Link>
          </div>
          
          <div className="navbar-right-content">
            <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
              <NavLink to="/classes" onClick={closeMenu}>Explore Classes</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
              <Dropdown closeMenu={closeMenu} />
              {isAuthenticated && (
                <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
              )}
            </nav>

            <div className="navbar-contact">
              <a href="tel:+15551234567" className="contact-link">
                <span className="contact-icon">📞</span>
                <span className="contact-text">+014581248</span>
              </a>
              <a href="mailto:info@kyushuedu.com" className="contact-link">
                <span className="contact-icon">📧</span>
                <span className="contact-text">kyushuedu@gmail.com</span>
              </a>
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="logout-button"
                  style={{ padding: '0.5rem 1rem', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '1rem' }}
                >
                  Logout
                </button>
              )}
            </div>
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
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route 
              path="/dashboard" 
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/admin-login" replace state={{ from: '/dashboard' }} />
                )
              } 
            />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/office-info" element={<OfficeInfo />} /> {/* Added OfficeInfo route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;