const adminModels = require('../models/admin.model');
const vaccineOrderModels = require('../models/vaccineOrder.model');

const pheduyetdangkymuavaccineGet = async function(req, res) {
  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.adminId !== false) {
    const userData = await adminModels.findOne(
        {_id: req.signedCookies.adminId},
    );
    const billData = await vaccineOrderModels.find();
    res.locals.user = userData;
    res.locals.vaccine = billData;
    res.render('pheduyetdangkymuavaccine');
  } else {
    res.render('pheduyetdangkymuavaccine');
  }
};

const pheduyetdangkymuavaccinePost = async function(req, res) {
  console.log(req.body);
  res.redirect('/');
};


module.exports ={
  pheduyetdangkymuavaccineGet,
  pheduyetdangkymuavaccinePost,
};
