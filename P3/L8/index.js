console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 900;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

let x = 300;
let y = 850;

let velx = 3;
let vely = 1;

let start = false;

function update() 
{

  console.log("test");
 
  
    if (x < 0 || x >= (canvas.width - 20) ) {
        velx = -velx;
    }
    if (y <= 0 || y > canvas.height - 20) {
        vely = -vely;
    }
    if (start == true){
    x = x + velx;
    y = y + vely;
    } 

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 20, 20);

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

document.onkeydown = (e) => {
    console.log("were")
    switch (e.key) {
      case 13 :
          start == true;
          console.log("algo");
      break;
      }
  }

//-- ¡Que empiece la función!
update();