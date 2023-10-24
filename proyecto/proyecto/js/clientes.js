// Función para registrar un cliente
function registrarCliente(nombre, email) {
    const cliente = { nombre, email };
    // Lógica para guardar el cliente (puedes utilizar una base de datos o almacenamiento local)
    return cliente;
}

// Función para mostrar la lista de clientes
function mostrarListaClientes(clientes) {
    clientes.forEach((cliente, index) => {
        console.log(`Cliente ${index + 1}: Nombre - ${cliente.nombre}, Correo Electrónico - ${cliente.email}`);
    });
}

// Exporta las funciones para su uso en otros archivos
export { registrarCliente, mostrarListaClientes };