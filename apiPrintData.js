(function(){
var apiPrintData;
apiPrintData = (function() {
  function apiPrintData(btcModel) {
    this.btcModel = btcModel;
  }
  apiPrintData.prototype.getDataJson = function(done) {
    return this.btcModel.findAll().then(function(dataPoints) {
      dataPoints = dataPoints.map(function(d) {
        return d.get(null, {
          plain: true
        });
      });
      return done(null, JSON.stringify(dataPoints));
    });
  };
  return apiPrintData;
})();

module.exports = apiPrintData;
}).call(this);



// module.exports = function(){
// 		function apiPrintData(btcModel){
// 			this.btcModel = btcModel;
// 			}
// 		apiPrintData.prototype.getDataJson = function(data){
// 			return this.btcModel.findAll().then(function(info){
// 				info = info.map(function(d){
// 					return d.get(null,{plain:true})
// 				})
// 				return data(null,JSON.stringify(info))
// 			})
// 		}
	
// 	return apiPrintData;
// }
// console.log(apiPrintData)
// module.exports = apiPrintData;



