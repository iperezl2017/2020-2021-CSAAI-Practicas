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
//Bola
let xbola = 400;
let ybola = 600;
let velxbola = 5;
let velybola = 3;
//raqueta
let xRaqueta = 250;
let yRaqueta = 875;
let estadoraqueta = 1;
//dimensiones
let radio = 10;
let alturaladrillo = 25;
let anchuraladrillo = 50;
let alturaraqueta = 25;
let anchuraraqueta = 100;
//sonidos
const lost_sound = new Audio('lost.mp3');
const win_sound = new Audio("win.mp3");
const romperbloque_sound = new Audio("romperbloque.mp3");
const puntos_sound = new Audio("conseguirpuntos.mp3");
const pared_sound = new Audio("pared.mp3");
const raqueta_sound = new Audio("raqueta.mp3");
const disparo_sound = new Audio("disparo.mp3");
const perder_sound = new Audio("gameover.mp3");
const myAudio = document.getElementById('music');
//varios
let puntos = 0;
let vidas = 3;
//Estados
const ESTADO = {
    INIT : 0,
    BEGIN: 1,
    JUGANDO : 2,
    FIN : 4,
    WIN : 5
  }
  let estado = ESTADO.INIT

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
        b = b + 1;
    }
}
function play(){
    myAudio.play();
}
function pause(){
    myAudio.pause();
}
function dibujarladrillos(){
    for (b = 0; b < filas*columnas; b++){
        if (arraybloques[b].estado == 1){
            ctx.beginPath();
                ctx.rect(arraybloques[b].x,arraybloques[b].y,anchuraladrillo,alturaladrillo);
                ctx.fillStyle = arraybloques[b].color;
                ctx.fill();
                ctx.stroke()
            ctx.closePath();
        }
    }
}
function drawbola(){
    ctx.beginPath();
      ctx.arc(xbola, ybola, radio, 0, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.stroke()
    ctx.closePath();
}
function drawraqueta(){
    ctx.beginPath();
    ctx.rect(xRaqueta,yRaqueta,anchuraraqueta,alturaraqueta);
    ctx.fillStyle = 'rgb(255, 100, 50)';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  function colisionesladrillos(){
    for (var bloqueindice in arraybloques){
        bloque = arraybloques[bloqueindice];
        if (xbola >= bloque.x && xbola <=(bloque.x + anchuraladrillo + radio) && ybola >= (bloque.y) && ybola <=(bloque.y + alturaladrillo + radio) && bloque.estado == 1){
            bloque.estado = 0;
            velybola = velybola * -1;
            if (bloque.color == "red"){
            puntos = puntos + 1;
            }
            if (bloque.color == "blue"){
              puntos = puntos + 2;
            }
            if (bloque.color == "yellow"){
              puntos = puntos + 3;
            }
            if (bloque.color == "green"){
              puntos = puntos + 4;
            }
            romperbloque_sound.volume = 0.3;
            romperbloque_sound.currentTime = 1.1;
            romperbloque_sound.play();
        }
    }
}
function raquetaupdate(){
    if (xbola >= xRaqueta && xbola <=(xRaqueta + anchuraraqueta + radio) && ybola >= (yRaqueta - radio) && ybola <=(yRaqueta + alturaraqueta + radio) && estadoraqueta == 1) {
        velybola = velybola * -1;
        velxbola = velxbola * 1;
        raqueta_sound.volume = 0.3;
        raqueta_sound.currentTime = 0;
        raqueta_sound.play();
      }
    if (xRaqueta < 0) {
        xRaqueta = 0;
    }
    if (xRaqueta > 500){
        xRaqueta = 500;
    }
}
function updatepelota(){
      if (xbola < 15 || xbola >= xcanvas) {
        velxbola = -velxbola;
        pared_sound.volume = 0.3;
        pared_sound.currentTime = 0;
        pared_sound.play();
      }
      if (ybola < 10) {
        velybola = -velybola;
        pared_sound.volume = 0.3;
        pared_sound.currentTime = 0;
        pared_sound.play();
      }
        xbola = xbola + velxbola;
        ybola = ybola + velybola;
    if (ybola > 875){
        estadoraqueta = 0;
            }
    if (ybola > 900){
       estado = ESTADO.INIT;
       vidas = vidas - 1;
       lost_sound.volume = 0.3;
       lost_sound.currentTime = 0;
       lost_sound.play();
            }
}
function  gameover(){
  if (estado == ESTADO.FIN){
    estado = ESTADO.INIT;
    vidas = 3;
    puntos = 0;
    for (b = 0;  b < columnas*filas; b++){
        arraybloques[b].estado = 1
    } 
    
  }
}
function win(){
    found = false;
    b = 0; 
    while (found == false && b < filas*columnas){
        if (arraybloques[b].estado == 1){
            found = true;
        }
       b = b + 1;
    }
    if (found == false){
      for (b = 0;  b < columnas*filas; b++){
        arraybloques[b].estado = 1
    }  
    estado = ESTADO.WIN;
  }
}

function hp(){
    ctx.font = "25px Lazer84";
    ctx.fillStyle = 'yellow'
    ctx.fillText("Vidas", 510, 800);
    ctx.fillText(vidas, 540, 840);
}
function score() {
    ctx.font = "25px Lazer84";
    ctx.fillStyle = 'yellow'
    ctx.fillText("Score", 20, 800);
    ctx.fillText(puntos, 45, 840);
}
function update(){ 
    if (estado == ESTADO.INIT){   
        xbola = 300;
        ybola = 850;
        velybola = 0;
        velxbola = 0;
        xRaqueta = 250;
        yRaqueta = 875;
        estadoraqueta = 1;
        }
    if (estado == ESTADO.JUGANDO){
        if (velxbola == 0 && velybola == 0){
            velxbola = 5;
            velybola = -3;
          }
        updatepelota();
        colisionesladrillos();
        raquetaupdate();
    }
    if (vidas == 0){
        estado = ESTADO.FIN;
        perder_sound.volume = 0.3;
        perder_sound.currentTime = 0;
        perder_sound.play();
    }
    if (estado == ESTADO.WIN){
        win_sound.volume = 0.3;
        win_sound.currentTime = 0;
        win_sound.play();
        estado = ESTADO.INIT;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarladrillos();
    drawbola();
    drawraqueta();
    gameover();
    win();
    hp();
    score();
    requestAnimationFrame(update);
}
window.onkeydown = (e) => {
    switch (e.key) {
      case "a":
        xRaqueta = xRaqueta - 20;
      break;
      case "d":
        xRaqueta = xRaqueta + 20;
      break;
      case " ":
      estado = ESTADO.JUGANDO;
      break;
      case "p":
        myAudio.volume = 0.2;
        myAudio.play();
      break;
      case "o":
        myAudio.pause();
      break;
    }
  }
  window.onkeyup = (e) => {
    if (e.key == "a" || e.key == "d") {
        xRaqueta = xRaqueta;
    }
  }
update();