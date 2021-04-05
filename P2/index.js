console.log("Ejecutando JS...");



display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
boton3 = document.getElementById("boton3")
boton4 = document.getElementById("boton4")
boton5 = document.getElementById("boton5")
boton6 = document.getElementById("boton6")
boton7 = document.getElementById("boton7")
boton8 = document.getElementById("boton8")
boton9 = document.getElementById("boton9")
boton0 = document.getElementById("boton0")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
mult = document.getElementById("mult")
div = document.getElementById("div")
decimal = document.getElementById("decimal")
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