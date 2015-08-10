Dom('#chartButton').bind('click',function() {
	displayChart();
});

Dom('#tableButton').bind('click',function() {
	displayTable();
})

function displayTable() {
  Dom("#table").toggle();
  Dom("#h2").toggle();
};

function displayChart() {
  Dom("#canvas-wrapper").toggle();
  Dom("#h1").toggle();
};

