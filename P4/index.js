console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador1 = document.getElementById('deslizador1');
const deslizador2 = document.getElementById('deslizador2');
const deslizador3 = document.getElementById('deslizador3');

//-- Valor del deslizador
const range_value1 = document.getElementById('range_value1');
const range_value2 = document.getElementById('range_value2');
const range_value3 = document.getElementById('range_value3');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = 740;
  canvas.height = 460;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0,740,460);
  console.log("Imagen lista...");
};
function Color(data){
    var umbralR = deslizador1.value;
    var umbralG = deslizador2.value;
    var umbralB = deslizador3.value;
    for (var i = 0; i < data.length; i+=4) {
        if (data[i] > umbralR){
          data[i] = umbralR;
        }
        if (data[i+1] > umbralG){
          data[i+1] = umbralG;
        }
        if (data[i+2] > umbralB){
          data[i+2] = umbralB;
        }
      }
  }
deslizador1.oninput = () => {
  range_value1.innerHTML = deslizador1.value;
  ctx.drawImage(img, 0,0, 740,460);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  umbralR = deslizador1.value
  Color(data);
  ctx.putImageData(imgData, 0, 0,);
}
deslizador2.oninput = () => {
    range_value2.innerHTML = deslizador2.value;
    ctx.drawImage(img, 0,0, 740,460);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    umbralG = deslizador2.value
    Color(data);
    ctx.putImageData(imgData, 0, 0,);
  }
deslizador3.oninput = () => {
    range_value3.innerHTML = deslizador3.value;
    ctx.drawImage(img, 0,0, 740,460);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    umbralB = deslizador3.value
    Color(data);
    ctx.putImageData(imgData, 0, 0,);
  }
console.log("Fin...");