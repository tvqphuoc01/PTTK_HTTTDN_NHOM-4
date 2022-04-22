const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const adminLoginController = require('../controllers/loginAdmin.controller');

const loginAdminValidate = require('../validate/adminLogin.validate');

router.get('/', adminLoginController.adminLogin);

router.post('/', loginAdminValidate.loginAdminValidate, adminLoginController.adminPost);

module.exports = router;
