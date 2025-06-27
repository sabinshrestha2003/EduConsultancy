import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const [submissions, setSubmissions] = useState([]);
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
        }
      } catch (error) {
        setMessage('Error accessing dashboard');
        navigate('/admin-login');
      }
    };
    fetchDashboard();
  }, [token, navigate]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Admin Dashboard</h1>
      <p>{message}</p>
      {data && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Statistics</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1rem' }}>
            <div>
              <p>Total Users: {data.totalUsers || 0}</p>
              <p>Active: {data.activeUsers || 0}</p>
              <p>Inactive: {data.inactiveUsers || 0}</p>
            </div>
          </div>
          <h2>Recent Activities</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {(data.recentActivities || []).map(activity => (
              <li key={activity.id} style={{ margin: '0.5rem 0', textAlign: 'left' }}>
                {activity.action} - {new Date(activity.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      {submissions.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Recent Contact Submissions</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {submissions.map((submission, index) => (
              <li key={index} style={{ margin: '0.5rem 0', textAlign: 'left', border: '1px solid #ccc', padding: '0.5rem', borderRadius: '4px' }}>
                <p><strong>Name:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Message:</strong> {submission.message}</p>
                <p><strong>Submitted:</strong> {new Date(submission.submittedAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => { localStorage.removeItem('adminToken'); navigate('/admin-login'); }}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;