document.addEventListener('DOMContentLoaded', function () {
  // Mostrar la alerta de bienvenida con SweetAlert2
  Swal.fire({
    title: '¡Bienvenido!',
    text: 'Recuerda que es obligatorio rellenar todos los campos para enviar el formulario correctamente y seguidamente podria cofigurar el zoom a una escala de 75% para así no tenga problemas con la página.',
    icon: 'info',
    showCancelButton: false,
    confirmButtonText: 'OK', // Texto del botón "OK"
    customClass: {
      confirmButton: 'custom-confirm-button',
      popup: 'custom-popup'
    },
  });
});


function enviarMensaje() {
  // Obtén los valores de los campos de entrada
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  const nacionalidad = document.getElementById('nacionalidad').value;
  const roblox = document.getElementById('roblox').value;
  const discord = document.getElementById('discord').value;
  const especialidad = document.getElementById('especialidad').value;
  const horas = document.getElementById('horas').value;
  const checkbox = document.getElementById("aceptoTerminos");

  discordForm.reset();

  // Verifica si algún campo obligatorio está vacío
  if (nombre === '' || edad === '' || nacionalidad === '' || roblox === '' || discord === '' || especialidad === '' || horas === '' || !checkbox.checked) {
    // Alerta personalizada con SweetAlert2 para campos obligatorios
    Swal.fire({
      title: '¡Error!',
      text: 'Por favor, completa todos los campos obligatorios para continuar.',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'OK', // Texto del botón "OK"
      customClass: {
        confirmButton: 'custom-confirm-button2',
        popup: 'custom-popup2'
      }
    });
    return;
    }

  // Resto de tu código para enviar el formulario a Discord
  const webhookURL = 'https://discord.com/api/webhooks/1214309819251556382/KmN3UqNfRKj3B2lNLOVuvD3OsovlIKyyIqbB57334XoWhnohRrOwINtSyuFPR2aLTJtF';
  const message = {
    content: `Nuevo formulario enviado a Discord:\n
      Nombre: ${nombre}\n
      Edad: ${edad}\n
      Nacionalidad: ${nacionalidad}\n
      Usuario de Roblox: ${roblox}\n
      Usuario de Discord: ${discord}\n
      Especialidad: ${especialidad}\n
      Horas jugadas: ${horas}`,
  };
  const jsonString = JSON.stringify(message);

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonString,
  });

  // Puedes realizar otras acciones después de enviar el mensaje si es necesario
  // Alerta personalizada con SweetAlert2 para éxito
  Swal.fire({
    title: '¡Éxito!',
    text: '¡Formulario enviado con éxito a 夏𝙋𝙐𝙍𝙀!. En pocos minutos, nos pondremos en contacto contigo.' ,
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'OK', // Texto del botón "OK"
    customClass: {
      confirmButton: 'custom-confirm-button3',
      popup: 'custom-popup3'
    }
  });
}

function verificarYContinuar() {
  var checkbox = document.getElementById("aceptoTerminos");

  if (!checkbox.checked) {
    // Alerta personalizada con SweetAlert2 para aceptar términos y condiciones
    Swal.fire({
      title: '¡Error!',
      text: 'Por favor, acepta los términos y condiciones para continuar.',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'OK', // Texto del botón "OK"
      customClass: {
        confirmButton: 'custom-confirm-button4',
        popup: 'custom-popup4'
      }
    });
    return;
  }
}

function actualizarInput() {
  var seleccion = document.getElementById('especialidad').value;
  document.getElementById('especialidadInput').value = seleccion;
}