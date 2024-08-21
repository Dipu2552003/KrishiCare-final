const mongoose = require('mongoose');

const cropPurchasedSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number
});

const buyerSchema = new mongoose.Schema({
  name: String,
  contact: String,
  address: String,
  cropsPurchased: [cropPurchasedSchema]
});

module.exports = mongoose.model('Buyer', buyerSchema);
