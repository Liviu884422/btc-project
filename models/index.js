var Sequelize = require('sequelize');
var sequelize = new Sequelize ('testing_shit','root','cock',{
	dialect:'mysql',
})
var request = require("request");
var later = require("later");
var path = require("path");
var url = 'http://www.bitstamp.net/api/ticker/';

var models = ['btcModel','user'];

models.forEach(function(model){
	module.exports[model]=sequelize.import(path.join(__dirname, model))
	return
})

sequelize.sync();

module.exports.sequelize = sequelize;
