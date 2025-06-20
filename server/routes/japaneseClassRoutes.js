// routes/japaneseClassRoutes.js

const express = require('express');
const router = express.Router();
const {
  createClass,
  getAllClasses
} = require('../controllers/japaneseClassController');

// POST /api/classes
router.post('/', createClass);

// GET /api/classes
router.get('/', getAllClasses);

module.exports = router;
