var later = require("later")
var getData = require('./getData.js')

// getData.getAllData

// var schedule = { schedule : function (){
var schedule = later.parse.text('every 10 seconds');
later.setInterval(getData.getAllData,schedule)
// }}

// module.exports = schedule