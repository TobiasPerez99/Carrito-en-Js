//variable
const carrito = document.querySelector('#carrito');
const listarCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = []

cargarEventListeners();

function cargarEventListeners() {
    listarCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso);
}

//funciones

function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatoCurso(cursoSeleccionado);
    }
}

function leerDatoCurso(curso) {
    // console.log(curso);

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').innerText,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }



    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })

        articulosCarrito = [...cursos];

    } else {

        // agregar elemeentos al arreglo de carrito

        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML();
    }
}


//muestra el carrito de compra
function carritoHTML() {

    vaciarCarrito();

    console.log(contenedorCarrito);
    console.log(articulosCarrito);

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `<img src = "${curso.imagen}" widht="100" alt="imagencurso">         
         <td> ${curso.nombre}</td>
         <td> ${curso.precio}</td>
         <td> ${curso.cantidad}</td>
         <td> <a href="#" class = "borrar-curso" data-id="${curso.id}">X</a></td>`;

        contenedorCarrito.appendChild(row);
    });

}
// Muestra el curso seleccionado en el Carrito



// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';


    // forma rapida (recomendada)
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}