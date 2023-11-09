const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cadastroRouter = require('./routes/cadastro.js')
const loginRouter = require('./routes/login.js')

//var admin = require('firebase-admin');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


//var serviceAccount = require('./package-lock.json');
//admin.initializeapp({
//  credential: admin.credential.cert(serviceAccount),
//  databaseURL: 'https://aerostorage-f286f-default-rtdb.firebaseio.com'
//});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cadastro', cadastroRouter);
app.use('/login', loginRouter);

app.get('/inicio', (req, res) =>{
  res.render('Inicio');
});

app.get('/cadastro', (req, res)=>{
  res.render('cadastro');
});

app.get('/login', (req, res)=>{
  res.render('login');
})

module.exports = app;
