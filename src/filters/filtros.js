 // Verifica si las mascotas se cargan correctamente
 function buscar() {
  const dni = document.getElementById("dniInput").value.trim();
  const fecha = document.getElementById("fechaInput").value;
  const filtroRegistro = document.getElementById("registroInput").value; // ← ya no usamos toLowerCase aquí
  const raza = document.getElementById("razaInput").value.toLowerCase();

  let filtrados = mascotas;

  if (dni) filtrados = filtrados.filter((item) => item.dniDueño.includes(dni));
  if (fecha) filtrados = filtrados.filter((item) => item.fechaIngreso === fecha);
  
  // Filtro de "Nuevo" (<30 días) o "Último" (>=30 días)
  if (filtroRegistro) {
    filtrados = filtrados.filter((item) => {
      const hoy = new Date();
      const fechaIngreso = new Date(item.fechaIngreso);
      const diferenciaDias = (hoy - fechaIngreso) / (1000 * 60 * 60 * 24); // días

      if (filtroRegistro === "nuevo") {
        return diferenciaDias < 30;
      } else if (filtroRegistro === "ultimo") {
        return diferenciaDias >= 30;
      }
      return true; // por defecto no filtra nada
    });
  }

  if (raza) filtrados = filtrados.filter(
    (item) => item.razaMascota.toLowerCase() === raza
  );

  mostrarResultados(filtrados);
}

//Filtro de raza
function cargarRazasUnicas() {
  const razaInput = document.getElementById("razaInput");
  const razasUnicas = [...new Set(mascotas.map(m => m.razaMascota.toLowerCase()))];

  // Limpiar opciones actuales excepto la primera
  razaInput.innerHTML = '<option value="">Raza</option>';

  // Agregar razas únicas
  razasUnicas.forEach(raza => {
    const option = document.createElement("option");
    option.value = raza;
    option.textContent = raza.charAt(0).toUpperCase() + raza.slice(1); // capitaliza
    razaInput.appendChild(option);
  });
}

// Este bloque se ejecuta solo cuando todo el HTML esté cargado
window.onload = function () {
  document.getElementById("dniInput").addEventListener("input", buscar);
  document.getElementById("fechaInput").addEventListener("input", buscar);
  document.getElementById("registroInput").addEventListener("input", buscar);
  document.getElementById("razaInput").addEventListener("input", buscar);

  cargarRazasUnicas();
};

function restaurar() {
  document.getElementById("dniInput").value = "";
  document.getElementById("fechaInput").value = "";
  document.getElementById("registroInput").value = "";
  document.getElementById("razaInput").value = "";
  mostrarResultados(mascotas);
}

function mostrarResultados(lista) {
  const fichas = document.getElementById("mascotasContainer");
  fichas.innerHTML = "";

  if (lista.length === 0) {
    fichas.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  lista.forEach((mascota, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${mascota.imagenMascota}" alt="${mascota.nombreMascota}">
      <strong>${mascota.nombreMascota}</strong><br>
      <em>${mascota.razaMascota}</em>
    `;
    card.onclick = () => mostrarDetalleGlobal(mascota);
    fichas.appendChild(card);
  });
}

function mostrarDetalleGlobal(m) {
  const detalle = document.getElementById("detalleMascota");
  const overlay = document.getElementById("overlay");
  const contenido = document.getElementById("contenidoDetalle");

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
    <img src="${m.imagenMascota}" alt="${m.nombreMascota}">
  `;
}
