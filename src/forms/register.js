document.addEventListener('DOMContentLoaded', () => {
    const formularioMascota = document.getElementById('formularioMascota');
    const botonCancelar = document.getElementById('botonCancelar');

    let mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];
    let nextId = JSON.parse(localStorage.getItem('nextId')) || 1;

    formularioMascota.addEventListener('submit', (event) => {
        event.preventDefault();
        const nuevaMascota = {
            id: nextId++,
            imagenMascota: document.getElementById('imagenMascota').value,
            nombreMascota: document.getElementById('nombreMascota').value,
            razaMascota: document.getElementById('razaMascota').value,
            edadMascota: document.getElementById('edadMascota').value,
            dniDueño: document.getElementById('dniDueño').value,
            nombreDueño: document.getElementById('nombreDueño').value,
            fechaIngreso: document.getElementById('fechaIngreso').value,
            seleccionVacunas: document.getElementById('seleccionVacunas').value
        };
        mascotas.push(nuevaMascota);
        localStorage.setItem('mascotas', JSON.stringify(mascotas));
        localStorage.setItem('nextId', nextId);
        formularioMascota.reset();
        alert('Registro guardado exitosamente.');
    });

    botonCancelar.addEventListener('click', () => {
        formularioMascota.reset();
    });
});document.addEventListener('DOMContentLoaded', () => {
    const formularioMascota = document.getElementById('formularioMascota');
    const botonCancelar = document.getElementById('botonCancelar');

    let mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];
    let nextId = JSON.parse(localStorage.getItem('nextId')) || 1;

    formularioMascota.addEventListener('submit', (event) => {
        event.preventDefault();
        const nuevaMascota = {
            id: nextId++,
            imagenMascota: document.getElementById('imagenMascota').value,
            nombreMascota: document.getElementById('nombreMascota').value,
            razaMascota: document.getElementById('razaMascota').value,
            edadMascota: document.getElementById('edadMascota').value,
            dniDueño: document.getElementById('dniDueño').value,
            nombreDueño: document.getElementById('nombreDueño').value,
            fechaIngreso: document.getElementById('fechaIngreso').value,
            seleccionVacunas: document.getElementById('seleccionVacunas').value
        };
        mascotas.push(nuevaMascota);
        localStorage.setItem('mascotas', JSON.stringify(mascotas));
        localStorage.setItem('nextId', nextId);
        formularioMascota.reset();
        alert('Registro guardado exitosamente.');
    });

    botonCancelar.addEventListener('click', () => {
        formularioMascota.reset();
    });
});
