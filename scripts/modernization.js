;;;;
document.addEventListener("DOMContentLoaded", load_params);



function test_change(range_obj){

var id=range_obj.id;
var num=id.split('_')[2];
var lb=document.getElementById('diagnostic_range_label_'+num);
lb.innerHTML=range_obj.value;


}

function load_params(){
var obj=document.getElementById('modernization_params_block_id');


for(var i=0;i<15;++i){
    obj.innerHTML+='<p> \
                     <div class="div_inline_block modern_param_search_col_1 child_font_size_0"> \
                        текст'+(i+1)+' \
                     </div> \
                     <div class="div_inline_block modern_param_search_col_2 child_font_size_0"> \
                        <select name="question2" class="form-control"> \
                           <option selected >Вариант 1</option> \
                           <option >Вариант 2</option> \
                        </select> \
                     </div> \
                     <div class="div_inline_block modern_param_search_col_3 child_font_size_0"> \
                        <input id="diagnostic_range_'+i+'" onchange="test_change(this)" type="range" min="0" max="100" step="1" value="50"> \
                     </div> \
                     <div class="div_inline_block modern_param_search_col_4 child_font_size_0"> \
                        <label id="diagnostic_range_label_'+i+'">50</label> \
                     </div> \
                     </p>';
}
}




;;;;

