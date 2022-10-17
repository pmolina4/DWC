var parrafo = new Array("hay", 3, "elementos", "importantes", "en", 1, "cocina");

function mostrarNros(array) {
    array.forEach(palabra => {
        if (!isNaN(palabra)) {
            console.log(palabra)
        }
    });
}

mostrarNros(parrafo);