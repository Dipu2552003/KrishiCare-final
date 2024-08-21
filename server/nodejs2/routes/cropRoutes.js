const express = require('express');
const router = express.Router();
const Crop = require('../models/crop');
const multer = require('multer');
const path = require('path');

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage: storage });

// POST endpoint for adding a new crop with an optional image
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const cropData = {
      cropName: req.body.cropName,
      cropType: req.body.cropType,
      offerType: req.body.offerType,
      date: req.body.date,
      totalWeight: req.body.totalWeight,
      weightUnit: req.body.weightUnit,
      priceUnit: req.body.priceUnit,
      productType: req.body.productType,
      productStatus: req.body.productStatus,
      buyer: req.body.buyer,
      deliveryTerms: req.body.deliveryTerms,
      qualityAssurance: req.body.qualityAssurance,
      farmerId: req.body.farmerId,
      photo: req.file ? req.file.path : null,
      price: req.body.totalWeight * req.body.priceUnit // Calculate price here as well
    };

    const crop = new Crop(cropData);
    await crop.save();
    res.status(201).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET endpoint for retrieving all crops
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.find().populate('farmerId'); // Populate farmer details
    res.json(crops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT endpoint for updating the verified status of a crop
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { verified, currentBid, highestBidder } = req.body;

    // Construct the update object
    const updateFields = {};
    if (verified !== undefined) updateFields.verified = verified;
    if (currentBid !== undefined) updateFields.currentBid = currentBid;
    if (highestBidder !== undefined) updateFields.highestBidder = highestBidder;

    // Find and update the crop
    const crop = await Crop.findByIdAndUpdate(id, updateFields, { new: true });

    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }

    res.json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
