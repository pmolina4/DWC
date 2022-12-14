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

//Esta funcion lo que hace es ocultar la puerta y mostrar el logo de el grinch con la cancion de navidad
  function borrarPuerta() {
    document.getElementById("puerta").style.visibility = "hidden";
    document.getElementById("felizGrinch").style.visibility = "visible";
    audioPuerta.pause();
    audioNavidad.play();
  }
});


//DETECTAR LA ORIENTACION DE LA PANTALLA CON JAVASCRIPT
window.addEventListener("orientationchange", ()=> {
  //CUANDO ESTA EN PORTRAIT HACEMOS LO QUE HAY DENTRO DEL CONDICIONAL
  if (window.screen.orientation.type == "portrait-primary") {
    //RECARGAMOS LA PÁGINA CUANDO GIREMOS HA PORTRAIR
    location.reload();
  }

    //CUANDO ESTA EN LANDSCAPE HACEMOS LO QUE HAY DENTRO DEL CONDICIONAL
  if (window.screen.orientation.type == "landscape-primary") {
      document.getElementById("grinch").style.visibility = "hidden";//ocultamos el grinch
      document.getElementById("saludos").style.visibility = "hidden"; //ocultamos el saludo
      document.getElementById("felizGrinch").style.visibility = "visible"; //mostramos el grinc de felicidades
      document.getElementById("felizGrinch").style.width = "32vw"; // le cambiamos el tamaño
      //Se para toda la musica 
      audio.pause();
      audioPuerta.pause();
      audioNavidad.pause();
      musica.play();//se repodruce la nueva musica
  }

});
