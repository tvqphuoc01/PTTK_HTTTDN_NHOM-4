const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  address: String,
  phone: String,
  dateOfBirth: Date,
});

module.exports = mongoose.model('user', userModel);
