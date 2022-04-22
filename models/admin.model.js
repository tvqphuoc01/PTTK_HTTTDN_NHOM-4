const mongoose = require('mongoose');

const adminModel = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
});

module.exports = mongoose.model('admin', adminModel);
