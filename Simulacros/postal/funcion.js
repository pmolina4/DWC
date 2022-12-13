//VARIABLES DE AUDIO
var audio = document.getElementById("audio");
var audioPuerta = document.getElementById("audioPuerta");
var audioNavidad = document.getElementById("cancionNavidad");
var musica = document.getElementById("musica");

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
  document.getElementById("grinch").style.visibility = "hidden";  //Ocultamos el grinch
  audio.pause(); // pausamos la musica del grinch
  audioPuerta.play(); // repodrucimos la musica de laq puerta

  setTimeout(borrarPuerta, 3000); // ejecutamos la funcuon borrar puerta a los 3seg

  //esta funcion lo que hace es ocultar la puerta y mostrar el logo de el grinch con la cancion de navidad
  function borrarPuerta() {
    document.getElementById("puerta").style.visibility = "hidden";
    document.getElementById("felizGrinch").style.visibility = "visible";
    audioPuerta.pause();
    audioNavidad.play();
  }
});


window.addEventListener("orientationchange", () => {
  if (window.matchMedia("(orientation: landscape)").matches) {
    document.getElementById("grinch").style.visibility = "hidden";  //Ocultamos el grinch
    document.getElementById("puerta").style.visibility = "hidden"; //ocultamos la puerta
    document.getElementById("felizGrinch").style.visibility = "visible";
    document.getElementById("felizGrinch").style.width = "30%";
    document.getElementById("felizGrinch").style.height = "30%";
    document.getElementById("felizGrinch").style.marginLeft = "30%";
    document.getElementById("felizGrinch").style.marginTop = "74%";
    audio.pause();
    audioPuerta.pause();
    audioNavidad.pause();
    musica.play();
  }
 
});








