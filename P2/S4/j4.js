console.log("Procesando script");
const parrafo = document.getElementById("parrafo");
Boton = document.getElementById("prueba")
Boton2 = document.getElementById("prueba2")

Boton.onclick = () => {
    console.log("Has clickado");
    parrafo.innerHTML += " 1"
}
Boton2.onclick = () => {
    console.log("Has clickado");
    parrafo.innerHTML += " 2"
}