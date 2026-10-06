# NEURAL AUDIO 2050 — Music Terminal

Web musical cyberpunk responsive, hecha con HTML, CSS y JavaScript puro. Incluye catálogo visual, reproductor HTML5, playlist interactiva, controles de volumen/repetición/aleatorio, visualizador animado y generador de playlists por ambiente.

## Ejecutar localmente

No necesita dependencias ni compilación. Abre `index.html` en tu navegador. Para evitar restricciones del navegador al cargar recursos locales, también puedes ejecutar:

```bash
python3 -m http.server 8000
```

Luego visita http://localhost:8000.

## Añadir música propia

1. Crea la carpeta `assets/audio/`.
2. Copia archivos MP3 y usa estos nombres (o actualiza `src` en `js/app.js`):
   - `neon-shadows.mp3`
   - `industrial-night.mp3`
   - `machine-heart.mp3`
   - `lost-in-the-grid.mp3`
   - `black-horizon.mp3`
3. Vuelve a cargar la página. Por defecto se muestran títulos de demostración; no se incluyen canciones comerciales.

Usa audio propio, con licencia o libre de derechos para el que tengas permiso de publicación. GitHub Pages aloja archivos estáticos; considera el límite de tamaño de archivos de GitHub si vas a subir muchos MP3. Para una biblioteca grande, utiliza almacenamiento/CDN de audio y enlaza sus URLs.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube el contenido de esta carpeta.
2. En **Settings → Pages**, configura la fuente como **GitHub Actions**.
3. El workflow `.github/workflows/deploy.yml` valida la estructura básica y publica el sitio en Pages al hacer push a `main`.

## Personalización

- Colores y responsive: `css/style.css`
- Temas, tracks y comportamiento: `js/app.js`
- Imagen principal: `assets/images/neural-audio-hero.png`

## Licencia

El código se distribuye bajo MIT; revisa los derechos de cualquier imagen, audio o fuente externa que añadas.
