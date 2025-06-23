import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [message, setMessage] = useState('');
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
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage('Error accessing dashboard');
        navigate('/admin-login');
      }
    };
    fetchDashboard();
  }, [token, navigate]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Admin Dashboard</h1>
      <p>{message}</p>
      <button
        onClick={() => { localStorage.removeItem('adminToken'); navigate('/admin-login'); }}
        style={{ padding: '0.5rem 1rem', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;