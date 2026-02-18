---
author: Sat Naing
pubDatetime: 2022-09-25T15:20:35Z
modDatetime: 2026-01-09T15:00:15.170Z
title: Personalización de los esquemas de color del tema AstroPaper
slug: personalizacion-de-los-esquemas-de-color-del-tema-astropaper
featured: false
draft: false
tags:
  - color-schemes
  - docs
description: Cómo activar/desactivar el modo claro y oscuro; y personalizar los esquemas de color del tema AstroPaper.
---

Este post explicará cómo puedes activar o desactivar el modo claro y oscuro para el sitio web. Además, aprenderás a personalizar los esquemas de color de todo el sitio.

## Tabla de contenidos

## Activar/desactivar el modo claro y oscuro

El tema AstroPaper incluye modo claro y oscuro por defecto. En otras palabras, habrá dos esquemas de color\_ uno para el modo claro y otro para el oscuro. Este comportamiento puede desactivarse en el objeto de configuración `SITE`.

```js file="src/config.ts"
export const SITE = {
  website: "https://astro-paper.pages.dev/", // reemplaza esto con tu dominio desplegado
  author: "Sat Naing",
  profile: "https://satnaing.dev/",
  desc: "Un tema de blog Astro minimalista, responsivo y amigable con SEO.",
  title: "AstroPaper",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true, // [!code highlight]
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutos
  showArchives: true,
  showBackButton: true, // botón de retroceso en detalle del post
  editPost: {
    enabled: true,
    text: "Sugerir Cambios",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "es", // código de idioma html.
  timezone: "Asia/Bangkok", // Zona horaria predeterminada
} as const;
```

Para desactivar el `modo claro y oscuro` cambia `SITE.lightAndDarkMode` a `false`.

## Elegir el esquema de color inicial

Por defecto, si desactivamos `SITE.lightAndDarkMode`, solo obtendremos el `prefers-color-scheme` del sistema.

Para elegir un esquema de color inicial en lugar del predeterminado del sistema, debemos configurarlo en la variable `initialColorScheme` dentro de `theme.ts`.

```ts file="src/scripts/theme.ts"
// Esquema de color inicial
// Puede ser "light", "dark", o un string vacío para heredar del sistema
const initialColorScheme = ""; // "light" | "dark" // [!code hl]

function getPreferTheme(): string {
  // obtener tema de local storage (elección explícita del usuario)
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) return currentTheme;

  // devolver esquema inicial si está configurado
  if (initialColorScheme) return initialColorScheme;

  // devolver esquema del sistema del dispositivo
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// ...
```

La variable **initialColorScheme** puede tener dos valores\_ `"light"`, `"dark"`. Puedes dejarla vacía (valor por defecto) si no quieres especificar uno.

- `""` - esquema preferido del sistema. (defecto)
- `"light"` - usar modo claro como esquema inicial.
- `"dark"` - usar modo oscuro como esquema inicial.

<details>
<summary>¿Por qué initialColorScheme no está en config.ts?</summary>
Para evitar parpadeos de color al recargar la página, debemos colocar el código JavaScript de inicialización del tema lo antes posible. El script del tema se divide en dos partes: un script inline mínimo en el `<head>` que configura el tema de inmediato, y el script completo que se carga de forma asíncrona. Este enfoque evita el FOUC (Flash of Unstyled Content) manteniendo un rendimiento óptimo.
</details>

## Personalizar esquemas de color

Tanto el esquema claro como el oscuro se pueden personalizar en el archivo `global.css`.

```css file="src/styles/global.css"
@import "tailwindcss";
@import "./typography.css";

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

:root,
html[data-theme="light"] {
  --background: #fdfdfd;
  --foreground: #282728;
  --accent: #006cac;
  --muted: #e6e6e6;
  --border: #ece9e9;
}

html[data-theme="dark"] {
  --background: #212737;
  --foreground: #eaedf3;
  --accent: #ff6b01;
  --muted: #343f60bf;
  --border: #ab4b08;
}
/* ... */
```

En AstroPaper, los selectores `:root` y `html[data-theme="light"]` definen el esquema de color claro, mientras que `html[data-theme="dark"]` define el oscuro.

Para personalizar tu propio esquema, especifica tus colores claros dentro de `:root, html[data-theme="light"]` y los oscuros en `html[data-theme="dark"]`.

Aquí tienes la explicación detallada de las propiedades de color.

| Propiedad de Color | Definición y Uso                                             |
| ------------------ | ------------------------------------------------------------ |
| `--background`     | Color primario del sitio. Usualmente el fondo principal.     |
| `--foreground`     | Color secundario. Usualmente el color del texto.             |
| `--accent`         | Color de acento. Enlaces, estados hover, etc.                |
| `--muted`          | Color de fondo para tarjetas, barras de desplazamiento, etc. |
| `--border`         | Color de borde. Usado para utilidades de borde y separación. |

Ejemplo de cambio del esquema claro:

```css file="src/styles/global.css"
/* ... */
:root,
html[data-theme="light"] {
  --background: #f6eee1;
  --foreground: #012c56;
  --accent: #e14a39;
  --muted: #efd8b0;
  --border: #dc9891;
}
/* ... */
```

> Echa un vistazo a algunos [esquemas de color predefinidos](https://astro-paper.pages.dev/posts/predefined-color-schemes/) que AstroPaper ya ha diseñado para ti.
