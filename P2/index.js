console.log("Ejecutando JS...");



display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")




clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}


boton1.onclick = () => {
  display.innerHTML += boton1.value;
}


boton2.onclick = () => {
  display.innerHTML += boton2.value;
}

boton3.onclick = () => {
    display.innerHTML += boton3.value;
  }

boton4.onclick = () => {
    display.innerHTML += boton4.value;
}

boton5.onclick = () => {
    display.innerHTML += boton5.value;
}

boton6.onclick = () => {
    display.innerHTML += boton6.value;
}

boton7.onclick = () => {
    display.innerHTML += boton7.value;
}

boton8.onclick = () => {
    display.innerHTML += boton8.value;
}

boton9.onclick = () => {
    display.innerHTML += boton9.value;
}

suma.onclick = () => {
  display.innerHTML += suma.value;
}

resta.onclick = () => {
    display.innerHTML += resta.value;
  }

mult.onclick = () => {
    display.innerHTML += mult.value;
}

div.onclick = () => {
    display.innerHTML += div.value;
}

decimal.onclick = () => {
    display.innerHTML = decimal.value + ".";
}

igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}


clear.onclick = () => {
  display.innerHTML = "";
}