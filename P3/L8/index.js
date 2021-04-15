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
let xbola = 300;
let ybola = 850;
let velxbola = 5;
let velybola = 3;
//Raqueta
let xRaqueta = 300;
let yRaqueta = 875;

let contadorpuntos = 0;

function drawbola(){
      //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
  ctx.arc(xbola, ybola, 10, 0, 2 * Math.PI);

  //-- Dibujar
  ctx.fillStyle = 'red';

  //-- Rellenar
  ctx.fill();

  //-- Dibujar el trazo
  ctx.stroke()
ctx.closePath();
}
function drawladrillos(){

   //rect1
  ctx.beginPath();
   ctx.rect(40,200,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect2
  ctx.beginPath();
   ctx.rect(100,200,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect3
  ctx.beginPath();
   ctx.rect(160,200,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

  //rect4
  ctx.beginPath();
    ctx.rect(220,200,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect5
  ctx.beginPath();
    ctx.rect(280,200,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect6
  ctx.beginPath();
    ctx.rect(340,200,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect7
  ctx.beginPath();
    ctx.rect(400,200,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect8
  ctx.beginPath();
    ctx.rect(460,200,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

   //rect9
   ctx.beginPath();
   ctx.rect(520,200,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
 //2fila

  //rect1
  ctx.beginPath();
   ctx.rect(40,150,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect2
  ctx.beginPath();
   ctx.rect(100,150,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect3
  ctx.beginPath();
   ctx.rect(160,150,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

  //rect4
  ctx.beginPath();
    ctx.rect(220,150,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect5
  ctx.beginPath();
    ctx.rect(280,150,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect6
  ctx.beginPath();
    ctx.rect(340,150,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect7
  ctx.beginPath();
    ctx.rect(400,150,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect8
  ctx.beginPath();
    ctx.rect(460,150,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

   //rect9
   ctx.beginPath();
   ctx.rect(520,150,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

 //3fila

   //rect1
   ctx.beginPath();
   ctx.rect(40,100,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect2
  ctx.beginPath();
   ctx.rect(100,100,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect3
  ctx.beginPath();
   ctx.rect(160,100,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

  //rect4
  ctx.beginPath();
    ctx.rect(220,100,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect5
  ctx.beginPath();
    ctx.rect(280,100,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect6
  ctx.beginPath();
    ctx.rect(340,100,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect7
  ctx.beginPath();
    ctx.rect(400,100,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect8
  ctx.beginPath();
    ctx.rect(460,100,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

   //rect9
   ctx.beginPath();
   ctx.rect(520,100,50,25);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

 //4fila

  //rect1
  ctx.beginPath();
   ctx.rect(40,50,50,25);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect2
  ctx.beginPath();
   ctx.rect(100,50,50,25);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

   //rect3
  ctx.beginPath();
   ctx.rect(160,50,50,25);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();

  //rect4
  ctx.beginPath();
    ctx.rect(220,50,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect5
  ctx.beginPath();
    ctx.rect(280,50,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect6
  ctx.beginPath();
    ctx.rect(340,50,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect7
  ctx.beginPath();
    ctx.rect(400,50,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //rect8
  ctx.beginPath();
    ctx.rect(460,50,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

   //rect9
   ctx.beginPath();
   ctx.rect(520,50,50,25);
   ctx.fillStyle = 'greeb';
   ctx.fill();
   ctx.stroke()
 ctx.closePath();
}

function update() 
{

  console.log("test");
 
  
    if (xbola < 0 || xbola >= xcanvas ) {
        velxbola = -velxbola;
    }
    if (ybola <= 0 || ybola > ycanvas) {
        velybola = -velybola;
    }

    xbola = xbola + velxbola;
    ybola = ybola + velybola;

    if (ybola >= (yRaqueta - 10) && ybola <= (yRaqueta + 100)) {
    velybola = velybola * -1;
  }

    if (xRaqueta < 0) {
      xRaqueta = 0;
    }
    if (xRaqueta > 500){
      xRaqueta = 500;
    }

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
    ctx.rect(xRaqueta,yRaqueta,100,75);

    //-- Dibujar
    ctx.fillStyle = 'rgb(255, 100, 50)';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  drawladrillos();
  drawbola();
  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}


window.onkeydown = (e) => {
  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {
    case "a":
      xRaqueta = xRaqueta - 10;
    break;

    case "d":
      xRaqueta = xRaqueta + 10;
    break;
  }
}



window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "d") {
      xRaqueta = xRaqueta;
  }
}
update();