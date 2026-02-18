export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Juan Alberto Quiroz",
  profile: "https://www.linkedin.com/in/dreyz/",
  desc: "El blog personal de Juan Alberto Quiroz. Un espacio para la literatura, pensamientos y reflexiones personales.",
  title: "Venaferrar Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutos
  showArchives: true,
  showBackButton: true, // mostrar botón de retroceso en detalle del post
  editPost: {
    enabled: true,
    text: "Editar página",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "es", // código de idioma html. Dejar vacío y por defecto será "en"
  timezone: "America/Mexico_City", // Zona horaria global predeterminada
} as const;
