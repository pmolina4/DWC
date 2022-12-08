'use strict'

//Inicializamos el array con los usuario y votos a mano
var tabla1 = new Array;
tabla1[0] = ['Juana', 0, 0];
tabla1[1] = ['Julio', 0, 0];


// funcionalidad del botón para emitir el voto

//recogemos el id de el botón de votar
var votar = document.getElementById('votar');
//Cuando hagamos click en el botón votar hacemos lo siguiente
votar.addEventListener('click', () => {
    // miro el candidato (el índice)
    let candidato = document.querySelector("#candidato");
    console.log('candidato_Index -> ' + candidato.options.selectedIndex);
    //busco con el indice el valor del candidato
    let indiceCandidato = candidato.options.selectedIndex;
    console.log("Candidato -> " + candidato.options[indiceCandidato].value);
    // miro el cargo (indice)
    let cargo = document.querySelector("#cargo");
    console.log('cargo: ' + cargo.options.selectedIndex);
    //busco con el indice el valor de el cargo
    let indiceCargo = cargo.options.selectedIndex;
    console.log(cargo.options[indiceCargo].value);

    // actualizo el voto correspondiente
    tabla1[indiceCandidato][1 + indiceCargo] = tabla1[indiceCandidato][1 + indiceCargo] + 1;


    // mensajes de control en la consola
    let mensaje = 'Hay ' + tabla1.length + ' candidatos';
    console.log(mensaje);
    mensaje = 'Hay ' + tabla1[0].length + ' cargos';
    console.log(mensaje);
    mensaje = 'NUEVO VOTO: para el candidato ' + indiceCandidato + ' para el cargo ' + indiceCargo;
    console.log(mensaje);
    console.log(tabla1);

}, false)



//-----------------MOSTRAR DATOS EN EL TEXT AREA------------------------------//

//recojo el id de el boton de mostrar
var mostrar = document.getElementById("mostrar");
//Cuando hacemos click sobre el boton de mostarr hacemos lo siguiente..
mostrar.addEventListener("click", () => {

    // actualizamos mensajes en la pantalla
    let mensaje = "RESULTADOS ACTUALIZADOS" + '\n';
    //recogemos el id del text area 
    let resultados = document.getElementById("TextAteaResultados");

    //Recorremos el array y mostramos el candidato con sus votos (añadimos esta informacion en ela cadena mensaje para luego mostrarla)
    for (candidato in tabla1) {
        mensaje = mensaje + tabla1[candidato][0] + ' tiene ' + tabla1[candidato][1] + ' votos de delegado y ' + tabla1[candidato][2] + ' votos de subdelegado.' + '\n';
        //tabla1[candidato];== Juana,0,0 
    }

    resultados.innerHTML = mensaje;

}, false);


//--------------------------REINICIAR LOS VOTANTES CON 5 EN SUS VOTOS-------------------------//

//recojo el id de el boton de REINCIAR
var reiniciar = document.getElementById("reiniciar");

//Cuando hacemos click sobre el boton de mostarr hacemos lo siguiente..
reiniciar.addEventListener("click", () => {
    for (candidato in tabla1) {
        tabla1[candidato][1] = 5;
        tabla1[candidato][2] = 5;
    }
}, false);


//---------------------BORRAR LAS VOTACIONES DE LOS CANDIDATOS-----------------//

//recojo el id de el boton de borrar
var borrar = document.getElementById("borrar");

//Cuando hacemos click sobre el boton de borrar hacemos lo siguiente..
borrar.addEventListener("click", () => {
    for (candidato in tabla1) {
        tabla1[candidato][1] = 0;
        tabla1[candidato][2] = 0;
    }
}, false);


//-------------------Ventana modal------------------------//
if (document.getElementById("mostrarModal")) {
    var modal = document.getElementById("modal");
    var btn = document.getElementById("mostrarModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function () {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function () {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}



//----------------------AÑADIR CANDIDATOS--------------//

//recojo el id de el boton de añadir
var anadir = document.getElementById("add");
//recojo valor del select
var select = document.getElementById("candidato");

//Cuando hacemos click sobre el boton de anadir hacemos lo siguiente..
anadir.addEventListener("click", () => {
    //recojo el valor introducido en el imput
    var valueCandidato = document.getElementById('nuevoCandidato').value;
    //gaurdo en una variable un option con los valores de el nuevo candidato
    var option = new Option(valueCandidato, valueCandidato);
    //añado en el select el option anterior mente creado con appenchil lo que hago es añadierlo en el final
    select.appendChild(option);
    // sacamos la longitud del array que es la que vamos ha utilizar para añadir el nuevo candidato 
    // como empieza en 1 y no en 0 no svale para añadir en la ultima posición 
    var longitudArray = tabla1.length;
    //metemos en el array en la posicion de leng del array que sería una mas ya que empieza ha cintar en 1 y no en 0
    //y le metemos el nombre del candidatos y lo inicializamos en 0 0 
    tabla1[longitudArray] = [valueCandidato, 0, 0];
    //limpiamos el campo input 
    document.getElementById('nuevoCandidato').value = "";
}, false)

