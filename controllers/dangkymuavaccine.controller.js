const userModels = require('../models/users.model');

const dangkymuavaccineGet = async function(req, res) {
  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.userId !== false) {
    const userData = await userModels.findOne(
        {_id: req.signedCookies.userId},
    );
    res.locals.user = userData;
    res.render('dangkymuavaccine');
  } else {
    res.render('dangkymuavaccine');
  }
};

const dangkymuavaccinePost = async function(req, res) {
  console.log(req.body);
  res.redirect('/');
};


module.exports ={
  dangkymuavaccineGet,
  dangkymuavaccinePost,
};
