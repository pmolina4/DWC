//MOSTRAR SALUDO CUANDO PASAN 5sg DEL INICIO DE LA PÁGINA
const myTimeout = setTimeout(mostrarSaludo, 3000);

function mostrarSaludo() {
  document.getElementById("saludos").style.visibility="visible";
}



//OCULTAR SALUDO AL HACER CLICK EN EL BODY
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

function ocultarSaludo() {
    document.getElementById("saludos").style.visibility="visible";
  }