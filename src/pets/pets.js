// Obtener las mascotas desde localStorage
let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

const container = document.getElementById("mascotasContainer");
const detalle = document.getElementById("detalleMascota");
const overlay = document.getElementById("overlay");
const contenido = document.getElementById("contenidoDetalle");
let indiceMascotaActual = null;

function mostrarMascotas() {
  console.log("Mostrando mascotas actualizadas");
  mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  
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
  mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
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
function actualizarTarjeta(index) {
  //asegurarse de que los datos son actualizados
  mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  const card = document.getElementById(`mascota-${index}`);
  const mascota = mascotas[index];
  
  if (card) {
    card.classList.add("actualizado");
    
    card.innerHTML = `
          <img src="${mascota.imagenMascota}" alt="${mascota.nombreMascota}">
          <strong>${mascota.nombreMascota}</strong><br>
          <em>${mascota.razaMascota}</em>
        `;
        
    // quitarlo despues de la animacin
    setTimeout(() => {
      card.classList.remove("actualizado");
    }, 1500);
  }
}

function actualizarDetalle(index) {
  if (indiceMascotaActual === index) {
    mostrarDetalle(index);
  }
}
// Mostrar las mascotas al cargar la página
mostrarMascotas();
