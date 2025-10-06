
function validarCorreo() {
    const correo = document.getElementById('buscarCorreo').value.trim();
    const mensajeExito = document.getElementById('mensajeExito');
    const mensajeError = document.getElementById('mensajeError');
    const infoUsuario = document.getElementById('infoUsuario');
    const correoUsuario = document.getElementById('correoUsuario');

    mensajeExito.classList.add('d-none');
    mensajeError.classList.add('d-none');
    infoUsuario.classList.add('d-none');

    if (correo === '') {
        mensajeError.textContent = 'Correo inválido, ingrese uno correcto ❌';
        mensajeError.classList.remove('d-none');
        return;
    }

    // Simulación de validación (puedes reemplazar con llamada a API)
    const correosValidos = ['cliente@ejemplo.com', 'diego@ingweb.com'];
    if (correosValidos.includes(correo)) {
        mensajeExito.classList.remove('d-none');
        correoUsuario.value = correo;
        infoUsuario.classList.remove('d-none');
    } else {
        mensajeError.classList.remove('d-none');
    }
}

function resetFormulario() {
    document.getElementById('buscarCorreo').value = '';
    document.getElementById('mensajeExito').classList.add('d-none');
    document.getElementById('mensajeError').classList.add('d-none');
    document.getElementById('infoUsuario').classList.add('d-none');
    document.getElementById('nuevoRol').selectedIndex = 0;
}

function guardarRol() {
    const correo = document.getElementById('buscarCorreo').value.trim();
    const nuevoRol = document.getElementById('nuevoRol').value;

    if (correo === '') {
        alert('Correo inválido, ingrese uno correcto');
        return;
    }

    if (!nuevoRol || nuevoRol === 'Selecciona un nuevo rol') {
        alert('Por favor selecciona un nuevo rol');
        return;
    }

    alert(`Rol actualizado para ${correo} a "${nuevoRol}"`);
}
