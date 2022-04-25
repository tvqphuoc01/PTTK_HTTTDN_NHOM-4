const mongoose = require('mongoose');

const billModels = new mongoose.Schema({
  type: Number,
  vaccineName: String,
  user: String,
  userId: String,
  vaccineDate: String,
  status: Number,
});

module.exports = mongoose.model('bill', billModels);
