import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import kyushulogo from './assets/kyushulogo.png';
import './App.css';

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
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documentation" element={<div>Documentation Page</div>} />
            <Route path="/visa" element={<div>Visa Page</div>} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/privacy" element={<div>Privacy Policy</div>} />
            <Route path="/terms" element={<div>Terms of Service</div>} />
            <Route path="/signup" element={<div>Signup Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;