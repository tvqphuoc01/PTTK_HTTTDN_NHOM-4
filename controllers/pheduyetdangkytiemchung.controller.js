const adminModels = require('../models/admin.model');
const BillModels = require('../models/bills.model');

const pheduyetdangkytiemchungGet = async function(req, res) {
  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.adminId !== false) {
    const userData = await adminModels.findOne(
        {_id: req.signedCookies.adminId},
    );
    const billData = await BillModels.find();
    res.locals.user = userData;
    res.locals.vaccine = billData;
    res.render('pheduyetdangkytiemchung');
  } else {
    res.render('pheduyetdangkytiemchung');
  }
};

const pheduyetdangkytiemchungPost = async function(req, res) {
  console.log(req.body);
  res.redirect('/');
};


module.exports ={
  pheduyetdangkytiemchungGet,
  pheduyetdangkytiemchungPost,
};
