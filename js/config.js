/* =====================================================
   CONFIGURACIÓN  ·  AQUÍ SE EDITA LO QUE CAMBIA
   ===================================================== */

// ---- Enlaces de los 3 botones de "Accesos" ----
const LINKS = {
  registro:    "https://t3lacomex.github.io/controlAcceso/",                      // Link de registro para obtener el QR
  repositorio: "https://widen-vessel-concerned.ngrok-free.dev/",                      // Link del repositorio (proyectos y prácticas)
  vestimenta:  "assets/vestimenta.pdf"   // PDF de vestimenta: guárdalo en la carpeta assets/
};

// ---- Fechas del evento (formato: año, mes-1, día, hora, minuto) ----
// OJO: los meses empiezan en 0  →  diciembre = 11
const START = new Date(2026, 11, 1, 8, 0, 0);    // Inicia: 1 dic 2026, 8:00 am
const END   = new Date(2026, 11, 3, 14, 0, 0);   // Termina: 3 dic 2026, 2:00 pm
