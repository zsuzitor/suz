

function test_change(range_obj){

var id=range_obj.id;
var num=id.split('_')[2];
var lb=document.getElementById('diagnostic_range_label_'+num);
lb.innerHTML=range_obj.value;


}




