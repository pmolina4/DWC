'use strict'

var x=prompt(parseInt("Que edad tienes"));
var y = parseInt(x/10);
var resultado = Math.trunc(y);
console.log('la parte entera de '+x+' dividido entre 10 es igual a '+y);
        console.log(resultado)

switch (resultado) 
{
    case -10:
        window.alert("Operación canceladass");
        break;
    case 0 :
        window.alert("Edad mínima 1 año jajaj");
        break;
    case 1:
        window.alert("Alevin");
        break;
    case 2:
        window.alert("junior")
        break;
    
    case 3:
        window.alert("primera");
        break;
    
    case 4:
        window.alert("senior");
        break;

    default:
        window.alert("Edad erronea");
}
