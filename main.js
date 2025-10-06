function jugar() {
  const inputPregunta = document.getElementById("pregunta");
  const pregunta = inputPregunta.value.trim();

  if (!pregunta) {
    alert("Por favor, escribi una preguntita boludon.");
    return;
  }

  const respuesta = obtenerRespuesta();

  // Mostrar pregunta y respuesta en el div resultado
  const divResultado = document.getElementById("resultado");
  divResultado.textContent = `Pregunta: ${pregunta}\nRespuesta: ${respuesta}`;

  // Opcional: limpiar el input para que el usuario escriba otra pregunta
  inputPregunta.value = "";
}

function obtenerRespuesta() {
  const opciones = [
    "Sí",
    "No",
    "Si no te da",
    "Validamos pero no juzgamos",
    "Tal vez, quién sabe",
    " mandale perri"
  ];

  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}
