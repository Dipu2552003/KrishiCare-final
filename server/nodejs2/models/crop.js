const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true
  },
  cropType: {
    type: String,
    required: true
  },
  offerType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  totalWeight: {
    type: Number,
    required: true
  },
  weightUnit: {
    type: String,
    required: true
  },
  priceUnit: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  productStatus: {
    type: String,
    required: true
  },
  buyer: {
    type: String
  },
  deliveryTerms: {
    type: String
  },
  qualityAssurance: {
    type: String
  },
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
    required: true
  }
});

module.exports = mongoose.model('Crop', cropSchema);
