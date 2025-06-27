const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const ContactSubmission = require('../models/ContactSubmission');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET || 'your-secure-secret-key';

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ username: admin.username }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newSubmission = new ContactSubmission({ name, email, message });
    await newSubmission.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const adminData = {
      totalUsers: 150,
      activeUsers: 120,
      inactiveUsers: 30,
      recentActivities: [
        { id: 1, action: 'User registered', timestamp: new Date().toISOString() },
        { id: 2, action: 'Login attempt', timestamp: new Date(Date.now() - 3600000).toISOString() },
      ],
    };
    const submissions = await ContactSubmission.find().sort({ submittedAt: -1 }).limit(5); // Last 5 submissions
    res.status(200).json({ message: 'Welcome to the Admin Dashboard', user: req.user, data: adminData, submissions });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;