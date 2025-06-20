// models/JapaneseClass.js

const mongoose = require('mongoose');

const JapaneseClassSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true,
    enum: ['N5', 'N4', 'N3', 'N2', 'N1'],
  },
  description: String,
  schedule: String,
  fee: Number,
}, { timestamps: true });

module.exports = mongoose.model('JapaneseClass', JapaneseClassSchema);
