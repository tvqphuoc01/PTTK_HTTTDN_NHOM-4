const adminModel = require('../models/admin.model');

module.exports.loginAdminValidate = async function(req, res, next) {
  // eslint-disable-next-line prefer-const
  let errors = [];
  const userData = await adminModel.findOne(
      {username: req.body.username},
      {username: 1, _id: 1, password: 1},
  );
  console.log(userData);
  if (userData === null) {
    errors.push('user does not exist !!!');
  } else if (req.body.password !== userData.password) {
    errors.push('Wrong password !!!');
  }

  if (errors.length !== 0) {
    res.render('logIn', {
      errors: errors,
    });

    return;
  } else {
    if (req.body.remember === 'on') {
      // If User check on Remember me set Expires day for Cookie
      res.cookie(
          'adminId', // Cookie Name
          userData._id.valueOf(), // Cookie Values
          // Cookie Expires day
          {
            expires: new Date(Date.now() + 900000000), // 10 Days
            httpOnly: true,
            signed: true,
          },
      );
      next();
    } else {
      // Delete Cookie when User close Browsers
      res.cookie('adminId', userData._id.valueOf(), {signed: true});
      next();
    }
  }
  next();
};
