console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//Sonidos
const lost_sound = new Audio('lost.mp3');
const win_sound = new Audio("win.mp3");
const romperbloque_sound = new Audio("romperbloque.mp3");
const puntos_sound = new Audio("conseguirpuntos.mp3");
const pared_sound = new Audio("pared.mp3");
const raqueta_sound = new Audio("raqueta.mp3");
const disparo_sound = new Audio("disparo.mp3");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 900;
//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
let xcanvas = 590;
let ycanvas = 890;
//Bola
let xbola = 300;
let ybola = 600;
let velxbola = 5;
let velybola = -3;
//Raqueta
let xRaqueta = 250;
let yRaqueta = 875;
//Bricks
let x1 = 40;
let x2 = 120;
let x3 = 200;
let x4 = 280;
let x5 = 360;
let x6 = 440;
let x7= 520;
let y1 = 200;
let y2 = 150;
let y3 = 100;
let y4 = 50;
//Powerup
let xpowerup = 280;
let ypowerup = 150;
let ybalaizq = yRaqueta + 50;
let xbalaizq = xRaqueta;
let ybalader= yRaqueta + 50;
let xbalader= xRaqueta;
let estpowerup = 0;
let balaizq = 0;
let balader = 0;
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
  WIN : 5
}
let estado = ESTADO.INIT
//Contador
let puntos = 0;
//Estados ladrillos
//Estados fila1
let est11 = 1;
let est12 = 1;
let est13 = 1;
let est14 = 1;
let est15 = 1;
let est16 = 1;
let est17 = 1;
//Estados fila2
let est21 = 1;
let est22 = 1;
let est23 = 1;
let est24 = 1;
let est25 = 1;
let est26 = 1;
let est27 = 1;
//Estados fila3
let est31 = 1;
let est32 = 1;
let est33 = 1;
let est34 = 1;
let est35 = 1;
let est36 = 1;
let est37 = 1;
//Estados fila4
let est41 = 1;
let est42 = 1;
let est43 = 1;
let est44 = 1;
let est45 = 1;
let est46 = 1;
let est47 = 1;
//Funciones
function play (){
  myAudio.muted = "false";
}

function mute (){
  myAudio.muted = "true";
}

//Dibujar Raqueta
function drawraqueta(){
  ctx.beginPath();
  ctx.rect(xRaqueta,yRaqueta,100,25);
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
if (est11 == 1){
  ctx.beginPath();
   ctx.rect(x1,y1,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
   //rect2
if (est12 == 1){
  ctx.beginPath();
   ctx.rect(x2,y1,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
   //rect3
if (est13 == 1){
  ctx.beginPath();
   ctx.rect(x3,y1,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
  //rect4
if (est14 == 1){
  ctx.beginPath();
    ctx.rect(x4,y1,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect5
if (est15 == 1){
  ctx.beginPath();
    ctx.rect(x5,y1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect6
if (est16 == 1){
  ctx.beginPath();
    ctx.rect(x6,y1,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect7
if (est17 == 1){
  ctx.beginPath();
    ctx.rect(x7,y1,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
 //2fila
  //rect1
if (est21 == 1){
  ctx.beginPath();
   ctx.rect(x1,y2,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
   //rect2
if (est22 == 1){
  ctx.beginPath();
   ctx.rect(x2,y2,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
   //rect3
if (est23 == 1){
  ctx.beginPath();
   ctx.rect(x3,y2,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
  //rect4
if (est24 == 1){
  ctx.beginPath();
    ctx.rect(x4,y2,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect5
if (est25 == 1){
  ctx.beginPath();
    ctx.rect(x5,y2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect6
if (est26 == 1){
  ctx.beginPath();
    ctx.rect(x6,y2,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect7
if (est27 == 1){
  ctx.beginPath();
    ctx.rect(x7,y2,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
 //3fila
  //rect1
if (est31 == 1){
  ctx.beginPath();
   ctx.rect(x1,y3,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
   //rect2
if (est32 == 1){
  ctx.beginPath();
   ctx.rect(x2,y3,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
   //rect3
if (est33 == 1){
  ctx.beginPath();
   ctx.rect(x3,y3,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
  //rect4
if (est34 == 1){
  ctx.beginPath();
    ctx.rect(x4,y3,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect5
if (est35 == 1){
  ctx.beginPath();
    ctx.rect(x5,y3,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect6
if (est36 == 1){
  ctx.beginPath();
    ctx.rect(x6,y3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect7
if (est37 == 1){
  ctx.beginPath();
    ctx.rect(x7,y3,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}

 //4fila
  //rect1
if (est41 == 1){
  ctx.beginPath();
   ctx.rect(x1,y4,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
   //rect2
if (est42 == 1){
  ctx.beginPath();
   ctx.rect(x2,y4,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
   //rect3
if (est43 == 1){
  ctx.beginPath();
   ctx.rect(x3,y4,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}
  //rect4
if (est44 == 1){
  ctx.beginPath();
    ctx.rect(x4,y4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect5
if (est45 == 1){
  ctx.beginPath();
    ctx.rect(x5,y4,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect6
if (est46 == 1){
  ctx.beginPath();
    ctx.rect(x6,y4,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
  //rect7
if (est47 == 1){
  ctx.beginPath();
    ctx.rect(x7,y4,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
}

function colisionladrillos() {
//colision fila1
//colision bloque1
  if ( est11 == 1){
    if (xbola >= x1 && xbola <=(x1 + 50) && ybola >= (y1) && ybola <=(y1 + 25)) {
      velybola = velybola * -1;
      est11 = 0;
      puntos = puntos + 1;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b2
  if ( est12 == 1){
    if (xbola >= x2 && xbola <=(x2 + 50) && ybola >= (y1) && ybola <=(y1 + 25)) {
      velybola = velybola * -1;
      est12 = 0;
      puntos = puntos + 1;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b3
  if ( est13 == 1){
    if (xbola >= x3 && xbola <=(x3 + 50) && ybola >= (y1) && ybola <=(y1 + 25)) {
      velybola = velybola * -1;
      est13 = 0;
      puntos = puntos + 1;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b4
  if ( est14 == 1){
    if (xbola >= x4 && xbola <=(x4 + 50) && ybola >= (y1) && ybola <=(y1 + 25)) {
      velybola = velybola * -1;
      est14 = 0;
      puntos = puntos + 1;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b5
  if ( est15 == 1){
    if (xbola >= x5 && xbola <=(x5 + 50) && ybola >= (y1) && ybola <=(y1 + 25)) {
      velybola = velybola * -1;
      est15 = 0;
      puntos = puntos + 1;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b6
  if ( est16 == 1){
    if (xbola >= x6 && xbola <=(x6 + 50) && ybola >= (y1) && ybola <=(y1 + 25)) {
      velybola = velybola * -1;
      est16 = 0;
      puntos = puntos + 1;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b7
  if ( est17 == 1){
    if (xbola >= x7 && xbola <=(x7 + 50) && ybola >= (y1) && ybola <=(y1 + 25)) {
      velybola = velybola * -1;
      est17 = 0;
      puntos = puntos + 1;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
//colision fila2
//colision bloque1
  if ( est21 == 1){
    if (xbola >= x1 && xbola <=(x1 + 50) && ybola >= (y2) && ybola <=(y2 + 25)) {
      velybola = velybola * -1;
      est21 = 0;
      puntos = puntos + 2;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b2
  if ( est22 == 1){
    if (xbola >= x2 && xbola <=(x2 + 50) && ybola >= (y2) && ybola <=(y2 + 25)) {
      velybola = velybola * -1;
      est22 = 0;
      puntos = puntos + 2;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b3
  if ( est23 == 1){
    if (xbola >= x3 && xbola <=(x3 + 50) && ybola >= (y2) && ybola <=(y2 + 25)) {
      velybola = velybola * -1;
      est23 = 0;
      puntos = puntos + 2;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b4
  if ( est24 == 1){
    if (xbola >= x4 && xbola <=(x4 + 50) && ybola >= (y2) && ybola <=(y2 + 25)) {
      velybola = velybola * -1;
      est24 = 0;
      puntos = puntos + 2;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b5
  if ( est25 == 1){
    if (xbola >= x5 && xbola <=(x5 + 50) && ybola >= (y2) && ybola <=(y2 + 25)) {
      velybola = velybola * -1;
      est25 = 0;
      puntos = puntos + 2;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b6
  if ( est26 == 1){
    if (xbola >= x6 && xbola <=(x6 + 50) && ybola >= (y2) && ybola <=(y2 + 25)) {
      velybola = velybola * -1;
      est26 = 0;
      puntos = puntos + 2;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b7
  if ( est27 == 1){
    if (xbola >= x7 && xbola <=(x7 + 50) && ybola >= (y2) && ybola <=(y2 + 25)) {
      velybola = velybola * -1;
      est27 = 0;
      puntos = puntos + 2;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
//colision fila3
//colision bloque1
  if ( est31 == 1){
    if (xbola >= x1 && xbola <=(x1 + 50) && ybola >= (y3) && ybola <=(y3 + 25)) {
      velybola = velybola * -1;
      est31 = 0;
      puntos = puntos + 3;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b2
  if ( est32 == 1){
    if (xbola >= x2 && xbola <=(x2 + 50) && ybola >= (y3) && ybola <=(y3 + 25)) {
      velybola = velybola * -1;
      est32 = 0;
      puntos = puntos + 3;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b3
  if ( est33 == 1){
    if (xbola >= x3 && xbola <=(x3 + 50) && ybola >= (y3) && ybola <=(y3 + 25)) {
      velybola = velybola * -1;
      est33 = 0;
      puntos = puntos + 3;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b4
  if ( est34 == 1){
    if (xbola >= x4 && xbola <=(x4 + 50) && ybola >= (y3) && ybola <=(y3 + 25)) {
      velybola = velybola * -1;
      est34 = 0;
      puntos = puntos + 3;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b5
  if ( est35 == 1){
    if (xbola >= x5 && xbola <=(x5 + 50) && ybola >= (y3) && ybola <=(y3 + 25)) {
      velybola = velybola * -1;
      est35 = 0;
      puntos = puntos + 3;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b6
  if ( est36 == 1){
    if (xbola >= x6 && xbola <=(x6 + 50) && ybola >= (y3) && ybola <=(y3 + 25)) {
      velybola = velybola * -1;
      est36 = 0;
      puntos = puntos + 3;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b7
  if ( est37 == 1){
    if (xbola >= x7 && xbola <=(x7 + 50) && ybola >= (y3) && ybola <=(y3 + 25)) {
      velybola = velybola * -1;
      est37 = 0;
      puntos = puntos + 3;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
//colision fila4
//colision bloque1
   if ( est41 == 1){
    if (xbola >= x1 && xbola <=(x1 + 50) && ybola >= (y4) && ybola <=(y4 + 25)) {
      velybola = velybola * -1;
      est41 = 0;
      puntos = puntos + 5;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b2
  if ( est42 == 1){
    if (xbola >= x2 && xbola <=(x2 + 50) && ybola >= (y4) && ybola <=(y4 + 25)) {
      velybola = velybola * -1;
      est42 = 0;
      puntos = puntos + 5;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b3
  if ( est43 == 1){
    if (xbola >= x3 && xbola <=(x3 + 50) && ybola >= (y4) && ybola <=(y4 + 25)) {
      velybola = velybola * -1;
      est43 = 0;
      puntos = puntos + 5;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b4
  if ( est44 == 1){
    if (xbola >= x4 && xbola <=(x4 + 50) && ybola >= (y4) && ybola <=(y4 + 25)) {
      velybola = velybola * -1;
      est44 = 0;
      puntos = puntos + 5;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b5
  if ( est45 == 1){
    if (xbola >= x5 && xbola <=(x5 + 50) && ybola >= (y4) && ybola <=(y4 + 25)) {
      velybola = velybola * -1;
      est45 = 0;
      puntos = puntos + 5;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b6
  if ( est46 == 1){
    if (xbola >= x6 && xbola <=(x6 + 50) && ybola >= (y4) && ybola <=(y4 + 25)) {
      velybola = velybola * -1;
      est46 = 0;
      puntos = puntos + 5;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
  }
    //b7
  if ( est47 == 1){
    if (xbola >= x7 && xbola <=(x7 + 50) && ybola >= (y4) && ybola <=(y4 + 25)) {
      velybola = velybola * -1;
      est47 = 0;
      puntos = puntos + 5;
      romperbloque_sound.currentTime = 1.1;
      romperbloque_sound.play();
    }
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
function textowin(){
  ctx.font = "Lazer84.ttf";
  ctx.fillStyle = 'RED';
  ctx.fillText("YOU WIN", 250, 700);
}
function textogameover(){
  ctx.font = "Lazer84.ttf";
  ctx.fillStyle = 'RED';
  ctx.fillText("GAME OVER", 225, 700);
}

function powerup(){
  if (est24 == 0){
    ctx.beginPath();
      ctx.arc(xpowerup + 25, ypowerup, 10, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.stroke()
    ctx.closePath();

    ypowerup = ypowerup + 5;
    if (xpowerup >= xRaqueta && xpowerup <=(xRaqueta + 100) && ypowerup >= (yRaqueta - 15) && ypowerup <=(yRaqueta + 25)) {
      estpowerup = 1;
      balaizq = 1;
      balader = 1;
      disparo_sound.currentTime = 0;
      disparo_sound.play();
      }
      if (estpowerup == 1){

        if (balaizq  == 1){
        ctx.beginPath();
          ctx.rect(xbalaizq - 15 ,ybalaizq,5,15);
          ctx.fillStyle = 'white';
          ctx.fill();
          ctx.stroke()
        ctx.closePath();
        ybalaizq = ybalaizq - 10;
      }
        if (balader == 1){
        ctx.beginPath();
          ctx.rect(xbalader + 115,ybalader,5,15);
          ctx.fillStyle = 'white';
          ctx.fill();
          ctx.stroke()
        ctx.closePath();
        ybalader = ybalader - 10;
      }
        if (xbalaizq >= x3 && xbalaizq <=(x3 + 50) && ybalaizq >= (y1) && ybalaizq <=(y1 + 25) && est13 == 1){
          est13 = 0;
          romperbloque_sound.currentTime = 0;
          romperbloque_sound.play();
          balaizq = 0;
          puntos = puntos + 1;
        }
        if (xbalader >= (x5 - 100) && xbalader <=(x5) && ybalader >= (y1) && ybalader <=(y1 + 25) && est15 == 1){
          est15 = 0;
          romperbloque_sound.currentTime = 0;
          romperbloque_sound.play();
          balader = 0;
          puntos = puntos + 1;
          console.log("se bugea?");
        }
        if (xbalaizq >= x3 && xbalaizq <=(x3 + 50) && ybalaizq >= (y2) && ybalaizq <=(y2 + 25) && est23 == 1){
          est23 = 0;
          romperbloque_sound.currentTime = 0;
          romperbloque_sound.play();
          balaizq = 0;
          puntos = puntos + 2;
        }
        if (xbalader >= (x5 - 100) && xbalader <= x5 && ybalader >= (y2) && ybalader <=(y2 + 25) && est25 == 1){
          est25 = 0;
          romperbloque_sound.currentTime = 0;
          romperbloque_sound.play();
          balader = 0;
          puntos = puntos + 2;
          console.log("que hace");
        }
        if (xbalaizq >= x3 && xbalaizq <=(x3 + 50) && ybalaizq >= (y3) && ybalaizq <=(y3 + 25) && est33 == 1){
          est33 = 0;
          romperbloque_sound.currentTime = 0;
          romperbloque_sound.play();
          balaizq = 0;
          puntos = puntos + 3;
        }
        if (xbalader >= (x5 - 100) && xbalader <=x5 && ybalader >= (y3) && ybalader <=(y3 + 25) && est35 == 1){
          est35 = 0;
          romperbloque_sound.currentTime = 0;
          romperbloque_sound.play();
          balader = 0;
          puntos = puntos + 3;
          console.log("quepasa")
        }
        if (xbalaizq >= x3 && xbalaizq <=(x3 + 50) && ybalaizq >= (y4) && ybalaizq <=(y4 + 25) && est43 == 1){
          est43 = 0;
          romperbloque_sound.currentTime = 0;
          romperbloque_sound.play();
          balaizq = 0;
          puntos = puntos + 5;
        }
        if (xbalader >= (x5 - 100) && xbalader <= x5 && ybalader >= (y4) && ybalader <=(y4 + 25) && est45 == 1){
          est45 = 0;
          romperbloque_sound.currentTime = 0;
          romperbloque_sound.play();
          balader = 0;
          puntos = puntos + 5;
        }
      }
  }
}

function gameover(){
  if (estado == ESTADO.FIN){
      est11 = 1;
      est12 = 1;
      est13 = 1;
      est14 = 1;
      est15 = 1;
      est16 = 1;
      est17 = 1;
      est21 = 1;
      est22 = 1;
      est23 = 1;
      est24 = 1;
      est25 = 1;
      est26 = 1;
      est27 = 1;
      est31 = 1;
      est32 = 1;
      est33 = 1;
      est34 = 1;
      est35 = 1;
      est36 = 1;
      est37 = 1;
      est41 = 1;
      est42 = 1;
      est43 = 1;
      est44 = 1;
      est45 = 1;
      est46 = 1;
      est47 = 1;
      vidas = 3;
      puntos = 0;
      estado = ESTADO.INIT;
  }
}
function win(){
 
  if (estado == ESTADO.WIN){
    est11 = 1;
    est12 = 1;
    est13 = 1;
    est14 = 1;
    est15 = 1;
    est16 = 1;
    est17 = 1;
    est21 = 1;
    est22 = 1;
    est23 = 1;
    est24 = 1;
    est25 = 1;
    est26 = 1;
    est27 = 1;
    est31 = 1;
    est32 = 1;
    est33 = 1;
    est34 = 1;
    est35 = 1;
    est36 = 1;
    est37 = 1;
    est41 = 1;
    est42 = 1;
    est43 = 1;
    est44 = 1;
    est45 = 1;
    est46 = 1;
    est47 = 1;
    puntos = puntos + 10;
    estado = ESTADO.INIT;
  }
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
    pared_sound.currentTime = 0;
    pared_sound.play();
  }
  if (ybola < 0) {
    velybola = -velybola;
    pared_sound.currentTime = 0;
    pared_sound.play();
  }

  xbola = xbola + velxbola;
  ybola = ybola + velybola;
  //colisionraqueta
  if (xbola >= xRaqueta && xbola <=(xRaqueta + 100) && ybola >= (yRaqueta - 15) && ybola <=(yRaqueta + 25)) {
    velybola = velybola * -1;
    velxbola = velxbola * 1;
    raqueta_sound.currentTime = 0;
    raqueta_sound.play();
  }

  colisionladrillos();

  if(puntos == 77 ||  puntos == 164 || puntos == 251 || puntos == 338){
    setTimeout(textowin(),5000);
    estado = ESTADO.WIN;
    win_sound.currentTime = 0;
    win_sound.play();
  }
  //Limites raqueta
  if (xRaqueta < 0) {
    xRaqueta = 0;
  }
  if (xRaqueta > 500){
    xRaqueta = 500;
  }
  if (ybola > 900){
    estado = ESTADO.INIT;
    vidas = vidas -1;
    lost_sound.currentTime = 0;
    lost_sound.play();
    if (vidas == 0){
      setTimeout(textogameover(),5000);
      estado = ESTADO.FIN;
      
    }
  }
}

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawbola();
  drawraqueta();
  drawladrillos();
  hp();
  score();
  powerup();
  gameover();
  win();

  if (estado == ESTADO.INIT)
  {   
      xbola = 300;
      ybola = 850;
      velybola = 0;
      velxbola = 0;
      xRaqueta = 250;
      yRaqueta = 875;
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
    case "p":
      myAudio.play();
      console.log("play");
    break;
    case "o":
      mute();
      console.log("mute");
    break;
  }
}



window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "d") {
      xRaqueta = xRaqueta;
  }
}
update();