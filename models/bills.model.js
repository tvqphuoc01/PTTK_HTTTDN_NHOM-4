const mongoose = require('mongoose');

const billModels = new mongoose.Schema({
  type: Number,
  vaccineName: String,
  user: String,
  status: Number,
});

module.exports = mongoose.model('bill', billModels);
