const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS package
const bodyParser = require('body-parser'); // If you're using body-parser, ensure it's properly configured
const farmerRoutes = require('./routes/farmerRoutes');
const cropRoutes = require('./routes/cropRoutes');
const buyerRoutes = require('./routes/buyerRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/farmingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

// Routes
app.use('/api/farmers', farmerRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/buyers', buyerRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Farming API!');
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
