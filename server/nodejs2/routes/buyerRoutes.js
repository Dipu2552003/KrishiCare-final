const express = require('express');
const Buyer = require('../models/buyer');
const router = express.Router();

// Create a new buyer
router.post('/', async (req, res) => {
  try {
    const buyer = new Buyer(req.body);
    await buyer.save();
    res.status(201).json(buyer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all buyers
router.get('/', async (req, res) => {
  try {
    const buyers = await Buyer.find();
    res.json(buyers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
