const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const pheduyetdangkymuavaccineController = require('../controllers/pheduyetdangkymuavaccine.controller');

router.get('/', pheduyetdangkymuavaccineController.pheduyetdangkymuavaccineGet);

router.post('/', pheduyetdangkymuavaccineController.pheduyetdangkymuavaccinePost);

module.exports = router;
