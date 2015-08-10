var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var morgan = require('morgan');
var app = express();
var models = require("./models");
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var btcModel = models.btcModel;

var apiPrintData = require('./apiPrintData');
var info = new apiPrintData(btcModel);

require('./app/passport.js')(passport);

function compile(str,path){
	return stylus(str)
		.set('filename',path)
		.use(nib())
}
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(morgan('dev'));
app.use(stylus.middleware({
	src: __dirname + '/public',
	compile:compile
}));

app.use(express.static(__dirname+'/public'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({ secret: 'project',resave:true,saveUninitialized:true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app,passport);

var setJson = function(req, res, next) {
  res.set('content-type', 'application/json');
  next();
};

app.get('/api/data',setJson,function(request,response){
	return info.getDataJson(function (error,data){
		return response.end(data);
	})
})

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example running at http://%s:%s',host,port);
})






