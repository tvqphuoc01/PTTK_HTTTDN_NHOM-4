const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => {
  // Clear User Cookie
  res.clearCookie('userId');
  // Clear GG cookie
  res.clearCookie('connect.sid');
  res.redirect('/');
});

module.exports = router;
