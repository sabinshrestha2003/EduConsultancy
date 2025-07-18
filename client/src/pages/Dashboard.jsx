import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaEnvelope,
  FaSignOutAlt,
  FaFilter,
  FaSort,
  FaSearch,
} from 'react-icons/fa';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [visitCount, setVisitCount] = useState(0);
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortOrder, setSortOrder] = useState('Latest');
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin-login', { replace: true });
      return;
    }

    const fetchDashboard = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/dashboard', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const result = await response.json();

        if (result.message === 'Invalid token') {
          localStorage.removeItem('adminToken');
          navigate('/admin-login', { replace: true });
          return;
        }

        setMessage(result.message || '');
        setData(result.data || {});
        setSubmissions(result.submissions || []);
        setVisitCount(result.visitCount || 0);
      } catch (error) {
        setMessage('Error accessing dashboard');
        console.error('Dashboard error:', error);
      }
    };

    fetchDashboard();
  }, [token, navigate]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contact/${id}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const result = await response.json();
      if (result.message === 'Status updated successfully') {
        setSubmissions(submissions.map(sub => sub._id === id ? { ...sub, status: newStatus } : sub));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredSubmissions = submissions.filter(sub => {
    const matchesStatus = filterStatus === 'All' || sub.status === filterStatus;
    const matchesName = sub.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesEmail = sub.email.toLowerCase().includes(searchEmail.toLowerCase());
    const matchesDate = !searchDate || new Date(sub.submittedAt).toISOString().split('T')[0] === searchDate;
    return matchesStatus && matchesName && matchesEmail && matchesDate;
  });

  const sortedSubmissions = [...filteredSubmissions].sort((a, b) => {
    const dateA = new Date(a.submittedAt).getTime();
    const dateB = new Date(b.submittedAt).getTime();
    return sortOrder === 'Latest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="dash-page">
      <div className="dash-sidebar">
        <div className="dash-sidebar-brand">
          <h3>Kyushu Edu Admin</h3>
        </div>
        <ul className="dash-sidebar-nav">
          <li>
            <Link to="/admin/dashboard" className="dash-sidebar-link dash-active">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/submissions" className="dash-sidebar-link">
              <FaEnvelope />
              <span>Submissions</span>
            </Link>
          </li>
          <li>
            <button
              className="dash-sidebar-link dash-btn-logout"
              onClick={() => {
                localStorage.removeItem('adminToken');
                navigate('/');
              }}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="dash-main">
        <div className="dash-container">
          <h1 className="dash-title">Admin Dashboard</h1>
          {message && <p className="dash-message">{message}</p>}

          {data && (
            <div className="dash-stats">
              <div className="dash-stat-card">
                <FaTachometerAlt className="dash-stat-icon" />
                <div className="dash-stat-content">
                  <h3>Website Visits</h3>
                  <p className="dash-stat-number">{visitCount}</p>
                </div>
              </div>
            </div>
          )}

          {submissions.length > 0 && (
            <div className="dash-submissions">
              <h2 className="dash-section-title">Recent Contact Submissions</h2>
              <div className="dash-filters">
                <div className="dash-filter-group">
                  <FaFilter className="dash-filter-icon" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="dash-filter-select"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Not Read">Not Read</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                  </select>
                </div>
                <div className="dash-filter-group">
                  <FaSort className="dash-filter-icon" />
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="dash-filter-select"
                  >
                    <option value="Latest">Latest</option>
                    <option value="Oldest">Oldest</option>
                  </select>
                </div>
                <div className="dash-filter-group">
                  <FaSearch className="dash-filter-icon" />
                  <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="dash-filter-input"
                  />
                </div>
                <div className="dash-filter-group">
                  <FaSearch className="dash-filter-icon" />
                  <input
                    type="text"
                    placeholder="Search by Email"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    className="dash-filter-input"
                  />
                </div>
                <div className="dash-filter-group">
                  <FaSearch className="dash-filter-icon" />
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="dash-filter-input"
                  />
                </div>
              </div>

              <div className="dash-submissions-grid">
                {sortedSubmissions.map((submission) => (
                  <div
                    key={submission._id}
                    className="dash-submission-card"
                    style={{
                      borderLeft: `4px solid ${
                        submission.status === 'Not Read'
                          ? 'var(--dash-primary)'
                          : submission.status === 'Pending'
                          ? 'var(--dash-warning)'
                          : 'var(--dash-success)'
                      }`,
                    }}
                  >
                    <div className="dash-submission-content">
                      <p><strong>Name:</strong> {submission.name}</p>
                      <p><strong>Email:</strong> {submission.email}</p>
                      <p><strong>Message:</strong> {submission.message}</p>
                      <p><strong>Submitted:</strong> {new Date(submission.submittedAt).toLocaleString()}</p>
                    </div>
                    <select
                      value={submission.status}
                      onChange={(e) => handleStatusChange(submission._id, e.target.value)}
                      className="dash-status-select"
                    >
                      <option value="Not Read">Not Read</option>
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;