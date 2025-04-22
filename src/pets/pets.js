// Obtener las mascotas desde localStorage
const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

const container = document.getElementById("mascotasContainer");
const detalle = document.getElementById("detalleMascota");
const overlay = document.getElementById("overlay");
const contenido = document.getElementById("contenidoDetalle");
let indiceMascotaActual = null;

function mostrarMascotas() {
  console.log("funciona");
  container.innerHTML = "";
  mascotas.forEach((mascota, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `mascota-${index}`; // Agregar ID único a cada tarjeta
    card.innerHTML = `
          <img src="${mascota.imagenMascota}" alt="${mascota.nombreMascota}">
          <strong>${mascota.nombreMascota}</strong><br>
          <em>${mascota.razaMascota}</em>
        `;
    card.onclick = () => mostrarDetalle(index);
    container.appendChild(card);
  });
}

function mostrarDetalle(id) {
  idMascotaActual = id;
  const m = mascotas[id];
  detalle.style.display = "block";
  overlay.style.display = "block";
  contenido.innerHTML = `
        <h2>${m.nombreMascota}</h2>
        <p><strong>Raza:</strong> ${m.razaMascota}</p>
        <p><strong>Edad:</strong> ${m.edadMascota} años</p>
        <p><strong>Dueño:</strong> ${m.nombreDueño}</p>
        <p><strong>DNI:</strong> ${m.dniDueño}</p>
        <p><strong>Ingreso:</strong> ${m.fechaIngreso}</p>
        <p><strong>Vacunas:</strong> ${
          m.seleccionVacunas === "true" ? "Vacunado" : "No Vacunado"
        }</p>
        <button type="button" id="botonEditar" class="icon-button" onclick="abrirModalEditar(${id})">
          <i class="fas fa-edit"></i>
        </button>
        <img src="${m.imagenMascota}" alt="${m.nombreMascota}">
      `;
}

function cerrarDetalle() {
  detalle.style.display = "none";
  overlay.style.display = "none";
}

function abrirModalEditar(index) {
  cerrarDetalle();
  abrirModalEditarConIndice(index);
}

// Mostrar las mascotas al cargar la página
mostrarMascotas();
