import { registrarCliente, mostrarListaClientes } from './clientes.js';
import { agregarVideojuego, mostrarListaDeVideojuegos } from './videojuegos.js';


document.addEventListener('DOMContentLoaded', function () {
    const clienteForm = document.getElementById('cliente-form');
    const listaClientes = document.getElementById('lista-clientes');
    const videojuegoForm = document.getElementById('videojuego-form');
    const listaVideojuegos = document.getElementById('lista-videojuegos');
    const clientesRegistrados = [];

    // Manejar el registro de clientes
    clienteForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Registra al cliente
        const cliente = registrarCliente(nombre, email);

        // Agrega el cliente a la lista de clientes registrados
        clientesRegistrados.push(cliente);

        // Muestra la lista de clientes
        listaClientes.innerHTML = '';
        mostrarListaClientes(clientesRegistrados);

        // Limpiar el formulario
        clienteForm.reset();
    });

    // Manejar el registro de videojuegos
    videojuegoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const descripcion = document.getElementById('descripcion').value;

        // Agrega el videojuego a la lista de videojuegos
        agregarVideojuego(nombre, precio, descripcion);

        // Muestra la lista de videojuegos
        listaVideojuegos.innerHTML = '';
        mostrarListaDeVideojuegos();

        // Limpiar el formulario
        videojuegoForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const videojuegoForm = document.getElementById('videojuego-form');
    const listaVideojuegos = document.getElementById('lista-videojuegos');

    videojuegoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const descripcion = document.getElementById('descripcion').value;

        agregarVideojuego(nombre, precio, descripcion);

        listaVideojuegos.innerHTML = '';
        mostrarListaDeVideojuegos();

        videojuegoForm.reset();
    });
});