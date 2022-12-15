
//MOSTRAR SALUDO CUANDO PASAN 5sg DEL INICIO DE LA PÁGINA
const myTimeout = setTimeout(mostrarSaludo, 3000);
var fondo = document.getElementById("fondo");

function mostrarSaludo() {
  document.getElementById("saludos").style.visibility = "visible";
}



//OCULTAR SALUDO AL HACER CLICK EN EL BODY
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

function ocultarSaludo() {
  document.getElementById("saludos").style.visibility = "visible";
}



/*------------------------ NIEVE --------------------------*/

//esta es la funcion para crear un copo de nieve
const crearNieve = () => {
  //el elemento i se almacena en la variable copo
  let copo = document.createElement("i");
  // x representa la posicion en que se va a poner cada copo de nieve que se va a multipiplar por un numero random del ancho
  let x = innerWidth * Math.random();
  //para que los copos sean diferentes
  let size = Math.random() * 2;
  //
  copo.style.left = x + '%';
  //aqui se llama al style para que los copos sean un random de ancho y de largo
  copo.style.width = size + '%'
  copo.style.height = size + '%'
  //el copo de nieve se esta insertando dentro del texto
  fondo.appendChild(copo);
};


//para que se ejecute la funcion cada cierto tiempo se usa setinterval
setInterval(crearNieve, 20)
