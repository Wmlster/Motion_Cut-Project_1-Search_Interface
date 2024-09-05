let input=document.getElementById("search_field");
let select=document.querySelector("select");


select.addEventListener("change",set_input_value);

function set_input_value(){
    let Selected_Value=select.value;
    let txt="Search in ";
    
    txt+=Selected_Value;
    input.value=txt;

}

