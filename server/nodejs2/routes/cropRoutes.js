const express = require('express');
const Crop = require('../models/crop');
const Farmer = require('../models/farmer'); // Add this to access Farmer model
const router = express.Router();

// Create a new crop
router.post('/', async (req, res) => {
  const {
    cropName,
    cropType,
    offerType,
    date,
    totalWeight,
    weightUnit,
    priceUnit,
    productType,
    productStatus,
    buyer,
    deliveryTerms,
    qualityAssurance,
    farmerId // Added farmerId
  } = req.body;

  try {
    const crop = new Crop({
      cropName,
      cropType,
      offerType,
      date,
      totalWeight,
      weightUnit,
      priceUnit,
      productType,
      productStatus,
      buyer,
      deliveryTerms,
      qualityAssurance,
      farmerId // Save the farmerId
    });

    await crop.save();
    res.status(201).json(crop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all crops with farmer names
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.find().populate('farmerId', 'name'); // Populate farmer name
    res.json(crops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Find a farmer's name from crop
router.get('/:id/farmer', async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id).populate('farmerId', 'name');
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    const farmer = crop.farmerId; // Access the farmer object
    res.json({ farmerName: farmer.name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
