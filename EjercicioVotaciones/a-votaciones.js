'use strict'

//Sistema de votaciones 
var votosJuana = 0;
var votosJulio = 0;
var textoContador = "";

var juana = document.querySelector("#juana");
var julio = document.querySelector("#julio");

juana.addEventListener("click", contarVotosJuana);
julio.addEventListener("click", contarVotosJulio);



function contarVotosJuana() {
    votosJuana++;
    document.getElementById("votosJulia").innerHTML = votosJuana;
    if (votosJuana > 0 || votosJulio > 0 ) {
        document.querySelector('#votos').style.visibility = "visible";
        console.log(votosJuana);
    }
}

function contarVotosJulio() {
    votosJulio++;
    document.getElementById("votosJulio").innerHTML = votosJulio;
    if (votosJuana > 0 || votosJulio > 0 ) {
        document.querySelector('#votos').style.visibility = "visible";
        console.log(votosJuana);
    }
}








//creando una etiqueta h2 con titulo 
function escribirTitulo() {
    var t = document.createElement("h2");//creamos el titulo
    t.append("Votaciones"); // lo rellenamos
    document.getElementById("mensaje").appendChild(t);// lo colocamos en el div
}

function escribirTextoTotales() {
    textoContador = "Hasta ahora, Juana tiene " + votosJuana + " votos y Julio tiene " + votosJulio + " votos."
    var p = document.createElement("p");
    p.append(textoContador);
    document.getElementById("contenido").appendChild(p);// lo colocamos en el div
}
