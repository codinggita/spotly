const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { register, login } = require('./controllers/authController');
const { getParkingSpots, createParkingSpot } = require('./controllers/parkingController');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Debugging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Auth Routes
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

// Parking Routes
app.get('/api/parking', getParkingSpots);
app.post('/api/parking', createParkingSpot);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Spotly API is running...' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
