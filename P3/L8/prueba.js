const canvas = document.getElementById("canvas");
//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 900;
//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
let xcanvas = 590;
let ycanvas = 890;
//ladrillos
let xinicial = 40;
let yinicial = 50;
let xincremento = 80;
let i = 0;
let j = 0;
let filas = 7;
let columnas = 4;
var arraybloques = new Array(filas*columnas);
var arraycolores = ['red', 'yellow' ,'green', 'blue'];
let b = 0;

for (i = 0; i < filas; i++){
    for(j = 0; j < columnas; j++){
        //R = Math.floor(Math.random() * (255));
        //G = Math.floor(Math.random() * (100 - 50) + 50);
        //B = Math.floor(Math.random() * (100 - 50) + 50);
        var bloque = {
            x : xinicial + i * xincremento,
            y : yinicial + j * yinicial,
            estado : 1,
            color : arraycolores[Math.floor(Math.random()*4)]
        };
        arraybloques[b] = bloque; 
        console.log(b);
        console.log(arraybloques[b]);
        b = b + 1;
        
    }
}
function dibujarladrillos(){
    for (b = 0; b < filas*columnas; b++){
        if (arraybloques[b].estado == 1){
            ctx.beginPath();
                ctx.rect(arraybloques[b].x,arraybloques[b].y,50,25);
                ctx.fillStyle = arraybloques[b].color;
                ctx.fill();
                ctx.stroke()
            ctx.closePath();
        }
    }
}

function colisionesladrillos(){
    for (bloque : arraybloques)
    
}
function update(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarladrillos();
    requestAnimationFrame(update);
}
update();