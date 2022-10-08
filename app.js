var createError = require('http-errors');
var express = require('express');

const session = require('express-session');


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./config/config.js');


var indexRouter = require('./routes/index');//Login
var loginRouter = require('./routes/login');
var personasRouter = require('./routes/personas');

var isAuthenticated = require("./middleware/autenticar");



var app = express();



// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'todo', saveUninitialized: true, resave: false }));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

app.use('/login', loginRouter);
app.use('/personas', personasRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
