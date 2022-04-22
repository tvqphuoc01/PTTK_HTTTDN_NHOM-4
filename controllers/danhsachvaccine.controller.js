const userModels = require('../models/users.model');
const vaccineModels = require('../models/vaccine.model');

const danhsachvaccineGet = async function(req, res) {
  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.userId !== false) {
    const userData = await userModels.findOne(
        {_id: req.signedCookies.userId},
    );
    const vaccineData = await vaccineModels.find();
    res.locals.user = userData;
    res.locals.vaccine = vaccineData;
    res.render('danhsachvaccine');
  } else {
    res.render('danhsachvaccine');
  }
};

module.exports ={
  danhsachvaccineGet,
};
