const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const danhsachvaccineController = require('../controllers/danhsachvaccine.controller');

router.get('/', danhsachvaccineController.danhsachvaccineGet);

module.exports = router;
