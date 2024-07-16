//Haz tú validación en javascript acá
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre.length < 5) {
        alert('El nombre debe tener al menos 5 caracteres.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingrese una dirección de correo válida.');
        return;
    }

    if (asunto.length < 8 || asunto.length > 25) {
        alert('El asunto debe tener entre 8 y 25 caracteres.');
        return;
    }

    if (mensaje.length < 30 || mensaje.length > 500) {
        alert('El mensaje debe tener entre 30 y 500 caracteres.');
        return;
    }

    // Si todas las validaciones pasan, enviar el formulario
    alert('El mensaje fue enviado con éxito.');
    document.getElementById('contactForm').reset();
});
