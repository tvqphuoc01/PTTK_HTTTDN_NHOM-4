const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const pheduyetdangkytiemchungController = require('../controllers/pheduyetdangkytiemchung.controller');

router.get('/', pheduyetdangkytiemchungController.pheduyetdangkytiemchungGet);

router.post('/', pheduyetdangkytiemchungController.pheduyetdangkytiemchungPost);

module.exports = router;
