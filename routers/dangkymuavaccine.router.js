const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const dangkymuavaccineController = require('../controllers/dangkymuavaccine.controller');

router.get('/', dangkymuavaccineController.dangkymuavaccineGet);

router.post('/', dangkymuavaccineController.dangkymuavaccinePost);

module.exports = router;
