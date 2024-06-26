var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router = express.Router();
var cors = require('cors');

var musicRouter = require('./routes/contact');
var contactRouter = require('./routes/music');
var userRouter = require('./routes/user');
var app = express();
const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost:27017/');

//CORS
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', musicRouter);
app.use('/', contactRouter);
app.use('/', userRouter);

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

    // Use the router for all routes
    app.use("/", router);

    app.listen(3001, () => {
    console.log("API is running on port: 3000");
    });
    

module.exports = app;
