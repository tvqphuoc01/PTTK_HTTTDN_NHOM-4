const adminLogin = function(req, res) {
  res.render('admin');
};


const adminPost = function(req, res) {
  res.redirect('/adminDashboard');
};

module.exports ={
  adminLogin,
  adminPost,
};

