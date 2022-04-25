const userModels = require('../models/users.model');
const vaccineOrderModels = require('../models/vaccineOrder.model');
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
  const newUser = new vaccineOrderModels({
    user: req.body.name,
    userId: req.signedCookies.userId,
    vaccineName: req.body.vaccine,
    phone: req.body.phone,
    address: req.body.address,
    status: 0,
  });
  newUser.save();
  res.redirect('/');
};


module.exports ={
  dangkymuavaccineGet,
  dangkymuavaccinePost,
};
