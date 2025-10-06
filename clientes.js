
const clientes = [
    { nombre: "Juan Pérez", correo: "juan.perez@example.com", telefono: "+56 9 1234 5678", direccion: "Av. Las Condes 1234", comuna: "Las Condes" },
    { nombre: "María González", correo: "maria.gonzalez@correo.cl", telefono: "+56 9 8765 4321", direccion: "Calle Providencia 456", comuna: "Providencia" },
    { nombre: "Carlos Soto", correo: "carlos.soto@empresa.com", telefono: "+56 9 1122 3344", direccion: "Av. Apoquindo 789", comuna: "Ñuñoa" },
    { nombre: "Fernanda Rivas", correo: "fernanda.rivas@outlook.com", telefono: "+56 9 9988 7766", direccion: "Camino El Alba 321", comuna: "Vitacura" },
    { nombre: "Diego Ramírez", correo: "diego.ramirez@gmail.com", telefono: "+56 9 3344 5566", direccion: "Av. Grecia 654", comuna: "Macul" },
    { nombre: "Valentina Torres", correo: "valentina.torres@live.com", telefono: "+56 9 4455 6677", direccion: "Calle San Diego 101", comuna: "Santiago" },
    { nombre: "Rodrigo Fuentes", correo: "rodrigo.fuentes@miempresa.cl", telefono: "+56 9 7788 8899", direccion: "Av. Irarrázaval 202", comuna: "Ñuñoa" },
    { nombre: "Camila Herrera", correo: "camila.herrera@correo.cl", telefono: "+56 9 2233 4455", direccion: "Av. Kennedy 888", comuna: "Las Condes" },
    { nombre: "Felipe Morales", correo: "felipe.morales@ejemplo.com", telefono: "+56 9 6677 8899", direccion: "Calle Lira 303", comuna: "Santiago" },
    { nombre: "Antonia Vega", correo: "antonia.vega@empresa.com", telefono: "+56 9 5566 7788", direccion: "Av. Tobalaba 505", comuna: "La Reina" }
];

function mostrarClientes(lista = clientes) {
    const tabla = document.getElementById("tablaClientes");
    tabla.innerHTML = "";

    lista.forEach((cliente, index) => {
        tabla.innerHTML += `
                <tr>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.correo}</td>
                    <td>${cliente.telefono}</td>
                    <td>${cliente.direccion}</td>
                    <td>${cliente.comuna}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary" onclick="editarCliente(${index})">Editar</button>
                        <button class="btn btn-sm btn-outline-danger" onclick="eliminarCliente(${index})">Eliminar</button>
                    </td>
                </tr>
            `;
    });
}

function filtrarClientes() {
    const filtro = document.getElementById("filtroCliente").value.toLowerCase();
    const filtrados = clientes.filter(c =>
        c.nombre.toLowerCase().includes(filtro) ||
        c.correo.toLowerCase().includes(filtro)
    );
    mostrarClientes(filtrados);
}

function editarCliente(index) {
    const cliente = clientes[index];
    localStorage.setItem("clienteEditado", JSON.stringify(cliente));
    window.location.href = "formulario-cliente.html";
}


function eliminarCliente(index) {
    if (confirm(`¿Eliminar a ${clientes[index].nombre}?`)) {
        clientes.splice(index, 1);
        mostrarClientes();
    }
}

// Inicializar tabla al cargar
mostrarClientes();
