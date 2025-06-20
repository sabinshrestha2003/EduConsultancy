// controllers/japaneseClassController.js

const JapaneseClass = require('../models/JapaneseClass');

exports.createClass = async (req, res) => {
  try {
    const newClass = new JapaneseClass(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await JapaneseClass.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
