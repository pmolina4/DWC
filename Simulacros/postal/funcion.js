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



  let start = Date.now(); // recordar la hora de inicio

  let timer = setInterval(function() {
    // ¿Cuánto tiempo pasó desde el principio?
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
      clearInterval(timer); // terminar la animación después de 2 segundos
      return;
    }

    // dibujar la animación en el momento timePassed
    draw(timePassed);

  }, 20);

  // mientras timePassed va de 0 a 2000
  // left obtiene valores de 0px a 400px
  function draw(timePassed) {
    train.style.left = timePassed / 5 + 'px';
  }