'use strict'
// Sistema de votaciones. Actuar en linea 12

//inicializar los contadores de votos
var tabla1 = new Array;

// opcion inicializar nombre a mano
// tabla1[0] = ['Juana', 0, 0];
// tabla1[1] = ['Julio', 0, 0];

// opcion definir manualmente el formato JSON
// creamos un objeto JSON
const candidatos = [
    {nombre: "Ana", votosdel: 3, votossub: 2},
    {nombre: "Sergio", votosdel: 33, votossub: 6},
    {nombre: "Julio", votosdel: 5, votossub: 9}
];
// console.log(candidatos);

// // creamos un string a partir del objeto JSON
// var estring = JSON.stringify(candidatos);
// console.log(estring);

// var tablatexto = JSON.stringify(tabla1);
// console.log(tablatexto);

// var tabla3=JSON.parse(tablatexto);
// console.log(tabla3);
// mostramos todos los elementos del JSON

// regenero la lista desplegable con los candidatos del JSON
let candidato = document.querySelector("#candidato");
console.log(candidato);

// vaciado de las opciones que hubiera en el HTML
while (candidato.firstChild) {
    candidato.removeChild(candidato.firstChild);
}
// añadir las opciones según el JSON

// creamos un array a partir del objeto JSON

for (var candidate of candidatos) {
    console.log(candidate.nombre+" "+candidate.votosdel+" "+candidate.votossub);
    let elemento = new Array;
    elemento[0]=candidate.nombre;
    elemento[1]=candidate.votosdel;
    elemento[2]=candidate.votossub;
    tabla1.push(elemento);
    
    // añado el candidato al desplegable
    let nuevo=document.createElement("option");
    nuevo.innerHTML=candidate.nombre;
    // también así funciona:
    // let nombre=document.createTextNode(candidate.nombre);
    // nuevo.appendChild(nombre);
    candidato.insertAdjacentElement("beforeend",nuevo);

}


// funcionalidad del botón para emitir el voto
var votar = document.getElementById('votar');
votar.addEventListener('click', () => {
    // miro el candidato
    
    console.log('candidato: ' + candidato.options.selectedIndex);
    let indice1 = candidato.options.selectedIndex;
    console.log(candidato.options[indice1].value);
    // miro el cargo
    let cargo = document.querySelector("#cargo");
    console.log('cargo: ' + cargo.options.selectedIndex);
    let indice2 = cargo.options.selectedIndex;
    console.log(cargo.options[indice2].value);

    // actualizo el voto correspondiente
    tabla1[indice1][1 + indice2] = tabla1[indice1][1 + indice2] + 1;

    // mensajes de control en la consola
    let mensaje = 'Hay ' + tabla1.length + ' candidatos';
    console.log(mensaje);
    mensaje = 'Hay ' + tabla1[0].length + ' cargos';
    console.log(mensaje);
    mensaje = 'NUEVO VOTO: para el candidato ' + indice1 + ' para el cargo ' + indice2;
    console.log(mensaje);
    console.log(tabla1);

    // actualizamos mensajes en la pantalla
    let resultados = document.querySelector("#resultados");
    resultados.innerHTML = "";
    let parrafo = document.createElement("p");
    mensaje = "RESULTADOS ACTUALIZADOS<br/>";
    for (candidato in tabla1) {
        mensaje = mensaje + tabla1[candidato][0] + ' tiene ' + tabla1[candidato][1] + ' votos de delegado y ' + tabla1[candidato][2] + ' votos de subdelegado.<br/>';
    }
    parrafo.innerHTML = mensaje;
    resultados.appendChild(parrafo);



}, false);
