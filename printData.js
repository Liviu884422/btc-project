var apiPrintData = (function(){
	function apiPrintData(btcModel){
		this.btcModel = btcModel;
	}
	apiPrintData.prototype.getDataJson = function(data){
		return btcModel.findAll().this(function(info){
			info = info.map
			return data(null,JSON.stringify(info))
		})
	}
	return apiPrintData;
})

module.exports = apiPrintData;


