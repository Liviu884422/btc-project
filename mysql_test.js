var Sequelize = require('sequelize');
// var sequelize = new Sequelize('training_btc','training','gEd8gBm72nTUpduQ',
// 	{
// 		host:"10.88.85.101",
// 		dialect:"mysql"
// 	});
var sequelize = new Sequelize ('testing_shit','root','cock',{
	define:{
	timestamps: false
	}
})
var request = require("request");
var later = require("later");
var url = 'http://www.bitstamp.net/api/ticker/';

sequelize.sync();

var schedule = later.parse.text('every 30 seconds');

var data = sequelize.define('dataBtc',
{
	high:Sequelize.DOUBLE,
	low:Sequelize.DOUBLE,
	last:Sequelize.DOUBLE,
	timestamp:Sequelize.DATE,
	volume:Sequelize.DOUBLE
});

// #####
function getData(){
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
	data.findAll()
	.then(function(data) {
		data.map(function(d){
			console.log(d.last)
		})
	})
}

later.setInterval(getData,schedule)


// sequelize.query('SELECT price FROM dataBtcs',{type:sequelize.QueryTypes.SELECT}).then(function(d){
// 	console.log(d)
// })

// sequelize.query('SELECT price FROM dataBtcs',{model:data}).then(function(d){
// 	console.log(d)
// })






