//variable
const carrito = document.querySelector('#carrito');
const listarCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#listar-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = []

cargarEventListeners();

function cargarEventListeners() {
    listarCursos.addEventListener('click', agregarCurso);
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
    console.log(curso);

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').innerText,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // agregar elemeentos al arreglo de carrito

    articulosCarrito
}