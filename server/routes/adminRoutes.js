const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const ContactSubmission = require('../models/ContactSubmission');
const Visit = require('../models/Visit');
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

router.post('/track-visit', async (req, res) => {
  try {
    let visit = await Visit.findOne();
    if (!visit) {
      visit = new Visit();
    }
    visit.count += 1;
    visit.lastUpdated = Date.now();
    await visit.save();
    res.status(200).json({ message: 'Visit tracked', count: visit.count });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.put('/contact/:id/status', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const submission = await ContactSubmission.findByIdAndUpdate(id, { status }, { new: true, runValidators: true });
    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.status(200).json({ message: 'Status updated successfully', submission });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const adminData = {
      activeUsers: 120,
      inactiveUsers: 30,
      recentActivities: [
        { id: 1, action: 'User registered', timestamp: new Date().toISOString() },
        { id: 2, action: 'Login attempt', timestamp: new Date(Date.now() - 3600000).toISOString() },
      ],
    };
    const visit = await Visit.findOne() || { count: 0 };
    const submissions = await ContactSubmission.find().sort({ submittedAt: -1 }).limit(5);
    res.status(200).json({ message: 'Welcome to the Admin Dashboard', user: req.user, data: adminData, submissions, visitCount: visit.count });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;