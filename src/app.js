export function sumar(a, b) {
  return a + b;
}
// Esta función agrega elementos nuevos a la lista en la interfaz
export function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return;
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

if (typeof window !== 'undefined') {
  const btn = document.getElementById('btnAgregar');
  btn?.addEventListener('click', () => {
    agregarItem('Ítem agregado');
  });

  console.log('App lista');
}
