// Proyectos del portfolio. Para añadir uno, copia un bloque y pon tus capturas en public/img.
// Cada proyecto tiene su página en /proyectos/<id>/ con problem, origin y why.
// Si un proyecto aún no tiene capturas, deja slides vacío y saldrá "IN PROGRESS".
export interface Slide { src: string; alt: string; caption: string }
export interface Why { d: string; r: string }
export interface Project {
  id: string; name: string; kind: string; stack: string; text: string; slides: Slide[];
  // página propia del proyecto (/proyectos/<id>/)
  problem: string; // qué problema resuelve
  origin: string;  // la idea de la que surgió
  why: Why[];      // por qué está hecho así: decisión y motivo
  role?: string;   // mi parte, si fue en grupo
}

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
    ],
    "problem": "Una persona mayor o con un tratamiento largo se olvida de una toma, no recuerda si ya ha abierto el pastillero o se toma dos veces la misma pastilla. Y quien le cuida no se entera hasta que ya ha pasado. PillSense avisa a la hora de cada toma, comprueba que se ha abierto el cajón que toca y le cuenta al cuidador cómo va el día.",
    "origin": "La idea la trajo un compañero: todos tenemos personas mayores cerca que toman varias pastillas al día y no siempre se acuerdan. Le dimos forma en la asignatura de Proyecto IoT y Aplicaciones Móviles de la UPV. La primera versión quería hacerlo todo (fotos, QR, sensores de temperatura, huella…). Pasamos la idea por un análisis de riesgos con IA y nos quedamos con lo que de verdad importa: avisar, confirmar la toma y tener al cuidador al tanto.",
    "why": [
      {
        "d": "Dos apps: paciente y cuidador",
        "r": "El paciente solo necesita saber qué tomar ahora y pedir ayuda si la necesita. El cuidador quiere el estado del pastillero y el historial. Separarlas deja la pantalla del paciente con lo justo."
      },
      {
        "d": "Un ESP32 dentro de la caja",
        "r": "Cada cajón tiene su sensor de apertura y su LED: el aviso es físico y se enciende justo el cajón que toca, sin tener que mirar el móvil."
      },
      {
        "d": "MQTT y una pasarela en Raspberry Pi",
        "r": "MQTT es ligero y pensado para dispositivos pequeños. La Raspberry Pi hace de puente entre el pastillero y la nube."
      },
      {
        "d": "Firebase",
        "r": "Guarda el registro de tomas y manda las notificaciones al cuidador sin que tengamos que montar y mantener un servidor propio."
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
    ],
    "problem": "Es un juego, así que el reto era de diseño: un combate rápido y justo en vista isométrica, donde los enemigos te rodean, con un motivo para seguir bajando. Y que en cinco sprints diera para algo que se pueda jugar en el navegador.",
    "origin": "Nació en una lluvia de ideas en Aplicaciones Multimedia (Videojuegos) de la UPV. Queríamos una aventura con una historia que emocionara, mirando a juegos como Cult of the Lamb o Death's Door: alguien que baja al infierno a recuperar el alma de un ser querido, acompañado por su fantasma. Empezó en los siete infiernos de Dante y acabó en el inframundo griego, con Alástor, el Tártaro y un mercader de almas.",
    "why": [
      {
        "d": "Vista isométrica y low poly",
        "r": "Desde arriba se lee bien el combate y ves quién te rodea. Los modelos low poly se hacen rápido en 3ds Max y van fluidos en WebGL."
      },
      {
        "d": "Dash con invencibilidad",
        "r": "Si te rodean, la defensa es moverte. El dash te hace invulnerable un instante, así el combate es arriesgado pero justo."
      },
      {
        "d": "Almas y un mercader",
        "r": "Cada enemigo suelta almas y el mercader las cambia por mejoras. Así cada pelea tiene recompensa y siempre hay un siguiente objetivo."
      },
      {
        "d": "Unity con WebGL",
        "r": "Para que se pueda jugar desde el navegador sin instalar nada."
      }
    ],
    "role": "Modelos y materiales del escenario (suelo, paredes y la caseta del mercader) y arreglos del HUD."
  },
  {
    "id": "sharedex",
    "name": "ShareDex",
    "kind": "Proyecto propio",
    "stack": "Angular · AdonisJS · TypeScript",
    "text": "En marcha: web para fans de Pokémon con Pokédex y creador de equipos compatible con Pokémon Showdown. Ya tiene el esqueleto en Angular y AdonisJS.",
    "slides": [],
    "problem": "Para montar un equipo de Pokémon acabas saltando entre la Pokédex, tus notas y Pokémon Showdown. ShareDex junta una Pokédex y un creador de equipos que importa y exporta en el formato de Showdown, para que tu equipo funcione donde ya juegas.",
    "origin": "Es mi proyecto propio, fuera de la UPV: algo que me apetecía tener como fan de Pokémon y que construyo por mi cuenta.",
    "why": [
      {
        "d": "Angular y AdonisJS",
        "r": "TypeScript en el front y en el back: un solo lenguaje y los mismos tipos en todo el proyecto."
      },
      {
        "d": "Formato de Showdown",
        "r": "Es el que ya usa la comunidad, así que un equipo hecho aquí se pega allí sin tocar nada."
      }
    ]
  },
  {
    "id": "web-gti",
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
    ],
    "problem": "La web del grado tenía que presentar sus módulos a quien se está pensando estudiarlo. Y el campus virtual PROA tenía que reunir en un mismo sitio las asignaturas, las tareas, las entregas y las notas, para alumnos y para profesores.",
    "origin": "Fue el proyecto de primer curso en la UPV: hacer la web del grado y un campus virtual a partir de 26 historias de usuario, entregando por partes.",
    "why": [
      {
        "d": "Una vista para alumnos y otra para profesores",
        "r": "El alumno quiere ver qué tiene pendiente; el profesor, crear tareas y seguir las entregas. Cada uno entra a lo suyo."
      },
      {
        "d": "Tareas con filtros",
        "r": "Con muchas tareas, filtrar por estado, fecha y nombre es lo que hace la lista usable."
      },
      {
        "d": "Calendario de entregas",
        "r": "Las fechas se ven de un vistazo en vez de abrir tarea por tarea."
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
    ],
    "problem": "Un negocio familiar de Gandia con clientes fieles de toda la vida, pero sin web, sin marca definida y mal situado en Google. Su clientela llegaba por recomendación. Necesitaban una web que enseñara su trabajo y pusiera fácil pedir presupuesto, sin venta online.",
    "origin": "Fue el proyecto de Diseño de interfaces y Experiencia de usuario, en primero en la UPV. Empezó con una entrevista a la dueña y un brief: la web sería para darse a conocer en La Safor, con un público de 30 a 50 años.",
    "why": [
      {
        "d": "Presupuesto en la portada",
        "r": "Quien entra ya interesado puede pedirlo sin hacer scroll ni buscar. Es la acción que más le importa al negocio."
      },
      {
        "d": "Clara y sin rodeos",
        "r": "El público es adulto y no siempre se maneja bien en internet: texto grande, menú corto y servicios por categorías."
      },
      {
        "d": "Personas y mapas antes que pantallas",
        "r": "Seis personas, de la dueña a empresas que compran al por mayor, para diseñar para gente concreta y no para mí."
      },
      {
        "d": "Evaluación heurística al final",
        "r": "Revisar el prototipo con heurísticas encontró fallos antes de dárselo al cliente."
      }
    ]
  },
  {
    "id": "portfolio",
    "name": "Este portfolio",
    "kind": "IA bien usada",
    "stack": "Diseño · Astro · CSS · Playwright · IA",
    "text": "Lo he hecho con IA como herramienta: cuatro versiones, mis colores y mi criterio decidiendo, y pruebas en navegador en móvil y escritorio.",
    "slides": [
      {
        "src": "pf-v4.webp",
        "alt": "Portada de este portfolio en estilo fanzine riso, con el titular en tintas roja y morada y capturas de proyectos",
        "caption": "v4, la de ahora"
      },
      {
        "src": "pf-v3.webp",
        "alt": "Portada de este portfolio en estilo retro con terminal",
        "caption": "v3, retro con terminal"
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
    ],
    "problem": "Un CV en PDF no enseña lo que sé hacer. Necesitaba un sitio que llamara la atención y donde se vieran mis proyectos de verdad, con capturas reales.",
    "origin": "Quería venderme y darme a conocer. La primera versión, con un circuito ESP32, la descarté. Cuatro versiones después llegué a este fanzine impreso en rojo y morado, mis dos colores.",
    "why": [
      {
        "d": "Fanzine en risografía",
        "r": "Me gusta lo retro y lo minimalista, y quería algo que no pareciera la plantilla de siempre."
      },
      {
        "d": "Capturas en morado",
        "r": "Todo va a dos tintas, como impreso. Al pasar el ratón la captura sale a color."
      },
      {
        "d": "Astro y GitHub Pages",
        "r": "Páginas estáticas y rápidas que se publican solas en cada push."
      },
      {
        "d": "IA como herramienta",
        "r": "La IA propone y yo decido: colores, textos y qué versión se queda. Y se prueba en el navegador, en móvil y escritorio."
      }
    ]
  }
];
