// Verifica si las mascotas se cargan correctamente
function buscar() {
  const dni = document.getElementById("dniInput").value.trim();
  const fecha = document.getElementById("fechaInput").value;
  const nombre = document.getElementById("registroInput").value.toLowerCase();
  const raza = document.getElementById("razaInput").value.toLowerCase();

  let filtrados = mascotas;

  if (dni) filtrados = filtrados.filter((item) => item.dniDueño.includes(dni));
  if (fecha)
    filtrados = filtrados.filter((item) => item.fechaIngreso === fecha);
  if (nombre)
    filtrados = filtrados.filter((item) =>
      item.nombreMascota.toLowerCase().includes(nombre)
    );
  if (raza)
    filtrados = filtrados.filter(
      (item) => item.razaMascota.toLowerCase() === raza
    );

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

  lista.forEach((mascota, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${mascota.imagenMascota}" alt="${mascota.nombreMascota}">
      <strong>${mascota.nombreMascota}</strong><br>
      <em>${mascota.razaMascota}</em>
    `;
    card.onclick = () => mostrarDetalle(mascota.id);
    fichas.appendChild(card);
  });
}
