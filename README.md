# Portfolio de Alex López Gea

En línea: https://alex-lg-dev.github.io/Portfolio/

Fanzine impreso en risografía: tintas roja y morada sobre papel. Hecho con [Astro](https://astro.build).

## Arrancar

```bash
npm install
npm run dev      # http://localhost:4321/Portfolio/
npm run build    # comprueba tipos y genera dist/
```

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Proyectos (textos y capturas) | `src/data/projects.ts` |
| Capturas | `public/img/` |
| Secciones | `src/components/` |
| Colores, tipos y animaciones | `src/styles/global.css` (variables en `:root`) |

## Añadir un proyecto

1. Guarda las capturas en `public/img/` (webp de 1200 px de ancho).
2. Añade un bloque en `src/data/projects.ts`. Con `slides: []` sale la tarjeta "IN PROGRESS".

## Publicar

Cada push a `main` se publica solo en GitHub Pages con la acción de `.github/workflows/deploy.yml`.
La primera vez, en el repositorio: Settings → Pages → Source: GitHub Actions.

## Reglas del contenido

- En los proyectos de la uni se dice "hecho en grupo en la uni", sin número de miembros.
- Nunca publicar datos de contacto de clientes (Tapicería Elvira) ni credenciales de las memorias.
