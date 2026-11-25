/* =====================================================
   NIEVE cayendo (dibujada en el <canvas id="snow">)
   ===================================================== */

const lienzo = $('snow');
const ctx = lienzo.getContext('2d');
const CANTIDAD_COPOS = 90;      // sube o baja para más/menos nieve
let ancho, alto;
const copos = [];

// Ajusta el lienzo al tamaño de la pantalla
function ajustarLienzo() {
  ancho = lienzo.width = innerWidth;
  alto  = lienzo.height = innerHeight;
}
ajustarLienzo();
addEventListener('resize', ajustarLienzo);

// Crea los copos con tamaño, velocidad y transparencia al azar
for (let i = 0; i < CANTIDAD_COPOS; i++) {
  copos.push({
    x: Math.random() * 2000,
    y: Math.random() * 1200,
    radio: Math.random() * 2.4 + 0.6,
    velocidad: Math.random() * 0.8 + 0.3,
    opacidad: Math.random() * 0.6 + 0.3,
    fase: Math.random() * 6          // para el vaivén lateral
  });
}

// Animación: se repite en cada cuadro
function animarNieve() {
  ctx.clearRect(0, 0, ancho, alto);
  for (const c of copos) {
    c.y += c.velocidad;
    c.fase += 0.01;
    c.x += Math.sin(c.fase) * 0.4;
    if (c.y > alto) { c.y = -5; c.x = Math.random() * ancho; }

    ctx.beginPath();
    ctx.arc(c.x % ancho, c.y, c.radio, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220,240,255,${c.opacidad})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#00f0ff';     // brillo neón cian
    ctx.fill();
  }
  requestAnimationFrame(animarNieve);
}
animarNieve();
