import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="homepage" style={{ padding: '2rem 0', background: 'var(--white)' }}>
      <div className="container">
        <h1 className="section-title" style={{ color: 'var(--primary-blue)', marginBottom: '2rem' }}>Admin Dashboard</h1>
        <p style={{ color: 'var(--dark-gray)', marginBottom: '2rem' }}>{message}</p>
        {data && (
          <div className="services-grid" style={{ marginBottom: '2rem' }}>
            <div className="service-card" style={{ textAlign: 'left' }}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Statistics</h3>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div className="stat">
                  <p className="stat-number">{visitCount}</p>
                  <p className="stat-label">Website Visits</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {submissions.length > 0 && (
          <div className="services-grid">
            <div className="service-card" style={{ textAlign: 'left' }}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Recent Contact Submissions</h3>
              <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid var(--light-gray)' }}
                >
                  <option value="All">All</option>
                  <option value="Not Read">Not Read</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                </select>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid var(--light-gray)' }}
                >
                  <option value="Latest">Latest</option>
                  <option value="Oldest">Oldest</option>
                </select>
                <input
                  type="text"
                  placeholder="Search by Name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid var(--light-gray)' }}
                />
                <input
                  type="text"
                  placeholder="Search by Email"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid var(--light-gray)' }}
                />
                <input
                  type="date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid var(--light-gray)' }}
                />
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {sortedSubmissions.map((submission) => (
                  <li key={submission._id} style={{
                    margin: '1rem 0',
                    padding: '1rem',
                    background: 'var(--white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                    borderLeft: `4px solid ${submission.status === 'Not Read' ? 'var(--primary-blue)' : submission.status === 'Pending' ? '#ff9800' : '#4caf50'}`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <p><strong>Name:</strong> {submission.name}</p>
                        <p><strong>Email:</strong> {submission.email}</p>
                        <p><strong>Message:</strong> {submission.message}</p>
                        <p><strong>Submitted:</strong> {new Date(submission.submittedAt).toLocaleString()}</p>
                      </div>
                      <select
                        value={submission.status}
                        onChange={(e) => handleStatusChange(submission._id, e.target.value)}
                        style={{ padding: '0.3rem', borderRadius: '5px', border: '1px solid var(--light-gray)' }}
                      >
                        <option value="Not Read">Not Read</option>
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                      </select>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <button
          className="btn btn-primary"
          style={{ marginTop: '2rem' }}
          onClick={() => { localStorage.removeItem('adminToken'); navigate('/'); }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;