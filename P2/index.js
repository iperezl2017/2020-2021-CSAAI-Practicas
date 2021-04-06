console.log("Ejecutando JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
  OP3: 4
}
var estado = ESTADO.INIT;
var coma = 0;
function dig(x){
  if(estado == ESTADO.INIT){
    display.innerHTML = x;
    estado = ESTADO.OP1;
  }
  else if(estado == ESTADO.OP1){
    display.innerHTML += x;
    estado = ESTADO.OP1;
  }
  else if(estado == ESTADO.OPERATION){
    display.innerHTML += x;
    estado = ESTADO.OP2;
  }
  else if(estado == ESTADO.OP2 || estado == ESTADO.OP3){
    display.innerHTML += x;
    estado = ESTADO.OP3;
  }
}

function operar(op){
  if(estado == ESTADO.OP1){
    display.innerHTML += op;
    estado = ESTADO.OPERATION;
  }
  else if(estado == ESTADO.OP3){
  display.innerHTML += op;
  estado = ESTADO.OP3;
  }
  else if (estado == ESTADO.OP3){
  display.innerHTML += op;
  estado = ESTADO.OP3;
  }
}

function resultado(){
  if (estado == ESTADO.OP3 || estado == ESTADO.OP2){
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.OP1;
  }
}

digito = document.getElementsByClassName("digito")

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    dig(ev.target.value)
  }
}

op = document.getElementsByClassName("opr")
for (i=0; i<op.length; i++) {
  op[i].onclick = (ev) => {
    operar(ev.target.value)
  }
}

igual.onclick = () => {
  resultado();
}

clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT
}
clearlast.onclick = () => {
  estado = ESTADO.OP2;
  display.innerHTML = display.innerHTML.slice(0,-1);
}

coma.onclick = () => {
  if (estado == ESTADO.OP1 || estado == ESTADO.OP3 || estado == ESTADO.INIT){
    display.innerHTML == coma.innerHTML;
    estado = ESTADO.OP2;
  }
}