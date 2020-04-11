
var ball= document.querySelector('.ball');
var pos;
function gravity(){
    pos= setInterval(grav,900);
}

function grav(){
    ball.style.transform="translateY(" + (ball.offsetTop+470)+ "px)";   
}

document.body.onkeyup=function(e){
    if(e.keyCode==32){
        ball.style.transform="translateY("+(ball.offsetTop+80)+"px)";
    }
};