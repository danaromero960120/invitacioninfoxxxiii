/* =====================================================
   UTILIDADES: funciones pequeñas que usan los demás archivos
   ===================================================== */

// Atajo para buscar un elemento por su id:  $('cd')
const $ = id => document.getElementById(id);

// Agrega un cero a la izquierda:  7 → "07"
const pad = n => String(n).padStart(2, '0');
