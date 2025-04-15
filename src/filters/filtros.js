
function buscar() {
  const dni = document.getElementById("dniInput").value.trim();
  const fecha = document.getElementById("fechaInput").value;
  const registro = document.getElementById("registroInput").value.toLowerCase();
  const raza = document.getElementById("razaInput").value.toLowerCase();

  let filtrados = mascotas;

  if (dni) filtrados = filtrados.filter(item => item.dni.includes(dni));
  if (fecha) filtrados = filtrados.filter(item => item.ingreso === fecha);
  if (raza) filtrados = filtrados.filter(item => item.raza.toLowerCase() === raza);

  mostrarResultados(filtrados);
}

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

  lista.forEach((mascota) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${mascota.imagen}" alt="${mascota.nombre}">
      <strong>${mascota.nombre}</strong><br>
      <em>${mascota.raza}</em>
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
    <h2>${m.nombre}</h2>
    <p><strong>Raza:</strong> ${m.raza}</p>
    <p><strong>Edad:</strong> ${m.edad} años</p>
    <p><strong>Dueño:</strong> ${m.dueño}</p>
    <p><strong>DNI:</strong> ${m.dni}</p>
    <p><strong>Ingreso:</strong> ${m.ingreso}</p>
    <p><strong>Vacunas:</strong> ${m.vacunas.join(", ")}</p>
    <img src="${m.imagen}" alt="${m.nombre}">
  `;
}

function cerrarDetalle() {
  document.getElementById("detalleMascota").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

window.onload = () => {
  mostrarResultados(mascotas);
};
