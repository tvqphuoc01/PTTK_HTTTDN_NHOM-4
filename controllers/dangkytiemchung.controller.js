const userModels = require('../models/users.model');

const dangkytiemchungGet = async function(req, res) {
  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.userId !== false) {
    const userData = await userModels.findOne(
        {_id: req.signedCookies.userId},
    );
    res.locals.user = userData;
    res.render('dangkytiemchung');
  } else {
    res.render('dangkytiemchung');
  }
};

const dangkytiemchungPost = async function(req, res) {
  console.log(req.body);
  res.redirect('/');
};

module.exports ={
    dangkytiemchungGet,
    dangkytiemchungPost,
};