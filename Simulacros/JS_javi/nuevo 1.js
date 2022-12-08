'use strict'

// Sistema de votaciones.

//inicializar los contadores de votos

// opcion inicializar nombre a mano
document.getElementById("esconder").style.display = "none";
var tabla1 = new Array;
tabla1[0] = ['Juana', 0, 0]; //tabla1[2][F];
tabla1[1] = ['Julio', 0, 0];
console.log(tabla1);


// funcionalidad del botón para emitir el voto
var votar = document.getElementById('votar');
votar.addEventListener('click', () => {
    // miro el candidato
    let candidato = document.querySelector("#candidato");
    //console.log('candidato: ' + candidato.options.selectedIndex);
    let indice1 = candidato.options.selectedIndex;
    //console.log(candidato.options[indice1].value);
    // miro el cargo
    let cargo = document.querySelector("#cargo");
    //console.log('cargo: ' + cargo.options.selectedIndex);
    let indice2 = cargo.options.selectedIndex;
    //console.log(indice2);

    // actualizo el voto correspondiente
    tabla1[indice1][1 + indice2] = tabla1[indice1][1 + indice2] + 1; //Incrementa los votos en el campo seleccionado.



}, false);

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click",() => {
	
	// actualizamos mensajes en la pantalla
	let mensaje;
    let resultados = document.getElementById("resultados");
	resultados.innerHTML = "";
    let parrafo = document.createElement("h1"); //Crea en el DOCUMENTO una etiqueta <h1></h1> (EL DOCUMENTO ES TODO, NO SOLO EL BODY).
    mensaje = "RESULTADOS ACTUALIZADOS<br/>";
    for (candidato in tabla1) {
        mensaje = mensaje + tabla1[candidato][0] + ' tiene ' + tabla1[candidato][1] + ' votos de delegado y ' + tabla1[candidato][2] + ' votos de subdelegado.<br/>';
    }
	
    parrafo.innerHTML = mensaje; //Este es el contenido del H1.
    resultados.insertAdjacentElement("beforeend",parrafo);//Aqui se añade el H1 con su contenido al DIV vacío con ID "resultados".
	
	//<h1></h1>
	
	//<h1>mensaje</h1>
	
	//<div id="resultados"><h1>mensaje</h1></div>

	document.getElementById("resultados").show();
	
	document.getElementById("mostrar").style.display = "none";
	
	document.getElementById("esconder").style.display = "inline-block";
	 
	 
	
},false);

function cerrar (){
		 
	document.getElementById("resultados").close();
	
	document.getElementById("esconder").style.display = "none";
	
	document.getElementById("mostrar").style.display = "inline-block";
		 
}

var inicializar = document.getElementById("inicio");
inicializar.addEventListener("click",() => {
	
	for(candidato in tabla1){
		
		tabla1[candidato][1] = 5;
		tabla1[candidato][2] = 5;
		
	}
	
},false);


