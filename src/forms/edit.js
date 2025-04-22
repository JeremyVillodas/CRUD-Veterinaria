const editarMascotaModal = document.getElementById("editarMascotaModal");
const formularioEditarMascota = document.getElementById("formularioEditarMascota");

function abrirModalEditarConIndice(index) {
  // Asegurar datos actualizados
  const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  const mascota = mascotas[index];
  
  document.getElementById("indiceMascotaEditar").value = index;
  document.getElementById("idMascotaEditar").value = mascota.id;
  document.getElementById("imagenMascotaEditar").value = mascota.imagenMascota;
  document.getElementById("nombreMascotaEditar").value = mascota.nombreMascota;
  document.getElementById("razaMascotaEditar").value = mascota.razaMascota;
  document.getElementById("edadMascotaEditar").value = mascota.edadMascota;
  document.getElementById("dniDueñoEditar").value = mascota.dniDueño;
  document.getElementById("nombreDueñoEditar").value = mascota.nombreDueño;
  document.getElementById("fechaIngresoEditar").value = mascota.fechaIngreso;
  document.getElementById("seleccionVacunasEditar").value = mascota.seleccionVacunas;
  
  editarMascotaModal.style.display = "flex";
}

function cerrarModalEditar() {
  editarMascotaModal.style.display = "none";
}
// funcion de notificacion
function mostrarNotificacionCambios() {
  const notificacion = document.createElement("div");
  notificacion.className = "notificacion";
  notificacion.innerHTML = `
    <div class="notificacion-contenido">
      <i class="fas fa-check-circle"></i>
      <span>¡Cambios guardados correctamente!</span>
    </div>
  `;
  
  // estilon para la notificacion
  notificacion.style.position = "fixed";
  notificacion.style.top = "20px";
  notificacion.style.right = "20px";
  notificacion.style.backgroundColor = "#a30808";
  notificacion.style.color = "white";
  notificacion.style.padding = "15px 20px";
  notificacion.style.borderRadius = "5px";
  notificacion.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  notificacion.style.zIndex = "9999";
  notificacion.style.opacity = "0";
  notificacion.style.transition = "opacity 0.3s ease";
  
  document.body.appendChild(notificacion);
  
  // Animación
  setTimeout(() => {
    notificacion.style.opacity = "1";
  }, 10);
  
  // cerrar despues de 3 segundos
  setTimeout(() => {
    notificacion.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 300);
  }, 3000);
}
formularioEditarMascota.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // obttener mascotas editadas 
  const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  const index = parseInt(document.getElementById("indiceMascotaEditar").value);
  mascotas[index] = {
    id: document.getElementById("idMascotaEditar").value,
    imagenMascota: document.getElementById("imagenMascotaEditar").value,
    nombreMascota: document.getElementById("nombreMascotaEditar").value,
    razaMascota: document.getElementById("razaMascotaEditar").value,
    edadMascota: document.getElementById("edadMascotaEditar").value,
    dniDueño: document.getElementById("dniDueñoEditar").value,
    nombreDueño: document.getElementById("nombreDueñoEditar").value,
    fechaIngreso: document.getElementById("fechaIngresoEditar").value,
    seleccionVacunas: document.getElementById("seleccionVacunasEditar").value,
  };
  
  //guardar en el localstorage
  localStorage.setItem("mascotas", JSON.stringify(mascotas));
  cerrarModalEditar();
  actualizarTarjeta(index);
  // Mostrar la mascota editada en el detalle
  if (indiceMascotaActual === index) {
    mostrarDetalle(index);
  }
  
  mostrarNotificacionCambios();
  mostrarMascotas();
};
