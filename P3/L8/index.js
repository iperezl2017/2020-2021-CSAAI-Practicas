console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 900;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
let xcanvas = 590;
let ycanvas = 890;
//Bola
//let xbola = 300;
//let ybola = 850;
let xbola = 300;
let ybola = 600;
let velxbola = 5;
let velybola = -3;
//Raqueta
let xRaqueta = 250;
let yRaqueta = 875;
//Bricks f1
let x1 = 40;
let x2 = 100;
let x3 = 160;
let x4 = 220;
let x5 = 280;
let x6 = 340;
let x7= 400;
let x8 = 460;
let x9 = 520;
let y1 = 200;
let y2 = 150;
let y3 = 100;
let y4 = 50;
//Audio
const myAudio = document.getElementById('music');
//Vidas
let vidas = 3;
//Estados
const ESTADO = {
  INIT : 0,
  BEGIN: 1,
  JUGANDO : 2,
  FIN : 4,
}
let estado = ESTADO.INIT
//Contador
let contadorpuntos = 0;

//Funciones
function play (){
  myAudio.muted = "true";
  myAudio.play();
  myAudio.muted = "false";
  myAudio.play();
}

//Dibujar Raqueta
function drawraqueta(){
  ctx.beginPath();
  ctx.rect(xRaqueta,yRaqueta,100,75);
  ctx.fillStyle = 'rgb(255, 100, 50)';
  ctx.fill();
  ctx.stroke()
ctx.closePath();
}

//Dibujar bola
function drawbola(){
  ctx.beginPath();
  ctx.arc(xbola, ybola, 10, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke()
ctx.closePath();
}

//Dibujar ladrillos
function drawladrillos(){
//fila1
   //rect1
  ctx.beginPath();
   ctx.rect(x1,y1,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect2
  ctx.beginPath();
   ctx.rect(x2,y1,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect3
  ctx.beginPath();
   ctx.rect(x3,y1,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

  //rect4
  ctx.beginPath();
    ctx.rect(x4,y1,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect5
  ctx.beginPath();
    ctx.rect(x5,y1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect6
  ctx.beginPath();
    ctx.rect(x6,y1,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect7
  ctx.beginPath();
    ctx.rect(x7,y1,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect8
  ctx.beginPath();
    ctx.rect(x8,y1,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

   //rect9
   ctx.beginPath();
   ctx.rect(x9,y1,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

 //2fila

  //rect1
  ctx.beginPath();
   ctx.rect(x1,y2,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect2
  ctx.beginPath();
   ctx.rect(x2,y2,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect3
  ctx.beginPath();
   ctx.rect(x3,y2,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

  //rect4
  ctx.beginPath();
    ctx.rect(x4,y2,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect5
  ctx.beginPath();
    ctx.rect(x5,y2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect6
  ctx.beginPath();
    ctx.rect(x6,y2,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect7
  ctx.beginPath();
    ctx.rect(x7,y2,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect8
  ctx.beginPath();
    ctx.rect(x8,y2,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

   //rect9
   ctx.beginPath();
   ctx.rect(x9,y2,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

 //3fila

   //rect1
   ctx.beginPath();
   ctx.rect(x1,y3,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect2
  ctx.beginPath();
   ctx.rect(x2,y3,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect3
  ctx.beginPath();
   ctx.rect(x3,y3,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

  //rect4
  ctx.beginPath();
    ctx.rect(x4,y3,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect5
  ctx.beginPath();
    ctx.rect(x5,y3,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect6
  ctx.beginPath();
    ctx.rect(x6,y3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect7
  ctx.beginPath();
    ctx.rect(x7,y3,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect8
  ctx.beginPath();
    ctx.rect(x8,y3,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

   //rect9
   ctx.beginPath();
   ctx.rect(x9,y3,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

 //4fila

  //rect1
  ctx.beginPath();
   ctx.rect(x1,y4,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect2
  ctx.beginPath();
   ctx.rect(x2,y4,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect3
  ctx.beginPath();
   ctx.rect(x3,y4,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

  //rect4
  ctx.beginPath();
    ctx.rect(x4,y4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect5
  ctx.beginPath();
    ctx.rect(x5,y4,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect6
  ctx.beginPath();
    ctx.rect(x6,y4,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect7
  ctx.beginPath();
    ctx.rect(x7,y4,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect8
  ctx.beginPath();
    ctx.rect(x8,y4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

   //rect9
   ctx.beginPath();
   ctx.rect(x9,y4,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}

function update() 
{
  console.log("test");

  if (estado == ESTADO.JUGANDO){

  if (velxbola == 0 && velybola == 0){
    velxbola = 5;
    velybola = -3;
  }

  if (xbola < 0 || xbola >= xcanvas) {
    velxbola = -velxbola;
  }
  if (ybola < 0) {
    velybola = -velybola;
  }

  xbola = xbola + velxbola;
  ybola = ybola + velybola;
  //colisionraqueta
  if (xbola >= xRaqueta && xbola <=(xRaqueta + 100) && ybola >= (yRaqueta - 15) && ybola <=(yRaqueta + 75)) {
    velybola = velybola * -1;
    velxbola = velxbola * -1;
  }
  //colision bloque1
  if (xbola >= x1 && xbola <=(x1 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  //b2
  if (xbola >= x2 && xbola <=(x2 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  //b3
  if (xbola >= x3 && xbola <=(x3 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  //b4
  if (xbola >= x4 && xbola <=(x4 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  //b5
  if (xbola >= x5 && xbola <=(x5 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  //b6
  if (xbola >= x6 && xbola <=(x6 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  //b7
  if (xbola >= x7 && xbola <=(x7 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  //b8
  if (xbola >= x8 && xbola <=(x8 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  //b9
  if (xbola >= x9 && xbola <=(x9 + 50) && ybola >= (y1 + 12) && ybola <=(y1 + 25)) {
    velybola = velybola * -1;
  }
  if (xRaqueta < 0) {
    xRaqueta = 0;
  }
  if (xRaqueta > 500){
    xRaqueta = 500;
  }
  if (ybola > 900){
    estado = ESTADO.INIT;
    vidas = vidas -1;
  }
}
    

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawbola();
  drawraqueta();
  drawladrillos();


  if ( estado == ESTADO.INIT)
  {   
      xbola = 300;
      ybola = 850;
      velybola = 0;
      velxbola = 0;
    }
 
  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);

}


window.onkeydown = (e) => {
  //-- Según la tecla se hace una cosa u otra
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
    case "o":
      myAudio.play();
    break
  }
}



window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "d") {
      xRaqueta = xRaqueta;
  }
}
update();