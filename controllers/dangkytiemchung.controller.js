const userModels = require('../models/users.model');
const BillModels = require('../models/bills.model');

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
  if (req.body.vaccineDateTheoGoi == '') {
    // Tiem le
    const newUser = new BillModels({
      type: 0,
      vaccineName: req.body.vaccine,
      user: req.body.name,
      vaccineDate: req.body.vaccineDateTiemLe,
      userId: req.signedCookies.userId,
      status: 0,
    });
    newUser.save();
  } else {
    // Tiem theo goi
    const newUser = new BillModels({
      type: 1,
      vaccineName: req.body.goitiem,
      user: req.body.name,
      vaccineDate: req.body.vaccineDateTheoGoi,
      userId: req.signedCookies.userId,
      status: 0,
    });
    newUser.save();
  }
  res.redirect('/');
};

module.exports ={
  dangkytiemchungGet,
  dangkytiemchungPost,
};
