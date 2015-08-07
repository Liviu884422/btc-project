jade.templates = jade.templates || {};jade.templates['btcTable']=function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (dataPointsList, undefined) {
buf.push("<table id=\"table\" class=\"table-bordered table-hover\"><thead><tr><th>High</th><th>Low</th><th>Last</th><th>Volume</th><th>Timestamp</th></tr></thead><tbody>");
// iterate dataPointsList
;(function(){
  var $$obj = dataPointsList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var dataPoint = $$obj[$index];

buf.push("<tr><td>" + (jade.escape((jade_interp = dataPoint.high) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = dataPoint.low) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = dataPoint.last) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = dataPoint.volume) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = dataPoint.timestamp) == null ? '' : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var dataPoint = $$obj[$index];

buf.push("<tr><td>" + (jade.escape((jade_interp = dataPoint.high) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = dataPoint.low) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = dataPoint.last) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = dataPoint.volume) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = dataPoint.timestamp) == null ? '' : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table>");}.call(this,"dataPointsList" in locals_for_with?locals_for_with.dataPointsList:typeof dataPointsList!=="undefined"?dataPointsList:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}