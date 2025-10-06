const ordenes = [
    { pedido: 112, cliente: "Juan Pérez", producto: "Queso sabor", direccion: "Av. Providencia 2255", estado: "Confirmado" },
    { pedido: 113, cliente: "María González", producto: "Queso mantecoso", direccion: "", estado: "Confirmado" },
    { pedido: 114, cliente: "Carlos Soto", producto: "Queso azul", direccion: "Av. Apoquindo 789", estado: "Confirmado" }
];

function mostrarOrdenes(lista = ordenes) {
    const tabla = document.getElementById("tablaOrdenes");
    tabla.innerHTML = "";

    lista.forEach((orden, index) => {
        const direccionValida = orden.direccion.trim() !== "";
        const boton = direccionValida
            ? `<button class="btn btn-sm btn-success" onclick="generarOrden(${index})">Generar orden</button>`
            : `<button class="btn btn-sm btn-warning" onclick="completarDatos(${index})">Completar datos</button>`;

        tabla.innerHTML += `
            <tr>
                <td>#${orden.pedido}</td>
                <td>${orden.cliente}</td>
                <td>${orden.producto}</td>
                <td>${orden.direccion || "<em>Sin dirección</em>"}</td>
                <td>${orden.estado}</td>
                <td>${boton}</td>
            </tr>
        `;
    });
}

function filtrarOrdenes() {
    const filtro = document.getElementById("filtroOrden").value.toLowerCase();
    const filtradas = ordenes.filter(o =>
        o.cliente.toLowerCase().includes(filtro) ||
        o.producto.toLowerCase().includes(filtro)
    );
    mostrarOrdenes(filtradas);
}

function generarOrden(index) {
    const orden = ordenes[index];
    localStorage.setItem("ordenDespacho", JSON.stringify(orden));
    window.location.href = "orden-despacho.html";
}

function completarDatos(index) {
    alert(`⚠️ El pedido #${ordenes[index].pedido} no tiene dirección registrada.`);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarOrdenes();
});

