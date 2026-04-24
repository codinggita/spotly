const mongoose = require('mongoose');

const ParkingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere' // For proximity searches
    }
  },
  pricePerHour: {
    type: Number,
    required: true
  },
  totalSlots: {
    type: Number,
    required: true
  },
  availableSlots: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: true
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Parking', ParkingSchema, 'parking');
