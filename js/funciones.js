const formulario = document.querySelector('#form-contacto');
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const camposRequeridos = formulario.querySelectorAll('[required]');
  let formularioValido = true;

  camposRequeridos.forEach(function (campo) {
    if (campo.value.trim() === '') {
      campo.classList.add('campo-error');
      formularioValido = false;
    } else {
      campo.classList.remove('campo-error');
    }
  });

  const correo = document.querySelector('#correo');
  if (!patronCorreo.test(correo.value.trim())) {
    correo.classList.add('campo-error');
    formularioValido = false;
  }

  const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');
  mensajeConfirmacion.textContent = formularioValido
    ? '¡Gracias! Recibimos tu consulta.'
    : '';
});
