import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExploreClasses from './pages/ExploreClasses';
import kyushulogo from './assets/kyushulogo.png';
import './App.css';

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`} aria-current={isActive}>
      {children}
    </Link>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="navbar-logo">
            <Link to="/" aria-label="Home">
              <img src={kyushulogo} alt="Kyushu Edu Consultancy Logo" className="logo" />
            </Link>
          </div>
          <button className="navbar-toggle" aria-label="Toggle menu">
            <span className="hamburger"></span>
          </button>
          <nav className="navbar-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/classes">Explore Classes</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documentation" element={<div>Documentation Page</div>} />
            <Route path="/visa" element={<div>Visa Page</div>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/classes" element={<ExploreClasses />} />
            <Route path="/privacy" element={<div>Privacy Policy</div>} />
            <Route path="/terms" element={<div>Terms of Service</div>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;