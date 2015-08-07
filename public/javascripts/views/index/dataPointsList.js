(function(){
	return Dom.loaded(function(){
		return HTTPRequest.get('/api/data',function(status,headers,content){
			var values = JSON.parse(content);
			var table = jade.templates['btcTable']({
				dataPointsList:values
			});
			Dom('#table').append(table);
			var ctx = Dom('#btcChart').els[0].getContext('2d');
			var labelList = [];
			values.map(function(d){
				return labelList.push(moment(d.timestamp).format('DD/MM/YYYY'));
			});

			labelList = labelList.slice(0,17);
			var dataList = [];
			values.map(function(d){
				return dataList.push(d.last);
			});

			dataList = dataList.slice(0,17);
			var data = {
				labels:labelList,
				datasets:[
				{
					label:'DataSet',
					fillColor:'rgba(220,220,220,0.2)',
					strokeColor:'rgba(220,220,220,1)',
					pointColor:'rgba(220,220,220,1)',
					pointStrokeColor:'#fff',
					pointHighlightFill:'#fff',
					pointHighlightStroke:'rgba(220,220,220,1)',
					data:dataList
				}]
			};
			return lineChart = new Chart(ctx).Line(data);
		});
	});
})();