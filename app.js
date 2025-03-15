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
    imprimirLista(listaAmigos);
}

//limpiamos la caja del input.
function limpiarCaja() {
    document.querySelector('#amigo').value = "";
}

//agregar cada elemento del array a la lista html
function imprimirLista(listaAmigos) {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = ""
    for (let i = 0; i < listaAmigos.length; i++) {
        let nuevoElemento = document.createElement("li");

        // Asignamos el nombre del amigo al contenido del <li>
        nuevoElemento.textContent = listaAmigos[i];

        // Añadimos el nuevo elemento <li> a la lista en el DOM
        listaHTML.appendChild(nuevoElemento);
    }
}
