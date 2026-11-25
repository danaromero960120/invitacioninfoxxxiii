# 🎄 Semana de Informática XXXIII — Invitación interactiva

Para verla: abre **index.html** en tu navegador (necesita internet solo para las tipografías).

## 📁 Qué hay en cada carpeta

```
semana-informatica-xxxiii/
├── index.html                  ← La página (solo estructura y textos)
├── LEEME.md                    ← Esta guía
├── assets/
│   ├── mascota.webp            ← Mapache saludando (portada)
│   └── vestimenta.pdf          ← (PONER AQUÍ tu PDF de vestimenta)
├── css/                        ← Diseño, un archivo por sección
│   ├── 01-base.css             ·  Colores, fondo aurora neón, estructura
│   ├── 02-efectos.css          ·  Nieve y luces navideñas
│   ├── 03-portada.css          ·  Título gigante, texto y botón
│   ├── 04-mascota.css          ·  Mascota, aro neón y globo de texto
│   ├── 05-cuenta-regresiva.css ·  Cuadros de días/horas/min/seg
│   ├── 06-detalles-y-accesos.css · Tarjetas de info y botones de links
│   ├── 07-arbol.css            ·  Árbol interactivo y confeti
│   ├── 08-responsive.css       ·  Ajustes para laptop, tablet y celular
│   └── 09-accesibilidad.css    ·  Reduce animaciones si se pide
└── js/                         ← Funcionamiento
    ├── config.js               ·  ⭐ LINKS y FECHAS (lo que más vas a editar)
    ├── utils.js                ·  Funciones pequeñas de apoyo
    ├── luces.js                ·  Foquitos del techo
    ├── nieve.js                ·  Nieve cayendo
    ├── cuenta-regresiva.js     ·  Reloj de cuenta regresiva
    ├── arbol.js                ·  Lógica del árbol interactivo
    └── main.js                 ·  Conecta los links con los botones
```

## ✏️ ¿Qué quiero cambiar? → ¿Dónde?

| Quiero cambiar…                           | Archivo                                 |
|-------------------------------------------|-----------------------------------------|
| Links de registro / repositorio / PDF     | `js/config.js`                          |
| Fecha u hora de inicio (cuenta regresiva) | `js/config.js`                          |
| Texto del horario o ubicación             | `index.html` → sección 4 (DETALLES)     |
| Texto de bienvenida o globo de la mascota | `index.html` → sección 2                |
| Cambiar la mascota                        | reemplaza `assets/mascota.webp`         |
| Colores neón                              | `css/01-base.css` → bloque `:root`      |
| Tamaño del título                         | `css/03-portada.css` → `h1`             |
| Cómo se acomoda en tablet / celular       | `css/08-responsive.css`                 |
| Cantidad de nieve                         | `js/nieve.js` → `CANTIDAD_COPOS`        |
| Colores de las esferas del árbol          | `js/arbol.js` → `COLORES`               |

## 📄 Poner el PDF de vestimenta
1. Copia tu PDF dentro de `assets/` con el nombre **vestimenta.pdf**.
2. Listo: el botón "VER PDF" ya apunta a ese archivo.
   (Si lo subes a otro lado, pon su URL en `js/config.js`.)

## 🌐 Publicarla
Sube toda la carpeta tal cual a tu hosting (GitHub Pages, Netlify, etc.).
Importante: respeta la estructura de carpetas.
