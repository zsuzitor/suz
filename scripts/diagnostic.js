;;;

google.load("visualization", "1", {packages:["corechart"]});
   google.setOnLoadCallback(drawChart);
   function drawChart() {
    var data = google.visualization.arrayToDataTable([
     ['Газ', 'Объём'],
     ['Азот',     78.09],
     ['Кислород', 20.95],
     ['Аргон',    0.93],
     ['Углекислый газ', 0.03]
    ]);
    var options = {
     title: 'Состав воздуха',
     is3D: true,
     pieResidueSliceLabel: 'Остальное'
    };
    var chart = new google.visualization.PieChart(document.getElementById('diagnostic_graph_1_id'));
     chart.draw(data, options);
   }





;;;