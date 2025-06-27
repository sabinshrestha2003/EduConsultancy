import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [visitCount, setVisitCount] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchDashboard = async () => {
      if (!token) {
        setMessage('No token found. Please log in.');
        navigate('/admin-login');
        return;
      }
      try {
        const response = await fetch('http://localhost:5000/api/admin/dashboard', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const result = await response.json();
        console.log('API Response:', result);
        if (result.message === 'Invalid token') {
          setMessage('Session expired. Please log in again.');
          navigate('/admin-login');
        } else {
          setMessage(result.message);
          setData(result.data || {});
          setSubmissions(result.submissions || []);
          setVisitCount(result.visitCount || 0);
        }
      } catch (error) {
        setMessage('Error accessing dashboard');
        navigate('/admin-login');
      }
    };
    fetchDashboard();
  }, [token, navigate]);

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
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {submissions.map((submission, index) => (
                  <li key={index} style={{ margin: '1rem 0', padding: '1rem', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)' }}>
                    <p><strong>Name:</strong> {submission.name}</p>
                    <p><strong>Email:</strong> {submission.email}</p>
                    <p><strong>Message:</strong> {submission.message}</p>
                    <p><strong>Submitted:</strong> {new Date(submission.submittedAt).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <button
          className="btn btn-primary"
          style={{ marginTop: '2rem' }}
          onClick={() => { localStorage.removeItem('adminToken'); navigate('/admin-login'); }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;