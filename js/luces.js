/* =====================================================
   LUCES NAVIDEÑAS del techo (los foquitos de colores)
   Los colores y el parpadeo están en css/02-efectos.css
   ===================================================== */

const CANTIDAD_LUCES = 26;
const contenedorLuces = $('lights');

for (let i = 0; i < CANTIDAD_LUCES; i++) {
  contenedorLuces.appendChild(document.createElement('i'));
}
