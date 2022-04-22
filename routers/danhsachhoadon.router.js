const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const danhsachhoadonController = require('../controllers/danhsachhoadon.controller');

router.get('/', danhsachhoadonController.danhsachhoadonGet);

module.exports = router;
