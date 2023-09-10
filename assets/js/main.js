// Variables para la evaluación
const Contenedor = document.getElementById('Evaluate');
const Options = 5;
// creación de cada radio
const evalucion = document.getElementById('evaluacion');
for (let i = 1; i <= Options; i++) {
  const rateContent = document.createElement('div');
  rateContent.classList.add('rate_content');
  const input = document.createElement('input');
  input.type = 'radio';
  input.value = i;
  input.name = 'rate';
  input.id = `opcion${i}`;
  const label = document.createElement('label');
  label.setAttribute('for', `opcion${i}`);
  label.textContent = i;
  rateContent.appendChild(input);
  rateContent.appendChild(label);
  Contenedor.appendChild(rateContent);
}
// Sección con evaluación oculta
document.querySelector('#Evaluado').style.display = 'none';
// Función para evaluar
function evaluador() {
  const radios = document.querySelectorAll('input[type="radio"]');
  let seleccionado = null;
  radios.forEach(radio => {
      if (radio.checked) {
        seleccionado = radio.value;
      }
  });
  if (seleccionado !== null) {
    document.querySelector('#Bienvenido').style.display = 'none';
    document.querySelector('#Evaluado').style.display = 'flex';
    evalucion.innerHTML = seleccionado;
    console.log(`El radio seleccionado es: ${seleccionado}`);
  } else {
    console.log('Ningún radio seleccionado');
  }
}