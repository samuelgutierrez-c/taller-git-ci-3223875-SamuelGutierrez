function sumar(a, b) {
  return a + b;
}

function agregarItem(texto) {
  const lista = document.getElementById("lista");
  if (!lista) return;
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

// Exportar para que los tests puedan usarlo
module.exports = { sumar, agregarItem };
