//Forma tradicional
var colores = ["red","blue","yellow"];

//Forma con objetos
var colores1 = new Array("red","blue","yellow");

console.log('El color yellow esta en la posicion ->'+colores1.indexOf("yellow"));

//Añadir un nuevo color pedido por teclado al array
var nuevoColor = prompt("Añada un color al array");

colores1.push(nuevoColor);

console.log('El nuevo color esta en la posicion -> ' + colores1.indexOf(nuevoColor));

//Añadir un color al array pero con el metodo unshift que lo añade al principio
var nuevoColor2 = prompt("Añada otro color al array");

colores1.unshift(nuevoColor2);

console.log('El nuevo color2 esta en la posicion -> ' + colores1.indexOf(nuevoColor2));