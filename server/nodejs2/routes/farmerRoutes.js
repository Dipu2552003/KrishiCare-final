const express = require('express');
const Farmer = require('../models/farmer');
const router = express.Router();

// Create a new farmer
router.post('/', async (req, res) => {
  try {
    const farmer = new Farmer(req.body);
    await farmer.save();
    res.status(201).json(farmer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all farmers
router.get('/', async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.json(farmers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
