;;;
document.addEventListener("DOMContentLoaded", load_table);


function load_table(){
var obj=document.getElementById('mon_nor_table_div_id');
var res='<table class="border_table mon_nor_table width_100_perc"> \
  <tr> \
    <td class="control-label">Head 1</td> \
    <td>Head 2</td> \
    <td>Head 3</td> \
    <!-- <td>Head 3</td> --> \
  </tr>';

for(var i=0,l=0;i<30*3;){
   res+='<tr> \
    <td>cell '+(++i)+'</td> \
    <td>cell '+(++i)+'</td> \
    <td class="font_size_0"> \
       <div class="div_inline_block width_50_perc child_font_size_0"> \
          cell '+(++i)+' \
       </div> \
       <div class="div_inline_block width_50_perc child_font_size_0"> \
          <input class="width_100_perc" type="checkbox" name="table_checkbox_'+(l++)+'"> \
       </div> \
    </td> \
    <!-- <td>Head 3</td> --> \
  </tr>';

}
res+='</table>';
 obj.innerHTML=res;

}


google.charts.load('current', {'packages':['annotationchart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Kepler-22b mission');
        data.addColumn('string', 'Kepler title');
        data.addColumn('string', 'Kepler text');
        data.addColumn('number', 'Gliese 163 mission');
        data.addColumn('string', 'Gliese title');
        data.addColumn('string', 'Gliese text');
        data.addRows([
          [new Date(2314, 2, 15), 12400, undefined, undefined,
                                  10645, undefined, undefined],
          [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter',
                                  12374, undefined, undefined],
          [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall',
                                  15766, 'Gallantors', 'First Encounter'],
          [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!',
                                  34334, 'Gallantors', 'Statement of shared principles'],
          [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties',
                                  66467, 'Gallantors', 'Mysteries revealed'],
          [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost',
                                  79463, 'Gallantors', 'Omniscience achieved']
        ]);

        var chart = new google.visualization.AnnotationChart(document.getElementById('monitoring_graph_1_id'));

        var options = {
          displayAnnotations: true
        };

        chart.draw(data, options);
      }



;;;