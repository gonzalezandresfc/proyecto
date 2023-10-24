// videojuegos.js

class Videojuego {
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

const listaDeVideojuegos = [];

function agregarVideojuego(nombre, precio, descripcion) {
    const videojuego = new Videojuego(nombre, precio, descripcion);
    listaDeVideojuegos.push(videojuego);
}

function mostrarListaDeVideojuegos() {
    const listaVideojuegos = document.getElementById('lista-videojuegos');
    listaVideojuegos.innerHTML = '';

    listaDeVideojuegos.forEach((videojuego, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${videojuego.nombre}</strong> (Precio: $${videojuego.precio})<br>
            ${videojuego.descripcion}
        `;
        listaVideojuegos.appendChild(li);
    });
}

export { agregarVideojuego, mostrarListaDeVideojuegos };
