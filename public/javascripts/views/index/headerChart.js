(function(){
	return Dom.loaded(function(){
		return HTTPRequest.get('/api/data',function(status,headers,content){
			var values = JSON.parse(content);
			var ctx = Dom('#headerChart').els[0].getContext('2d');
			var labelList = [];
			values.map(function(d){
				return labelList.push(moment(d.timestamp).format('DD/MM/YYYY'));
			});

			labelList = labelList.slice(0,17);
			var dataList = [];
			values.map(function(d){
				return dataList.push(d.last);
			});
      Dom('.last').append('<font style="font-size:20px">Last value: </font><font style="color:black;font-size:20px">'+ values[values.length-1].last+' USD/bitcoin'+'</font>');
			Dom('.highest').append('<font style="font-size:15px">Highest value: </font><font style="color:black;font-size:15px">'+ values[values.length-1].high+' USD/bitcoin'+'</font>')
      Dom('.lowest').append('<font style="font-size:15px">Lowest value: </font><font style="color:black;font-size:15px">'+ values[values.length-1].low+' USD/bitcoin'+'</font>')
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
