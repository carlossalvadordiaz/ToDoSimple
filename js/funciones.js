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