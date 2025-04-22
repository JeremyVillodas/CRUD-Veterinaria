const editarMascotaModal = document.getElementById("editarMascotaModal");
const formularioEditarMascota = document.getElementById(
  "formularioEditarMascota"
);

function abrirModalEditarConIndice(index) {
  const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  const mascota = mascotas[index];
  document.getElementById("indiceMascotaEditar").value = index;
  document.getElementById("imagenMascotaEditar").value = mascota.imagenMascota;
  document.getElementById("nombreMascotaEditar").value = mascota.nombreMascota;
  document.getElementById("razaMascotaEditar").value = mascota.razaMascota;
  document.getElementById("edadMascotaEditar").value = mascota.edadMascota;
  document.getElementById("dniDueñoEditar").value = mascota.dniDueño;
  document.getElementById("nombreDueñoEditar").value = mascota.nombreDueño;
  document.getElementById("fechaIngresoEditar").value = mascota.fechaIngreso;
  document.getElementById("seleccionVacunasEditar").value =
    mascota.seleccionVacunas;
  editarMascotaModal.style.display = "flex";
}

function cerrarModalEditar() {
  editarMascotaModal.style.display = "none";
}

formularioEditarMascota.onsubmit = function (event) {
  event.preventDefault();
  const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  const index = document.getElementById("indiceMascotaEditar").value;
  mascotas[index] = {
    imagenMascota: document.getElementById("imagenMascotaEditar").value,
    nombreMascota: document.getElementById("nombreMascotaEditar").value,
    razaMascota: document.getElementById("razaMascotaEditar").value,
    edadMascota: document.getElementById("edadMascotaEditar").value,
    dniDueño: document.getElementById("dniDueñoEditar").value,
    nombreDueño: document.getElementById("nombreDueñoEditar").value,
    fechaIngreso: document.getElementById("fechaIngresoEditar").value,
    seleccionVacunas: document.getElementById("seleccionVacunasEditar").value,
  };
  localStorage.setItem("mascotas", JSON.stringify(mascotas));
  actualizarTarjeta(index);
  actualizarDetalle(index);
  cerrarModalEditar();
  mostrarMascotas();
  alert("Registro editado con éxito");
};
