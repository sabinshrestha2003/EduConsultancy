const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eduConsultancy';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected to eduConsultancy'))
  .catch(err => console.log('MongoDB connection error:', err));

// Seed default admin on startup
const Admin = require('./models/Admin');
(async () => {
  const adminCount = await Admin.countDocuments();
  if (adminCount === 0) {
    const defaultAdmin = new Admin({ username: 'kyushuedu@gmail.com', password: 'StrongPass123' });
    await defaultAdmin.save();
    console.log('Default admin created: kyushuedu@gmail.com');
  }
})();

// Routes
app.use('/api/admin', adminRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));