$(document).ready(function() {
	'use strict';

	/* ===== Chart.js ==== */
	/* Ref: http://www.chartjs.org/docs/ */

	/* Random number generator for demo purpose */
	var randomDataPoint = function(){ return Math.round(Math.random()*100)};

	/* Line Chart */
	var lineChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
		{
			label: "My First dataset",
			backgroundColor : "rgba(117,193,129,0.2)",
			borderColor : "rgba(117,193,129,1)",
			pointBackgroundColor : "rgba(117,193,129,1)",
			pointBorderColor : "#fff",
			pointHoverBackgroundColor : "#fff",
			pointHoverBorderColor : "rgba(117,193,129,1)",
			data : [randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint()]
		},
		{
			label: "My Second dataset",
			backgroundColor : "rgba(56,203,203,0.2)",
			borderColor : "rgba(56,203,203,1)",
			pointBackgroundColor : "rgba(56,203,203,1)",
			pointBorderColor : "#fff",
			pointHoverBackgroundColor : "#fff",
			pointHoverBorderColor : "rgba(56,203,203,1)",
			data : [randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint()]
		}
		]

	};

	/* Bar Chart */
	var barChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
		{
			backgroundColor : "rgba(88,187,238,0.5)",
			borderColor : "rgba(88,187,238,0.8)",
			hoverBackgroundColor: "rgba(88,187,238,0.75)",
			hoverBorderColor: "rgba(88,187,238,1)",
			borderWidth: 2,
			data : [randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint()]
		},
		{
			backgroundColor : "rgba(117,193,129,0.5)",
			borderColor : "rgba(117,193,129,0.8)",
			hoverBackgroundColor : "rgba(117,193,129,0.75)",
			hoverBorderColor : "rgba(117,193,129,1)",
			borderWidth: 2,
			data : [randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint(),randomDataPoint()]
		}
		]
	};

	/* Pie Chart */
	var pieData = {
		labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
		datasets: [{
			data: [250, 100, 100, 40, 120],
			backgroundColor: [
				"rgba(56,203,203,0.2)",
				"rgba(56,203,203,0.4)",
				"rgba(56,203,203,0.6)",
				"rgba(56,203,203,0.8)",
				"rgba(56,203,203,0.9)"
			],
			hoverBackgroundColor: [
				"rgba(56,203,203,0.25)",
				"rgba(56,203,203,0.45)",
				"rgba(56,203,203,0.6.5)",
				"rgba(56,203,203,0.85)",
				"rgba(56,203,203,0.95)"
			]
		}]
	};

	/* Doughnut Chart */
	var doughnutData = {
		labels: [ "Group A", "Group B", "Group C", "Group D", "Group E" ],
		datasets: [{
			data: [ 100, 250, 100, 40, 120],
			backgroundColor: [
			"rgba(117,193,129,0.2)",
			"rgba(117,193,129,0.4)",
			"rgba(117,193,129,0.6)",
			"rgba(117,193,129,0.8)",
			"rgba(117,193,129,0.95)"
			],
			hoverBackgroundColor: [
			"rgba(117,193,129,0.25)",
			"rgba(117,193,129,0.45)",
			"rgba(117,193,129,0.65)",
			"rgba(117,193,129,0.85)",
			"rgba(117,193,129,1)"
			]
		}]
	};

	/* Polar Chart */
	var polarData = {
		labels: [ "Set A", "Set B", "Set C", "Set D" ],
		datasets: [{
			data: [ 300, 50, 100, 40 ],
			backgroundColor: [
			"rgba(88,187,238,0.2)",
			"rgba(88,187,238,0.4)",
			"rgba(88,187,238,0.6)",
			"rgba(88,187,238,0.8)"
			],
			hoverBackgroundColor: [
			"rgba(88,187,238,0.3)",
			"rgba(88,187,238,0.5)",
			"rgba(88,187,238,0.7)",
			"rgba(88,187,238,0.9)"
			],
			label: 'My dataset' // for legend
		}]
	};

	/* Radar Chart */
	var radarChartData = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
		{
			label: "My First dataset",
			backgroundColor: "rgba(220,220,220,0.2)",
			borderColor: "rgba(220,220,220,1)",
			pointBackgroundColor: "rgba(220,220,220,1)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			data: [65,59,90,81,56,55,40]
		},
		{
			label: "My Second dataset",
			backgroundColor: "rgba(56,203,203,0.2)",
			borderColor: "rgba(56,203,203,1)",
			pointBackgroundColor: "rgba(56,203,203,1)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(56,203,203,1)",
			data: [28,48,40,19,96,27,100]
		}
		]
	};

	/* Line Chart */
	var ctxLine = document.getElementById("line-chart-canvas").getContext("2d");
	window.myLine = new Chart.Line(ctxLine, {
		data: lineChartData,
		options: {
			scaleFontColor: "#b7bcc6",
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		}
	});

	/* Bar Chart */
	var ctxBar = document.getElementById("bar-chart-canvas").getContext("2d");
	window.myBar = new Chart.Bar(ctxBar, {
		data: barChartData,
		options: {
			scaleFontColor: "#b7bcc6",
			responsive : true,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		}
	});

	/* Pie Chart */
	var ctxPie = document.getElementById("pie-chart-canvas").getContext("2d");
	window.myPie = new Chart(ctxPie, {
		type: 'pie',
		data: pieData,
		options: {
			responsive : true,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		}
	});

	/* Doughnut Chart */
	var ctxDoughnut = document.getElementById("doughnut-chart-canvas").getContext("2d");
	window.myDoughnut = new Chart(ctxDoughnut, {
		type: 'doughnut',
		data: doughnutData,
		options: {
			responsive : true,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		}
	});

	/* Polar Chart */
	var ctxPolar = document.getElementById("polar-chart-canvas").getContext("2d");
	window.myPolarArea = new Chart(ctxPolar, {
		type: 'polarArea',
		data: polarData,
		options: {
			responsive:true,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		}
	});

	/* Radar Chart */
	var ctxRadar = document.getElementById("radar-chart-canvas").getContext("2d");
	window.myRadar = new Chart(ctxRadar, {
		type: 'radar',
		data: radarChartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		}
	});
});
