const mongoose = require('mongoose');
const Crop = require('./crop'); // Ensure correct path to your crop model

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  farm: {
    location: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    cropTypes: [String]
  },
  crops: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crop'
  }]
});

module.exports = mongoose.model('Farmer', farmerSchema);
