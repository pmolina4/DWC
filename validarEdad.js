'use strict'

var edad;

edad = parseInt (prompt("Ingrese su edad"));


while( edad > 120 || edad <= 0){
    window.alert("Edad incorecta");
    edad = parseInt (prompt("Ingrese su edad"));
}

window.alert("Edad correcta");
