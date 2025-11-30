// Inputs
const inputNombre = document.createElement("input");
inputNombre.placeholder = "Nombre";

const inputApellido = document.createElement("input");
inputApellido.placeholder = "Apellido";

// Botones
const btnAñadir = document.createElement("button");
btnAñadir.textContent = "Añadir";

const btnEliminar = document.createElement("button");
btnEliminar.textContent = "Eliminar";

// Zona de mensajes
const mensaje = document.createElement("p");
mensaje.classList.add("mensaje");

// Tabla
const tabla = document.createElement("table");
const thead = document.createElement("thead");
const trHead = document.createElement("tr");
const thNombre = document.createElement("th");
thNombre.textContent = "Nombre";
const thApellido = document.createElement("th");
thApellido.textContent = "Apellido";

trHead.append(thNombre, thApellido);
thead.appendChild(trHead);
tabla.appendChild(thead);

const tbody = document.createElement("tbody");
tabla.appendChild(tbody);

// Añadir todo al body
document.body.append(
  inputNombre,
  inputApellido,
  btnAñadir,
  btnEliminar,
  mensaje,
  tabla
);

// AÑADIR
btnAñadir.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();

  mensaje.textContent = "";

  // 1) campos vacíos
  if (!nombre || !apellido) {
    mensaje.textContent = "Debes rellenar nombre y apellido.";
    return;
  }

  // 2) comprobar si ya existe
  let existe = false;
  for (const fila of tbody.rows) {
    const celdaNombre = fila.cells[0].textContent;
    const celdaApellido = fila.cells[1].textContent;
    if (celdaNombre === nombre && celdaApellido === apellido) {
      existe = true;
      break;
    }
  }

  if (existe) {
    mensaje.textContent = "Esa persona ya está en la tabla.";
    return;
  }

  // 3) crear fila
  const tr = document.createElement("tr");
  const tdNombre = document.createElement("td");
  const tdApellido = document.createElement("td");

  tdNombre.textContent = nombre;
  tdApellido.textContent = apellido;

  tr.append(tdNombre, tdApellido);
  tbody.appendChild(tr);

  inputNombre.value = "";
  inputApellido.value = "";
});

// ELIMINAR
btnEliminar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();

  mensaje.textContent = "";

  // 1) campos vacíos
  if (!nombre || !apellido) {
    mensaje.textContent = "Debes rellenar nombre y apellido.";
    return;
  }

  // 2) buscar la persona en la tabla
  let encontrada = false;
  for (const fila of tbody.rows) {
    const celdaNombre = fila.cells[0].textContent;
    const celdaApellido = fila.cells[1].textContent;
    if (celdaNombre === nombre && celdaApellido === apellido) {
      tbody.removeChild(fila);
      encontrada = true;
      break;
    }
  }

  if (!encontrada) {
    mensaje.textContent = "Esa persona no existe en la tabla.";
  } else {
    mensaje.textContent = "Persona eliminada correctamente.";
  }

  inputNombre.value = "";
  inputApellido.value = "";
});
