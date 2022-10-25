'use strict'


var num1 = prompt("Escribe el primer numero : ");
var num2 = prompt("Escribe el segundo numero : ");
var  num3 = prompt("Escribe el tercer numero : ");

var listadesordenada = [num1, num2, num3];

function Burbuja(lista) {
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    console.log(lista); // Mostramos, por consola, la lista ya ordenada
    return lista;
}
document.getElementById("resultadodesordenado").innerHTML = "Array desordenado:</br></br>"+listadesordenada+"</br>";

document.getElementById("resultado").innerHTML = "</br>Array ordenado:</br></br>"+Burbuja(listadesordenada);
