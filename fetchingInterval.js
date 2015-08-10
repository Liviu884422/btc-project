var later = require("later");
var fetchUrlData = require('./fetchUrlData.js');

var schedule = later.parse.text('every 10 seconds');
later.setInterval(fetchBtcUrlData.fetchBtcUrlData,schedule);
