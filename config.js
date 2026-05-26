const CONFIG = {

  team: {
    name:       "América S.C",
    shortName:  "CDC",
    slogan:     "El origen Despierta",
    founded:    "19..",
    city:       "Ambato",
    country:    "Ecuador",
    logo:       "img/logo.png",
    shield:     "img/escudo.png",
    mascot:     "img/mascota.png",
  },

  site: {
    url:         "https://tuequipo.com",
    title:       "América S.C — Sitio Oficial",
    description: "Sitio oficial del América S.C de Ambato, Ecuador.",
    keywords:    "fútbol, club deportivo, Ambato, Ecuador",
    lang:        "es",
  },

  colors: {
    primary:   "#014898",
    secondary: "#1a1a2e",
    accent:    "#f4c430",
    dark:      "#05080f",
  },

  social: {
    facebook:  "https://facebook.com/tuequipo",
    instagram: "https://instagram.com/tuequipo",
    twitter:   "https://twitter.com/tuequipo",
    youtube:   "https://youtube.com/@tuequipo",
    tiktok:    "https://tiktok.com/@tuequipo",
    whatsapp:  "https://wa.me/593XXXXXXXXX",
  },

  stadium: {
    name:     "Estadio Municipal",
    capacity: "25,000",
    address:  "Av. Principal s/n",
    city:     "Ambato",
    mapUrl:   "",
  },

  club: {
    history:   "Fundado en 1985, nuestro club nació del sueño de un grupo de apasionados por el fútbol. Con esfuerzo colectivo y amor por los colores, hemos construido una institución que trasciende el deporte para convertirse en el orgullo de toda nuestra ciudad.",
    mission:   "Desarrollar el talento futbolístico con excelencia deportiva y valores humanos, formando jugadores íntegros dentro y fuera del campo.",
    vision:    "Ser el club referente del fútbol ecuatoriano, reconocido por su formación, competitividad y compromiso con la comunidad.",
    values:    ["Pasión", "Respeto", "Trabajo en equipo", "Excelencia", "Integridad", "Lealtad"],
    president: "Juan Pérez",
    coach:     "Carlos Rodríguez",

    staff: [
      { name: "Juan Pérez",       role: "Presidente"         },
      { name: "Carlos Rodríguez", role: "Director Técnico"   },
      { name: "Marco López",      role: "Director Deportivo" },
      { name: "Ana Martínez",     role: "Médico del Club"    },
    ],
  },

  news: [
    {
      id:       1,
      title:    "Gran victoria en el clásico regional",
      excerpt:  "El equipo mostró su mejor versión ante el eterno rival en un partido para la historia que el estadio no olvidará.",
      date:     "2026-05-20",
      category: "Partido",
      image:    "",
    },
    {
      id:       2,
      title:    "Nuevos refuerzos para la temporada",
      excerpt:  "La directiva presenta tres nuevas incorporaciones que llegan para fortalecer el plantel de cara a los desafíos que vienen.",
      date:     "2026-05-15",
      category: "Fichajes",
      image:    "",
    },
    {
      id:       3,
      title:    "La cantera sigue brillando",
      excerpt:  "Jóvenes promesas formadas en nuestra academia dan el gran paso al primer equipo en esta temporada histórica.",
      date:     "2026-05-10",
      category: "Academia",
      image:    "",
    },
  ],

  matches: [
    {
      id:         1,
      date:       "2026-06-01",
      time:       "15:00",
      homeTeam:   "América S.C",
      awayTeam:   "Rival FC",
      competition:"Liga Nacional",
      venue:      "Estadio Municipal",
      isHome:     true,
      ticketUrl:  "",
    },
    {
      id:         2,
      date:       "2026-06-08",
      time:       "17:30",
      homeTeam:   "Otro Club",
      awayTeam:   "América S.C",
      competition:"Copa Ecuador",
      venue:      "Estadio Rival",
      isHome:     false,
      ticketUrl:  "",
    },
    {
      id:         3,
      date:       "2026-06-15",
      time:       "16:00",
      homeTeam:   "América S.C",
      awayTeam:   "Tercero FC",
      competition:"Liga Nacional",
      venue:      "Estadio Municipal",
      isHome:     true,
      ticketUrl:  "",
    },
  ],

  sponsors: [
    { name: "Patrocinador Principal", logo: "", url: "#", tier: "platinum" },
    { name: "Sponsor Gold A",         logo: "", url: "#", tier: "gold"     },
    { name: "Sponsor Gold B",         logo: "", url: "#", tier: "gold"     },
    { name: "Sponsor Silver 1",       logo: "", url: "#", tier: "silver"   },
    { name: "Sponsor Silver 2",       logo: "", url: "#", tier: "silver"   },
    { name: "Sponsor Silver 3",       logo: "", url: "#", tier: "silver"   },
  ],

};