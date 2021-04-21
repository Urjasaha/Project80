function Get1() {
    var inputs =[];
    for (var i=1; i<=6; i++) 
    {
        inputs.push(document.getElementById("input"+i).value);
        
    }
    inputs.join(". ");  
    document.getElementById("show_paragraph1").innerHTML=inputs.join(". ");
    
}
function Get2() {
    var inputs =[];
    for (var i=7; i<=12; i++) 
    {
        inputs.push(document.getElementById("input"+i).value); 
    }
    inputs.join(". "); 
    document.getElementById("show_paragraph2").innerHTML=inputs.join(". ");
 
}