//Capturar objetos del DOM

let inputAddTareas = document.getElementById('inputAddTarea');

let selectPrioridadGuardar = document.getElementById('selectPrioridadGuardar')

let btnGuardar = document.querySelector('#btnGuardar');

let selectPrioridadBuscar = document.getElementById('selectPrioridadBuscar');

let buscadorTarea = document.getElementById('buscadorTarea');

let seccionTareas = document.querySelector('#seccionTareas');

let id = 4



//Guardar una tarea

btnGuardar.addEventListener('click', recogerDatos);




function recogerDatos() {



    let nuevaTarea = inputAddTareas.value


    addTarea(nuevaTarea)


    inputAddTareas.value = ""




}




function addTarea(pTarea) {

    const nuevaTarea = {

        idTarea: id,
        titulo: pTarea,
        prioridad: selectPrioridadGuardar.value

    }

    listaTareas.push(nuevaTarea);


    pintarLista(listaTareas, seccionTareas)
    id++

}

//Cambiar prioridad

selectPrioridadBuscar.addEventListener('change', cambiarPriodidad);


function cambiarPriodidad(event) {

    let prioridad = event.target.value


    let listaFiltrada = filtrarPorPrioridad(listaTareas, prioridad)
    //puedes meter una función en una variable

    pintarLista(listaFiltrada, seccionTareas)



}



buscadorTarea.addEventListener('input', recogerBusqueda);


function recogerBusqueda(event) {

    let busqueda = event.target.value

    let listaFiltrada = filtrarPorPalabra(listaTareas, busqueda)

    pintarLista(listaFiltrada, seccionTareas)


}



