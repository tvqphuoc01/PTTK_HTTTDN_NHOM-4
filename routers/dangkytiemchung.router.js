const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const dangkytiemchungController = require('../controllers/dangkytiemchung.controller');

router.get('/', dangkytiemchungController.dangkytiemchungGet);

router.post('/', dangkytiemchungController.dangkytiemchungPost);

module.exports = router;
