$(document).ready(function() {
	'use strict';

	/* ===== Flot Chart ==== */
	/* Ref: http://www.flotcharts.org/ */
	/* Tooltip plugin: https://github.com/krzysu/flot.tooltip */

	/* Line Chart */
	var dataSetA = [[1, 85], [2, 125], [3, 175], [4, 220], [5, 175], [5, 175], [7, 175], [8, 190], [9, 195], [10, 200]];
	var optionSetA = {
		series: {
			lines: {
				show: true,
				lineWidth: 2,
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0.3
					}, {
						opacity: 0.3
					}]
				}
			}
		},
		shadowSize: 0,
		xaxis: {
			color:'#f3f3f3'
		},
		yaxis:{
			color: '#f3f3f3'
		},
		colors: ["#40babd"],
		grid: {
			borderWidth: 0,
			hoverable: true, /* You need to set flot option hoverable to true if you want flot.tooltip plugin to work.*/
			clickable: true
		},
		legend: {
			show: false
		},
		/* Flot tooltip plugin required */
		tooltip: true,
		tooltipOpts: {
			content: "x: %x, y: %y"
		}
	};

	$.plot($("#flot-line-chart"), [dataSetA], optionSetA);

	/* Line Chart Alt */
	var dataSetB1 = [[1, 85], [2, 125], [3, 175], [4, 220], [5, 175], [6, 175], [7, 175], [8, 190], [9, 195], [10, 200]];
	var dataSetB2 = [[1, 65], [2, 115], [3, 185], [4, 230], [5, 195], [5, 165], [7, 155], [8, 230], [9, 220], [10, 210]];


	var optionSetB = {
		series: {
			lines: {
				show: true,
				lineWidth: 2,
			}
		},
		shadowSize: 0,
		xaxis: {
			color:'#f3f3f3',
		},
		yaxis:{
			color: '#f3f3f3',
		},
		colors: ["#40babd", "#75c181"],
		grid: {
			borderWidth: 0,
			hoverable: true, /* You need to set flot option hoverable to true if you want flot.tooltip plugin to work.*/
			clickable: true
		},
		legend: {
			show: true
		},
		/* Flot tooltip plugin required */
		tooltip: true,
		tooltipOpts: {
			content: "x: %x, y: %y"
		}
	};

	$.plot($("#flot-line-chart-alt"), [{label:"data1", data: dataSetB1}, {label:"data2", data: dataSetB2}], optionSetB);

	/*Bar Chart */
	var dataSetC = [[1, 100], [2, 200], [3, 150], [4, 400], [5, 650], [6, 350], [7, 700], [8, 600], [9, 500], [10, 450]];
	var optionSetC = {
		series: {
			bars: {
				show: true,
				barWidth: 0.7,
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0.8
					}, {
						opacity: 0.8
					}]
				}

			}
		},
		xaxis: {
			color:'#f3f3f3',
		},
		yaxis:{
			color: '#f3f3f3',
		},
		colors: ["#40babd"],
		grid: {
			borderWidth: 0,
			hoverable: true, /* You need to set flot option hoverable to true if you want flot.tooltip plugin to work.*/
			clickable: true
		},
		legend: {
			show: false
		},
		/* Flot tooltip plugin required */
		tooltip: true,
		tooltipOpts: {
			content: "x: %x, y: %y"
		}
	};

	$.plot($("#flot-bar-chart"), [dataSetC], optionSetC);

	/*Bar Chart Alt */
	var dataSetD = [[1, 100], [2, 200], [3, 150], [4, 400], [5, 250], [6, 350], [7, 300], [8, 400], [9, 100], [10, 250]];
	var optionSetD = {
		series: {
			bars: {
				show: true,
				align: 'center',
				horizontal: true,
				barWidth: 0.5,
				lineWidth: 15,
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0.8
					}, {
						opacity: 0.8
					}]
				}

			}
		},
		xaxis: {
			color:'#f3f3f3',
		},
		yaxis:{
			color: '#f3f3f3',
		},
		colors: ["#40babd", "#75c181"],
		grid: {
			borderWidth: 0,
			hoverable: true, /* You need to set flot option hoverable to true if you want flot.tooltip plugin to work.*/
			clickable: true
		},
		legend: {
			show: false
		},
		/* Flot tooltip plugin required */
		tooltip: true,
		tooltipOpts: {
			content: "x: %x, y: %y"
		}
	};

	$.plot($("#flot-bar-chart-alt"), [dataSetD], optionSetD);

	/* Pie Chart */


	var dataSetE = [
		{label: "Team A", data: 60, color: "#40babd"},
		{label: "Team B", data: 15, color: "#75c181"},
		{label: "Team C", data: 25, color: "#58bbee"}
	];

	var optionSetE = {
		series: {
			pie: {
				show: true,
				highlight: {
					opacity: 0.2
				}
				
			}
		},
		grid: {
			hoverable: true /* You need to set flot option hoverable to true if you want flot.tooltip plugin to work.*/
		},
		legend: {
			show: false
		},
		/* Flot tooltip plugin required */
		tooltip: true,
		tooltipOpts: {
			content: "%s: %p.0%",
			shifts: {
				x: 20,
				y: 0
			}
		}
	};

	$.plot($("#flot-pie-chart"), dataSetE, optionSetE);

	/* Pie Chart Alt */
	var dataSetF = [
		{label: "Series 1", data: 20, color: "#40babd"},
		{label: "Series 2", data: 15, color: "#75c181"},
		{label: "Series 3", data: 25, color: "#F5D44B"},
		{label: "Series 4", data: 10, color: "#656C79"},
		{label: "Series 5", data: 10, color: "#8A40A7"},
		{label: "Series 6", data: 20, color: "#58bbee"}
	];

	var optionSetF = {
		series: {
			pie: {
				show: true,
				innerRadius: 0.5,
				highlight: {
					opacity: 0.2
				}
			}
		},
		grid: {
			hoverable: true /* You need to set flot option hoverable to true if you want flot.tooltip plugin to work.*/
		},
		legend: {
			show: false
		},
		/* Flot tooltip plugin required */
		tooltip: true,
		tooltipOpts: {
			content: "%s: %p.0%",
			shifts: {
				x: 20,
				y: 0
			}
		}
	};

	$.plot($("#flot-pie-chart-alt"), dataSetF, optionSetF);


	// Update the flot charts on window resize
	window.onresize = function(event) {
		$.plot($("#flot-line-chart"), [dataSetA], optionSetA);
		$.plot($("#flot-line-chart-alt"), [{label:"data1", data: dataSetB1}, {label:"data2", data: dataSetB2}], optionSetB);
        $.plot($("#flot-bar-chart"), [dataSetC], optionSetC);
        $.plot($("#flot-bar-chart-alt"), [dataSetD], optionSetD);
        $.plot($("#flot-pie-chart"), dataSetE, optionSetE);
        $.plot($("#flot-pie-chart-alt"), dataSetF, optionSetF);
    }
});
