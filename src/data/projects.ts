// Proyectos del portfolio. Para añadir uno, copia un bloque y pon tus capturas en public/img.
// Si un proyecto aún no tiene capturas, deja slides vacío y saldrá "IN PROGRESS".
export interface Slide { src: string; alt: string; caption: string }
export interface Project { id: string; name: string; kind: string; stack: string; text: string; slides: Slide[] }

export const projects: Project[] = [
  {
    "id": "pillsense",
    "name": "PillSense",
    "kind": "Proyecto IoT · UPV",
    "stack": "ESP32 · M5Stack · MQTT · Android · Firebase",
    "text": "Pastillero inteligente hecho en grupo en la UPV: caja con ESP32, base M5Stack, pasarela MQTT en Raspberry Pi y app Android en Java con Firebase.",
    "slides": [
      {
        "src": "pill-aviso.webp",
        "alt": "App PillSense para el paciente: inicio con la toma de las 14:00, aviso de abrir el cajón 2 y confirmación",
        "caption": "Paciente: aviso y toma"
      },
      {
        "src": "pill-hoy.webp",
        "alt": "Pantallas Pastillas de hoy con el progreso del día y Pedir ayuda para llamar a la cuidadora",
        "caption": "Paciente: hoy y pedir ayuda"
      },
      {
        "src": "pill-cuidador.webp",
        "alt": "App del cuidador en modo oscuro: hoy, estado del pastillero y historial semanal con un 92 % de tomas",
        "caption": "Cuidador: hoy, pastillero e historial"
      },
      {
        "src": "pill-login.webp",
        "alt": "Pantalla de entrada en modo oscuro e historial en modo claro",
        "caption": "Entrada y modo claro"
      }
    ]
  },
  {
    "id": "hades",
    "name": "Hades Journey",
    "kind": "Videojuego · UPV",
    "stack": "Unity · 3ds Max · Low poly · WebGL",
    "text": "Acción 3D isométrica en el inframundo griego, en Unity y 3ds Max, low poly. Hecho en grupo en la UPV, en cinco sprints. Mi parte incluye modelos y materiales del escenario y arreglos del HUD.",
    "slides": [
      {
        "src": "hades-juego.webp",
        "alt": "Captura jugando: Alástor en la sala del Tártaro con los corazones y las habilidades en el HUD",
        "caption": "En partida"
      },
      {
        "src": "hades-mercader-juego.webp",
        "alt": "Captura jugando: Alástor junto a la caseta del mercader con el aviso Pulsa E para hablar",
        "caption": "El mercader"
      },
      {
        "src": "hades-menu.webp",
        "alt": "Menú principal de Hades Journey con las columnas, el logo y las llamas",
        "caption": "Menú principal"
      },
      {
        "src": "hades-tienda.webp",
        "alt": "Tienda del Mercader de Almas con consumibles y mejoras de Argos",
        "caption": "Tienda"
      },
      {
        "src": "hades-derrota.webp",
        "alt": "Pantalla de derrota con una calavera y los botones Menú y Reintentar",
        "caption": "Derrota"
      }
    ]
  },
  {
    "id": "sharedex",
    "name": "ShareDex",
    "kind": "Proyecto propio",
    "stack": "Angular · AdonisJS · TypeScript",
    "text": "En marcha: web para fans de Pokémon con Pokédex y creador de equipos compatible con Pokémon Showdown. Ya tiene el esqueleto en Angular y AdonisJS.",
    "slides": []
  },
  {
    "id": "proyecto",
    "name": "Web GTI + PROA",
    "kind": "Primer curso · UPV",
    "stack": "PHP · MySQL · HTML · CSS · JS",
    "text": "Hecho en grupo en la UPV, en PHP y MySQL: la web del grado y el campus virtual PROA con asignaturas, tareas, calendario y notas para alumnos y profesores. 26 historias de usuario.",
    "slides": [
      {
        "src": "gti-inicio.webp",
        "alt": "Portada de la web del grado GTI con los módulos educativos",
        "caption": "Web GTI: portada"
      },
      {
        "src": "gti-login.webp",
        "alt": "Pantalla de inicio de sesión de la web GTI",
        "caption": "Web GTI: entrar"
      },
      {
        "src": "gti-catalogo.webp",
        "alt": "Catálogo de módulos de la web GTI con la sesión iniciada",
        "caption": "Web GTI: catálogo"
      },
      {
        "src": "proa-alumno.webp",
        "alt": "Campus PROA: inicio del alumno con las asignaturas con más tareas pendientes",
        "caption": "PROA: inicio del alumno"
      },
      {
        "src": "proa-asignatura.webp",
        "alt": "PROA: asignatura Matemáticas vista por el profesor, con próximas entregas y últimas tareas",
        "caption": "PROA: asignatura"
      },
      {
        "src": "proa-tareas.webp",
        "alt": "PROA: lista de tareas de Matemáticas con filtros por estado, fecha y nombre",
        "caption": "PROA: tareas y filtros"
      },
      {
        "src": "proa-crear.webp",
        "alt": "PROA: formulario Crear tarea con título, fechas, archivo y descripción",
        "caption": "PROA: crear tarea"
      },
      {
        "src": "proa-calendario.webp",
        "alt": "PROA: calendario de junio de 2025 con las entregas marcadas",
        "caption": "PROA: calendario"
      }
    ]
  },
  {
    "id": "tapiceria",
    "name": "Tapicería Elvira",
    "kind": "Diseño UX · UPV",
    "stack": "Entrevistas · Personas · Figma · Heurística",
    "text": "Asignatura de UX: la web de un almacén de telas de Gandia. Entrevista, 6 personas, mapas de usuario, flujos, wireframes, prototipo en Figma y evaluación heurística.",
    "slides": [
      {
        "src": "tap-inicio.webp",
        "alt": "Prototipo de la web de Tapicería Elvira: portada con sillones y formulario de presupuesto",
        "caption": "Portada"
      },
      {
        "src": "tap-productos.webp",
        "alt": "Página Nuestros productos con sillón, sofá y silla",
        "caption": "Productos"
      },
      {
        "src": "tap-reserva.webp",
        "alt": "Página Completa tu reserva con el formulario y la valoración de clientes",
        "caption": "Reserva"
      },
      {
        "src": "tap-nosotros.webp",
        "alt": "Página Sobre nosotros con la fachada de la tienda",
        "caption": "Sobre nosotros"
      },
      {
        "src": "tap-movil-1.webp",
        "alt": "Versión móvil de la portada con el formulario de presupuesto y de la página de reserva",
        "caption": "Móvil: portada y reserva"
      },
      {
        "src": "tap-movil-2.webp",
        "alt": "Versión móvil de Nuestros productos y de Sobre nosotros",
        "caption": "Móvil: productos y nosotros"
      }
    ]
  },
  {
    "id": "este",
    "name": "Este portfolio",
    "kind": "IA bien usada",
    "stack": "Diseño · Astro · CSS · Playwright · IA",
    "text": "Lo he hecho con IA como herramienta: tres versiones, mis colores y mi criterio decidiendo, y pruebas en navegador en móvil y escritorio.",
    "slides": [
      {
        "src": "pf-v3.webp",
        "alt": "Portada de este portfolio en estilo retro con terminal",
        "caption": "v3, la de ahora"
      },
      {
        "src": "pf-v2.webp",
        "alt": "Versión 2 del portfolio, oscura y centrada en PillSense",
        "caption": "v2"
      },
      {
        "src": "pf-v1.webp",
        "alt": "Versión 1 del portfolio, clara con un circuito ESP32",
        "caption": "v1, descartada"
      }
    ]
  }
];
