
var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');


function yellowColor(){

    yellow.style.backgroundColor = "yellow";
    yellow.style.transition = ".2s ease-in-out"
    
}
function redColor(){

    red.style.backgroundColor = "red";
    red.style.transition = ".2s ease-in-out"

    
}
function greenColor(){

    green.style.backgroundColor = "green";
    green.style.transition = ".2s ease-in-out"

    
}
function defaultcolor(){

    yellow.style.backgroundColor = "rgb(36, 35, 35)";
    red.style.backgroundColor = "rgb(36, 35, 35)";
    green.style.backgroundColor = "rgb(36, 35, 35)";

}
