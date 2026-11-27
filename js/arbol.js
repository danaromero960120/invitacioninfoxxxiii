/* =====================================================
   ÁRBOL DE NAVIDAD INTERACTIVO
   - Toca una esfera: se enciende / apaga
   - Toca la estrella: confeti + enciende o apaga todo
   - Con las 12 encendidas: mensaje de felicitación
   El diseño del árbol (SVG) está en index.html, sección 6
   ===================================================== */

const COLORES = ['#ff4057', '#ffd36b', '#00f0ff', '#ff2bd6', '#35e08a', '#8a5cff'];

// Posición (x, y) de cada una de las 12 esferas dentro del SVG
const POSICIONES = [
  [150, 72],  [120, 115], [180, 115],
  [100, 170], [150, 160], [200, 170],
  [75, 235],  [125, 225], [175, 235], [225, 235],
  [110, 265], [190, 262]
];

const contenedorEsferas = $('orbs');
const arbol = $('xmas');
const SVG_NS = 'http://www.w3.org/2000/svg';

// ---- Crear las esferas ----
POSICIONES.forEach((pos, i) => {
  const esfera = document.createElementNS(SVG_NS, 'circle');
  esfera.setAttribute('cx', pos[0]);
  esfera.setAttribute('cy', pos[1]);
  esfera.setAttribute('r', 10);
  esfera.classList.add('orb');
  esfera.style.setProperty('--c', COLORES[i % COLORES.length]);
  esfera.style.animationDelay = (i * 0.2) + 's';

  esfera.addEventListener('click', () => {
    esfera.classList.toggle('on');
    actualizarEstado(esfera.classList.contains('on'));
  });
  contenedorEsferas.appendChild(esfera);
});

// ---- Confeti ----
function lanzarConfeti(cantidad) {
  for (let i = 0; i < cantidad; i++) {
    const pieza = document.createElement('span');
    pieza.className = 'cf';
    const angulo = Math.random() * Math.PI * 2;
    const distancia = 80 + Math.random() * 190;
    pieza.style.cssText =
      `--c:${COLORES[i % COLORES.length]};` +
      `--dx:${Math.cos(angulo) * distancia}px;` +
      `--dy:${Math.sin(angulo) * distancia + 60}px`;
    arbol.appendChild(pieza);
    setTimeout(() => pieza.remove(), 1500);
  }
}

// ---- Contador, botón y mensaje ----
function actualizarEstado(vieneDeClick) {
  const encendidas = contenedorEsferas.querySelectorAll('.on').length;
  const completo = encendidas === POSICIONES.length;

  $('cnt').textContent = encendidas + ' / 12 luces';
  $('all').textContent = completo ? 'APAGAR TODO' : 'ENCENDER TODO';
  arbol.classList.toggle('win', completo);
  $('hint').textContent = completo
    ? '¡FELIZ NAVIDAD, INFORMÁTICOS! 🎄✨'
    : 'Toca las esferas · toca la estrella ★';

  if (completo && vieneDeClick) lanzarConfeti(60);
}

// ---- Encender / apagar todas en cascada ----
function cambiarTodas(encender) {
  contenedorEsferas.querySelectorAll('.orb').forEach((esfera, i) => {
    setTimeout(() => esfera.classList.toggle('on', encender), i * 70);
  });
  setTimeout(() => actualizarEstado(encender), POSICIONES.length * 70 + 40);
}
const hayApagadas = () =>
  contenedorEsferas.querySelectorAll('.on').length < POSICIONES.length;

$('all').onclick = () => cambiarTodas(hayApagadas());
$('star').addEventListener('click', () => {
  lanzarConfeti(36);
  cambiarTodas(hayApagadas());
});

console.log('By Ingrid Danae Valle Romero - Diseñadora UI/UX desde el Backend');