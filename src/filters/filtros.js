function buscar() {
  const dni = document.getElementById("dniInput").value.trim();
  const fecha = document.getElementById("fechaInput").value;
  const nombre = document.getElementById("registroInput").value.toLowerCase();
  const raza = document.getElementById("razaInput").value.toLowerCase();

  const mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];

  let filtrados = mascotas;

  if (dni) filtrados = filtrados.filter(item => item.dniDueño.includes(dni));
  if (fecha) filtrados = filtrados.filter(item => item.fechaIngreso === fecha);
  if (nombre) filtrados = filtrados.filter(item => item.nombreMascota.toLowerCase().includes(nombre));
  if (raza) filtrados = filtrados.filter(item => item.razaMascota.toLowerCase() === raza);

  mostrarResultados(filtrados);
}

function restaurar() {
  document.getElementById("dniInput").value = "";
  document.getElementById("fechaInput").value = "";
  document.getElementById("registroInput").value = "";
  document.getElementById("razaInput").value = "";

  const mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];
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
    <p><strong>Vacunas:</strong> ${m.seleccionVacunas === 'true' ? 'Vacunado' : 'No Vacunado'}</p>
    <img src="${m.imagenMascota}" alt="${m.nombreMascota}">
  `;
}
