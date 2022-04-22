const mongoose = require('mongoose');

const vaccineModel = new mongoose.Schema({
  vaccineName: String,
  quantity: Number,
});

module.exports = mongoose.model('vaccine', vaccineModel);
