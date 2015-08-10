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
})();

