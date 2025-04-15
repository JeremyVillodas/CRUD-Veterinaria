const mascotas = [
    {
      nombre: "Luna",
      raza: "Labrador",
      edad: 3,
      dueño: "Carlos Pérez",
      dni: "12345678",
      ingreso: "2023-09-01",
      vacunas: ["Rabia", "Triple"],
      imagen: "https://placedog.net/400?id=1"
    },
    {
      nombre: "Max",
      raza: "Beagle",
      edad: 5,
      dueño: "Lucía Gómez",
      dni: "87654321",
      ingreso: "2022-12-15",
      vacunas: ["Rabia", "Parvovirus"],
      imagen: "https://placedog.net/400?id=2"
    },
    {
      nombre: "Luna",
      raza: "Labrador",
      edad: 3,
      dueño: "Carlos Pérez",
      dni: "12345678",
      ingreso: "2023-09-01",
      vacunas: ["Rabia", "Triple"],
      imagen: "https://placedog.net/400?id=1"
    },
    {
      nombre: "Max",
      raza: "Beagle",
      edad: 5,
      dueño: "Lucía Gómez",
      dni: "87654321",
      ingreso: "2022-12-15",
      vacunas: ["Rabia", "Parvovirus"],
      imagen: "https://placedog.net/400?id=2"
    }
    ,      
    {
      nombre: "Luna",
      raza: "Labrador",
      edad: 3,
      dueño: "Carlos Pérez",
      dni: "12345678",
      ingreso: "2023-09-01",
      vacunas: ["Rabia", "Triple"],
      imagen: "https://placedog.net/400?id=1"
    },
    {
      nombre: "Max",
      raza: "Beagle",
      edad: 5,
      dueño: "Lucía Gómez",
      dni: "87654321",
      ingreso: "2022-12-15",
      vacunas: ["Rabia", "Parvovirus"],
      imagen: "https://placedog.net/400?id=2"
    } ,     
    {
      nombre: "Luna",
      raza: "Labrador",
      edad: 3,
      dueño: "Carlos Pérez",
      dni: "12345678",
      ingreso: "2023-09-01",
      vacunas: ["Rabia", "Triple"],
      imagen: "https://placedog.net/400?id=1"
    },
    {
      nombre: "Max",
      raza: "Beagle",
      edad: 5,
      dueño: "Lucía Gómez",
      dni: "87654321",
      ingreso: "2022-12-15",
      vacunas: ["Rabia", "Parvovirus"],
      imagen: "https://placedog.net/400?id=2"
    }
  ];

  const container = document.getElementById("mascotasContainer");
  const detalle = document.getElementById("detalleMascota");
  const overlay = document.getElementById("overlay");
  const contenido = document.getElementById("contenidoDetalle");

  mascotas.forEach((mascota, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `mascota-${index}`; // Agregar ID único a cada tarjeta
    card.innerHTML = `
      <img src="${mascota.imagen}" alt="${mascota.nombre}">
      <strong>${mascota.nombre}</strong><br>
      <em>${mascota.raza}</em>
    `;
    card.onclick = () => mostrarDetalle(index);
    container.appendChild(card);
  });

  function mostrarDetalle(i) {
    const m = mascotas[i];
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
    detalle.style.display = "none";
    overlay.style.display = "none";
  }