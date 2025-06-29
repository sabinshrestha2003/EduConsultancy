const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Not Read', enum: ['Not Read', 'Pending', 'Confirmed'] },
});

module.exports = mongoose.model('ContactSubmission', contactSubmissionSchema);