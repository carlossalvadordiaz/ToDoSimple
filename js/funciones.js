// Pintar el array entero, por parámetro puede recibir una lista, que puede ser la lista ya filtrada. ej pintarLista(pLista, pSection) --> pintarLista(listaFiltradaPorPrioridad, pSection)

/*  <div class="seccionTareas">
            <h2>Tarea 1</h2> <button>Eliminar</button>
            <h2>Tarea 1</h2> <button>Eliminar</button>
            <h2>Tarea 1</h2> <button>Eliminar</button>
        </div> */

pintarLista(listaTareas, seccionTareas)
function pintarLista(pLista, pSection) {

    pSection.innerHTML = ""; //para que no se repita cada vez que guardas una.

    for (let tarea of pLista) {



        let h2 = document.createElement('h2');

        let contenidoh2 = document.createTextNode(` Tarea: ${tarea.titulo}`);

        let button = document.createElement('button');





        button.addEventListener('click', borrarElemento)

        button.innerText = 'Eliminar';

        h2.dataset.id = tarea.idTarea;


        h2.appendChild(contenidoh2);
        h2.appendChild(button)


        /*  let contenidobutton = document.createTextNode(`eliminar`); */
        /* para eliminar hay que hacerlo desde esta funcio, ej onclick en el button */


        /*   button.appendChild(contenidobutton); */

        h2.classList.add(tarea.prioridad);

        pSection.appendChild(h2);
        /* pSection.appendChild(button); */

    }


}



//Borrar elemento

function borrarElemento(event) {

    let h2borrar = event.target.parentNode.dataset.id;
    /* console.log(h2borrar) */

    let listaFiltrada = listaTareas.findIndex(elemento => elemento.idTarea == h2borrar);

    listaTareas.splice(listaFiltrada, 1)


    pintarLista(listaTareas, seccionTareas)


}


