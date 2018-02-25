var x = document.getElementById('MyAud');
var v = document.getElementById('vol');

function changevol(){
x.volume = v.value;
}

function playa() { 
    x.play(); 
} 

function stopa() { 
    x.pause();
}

