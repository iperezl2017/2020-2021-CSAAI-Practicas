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
let b = 0;

for (i = 0; i < filas; i++){
    for(j = 0; j < columnas; j++){
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        console.log(r);
        console.log(g);
        console.log(b);
        var bloque = {
            x : xinicial + i * xincremento,
            y : yinicial + j * yinicial,
            estado : 1,
            color : 'rgb('+ r + ',' + g +',' + b +')'
        };
        arraybloques[b] = bloque;
        b = b + 1;
    }
    
    console.log("eh");
    console.log(arraybloques[b].color);
}
function dibujarladrillos(){
    for (b = 0; b < filas*columnas; b++){
        var auxiliar = arraybloques[b];
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
function update(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarladrillos();
    requestAnimationFrame(update);
}
update();