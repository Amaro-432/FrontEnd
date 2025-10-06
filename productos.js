
const productos = [
  {
    id: 1,
    nombre: "Queso Gruyere",
    descripcion: "Aromático y sabroso, de textura firme y excelente para fundir.",
    precio: 7500,
    origen: "Suiza",
    leche: "Vaca",
    maduracion: "6 meses",
    ideal: "Fondue, gratinados, tablas",
    imagen: "images/queso-gruyere.png"
  },
  {
    id: 2,
    nombre: "Queso Raclette",
    descripcion: "Queso semiduro que se derrite fácilmente, ideal para servir caliente sobre papas, carnes y vegetales.",
    precio: 7500,
    origen: "Suiza / Francia",
    leche: "Vaca",
    maduracion: "3 a 6 meses",
    ideal: "Platos calientes, fondues",
    imagen: "images/queso-raclette.png"
  },
  {
    id: 3,
    nombre: "Queso Chèvre",
    descripcion: "Fresco y ligeramente ácido, con textura suave y sabor característico. Tradicional en la gastronomía francesa.",
    precio: 5800,
    origen: "Francia",
    leche: "Cabra",
    maduracion: "2 a 4 semanas",
    ideal: "Ensaladas, tostadas, miel, vino rosado o blanco seco",
    imagen: "images/queso-chevre.png"
  },
  {
    id: 4,
    nombre: "Queso Brie",
    descripcion: "Suave y cremoso, con corteza blanca comestible. Considerado el 'rey de los quesos'.",
    precio: 6000,
    origen: "Francia",
    leche: "Vaca",
    maduracion: "4 semanas",
    ideal: "Tablas, panes, frutas, vino blanco",
    imagen: "images/queso-brie.png"
  },
  {
    id: 5,
    nombre: "Monterey Jack",
    descripcion: "Suave y mantecoso, con sabor delicado. Originario de California, ideal para fundir.",
    precio: 5200,
    origen: "Estados Unidos",
    leche: "Vaca",
    maduracion: "1 mes",
    ideal: "Nachos, quesadillas, hamburguesas, vino blanco joven",
    imagen: "images/queso-monterey-jack.png"
  },
  {
    id: 6,
    nombre: "Pecorino Romano",
    descripcion: "Firme y salado, elaborado con leche de oveja. Tradicional en la cocina romana.",
    precio: 7800,
    origen: "Italia",
    leche: "Oveja",
    maduracion: "8 meses",
    ideal: "Cacio e pepe, ensaladas, vino blanco seco",
    imagen: "images/queso-pecorino-romano.png"
  }
]; 


document.addEventListener("DOMContentLoaded", () => {
  const btnFiltrar = document.getElementById("btn-filtrar");

  btnFiltrar.addEventListener("click", () => {
    const categoria = document.getElementById("filtro-categoria").value;
    const precioDesde = parseInt(document.getElementById("precio-desde").value.replace(/\D/g, "")) || 0;
    const precioHasta = parseInt(document.getElementById("precio-hasta").value.replace(/\D/g, "")) || Infinity;

    const filtrados = productos.filter(p => {
      const coincideCategoria =
        categoria === "Todos" ||
        (categoria === "Quesos Italianos" && p.origen.includes("Italia")) ||
        (categoria === "Quesos Nacionales" && p.origen.includes("Chile")) ||
        (categoria === "Quesos Americanos" && p.origen.includes("Estados Unidos")) ||
        (categoria === "Quesos Premium" && p.precio >= 7500);

      const dentroDelRango = p.precio >= precioDesde && p.precio <= precioHasta;

      return coincideCategoria && dentroDelRango;
    });

    renderizarProductos(filtrados);
  });

  function renderizarProductos(lista) {
    const contenedor = document.querySelector(".row.row-cols-1.row-cols-md-3.g-4.p-2");
    contenedor.innerHTML = "";

    lista.forEach(p => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <a href="producto.html?id=${p.id}" class="text-decoration-none text-dark">
          <div class="card h-100 shadow-sm producto-card">
            <div class="icono-carrito">
              <i class="bi bi-cart-plus"></i>
            </div>
            <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}" />
            <div class="card-body">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">${p.descripcion}</p>
            </div>
            <div class="card-footer text-end">
              <span class="fw-bold text-success">$${p.precio.toLocaleString("es-CL")}</span>
            </div>
          </div>
        </a>
      `;
      contenedor.appendChild(col);
    });

    if (lista.length === 0) {
      contenedor.innerHTML = `<div class="col"><p class="text-center text-muted">No se encontraron productos con los filtros seleccionados.</p></div>`;
    }
  }

  // Render inicial
  renderizarProductos(productos);
});

