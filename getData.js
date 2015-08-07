var request = require("request")
var models = require("./models")
var url = 'http://www.bitstamp.net/api/ticker/';

var data = models.btcModel

var getData = { getAllData: function() {
	request({
	    url: url,
	    json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
			data.create({
				high:body.high,
				low:body.low,
				last:body.last,
				timestamp:new Date(body.timestamp*1000),
				volume:body.volume
			})
	    }

	})

	// data.findAll()
	// .then(function(data) {
	// 	data.map(function(d){
	// 		console.log(d.last)
	// 	})
	// })
}}
	
module.exports = getData;

