// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var listaAmigos = [];
var capturaNombre;

//agregamos valores al array, limpiamos el input y validamos que el campo no este vacio.
function agregarAmigo(){
    capturaNombre = document.getElementById('amigo').value.trim();
    if(capturaNombre === "") {
        alert("el campo esta vacio");
    } else {
        listaAmigos.push(capturaNombre);
    }
    limpiarCaja();
    //console.log(listaAmigos);
}

//limpiamos la caja del input.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

