var createError = require('http-errors');
var express = require('express');
var dotenv= require( "dotenv");
var path = require('path');
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');
var taskRouter = require('./src/routes/apis/Task');

var app = express();
dotenv.config();
const port =process.env.PORT || 5000
require("./db/mongoose");
// view engine setup
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Tasks', taskRouter);

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
app.listen(port,()=>{
  console.log(`server listening at ${port}`)
})

module.exports = app;
