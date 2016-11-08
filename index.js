var express = require('express');
var engines = require('express-react-views'),
    exp_options = { babel: {presets :['react','es2015']}};
var react = require('react');
var reactDOM = require('react-DOM');
var bodyParser = require('body-parser'),
    options = { extended:true };
var app = express();
var cookieParser = require('cookie-parser');
var session = require('cookie-session');

//initilize body-parser and cookie-parser for setting cookies and sessions
app.use(bodyParser.urlencoded(options));
app.use(session({
  name:'session',
  keys:['secret','keys']
}));
app.use(cookieParser());

//initilize engines and settind  default  directories
app.engine("jsx", engines.createEngine(exp_options));
app.set("view engine", "jsx");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+"/public"));



//importing routes
require('./server/routes.js')(app);

//initilizing server
require('./server/server.js')(app);
