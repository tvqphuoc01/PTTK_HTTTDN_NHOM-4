const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/image'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/logIn', (req, res) => {
  res.render('logIn');
});

app.get('/signUp', (req, res) => {
  res.render('signUp');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
