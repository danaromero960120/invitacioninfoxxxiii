/* =====================================================
   CUENTA REGRESIVA hacia el inicio del evento
   Las fechas se cambian en js/config.js
   ===================================================== */

function actualizarCuenta() {
  const ahora = new Date();
  let diferencia = START - ahora;

  if (ahora >= END) {
    $('msg').textContent = "GRACIAS POR SER PARTE · NOS VEMOS EN LA XXXIV";
    diferencia = 0;
  } else if (diferencia <= 0) {
    $('msg').textContent = "● EN CURSO · ¡BIENVENIDO!";
    diferencia = 0;
  } else {
    $('msg').textContent = "";
  }

  const seg = Math.floor(diferencia / 1000);
  $('d').textContent = pad(Math.floor(seg / 86400));
  $('h').textContent = pad(Math.floor(seg % 86400 / 3600));
  $('m').textContent = pad(Math.floor(seg % 3600 / 60));
  $('s').textContent = pad(seg % 60);
}

actualizarCuenta();
setInterval(actualizarCuenta, 1000);   // se refresca cada segundo
