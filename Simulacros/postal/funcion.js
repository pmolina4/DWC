var audio = document.getElementById("audio");
var audioPuerta = document.getElementById("audioPuerta");
var audioNavidad = document.getElementById("cancionNavidad");

//MOSTRAR SALUDO CUANDO PASAN 5sg DEL INICIO DE LA PÁGINA
const myTimeout = setTimeout(mostrarSaludo, 3000);

function mostrarSaludo() {
  document.getElementById("saludos").style.visibility = "visible";
  document.getElementById("grinch").style.visibility = "visible";
}


//OCULTAR SALUDO AL HACER CLICK EN EL BODY
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

function ocultarSaludo() {
  document.getElementById("saludos").style.visibility = "hidden";
}

//Mover la posicion del grinch y poner la puerta visible con la musica
document.getElementById("grinch").addEventListener("click", function () {
  document.getElementById("grinch").style.transform = "scaleX(-1)";
  document.getElementById("puerta").style.visibility = "visible";
  audio.play();
});


//Abrir Puerta con muscia y para la musica de el grinch y borrar el grinch
document.getElementById("puerta").addEventListener("click", function () {
  document.getElementById("grinch").style.visibility = "hidden";
  audio.pause();
  audioPuerta.play();

  const tiempoCierre = setTimeout(borrarPuerta, 3000);

  function borrarPuerta() {
    document.getElementById("puerta").style.visibility = "hidden";
    document.getElementById("felizGrinch").style.visibility = "visible";
    audioPuerta.pause();
    audioNavidad.play();
  }



});







