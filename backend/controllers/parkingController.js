const Parking = require('../models/Parking');

// @desc    Get all parking spots
// @route   GET /api/parking
exports.getParkingSpots = async (req, res) => {
  try {
    const spots = await Parking.find();
    res.status(200).json({ success: true, count: spots.length, data: spots });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Create a parking spot
// @route   POST /api/parking
exports.createParkingSpot = async (req, res) => {
  try {
    const spot = await Parking.create(req.body);
    res.status(201).json({ success: true, data: spot });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
