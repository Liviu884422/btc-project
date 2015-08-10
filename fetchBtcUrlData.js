var request = require("request");
var models = require("./models");
var url = 'http://www.bitstamp.net/api/ticker/';

var btcModel = models.btcModel;

var fetchBtcUrlData = { fetchBtcUrlData: function() {
	request({
	    url: url,
	    json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
			btcModel.create({
				high:body.high,
				low:body.low,
				last:body.last,
				timestamp:new Date(body.timestamp*1000),
				volume:body.volume
			})
	    }
	})
}}
	
module.exports = fetchBtcUrlData;

