const mongoose = require('mongoose');

const vaccineOrder = new mongoose.Schema({
  user: String,
  userId: String,
  vaccineName: String,
  phone: String,
  address: String,
  status: Number,
});

module.exports = mongoose.model('vaccineOrder', vaccineOrder);
