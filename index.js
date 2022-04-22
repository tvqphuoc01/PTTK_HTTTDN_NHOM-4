const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const randomstring = require('randomstring');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(cookieParser(randomstring.generate()));
require('dotenv').config();

app.set('views', './views');
app.set('view engine', 'pug');

// Connect DATABASE
mongoose.connect(process.env.MONGO_DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
);
const db = mongoose.connection;

db.on('error', () => console.error('Database connection failed'));
db.once('open', async () => {
  console.info('Database connection established...');
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/image'));
app.use(express.static('public/vendor'));
app.use(express.static('public/js'));

app.use(bodyParser.urlencoded({extended: true}));

const authMiddleware = require('./middleware/auth.middleware');

const indexRoute = require('./routers/index.router');
const loginRoute = require('./routers/login.router');
const logoutRoute = require('./routers/logOut.router');
const signUpRoute = require('./routers/signUp.router');
const dangkymuavaccineRoute = require('./routers/dangkymuavaccine.router');
const dangkytiemchungRoute = require('./routers/dangkytiemchung.router');
const danhsachvaccineRoute = require('./routers/danhsachvaccine.router');
const danhsachhoadonRoute = require('./routers/danhsachhoadon.router');
const adminLogin = require('./routers/adminLogin.router');
app.use('/', indexRoute);

app.use('/logIn', loginRoute);

app.use('/signUp', signUpRoute);

app.use('/logOut', logoutRoute);

app.use('/dangkytiemchung', authMiddleware.authMiddleware, dangkytiemchungRoute);

app.use('/dangkymuavaccine', authMiddleware.authMiddleware, dangkymuavaccineRoute);

app.use('/danhsachhoadon', authMiddleware.authMiddleware, danhsachhoadonRoute);

app.use('/danhsachvaccine', danhsachvaccineRoute);

app.use('/admin', adminLogin);

app.get('/adminDashboard', (req, res) => {
  res.render('adminDashboard');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
